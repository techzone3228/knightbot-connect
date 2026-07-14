/**
 * Year Command - Ask user's birth year (and optional month/day) and reply with age.
 * Uses sessionManager for multi-step conversation, mirroring the age.js pattern.
 */

const sessionManager = require('../../utils/sessionManager');

// Days per month (index 1-12); February handled dynamically for leap years
const DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function daysInMonth(year, month) {
    if (month === 2 && isLeapYear(year)) return 29;
    return DAYS_IN_MONTH[month];
}

function getZodiac(month, day) {
    const signs = [
        ['Capricorn', '♑'], ['Aquarius', '♒'], ['Pisces', '♓'],
        ['Aries', '♈'], ['Taurus', '♉'], ['Gemini', '♊'],
        ['Cancer', '♋'], ['Leo', '♌'], ['Virgo', '♍'],
        ['Libra', '♎'], ['Scorpio', '♏'], ['Sagittarius', '♐'],
        ['Capricorn', '♑']
    ];
    const cutoffs = [20, 19, 20, 20, 21, 21, 22, 22, 22, 23, 22, 21];
    const idx = day < cutoffs[month - 1] ? month - 1 : month;
    return signs[idx];
}

function ageEmoji(age) {
    if (age < 13) return '🧒';
    if (age < 20) return '👦';
    if (age < 30) return '🧑';
    if (age < 50) return '👨';
    if (age < 70) return '🧔';
    return '🧓';
}

