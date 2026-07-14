const sessionManager = require('../../utils/sessionManager');
const giftedBtns = require('gifted-btns');
const { sendButtons } = giftedBtns;

const ZODIACS = [
    { name: 'Capricorn', emoji: '♑', from: [12, 22], to: [1, 19] },
    { name: 'Aquarius',  emoji: '♒', from: [1, 20],  to: [2, 18] },
    { name: 'Pisces',    emoji: '♓', from: [2, 19],  to: [3, 20] },
    { name: 'Aries',     emoji: '♈', from: [3, 21],  to: [4, 19] },
    { name: 'Taurus',    emoji: '♉', from: [4, 20],  to: [5, 20] },
    { name: 'Gemini',    emoji: '♊', from: [5, 21],  to: [6, 20] },
    { name: 'Cancer',    emoji: '♋', from: [6, 21],  to: [7, 22] },
    { name: 'Leo',       emoji: '♌', from: [7, 23],  to: [8, 22] },
    { name: 'Virgo',     emoji: '♍', from: [8, 23],  to: [9, 22] },
    { name: 'Libra',     emoji: '♎', from: [9, 23],  to: [10, 22] },
    { name: 'Scorpio',   emoji: '♏', from: [10, 23], to: [11, 21] },
    { name: 'Sagittarius', emoji: '♐', from: [11, 22], to: [12, 21] }
];

function getZodiac(month, day) {
    for (const z of ZODIACS) {
        const [fm, fd] = z.from;
        const [tm, td] = z.to;
        if (fm === tm) {
            if (month === fm && day >= fd && day <= td) return z;
        } else {
            if ((month === fm && day >= fd) || (month === tm && day <= td)) return z;
        }
    }
    return ZODIACS[0];
}

function getSeason(month, day) {
    // Northern Hemisphere astronomical seasons
    const m = month, d = day;
    if ((m === 3 && d >= 20) || m === 4 || m === 5 || (m === 6 && d <= 20)) return { name: 'Spring', emoji: '🌸' };
    if ((m === 6 && d >= 21) || m === 7 || m === 8 || (m === 9 && d <= 22)) return { name: 'Summer', emoji: '☀️' };
    if ((m === 9 && d >= 23) || m === 10 || m === 11 || (m === 12 && d <= 20)) return { name: 'Autumn', emoji: '🍂' };
    return { name: 'Winter', emoji: '❄️' };
}

function isLeapYear(y) {
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
}

function daysInMonth(m, y) {
    return [31, isLeapYear(y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1];
}

function computeAge(by, bm, bd) {
    const now = new Date();
    const ny = now.getFullYear();
    const nm = now.getMonth() + 1;
    const nd = now.getDate();

    let years = ny - by;
    let months = nm - bm;
    let days = nd - bd;

    if (days < 0) {
        months--;
        const prevMonth = nm - 1 === 0 ? 12 : nm - 1;
        const prevMonthYear = nm - 1 === 0 ? ny - 1 : ny;
        days += daysInMonth(prevMonth, prevMonthYear);
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    const birth = new Date(by, bm - 1, bd);
    const totalDays = Math.floor((now - birth) / (1000 * 60 * 60 * 24));

    // Next birthday
    let nextBday = new Date(ny, bm - 1, bd);
    if (nextBday < now) nextBday = new Date(ny + 1, bm - 1, bd);
    const daysUntilBday = Math.ceil((nextBday - now) / (1000 * 60 * 60 * 24));

    return { years, months, days, totalDays, daysUntilBday, nextBday };
}

function parseDate(text) {
    // Accept: YYYY, YYYY-MM-DD, DD/MM/YYYY, DD-MM-YYYY
    const t = text.trim();
    const currentYear = new Date().getFullYear();

    // YYYY only
    if (/^\d{4}$/.test(t)) {
        const y = parseInt(t, 10);
        if (y < 1900 || y > currentYear) return { error: `Year must be between 1900 and ${currentYear}.` };
        return { year: y, month: null, day: null };
    }

    // YYYY-MM-DD
    let m = t.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);
    if (m) {
        const y = +m[1], mo = +m[2], d = +m[3];
        return validateDate(y, mo, d, currentYear);
    }

    // DD-MM-YYYY or DD/MM/YYYY
    m = t.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/);
    if (m) {
        const d = +m[1], mo = +m[2], y = +m[3];
        return validateDate(y, mo, d, currentYear);
    }

    return { error: 'Invalid format. Use `YYYY` (year only) or `DD/MM/YYYY` (full date).' };
}

function validateDate(y, mo, d, currentYear) {
    if (y < 1900 || y > currentYear) return { error: `Year must be between 1900 and ${currentYear}.` };
    if (mo < 1 || mo > 12) return { error: 'Month must be between 1 and 12.' };
    if (d < 1 || d > daysInMonth(mo, y)) return { error: `Day must be between 1 and ${daysInMonth(mo, y)} for that month.` };
    const birth = new Date(y, mo - 1, d);
    if (birth > new Date()) return { error: 'Birth date cannot be in the future.' };
    return { year: y, month: mo, day: d };
}

