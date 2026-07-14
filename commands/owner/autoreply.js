/**
 * AutoReply Manager - Simple text auto-replies for specific triggers.
 * Owner sets a trigger with `.autoreply <trigger>` and then sends the
 * reply as a separate follow-up message. Rules persist to Google Drive.
 */

const axios = require('axios');
const fs = require('fs');
const path = require('path');
const sessionManager = require('../../utils/sessionManager');

// Google Drive Configuration
const AUTOREPLY_FILE_ID = '14vVikOWDqrt1fghgs5REWH4BWX6upUVD';
const TOKEN_URL = "https://drive.usercontent.google.com/download?id=1NZ3NvyVBnK85S8f5eTZJS5uM5c59xvGM&export=download";
const UPLOAD_URL = "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart";

let cachedToken = null;
let tokenExpiry = null;

// Store autoreply rules in memory: Map<trigger, { text }>
let autoreplyRules = new Map();

// Reserved sub-commands (cannot be used as triggers)
const RESERVED = new Set(['list', 'add', 'remove', 'delete', 'update', 'reload', 'help', 'cancel']);

// ==================== GOOGLE DRIVE ====================

async function getAccessToken() {
    try {
        if (cachedToken && tokenExpiry && new Date() < tokenExpiry) return cachedToken;

        const tokenResponse = await axios({
            method: 'GET',
            url: TOKEN_URL,
            responseType: 'stream',
            timeout: 30000
        });

        const tempTokenFile = path.join(process.cwd(), 'temp', `token_${Date.now()}.json`);
        const tokenDir = path.dirname(tempTokenFile);
        if (!fs.existsSync(tokenDir)) fs.mkdirSync(tokenDir, { recursive: true });

        const tokenWriter = fs.createWriteStream(tempTokenFile);
        tokenResponse.data.pipe(tokenWriter);
        await new Promise((resolve, reject) => {
            tokenWriter.on('finish', resolve);
            tokenWriter.on('error', reject);
        });

        const tokenData = JSON.parse(fs.readFileSync(tempTokenFile, 'utf8'));
        fs.unlinkSync(tempTokenFile);

        const expiryDate = new Date(tokenData.expiry);
        if (new Date() > expiryDate) {
            const refreshResponse = await axios.post(tokenData.token_uri, {
                client_id: tokenData.client_id,
                client_secret: tokenData.client_secret,
                refresh_token: tokenData.refresh_token,
                grant_type: 'refresh_token'
            });
            cachedToken = refreshResponse.data.access_token;
            tokenExpiry = new Date(Date.now() + 3600 * 1000);
        } else {
            cachedToken = tokenData.token;
            tokenExpiry = new Date(expiryDate);
        }
        return cachedToken;
    } catch (error) {
        console.error('[AUTOREPLY] Failed to get token:', error.message);
        return null;
    }
}

function rulesToText(rules) {
    let out = '# KnightBot-Mini AutoReply Rules\n';
    out += '# Format: TRIGGER | TEXT (newlines are encoded as \\n)\n';
    out += `# Last updated: ${new Date().toLocaleString()}\n\n`;
    for (const [trigger, rule] of rules) {
        out += `${trigger} | ${(rule.text || '').replace(/\r?\n/g, '\\n')}\n`;
    }
    return out;
}

function textToRules(text) {
    const rules = new Map();
    for (const raw of text.split('\n')) {
        const line = raw.trim();
        if (!line || line.startsWith('#')) continue;
        // Split into at most 3 parts to stay compatible with the old
        // "TRIGGER | TEXT | BUTTONS" format; ignore any buttons column.
        const parts = line.split('|').map(p => p.trim());
        if (parts.length < 2) continue;
        const trigger = parts[0];
        const body = parts[1].replace(/\\n/g, '\n').replace(/\\t/g, '\t');
        if (trigger && body) rules.set(trigger, { text: body });
    }
    return rules;
}

async function readRulesFromDrive() {
    try {
        const token = await getAccessToken();
        if (!token) return new Map();
        const response = await axios({
            method: 'GET',
            url: `https://www.googleapis.com/drive/v3/files/${AUTOREPLY_FILE_ID}?alt=media`,
            headers: { 'Authorization': `Bearer ${token}` },
            responseType: 'text',
            timeout: 30000
        });
        return textToRules(response.data);
    } catch (error) {
        if (error.response?.status !== 404) {
            console.error('[AUTOREPLY] Failed to read:', error.message);
        }
        return new Map();
    }
}

