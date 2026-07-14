/**
 * Unzip Command - Extract ZIP files and upload contents to Google Drive
 * Supports: direct URL, Google Drive link, or replied ZIP document
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const unzipper = require('unzipper');
const { downloadContentFromMessage } = require('@whiskeysockets/baileys');
const sessionManager = require('../../utils/sessionManager');
const GoogleDrive = require('../../utils/googleDrive');

function extractGDriveId(url) {
    const patterns = [
        /\/file\/d\/([a-zA-Z0-9_-]+)/,
        /[?&]id=([a-zA-Z0-9_-]+)/,
        /\/folders\/([a-zA-Z0-9_-]+)/
    ];
    for (const p of patterns) {
        const m = url.match(p);
        if (m) return m[1];
    }
    return null;
}

function toDirectDownload(url) {
    if (url.includes('drive.google.com') || url.includes('drive.usercontent.google.com')) {
        const id = extractGDriveId(url);
        if (id) return `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`;
    }
    return url;
}

async function downloadUrlToFile(url, dest) {
    const res = await axios({
        method: 'GET',
        url: toDirectDownload(url),
        responseType: 'stream',
        timeout: 600000,
        maxRedirects: 10,
        maxContentLength: Infinity,
        maxBodyLength: Infinity
    });
    const writer = fs.createWriteStream(dest);
    res.data.pipe(writer);
    await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}

async function extractZip(zipPath, outDir) {
    fs.mkdirSync(outDir, { recursive: true });
    await fs.createReadStream(zipPath)
        .pipe(unzipper.Extract({ path: outDir }))
        .promise();
}

function walkFiles(dir, base = dir) {
    const out = [];
    for (const name of fs.readdirSync(dir)) {
        const full = path.join(dir, name);
        const st = fs.statSync(full);
        if (st.isDirectory()) out.push(...walkFiles(full, base));
        else out.push({ full, rel: path.relative(base, full), size: st.size });
    }
    return out;
}

async function processZip(sourceType, sourceValue, msg, reply, react) {
    const tempDir = path.join(process.cwd(), 'temp');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

    const stamp = Date.now();
    const zipPath = path.join(tempDir, `unzip_${stamp}.zip`);
    const extractDir = path.join(tempDir, `unzip_${stamp}_out`);
    let folderName = `Extracted_${stamp}`;

    try {
        await react('📥');
        if (sourceType === 'url') {
            folderName = `Extracted_${(sourceValue.split('/').pop() || 'archive').split('?')[0].replace(/\.zip$/i, '') || stamp}`;
            await downloadUrlToFile(sourceValue, zipPath);
        } else if (sourceType === 'media') {
            const doc = msg.message.documentMessage;
            folderName = `Extracted_${(doc.fileName || 'archive').replace(/\.zip$/i, '')}`;
            const stream = await downloadContentFromMessage(doc, 'document');
            const chunks = [];
            for await (const c of stream) chunks.push(c);
            fs.writeFileSync(zipPath, Buffer.concat(chunks));
        }

        const size = fs.statSync(zipPath).size;
        if (size < 4) throw new Error('Downloaded file is empty');

        await react('📦');
        await reply(`📦 Extracting archive (${(size / 1024 / 1024).toFixed(2)} MB)...`);

        try {
            await extractZip(zipPath, extractDir);
        } catch (e) {
            throw new Error('Invalid or corrupted ZIP file');
        }

        const files = walkFiles(extractDir);
        if (files.length === 0) throw new Error('Archive is empty');

        await react('☁️');
        await reply(`☁️ Uploading *${files.length}* file(s) to Google Drive...`);

        const drive = new GoogleDrive();
        const folder = await drive.createFolder(folderName, 'root');
        await drive.makePublic(folder.id);

        let uploaded = 0;
        let failed = 0;
        for (const f of files) {
            try {
                // Preserve subdirectories by using rel path as filename prefix
                const safeName = f.rel.replace(/[\\/]/g, '_');
                await drive.uploadToFolder(f.full, folder.id, safeName);
                uploaded++;
            } catch (e) {
                console.error('[UNZIP] upload failed:', f.rel, e.message);
                failed++;
            }
        }

        await react('✅');
        const totalMB = (files.reduce((a, b) => a + b.size, 0) / 1024 / 1024).toFixed(2);
        return (
            `✅ *Extraction Complete*\n\n` +
            `📁 *Folder:* ${folderName}\n` +
            `📄 *Files:* ${uploaded} uploaded${failed ? ` (${failed} failed)` : ''}\n` +
            `📊 *Total size:* ${totalMB} MB\n\n` +
            `🔗 *Public Folder Link:*\n${folder.webViewLink}`
        );
    } finally {
        try { if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath); } catch {}
        try { if (fs.existsSync(extractDir)) fs.rmSync(extractDir, { recursive: true, force: true }); } catch {}
    }
}

module.exports = {
    name: 'unzip',
    aliases: ['extract', 'unrar'],
    description: 'Extract a ZIP archive and upload contents to Google Drive',
    usage: '.unzip <url> | reply to a .zip file',
    category: 'utility',
    ownerOnly: false,

    async execute(sock, msg, args, context) {
        const { from, sender, reply, react } = context;

        // Quoted document?
        const quoted = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
        const quotedDoc = quoted?.documentMessage;

        // Inline URL?
        const inlineUrl = (args || []).find(a => /^https?:\/\//i.test(a));

        try {
            if (quotedDoc) {
                const fakeMsg = { message: { documentMessage: quotedDoc } };
                const result = await processZip('media', null, fakeMsg, reply, react);
                return await sock.sendMessage(from, { text: result, linkPreview: false }, { quoted: msg });
            }
            if (inlineUrl) {
                const result = await processZip('url', inlineUrl, msg, reply, react);
                return await sock.sendMessage(from, { text: result, linkPreview: false }, { quoted: msg });
            }
        } catch (e) {
            return await reply(`❌ Failed: ${e.message}`);
        }

        // Otherwise start a session asking for input
        const session = sessionManager.createSession(sender, from, this.name, { step: 'awaiting_input' });
        const sentMsg = await sock.sendMessage(from, {
            text:
                '📦 *Unzip / Extract*\n\n' +
                'Send me one of the following:\n' +
                '• A direct ZIP download link\n' +
                '• A Google Drive share link (.zip)\n' +
                '• Reply to a `.zip` file with `.unzip`\n\n' +
                'Type *cancel* to abort.'
        }, { quoted: msg });
        sessionManager.addPendingMessage(sender, from, sentMsg.key.id, this.name);
        void session;
    },

    async handleSession(sock, msg, session, context) {
        const { from, sender, reply, react } = context;

        let text = (msg.message?.conversation
            || msg.message?.extendedTextMessage?.text
            || msg.message?.documentMessage?.caption
            || '').trim();

        if (text.toLowerCase() === 'cancel') {
            sessionManager.clearSession(session.id);
            await reply('❌ Cancelled.');
            return true;
        }

        const doc = msg.message?.documentMessage;

        try {
            let result;
            if (doc) {
                result = await processZip('media', null, msg, reply, react);
            } else if (/^https?:\/\//i.test(text)) {
                result = await processZip('url', text, msg, reply, react);
            } else {
                await reply('❌ Please send a valid URL or reply with a `.zip` file. Type *cancel* to abort.');
                return true;
            }
            await sock.sendMessage(from, { text: result, linkPreview: false }, { quoted: msg });
        } catch (e) {
            await reply(`❌ Failed: ${e.message}`);
        } finally {
            sessionManager.clearSession(session.id);
        }
        return true;
    }
};