module.exports = {
    name: 'year',
    aliases: ['birthyear', 'myage'],
    description: 'Tells your exact age from your birth year (and optional month/day).',
    usage: 'year',
    category: 'utility',

    async execute(sock, msg, args, context) {
        const { from, sender, reply, react } = context;

        sessionManager.createSession(sender, from, this.name, { step: 1 });

        if (react) await react('🎂');

        const sent = await reply(
            `🎂 *Age Calculator*\n\n` +
            `Please reply with your *birth year* (e.g. 1998).\n\n` +
            `_Type *cancel* anytime to stop._`
        );
        if (sent?.key?.id) {
            sessionManager.addPendingMessage(sender, from, sent.key.id, this.name);
        }
    },

    async handleSession(sock, msg, session, context) {
        const { reply, isButtonClick } = context;

        const text = (
            msg.message?.conversation ||
            msg.message?.extendedTextMessage?.text ||
            ''
        ).trim();

        if (isButtonClick) {
            await reply('❌ Please *type* your answer instead of tapping a button.');
            return true;
        }

        if (!text) {
            await reply('❌ Please send a valid text reply.');
            return true;
        }

        // Universal cancel
        if (/^(cancel|stop|exit|quit)$/i.test(text)) {
            sessionManager.clearSession(session.id);
            await reply('🛑 Age calculator cancelled.');
            return true;
        }

        const now = new Date();
        const currentYear = now.getFullYear();

        switch (session.step) {
            case 1: {
                const birthYear = parseInt(text, 10);
                if (!/^\d{4}$/.test(text) || isNaN(birthYear)) {
                    await reply('❌ Please enter a valid 4-digit year (e.g. *1998*).');
                    return true;
                }
                if (birthYear < 1900 || birthYear > currentYear) {
                    await reply(`❌ Year must be between *1900* and *${currentYear}*.`);
                    return true;
                }

                const approxAge = currentYear - birthYear;
                sessionManager.updateSession(session.userId, session.chatId, { birthYear, approxAge });

                const sent = await reply(
                    `📊 Based on the year *${birthYear}*, you are around *${approxAge}* years old.\n\n` +
                    `Want an *exact* age? Reply *yes* to enter your birth month & day, or *no* to finish.`
                );
                if (sent?.key?.id) {
                    sessionManager.addPendingMessage(session.userId, session.chatId, sent.key.id, this.name);
                }
                return true;
            }

            case 2: {
                const answer = text.toLowerCase();
                if (['no', 'n', 'nope'].includes(answer)) {
                    const { birthYear, approxAge } = session.data;
                    sessionManager.clearSession(session.id);
                    await reply(
                        `✅ *Result*\n\n` +
                        `${ageEmoji(approxAge)} You are approximately *${approxAge}* years old.\n` +
                        `📅 Birth year: *${birthYear}*`
                    );
                    return true;
                }
                if (!['yes', 'y', 'yeah', 'yep'].includes(answer)) {
                    await reply('❌ Please reply with *yes* or *no*.');
                    return true;
                }

                sessionManager.updateSession(session.userId, session.chatId, {});
                const sent = await reply('📅 Enter your *birth month* as a number (1-12):');
                if (sent?.key?.id) {
                    sessionManager.addPendingMessage(session.userId, session.chatId, sent.key.id, this.name);
                }
                return true;
            }

            case 3: {
                const month = parseInt(text, 10);
                if (isNaN(month) || month < 1 || month > 12) {
                    await reply('❌ Please enter a valid month between *1* and *12*.');
                    return true;
                }
                const maxDay = daysInMonth(session.data.birthYear, month);
                sessionManager.updateSession(session.userId, session.chatId, { month });
                const sent = await reply(`📅 Enter your *birth day* (1-${maxDay}):`);
                if (sent?.key?.id) {
                    sessionManager.addPendingMessage(session.userId, session.chatId, sent.key.id, this.name);
                }
                return true;
            }

            case 4: {
                const day = parseInt(text, 10);
                const { birthYear, month } = session.data;
                const maxDay = daysInMonth(birthYear, month);

                if (isNaN(day) || day < 1 || day > maxDay) {
                    await reply(`❌ Please enter a valid day between *1* and *${maxDay}* for ${birthYear}-${String(month).padStart(2, '0')}.`);
                    return true;
                }

                const birthDate = new Date(birthYear, month - 1, day);
                if (birthDate > now) {
                    sessionManager.clearSession(session.id);
                    await reply('❌ That birth date is in the future. Please start again with `.year`.');
                    return true;
                }

                // Exact age in years / months / days
                let years = now.getFullYear() - birthDate.getFullYear();
                let months = now.getMonth() - birthDate.getMonth();
                let days = now.getDate() - birthDate.getDate();

                if (days < 0) {
                    months -= 1;
                    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                    days += prevMonth.getDate();
                }
                if (months < 0) {
                    years -= 1;
                    months += 12;
                }

                // Total days lived
                const msLived = now.getTime() - birthDate.getTime();
                const totalDays = Math.floor(msLived / (1000 * 60 * 60 * 24));

                // Next birthday
                let nextBday = new Date(now.getFullYear(), month - 1, Math.min(day, daysInMonth(now.getFullYear(), month)));
                if (nextBday <= now) {
                    const ny = now.getFullYear() + 1;
                    nextBday = new Date(ny, month - 1, Math.min(day, daysInMonth(ny, month)));
                }
                const daysToBday = Math.ceil((nextBday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

                const [zName, zEmoji] = getZodiac(month, day);
                const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
                const dob = `${monthNames[month - 1]} ${day}, ${birthYear}`;

                sessionManager.clearSession(session.id);

                const isBirthdayToday = now.getMonth() === (month - 1) && now.getDate() === day;
                const header = isBirthdayToday
                    ? `🎉🎂 *Happy Birthday!* 🎂🎉\n\n`
                    : `✅ *Age Calculation Complete*\n\n`;

                await reply(
                    header +
                    `${ageEmoji(years)} You are exactly *${years}* years, *${months}* months, and *${days}* days old.\n\n` +
                    `📅 Date of birth: *${dob}*\n` +
                    `⏳ Total days lived: *${totalDays.toLocaleString()}*\n` +
                    `🎂 Next birthday in: *${daysToBday}* day${daysToBday === 1 ? '' : 's'}\n` +
                    `${zEmoji} Zodiac sign: *${zName}*`
                );
                return true;
            }

            default:
                sessionManager.clearSession(session.id);
                await reply('❌ Session error. Please start over with `.year`.');
                return true;
        }
    }
};