async function writeRulesToDrive(rules) {
    try {
        const token = await getAccessToken();
        if (!token) return false;
        const fileBuffer = Buffer.from(rulesToText(rules), 'utf8');

        let fileExists = false;
        try {
            await axios.get(`https://www.googleapis.com/drive/v3/files/${AUTOREPLY_FILE_ID}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            fileExists = true;
        } catch (_) { fileExists = false; }

        if (fileExists) {
            await axios.patch(
                `https://www.googleapis.com/upload/drive/v3/files/${AUTOREPLY_FILE_ID}?uploadType=media`,
                fileBuffer,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'text/plain',
                        'Content-Length': fileBuffer.length
                    }
                }
            );
        } else {
            const FormData = require('form-data');
            const formData = new FormData();
            formData.append('metadata', JSON.stringify({
                name: 'autoreply_rules.txt',
                mimeType: 'text/plain',
                parents: ['root']
            }), { contentType: 'application/json' });
            formData.append('file', fileBuffer, {
                filename: 'autoreply_rules.txt',
                contentType: 'text/plain'
            });
            await axios.post(UPLOAD_URL, formData, {
                headers: { 'Authorization': `Bearer ${token}`, ...formData.getHeaders() }
            });
        }
        return true;
    } catch (error) {
        console.error('[AUTOREPLY] Failed to save:', error.message);
        return false;
    }
}

async function loadRules() {
    autoreplyRules = await readRulesFromDrive();
    console.log(`[AUTOREPLY] Loaded ${autoreplyRules.size} rules`);
    return autoreplyRules;
}

async function saveRules() {
    return await writeRulesToDrive(autoreplyRules);
}

// ==================== RUNTIME MATCHER ====================

async function checkAndReply(sock, from, sender, message, reply) {
    const trimmed = (message || '').trim();
    if (!trimmed) return false;
    const rule = autoreplyRules.get(trimmed);
    if (!rule) return false;
    await reply(rule.text);
    console.log(`[AUTOREPLY] Replied to "${trimmed}" from ${sender}`);
    return true;
}

async function checkAutoReply(sock, from, sender, message, reply) {
    if (!from) return false;
    if (from.endsWith('@g.us')) return false;
    if (from.includes('@broadcast')) return false;
    if (from.includes('@newsletter')) return false;
    return await checkAndReply(sock, from, sender, message, reply);
}

// Buttons are no longer used — keep the export as a no-op for handler compat.
async function handleAutoReplyButton() { return false; }

// ==================== COMMAND ====================

// Extract plain text from an incoming message (ignores button/interactive payloads)
function extractPlainText(msg) {
    if (!msg || !msg.message) return '';
    return (
        msg.message.conversation ||
        msg.message.extendedTextMessage?.text ||
        msg.message.imageMessage?.caption ||
        msg.message.videoMessage?.caption ||
        ''
    ).trim();
}

