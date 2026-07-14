/**
 * PDF to Word - Convert a PDF file (URL / Google Drive / replied doc) into a .docx
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { PDFParse } = require('pdf-parse');
const { Document, Packer, Paragraph, TextRun } = require('docx');
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

async function pdfBufferToDocx(pdfBuf, filename) {
    const parsed = await new PDFParse({ data: pdfBuf }).getText();
    const raw = (parsed.text || '').replace(/\r/g, '');

    const paragraphs = raw.length
        ? raw.split('\n').map(line => new Paragraph({
            children: [new TextRun(line.length ? line : ' ')]
        }))
        : [new Paragraph({ children: [new TextRun('(No extractable text — this PDF may be a scanned image.)')] })];

    const doc = new Document({
        creator: 'KnightBot',
        title: filename,
        sections: [{ properties: {}, children: paragraphs }]
    });

    return {
        buffer: await Packer.toBuffer(doc),
        pages: parsed.total || 0,
        chars: raw.length
    };
}

async function convert(sock, from, msg, reply, react, source) {
    await react('📥');
    let pdfBuf;
    let baseName = 'document';

    if (source.type === 'media') {
        const doc = source.doc;
        baseName = (doc.fileName || 'document').replace(/\.pdf$/i, '');
        const stream = await downloadContentFromMessage(doc, 'document');
        const chunks = [];
        for await (const c of stream) chunks.push(c);
        pdfBuf = Buffer.concat(chunks);
    } else {
        baseName = ((source.url.split('/').pop() || 'document').split('?')[0]).replace(/\.pdf$/i, '') || 'document';
        pdfBuf = await fetchPdfBuffer(source.url);
    }

    if (!pdfBuf || pdfBuf.length < 5 || pdfBuf.slice(0, 4).toString() !== '%PDF') {
        throw new Error('That does not look like a valid PDF file');
    }

    await react('📝');
    await reply(`📝 Converting *${baseName}.pdf* to Word...`);

    const { buffer, pages, chars } = await pdfBufferToDocx(pdfBuf, baseName);

    const tempDir = path.join(process.cwd(), 'temp');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });
    const outPath = path.join(tempDir, `${baseName}_${Date.now()}.docx`);
    fs.writeFileSync(outPath, buffer);

    await react('✅');
    await sock.sendMessage(from, {
        document: fs.readFileSync(outPath),
        fileName: `${baseName}.docx`,
        mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        caption: `✅ *PDF → Word*\n📄 Pages: ${pages}\n✍️ Chars: ${chars}`
    }, { quoted: msg });

    try { fs.unlinkSync(outPath); } catch {}
}

module.exports = {
    name: 'pdf2word',
    aliases: ['pdf2docx', 'pdftoword'],
    description: 'Convert a PDF file into a Word (.docx) document',
    usage: '.pdf2word <pdf url> | reply to a PDF file',
    category: 'utility',
    ownerOnly: false,

    async execute(sock, msg, args, context) {
        const { from, sender, reply, react } = context;

        const quoted = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
        const quotedDoc = quoted?.documentMessage;
        const inlineUrl = (args || []).find(a => /^https?:\/\//i.test(a));

        try {
            if (quotedDoc) {
                return await convert(sock, from, msg, reply, react, { type: 'media', doc: quotedDoc });
            }
            if (inlineUrl) {
                return await convert(sock, from, msg, reply, react, { type: 'url', url: inlineUrl });
            }
        } catch (e) {
            return await reply(`❌ Failed: ${e.message}`);
        }

        const session = sessionManager.createSession(sender, from, this.name, { step: 'awaiting_input' });
        const sentMsg = await sock.sendMessage(from, {
            text:
                '📄 *PDF → Word Converter*\n\n' +
                'Send me one of the following:\n' +
                '• A direct PDF download link\n' +
                '• A Google Drive share link (.pdf)\n' +
                '• Reply to a PDF file with `.pdf2word`\n\n' +
                'Type *cancel* to abort.'
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

        if (text.toLowerCase() === 'cancel') {
            sessionManager.clearSession(session.id);
            await reply('❌ Cancelled.');
            return true;
        }

        const doc = msg.message?.documentMessage;

        try {
            if (doc) {
                await convert(sock, from, msg, reply, react, { type: 'media', doc });
            } else if (/^https?:\/\//i.test(text)) {
                await convert(sock, from, msg, reply, react, { type: 'url', url: text });
            } else {
                await reply('❌ Please send a valid PDF URL or reply with a PDF file. Type *cancel* to abort.');
                return true;
            }
        } catch (e) {
            await reply(`❌ Failed: ${e.message}`);
        } finally {
            sessionManager.clearSession(session.id);
        }
        return true;
    }
};