async function askBirthDate(sock, chatId, quotedMsg, reply) {
    const sessionId = `year_${Date.now()}`;
    return await sendButtons(sock, chatId, {
        text: '🎂 *Age Calculator*\n\nReply with your *birth year* (e.g. `1998`)\nor full *birth date* for exact age (e.g. `15/08/1998`).',
        footer: 'Reply to this message',
        buttons: [
            { id: `${sessionId}_cancel`, text: '❌ Cancel' }
        ],
        aimode: true
    }, { quoted: quotedMsg });
}

async function sendResult(sock, chatId, quotedMsg, parsed) {
    const hasFullDate = parsed.month !== null && parsed.day !== null;
    const month = parsed.month || 1;
    const day = parsed.day || 1;
    const age = computeAge(parsed.year, month, day);

    let text = `🎂 *Your Age Report*\n\n`;
    text += `📅 *Birth:* ${hasFullDate ? `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/` : ''}${parsed.year}\n`;
    if (hasFullDate) {
        text += `\n⏳ *Exact Age:* ${age.years} years, ${age.months} months, ${age.days} days\n`;
    } else {
        text += `\n⏳ *Age:* ~${age.years} years (approx. — no month/day)\n`;
    }
    text += `📊 *Total Days Lived:* ${age.totalDays.toLocaleString()}\n`;
    text += `🕒 *Total Hours:* ${(age.totalDays * 24).toLocaleString()}\n`;

    if (hasFullDate) {
        const z = getZodiac(month, day);
        const s = getSeason(month, day);
        text += `\n${z.emoji} *Zodiac:* ${z.name}\n`;
        text += `${s.emoji} *Born in:* ${s.name}\n`;
        text += `\n🎉 *Next Birthday:* ${age.daysUntilBday} day${age.daysUntilBday === 1 ? '' : 's'} away`;
    }

    const sessionId = `yearres_${Date.now()}`;
    return await sendButtons(sock, chatId, {
        text,
        footer: 'KnightBot • Age Calculator',
        buttons: [
            { id: `${sessionId}_again`, text: '🔁 Calculate Again' },
            { id: `${sessionId}_close`, text: '✅ Done' }
        ],
        aimode: true
    }, { quoted: quotedMsg });
}

module.exports = {
    name: 'year',
    aliases: ['birthyear', 'myage', 'age'],
    description: 'Calculate your age from your birth year or full birth date',
    usage: 'year',
    category: 'utility',
    ownerOnly: false,

    async execute(sock, msg, args, context) {
        const { from, sender, reply, react } = context;
        await react('🎂');

        try {
            const session = sessionManager.createSession(sender, from, this.name, { step: 1 });
            const sentMsg = await askBirthDate(sock, from, msg, reply);
            if (sentMsg && sentMsg.key) {
                sessionManager.addPendingMessage(sender, from, sentMsg.key.id, this.name);
            }
            await react('✅');
        } catch (err) {
            console.error('❌ year command error:', err);
            await reply(`❌ *Error*\n\n${err.message}`);
            await react('❌');
        }
    },

    async handleSession(sock, msg, session, context) {
        const { from, sender, reply, isButtonClick } = context;
        const text = (msg.message?.conversation ||
                      msg.message?.extendedTextMessage?.text || '').trim();

        // Button click handling
        if (isButtonClick) {
            const lower = text.toLowerCase();
            if (lower.includes('cancel') || lower.includes('done') || lower.includes('close')) {
                sessionManager.clearSession(session.id);
                await reply('✅ Age calculator closed.');
                return true;
            }
            if (lower.includes('again') || lower.includes('calculate')) {
                sessionManager.clearSession(session.id);
                sessionManager.createSession(sender, from, this.name, { step: 1 });
                const sentMsg = await askBirthDate(sock, from, msg, reply);
                if (sentMsg && sentMsg.key) {
                    sessionManager.addPendingMessage(sender, from, sentMsg.key.id, this.name);
                }
                return true;
            }
            return true;
        }

        if (!text) return true;

        // Allow user to cancel by typing
        if (/^(cancel|stop|exit|quit)$/i.test(text)) {
            sessionManager.clearSession(session.id);
            await reply('❌ Cancelled.');
            return true;
        }

        const parsed = parseDate(text);
        if (parsed.error) {
            const sentMsg = await reply(`⚠️ ${parsed.error}\n\nPlease reply again with your birth year or date.`);
            if (sentMsg && sentMsg.key) {
                sessionManager.addPendingMessage(sender, from, sentMsg.key.id, this.name);
            }
            return true;
        }

        const sentMsg = await sendResult(sock, from, msg, parsed);
        if (sentMsg && sentMsg.key) {
            sessionManager.addPendingMessage(sender, from, sentMsg.key.id, this.name);
        }
        // Keep session alive for "Calculate Again" button; it will auto-expire.
        return true;
    }
};