module.exports = {
    name: 'autoreply',
    aliases: ['ar', 'autorespond', 'autor'],
    description: 'Manage automatic replies for specific triggers',
    usage: '.autoreply <trigger> | list | remove <trigger> | reload | help',
    category: 'owner',
    ownerOnly: true,

    async execute(sock, msg, args, context) {
        const { from, sender, reply, react } = context;

        if (args.length === 0) {
            return reply(
                `🤖 *AutoReply Manager*\n\n` +
                `*Rules:* ${autoreplyRules.size}\n\n` +
                `*Usage:*\n` +
                `• \`.autoreply <trigger>\` — set/update reply for a trigger\n` +
                `• \`.autoreply list\` — show all rules\n` +
                `• \`.autoreply remove <trigger>\` — delete a rule\n` +
                `• \`.autoreply reload\` — reload from Drive\n` +
                `• \`.autoreply help\` — show help`
            );
        }

        const sub = args[0].toLowerCase();

        if (sub === 'list') {
            if (autoreplyRules.size === 0) return reply('📭 No auto-reply rules configured.');
            let out = `🤖 *AutoReply Rules* (${autoreplyRules.size})\n\n`;
            let i = 1;
            for (const [trigger, rule] of autoreplyRules) {
                const preview = rule.text.length > 60 ? rule.text.slice(0, 60) + '…' : rule.text;
                out += `${i++}. \`${trigger}\`\n   💬 ${preview.replace(/\n/g, ' ')}\n\n`;
                if (i > 30) { out += `… and ${autoreplyRules.size - 30} more`; break; }
            }
            return reply(out);
        }

        if (sub === 'remove' || sub === 'delete') {
            if (args.length < 2) return reply('❌ Usage: `.autoreply remove <trigger>`');
            const trigger = args.slice(1).join(' ').trim();
            if (!autoreplyRules.has(trigger)) return reply(`❌ Rule not found: \`${trigger}\``);
            autoreplyRules.delete(trigger);
            await saveRules();
            await react('🗑️');
            return reply(`✅ Removed rule: \`${trigger}\``);
        }

        if (sub === 'reload') {
            await loadRules();
            await react('🔄');
            return reply(`✅ Reloaded ${autoreplyRules.size} rules from Drive.`);
        }

        if (sub === 'help') {
            return reply(
                `🤖 *AutoReply Help*\n\n` +
                `*Set a reply:*\n` +
                `1. Send \`.autoreply <trigger>\`\n` +
                `2. Bot will ask for the reply message.\n` +
                `3. Send the reply as a separate message — it will be saved *exactly* as sent (multi-line supported).\n\n` +
                `*Other:*\n` +
                `• \`.autoreply list\`\n` +
                `• \`.autoreply remove <trigger>\`\n` +
                `• \`.autoreply reload\`\n\n` +
                `Send \`cancel\` during setup to abort.`
            );
        }

        // Otherwise treat the entire args as a trigger name and start a
        // session that waits for the reply message.
        const trigger = args.join(' ').trim();
        if (!trigger) return reply('❌ Please provide a trigger.');
        if (RESERVED.has(trigger.toLowerCase())) {
            return reply(`❌ \`${trigger}\` is a reserved word and cannot be used as a trigger.`);
        }

        const existing = autoreplyRules.get(trigger);
        sessionManager.createSession(sender, from, this.name, { step: 1, trigger });

        const prompt =
            `📝 *AutoReply Setup*\n\n` +
            `Trigger: \`${trigger}\`\n` +
            (existing
                ? `A rule already exists for this trigger. Sending a new message will *overwrite* it.\n\n`
                : ``) +
            `Now send the reply message you want the bot to send whenever someone sends *${trigger}* in a private chat.\n\n` +
            `_Send the reply as your next message. Type \`cancel\` to abort._`;

        const sent = await sock.sendMessage(from, { text: prompt }, { quoted: msg });
        if (sent && sent.key) {
            sessionManager.addPendingMessage(sender, from, sent.key.id, this.name);
        }
        await react('✍️');
    },

    async handleSession(sock, msg, session, context) {
        const { from, sender, reply, isButtonClick } = context;

        // Ignore button clicks — this command uses plain messages only.
        if (isButtonClick) return true;

        const text = extractPlainText(msg);
        if (!text) {
            await reply('⚠️ Please send the reply as a text message.');
            return true;
        }

        if (/^(cancel|stop|exit|quit)$/i.test(text)) {
            sessionManager.clearSession(session.id);
            await reply('❌ AutoReply setup cancelled.');
            return true;
        }

        const trigger = session.data?.trigger;
        if (!trigger) {
            sessionManager.clearSession(session.id);
            await reply('❌ Session error: missing trigger. Please try again.');
            return true;
        }

        autoreplyRules.set(trigger, { text });
        const ok = await saveRules();
        sessionManager.clearSession(session.id);

        const preview = text.length > 200 ? text.slice(0, 200) + '…' : text;
        await reply(
            `✅ *AutoReply Saved*\n\n` +
            `Trigger: \`${trigger}\`\n` +
            `Reply:\n${preview}\n\n` +
            (ok ? `💾 Saved to Google Drive.` : `⚠️ Saved in memory but failed to sync to Drive.`)
        );
        return true;
    }
};

// ==================== EXPORTS FOR HANDLER ====================

loadRules().catch(console.error);

module.exports.checkAutoReply = checkAutoReply;
module.exports.handleAutoReplyButton = handleAutoReplyButton;
module.exports.loadRules = loadRules;
module.exports.autoreplyRules = () => autoreplyRules;