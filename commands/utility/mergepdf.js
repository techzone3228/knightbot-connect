/**
 * Merge PDFs - Collect multiple PDFs (via reply/URL) and merge into one
 *
 * Usage:
 *   .mergepdf            → starts a collection session
 *   .mergepdf <url> <url> ... → merge these URLs immediately
 *
 * During a session, reply/send:
 *   • a PDF file (document message)
 *   • a PDF/Google Drive URL
 *   • *done*   → merge and send
 *   • *cancel* → abort
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { PDFDocument } = require('pdf-lib');
const { downloadContentFromMessage } = require('@whiskeysockets/baileys');
const sessionManager = require('../../utils/sessionManager');

function extractGDriveId(url) {
    const patterns = [/\/file\/d\/([a-zA-Z0-9_-]+)/, /[?&]id=([a-zA-Z0-9_-]+)/];
    for (const p of patterns) {
        const m = url.match(p);
        if (m) return m[1];
    }
    return null;
}

function toDirect(url) {
    if (url.includes('drive.google.com') || url.includes('drive.usercontent.google.com')) {
        const id = extractGDriveId(url);
        if (id) return `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`;
    }
    return url;
}

async function fetchPdfBuffer(url) {
    const res = await axios({
        method: 'GET',
        url: toDirect(url),
        responseType: 'arraybuffer',
        timeout: 300000,
        maxRedirects: 10,
        maxContentLength: Infinity,
        maxBodyLength: Infinity
    });
    return Buffer.from(res.data);
}

async function docMessageToBuffer(doc) {
    const stream = await downloadContentFromMessage(doc, 'document');
    const chunks = [];
    for await (const c of stream) chunks.push(c);
    return Buffer.concat(chunks);
}

function assertPdf(buf, label) {
    if (!buf || buf.length < 5 || buf.slice(0, 4).toString() !== '%PDF') {
        throw new Error(`${label} is not a valid PDF`);
    }
}

async function mergeBuffers(buffers) {
    const out = await PDFDocument.create();
    let totalPages = 0;
    for (const buf of buffers) {
        const src = await PDFDocument.load(buf, { ignoreEncryption: true });
        const pages = await out.copyPages(src, src.getPageIndices());
        pages.forEach(p => out.addPage(p));
        totalPages += pages.length;
    }
    const bytes = await out.save();
    return { buffer: Buffer.from(bytes), pages: totalPages };
}

async function sendMerged(sock, from, msg, buffers) {
    const { buffer, pages } = await mergeBuffers(buffers);
    const tempDir = path.join(process.cwd(), 'temp');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });
    const outPath = path.join(tempDir, `merged_${Date.now()}.pdf`);
    fs.writeFileSync(outPath, buffer);

    await sock.sendMessage(from, {
        document: fs.readFileSync(outPath),
        fileName: `merged_${Date.now()}.pdf`,
        mimetype: 'application/pdf',
        caption: `✅ *Merged ${buffers.length} PDFs*\n📄 Total pages: ${pages}\n📊 Size: ${(buffer.length / 1024 / 1024).toFixed(2)} MB`
    }, { quoted: msg });

    try { fs.unlinkSync(outPath); } catch {}
}

module.exports = {
    name: 'mergepdf',
    aliases: ['pdfmerge', 'mergepdfs'],
    description: 'Merge multiple PDF files into one',
    usage: '.mergepdf [url1 url2 ...] — or start a session and send PDFs one by one, then "done"',
    category: 'utility',
    ownerOnly: false,

    async execute(sock, msg, args, context) {
        const { from, sender, reply, react } = context;

        const urls = (args || []).filter(a => /^https?:\/\//i.test(a));

        // Fast path: URLs supplied inline
        if (urls.length >= 2) {
            try {
                await react('📥');
                await reply(`📥 Downloading *${urls.length}* PDFs...`);
                const buffers = [];
                for (let i = 0; i < urls.length; i++) {
                    const b = await fetchPdfBuffer(urls[i]);
                    assertPdf(b, `File #${i + 1}`);
                    buffers.push(b);
                }
                await react('📚');
                await reply('📚 Merging...');
                await sendMerged(sock, from, msg, buffers);
                await react('✅');
            } catch (e) {
                await reply(`❌ Failed: ${e.message}`);
            }
            return;
        }

        // Session mode
        const session = sessionManager.createSession(sender, from, this.name, {
            step: 'collecting',
            buffers: [],
            names: []
        });
        const sentMsg = await sock.sendMessage(from, {
            text:
                '📚 *Merge PDFs*\n\n' +
                'Send me PDFs one by one:\n' +
                '• Reply/forward a PDF file\n' +
                '• Or send a direct PDF URL (Google Drive links OK)\n\n' +
                'When finished, type *done* to merge.\nType *cancel* to abort.'
        }, { quoted: msg });
        sessionManager.addPendingMessage(sender, from, sentMsg.key.id, this.name);
        void session;
    },

    async handleSession(sock, msg, session, context) {
        const { from, sender, reply, react } = context;

        const text = (msg.message?.conversation
            || msg.message?.extendedTextMessage?.text
            || msg.message?.documentMessage?.caption
            || '').trim();
        const lower = text.toLowerCase();

        if (lower === 'cancel') {
            sessionManager.clearSession(session.id);
            await reply('❌ Cancelled.');
            return true;
        }

        // Init collection storage on the session
        if (!session.data.buffers) session.data.buffers = [];
        if (!session.data.names) session.data.names = [];

        if (lower === 'done') {
            if (session.data.buffers.length < 2) {
                await reply(`⚠️ Send at least 2 PDFs first. Currently collected: ${session.data.buffers.length}`);
                return true;
            }
            try {
                await react('📚');
                await reply(`📚 Merging *${session.data.buffers.length}* PDFs...`);
                await sendMerged(sock, from, msg, session.data.buffers);
                await react('✅');
            } catch (e) {
                await reply(`❌ Merge failed: ${e.message}`);
            } finally {
                sessionManager.clearSession(session.id);
            }
            return true;
        }

        // Try to collect a PDF from this message
        const doc = msg.message?.documentMessage;
        try {
            let buf = null;
            let name = null;
            if (doc) {
                buf = await docMessageToBuffer(doc);
                name = doc.fileName || `file_${session.data.buffers.length + 1}.pdf`;
            } else if (/^https?:\/\//i.test(text)) {
                await react('📥');
                buf = await fetchPdfBuffer(text);
                name = (text.split('/').pop() || `file_${session.data.buffers.length + 1}.pdf`).split('?')[0];
            } else {
                await reply('❌ Send a PDF file, a PDF URL, or type *done* / *cancel*.');
                return true;
            }

            assertPdf(buf, name);
            session.data.buffers.push(buf);
            session.data.names.push(name);
            await react('➕');
            await reply(
                `✅ Added *${name}* (${(buf.length / 1024 / 1024).toFixed(2)} MB)\n` +
                `📚 Collected: *${session.data.buffers.length}* PDFs\n\n` +
                `Send more, or type *done* to merge.`
            );
        } catch (e) {
            await reply(`❌ Could not add file: ${e.message}`);
        }
        return true;
    }
};