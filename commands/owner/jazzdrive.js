/**
 * JazzDrive Uploader - Automate cloud.jazzdrive.com.pk uploads via Selenium.
 *
 * Flow:
 *   .jazzdrive login <92xxxxxxxxxx>   → opens JazzDrive, submits phone, waits for OTP
 *      → owner replies with 4-digit OTP → login completes, cookies cached
 *   .jazzdrive upload                  → reply to a media/document message, uploads
 *                                        to JazzDrive and returns the share link
 *   .jazzdrive status                  → show login state / active session
 *   .jazzdrive logout                  → clear cached cookies + close driver
 *
 * Session cookies are persisted to session/jazzdrive_cookies.json so the
 * headless Chrome doesn't need to log in again for 24 h.
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const axios = require('axios');
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { downloadContentFromMessage } = require('@whiskeysockets/baileys');
const sessionManager = require('../../utils/sessionManager');
const config = require('../../config');

const LOGIN_URL = 'https://cloud.jazzdrive.com.pk/login';
const GALLERY_URL = 'https://cloud.jazzdrive.com.pk/#gallery';
const FILES_URL = 'https://cloud.jazzdrive.com.pk/#files';
const COOKIES_PATH = path.join(__dirname, '..', '..', 'session', 'jazzdrive_cookies.json');
const SESSION_TTL_MS = 24 * 60 * 60 * 1000; // 24 h

// Per-owner in-memory driver while OTP is pending
const activeDrivers = new Map();

// ----------- helpers -----------
function ensureSessionDir() {
    const dir = path.dirname(COOKIES_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function saveCookies(cookies) {
    ensureSessionDir();
    fs.writeFileSync(COOKIES_PATH, JSON.stringify({
        savedAt: Date.now(),
        expiresAt: Date.now() + SESSION_TTL_MS,
        cookies
    }, null, 2));
}

function loadCookies() {
    if (!fs.existsSync(COOKIES_PATH)) return null;
    try {
        const data = JSON.parse(fs.readFileSync(COOKIES_PATH, 'utf8'));
        if (Date.now() > (data.expiresAt || 0)) return null;
        return data.cookies || [];
    } catch (_) {
        return null;
    }
}

function clearCookies() {
    if (fs.existsSync(COOKIES_PATH)) fs.unlinkSync(COOKIES_PATH);
}

async function buildDriver() {
    const opts = new chrome.Options();
    opts.addArguments('--headless=new');
    opts.addArguments('--no-sandbox');
    opts.addArguments('--disable-dev-shm-usage');
    opts.addArguments('--disable-gpu');
    opts.addArguments('--window-size=1920,1080');
    opts.addArguments('--disable-blink-features=AutomationControlled');
    return await new Builder().forBrowser('chrome').setChromeOptions(opts).build();
}

async function screenshot(driver) {
    try {
        const png = await driver.takeScreenshot();
        return Buffer.from(png, 'base64');
    } catch (_) { return null; }
}

async function applyStoredCookies(driver, cookies) {
    await driver.get('https://cloud.jazzdrive.com.pk/');
    await driver.sleep(1500);
    for (const c of cookies) {
        try {
            await driver.manage().addCookie({
                name: c.name,
                value: c.value,
                path: c.path || '/',
                domain: c.domain,
                secure: !!c.secure,
                httpOnly: !!c.httpOnly,
                expiry: c.expiry ? Math.floor(c.expiry) : undefined
            });
        } catch (_) { /* ignore malformed cookies */ }
    }
}

async function isLoggedIn(driver) {
    try {
        await driver.get(GALLERY_URL);
        await driver.sleep(3000);
        const url = (await driver.getCurrentUrl()).toLowerCase();
        if (url.includes('login') || url.includes('signin')) return false;
        return true;
    } catch (_) { return false; }
}

async function setPhoneValue(driver, phone) {
    return driver.executeScript(function (value) {
        const selectors = [
            '#signinform2 #msisdn2',
            '#msisdn2',
            'form[id*="signin" i] input[type="tel"]',
            'form[id*="login" i] input[type="tel"]',
            'input[id*="msisdn" i]',
            'input[name*="msisdn" i]',
            'input[type="tel"]',
            'input[placeholder*="phone" i]',
            'input[placeholder*="mobile" i]',
            'input[placeholder*="number" i]'
        ];
        const seen = new Set();
        const isVisible = (el) => {
            if (!el || seen.has(el)) return false;
            seen.add(el);
            const style = window.getComputedStyle(el);
            const rect = el.getBoundingClientRect();
            return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity || 1) > 0 && rect.width > 0 && rect.height > 0 && !el.disabled && !el.readOnly;
        };
        const candidates = selectors.flatMap((selector) => Array.from(document.querySelectorAll(selector)));
        const input = candidates.find(isVisible) || candidates[0];
        if (!input) return { ok: false, reason: 'phone_input_not_found' };

        input.scrollIntoView({ block: 'center', inline: 'center' });
        input.focus();
        const proto = Object.getPrototypeOf(input);
        const setter = Object.getOwnPropertyDescriptor(proto, 'value')?.set;
        if (setter) setter.call(input, value);
        else input.value = value;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
        input.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, key: value[value.length - 1] || '0' }));
        window.__jazzDriveLastPhoneInput = input;
        return { ok: true, id: input.id || '', name: input.name || '', type: input.type || '', value: input.value };
    }, phone);
}

async function clickLoginButton(driver) {
    return driver.executeScript(function () {
        const isVisible = (el) => {
            if (!el) return false;
            const style = window.getComputedStyle(el);
            const rect = el.getBoundingClientRect();
            return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity || 1) > 0 && rect.width > 0 && rect.height > 0 && !el.disabled;
        };
        const input = window.__jazzDriveLastPhoneInput;
        const form = input?.closest?.('form');
        const scoped = form ? Array.from(form.querySelectorAll('button, input[type="submit"], a')) : [];
        const all = Array.from(document.querySelectorAll('#signinform2 #signinbtn, #signinform2 button, button, input[type="submit"], a'));
        const candidates = [...scoped, ...all];
        const button = candidates.find((el) => {
            if (!isVisible(el)) return false;
            const text = `${el.innerText || ''} ${el.value || ''} ${el.id || ''} ${el.className || ''}`.toLowerCase();
            return /login|log in|sign in|signin|continue|next|submit/.test(text);
        }) || candidates.find(isVisible);
        if (!button) return { ok: false, reason: 'login_button_not_found' };
        button.scrollIntoView({ block: 'center', inline: 'center' });
        button.click();
        return { ok: true, id: button.id || '', text: (button.innerText || button.value || '').trim() };
    });
}

// ----------- login steps -----------
function normalizePkPhone(input) {
    let d = (input || '').replace(/\D/g, '');
    if (d.startsWith('0092')) d = d.slice(4);
    if (d.startsWith('92')) d = d.slice(2);
    if (d.startsWith('0')) d = d.slice(1);
    // d should now be 10 digits starting with 3 (e.g. 3247220362)
    return '0' + d; // 11 digits: 03XXXXXXXXX
}

async function submitPhone(driver, phone) {
    await driver.get(LOGIN_URL);
    await driver.sleep(3000);
    const local = normalizePkPhone(phone);
    if (!/^03\d{9}$/.test(local)) {
        throw new Error(`Invalid Pakistan mobile number after normalization: ${local}`);
    }
    // JazzDrive often renders hidden duplicate inputs/forms. Selenium's clear/sendKeys
    // throws "element not interactable" on those, so set the visible input through
    // the DOM and dispatch real input/change events for the SPA listeners.
    await driver.wait(async () => {
        const result = await setPhoneValue(driver, local);
        return result && result.ok;
    }, 30000, 'JazzDrive phone input not found/interactable');

    const clicked = await clickLoginButton(driver);
    if (!clicked || !clicked.ok) {
        // Last fallback: pressing Enter on the active phone field submits many builds.
        await driver.actions().sendKeys(Key.ENTER).perform();
    }
    await driver.sleep(7000);
    // On success the page moves to the OTP entry view
    const url = (await driver.getCurrentUrl()).toLowerCase();
    // On the initial login page the two visible inputs are #msisdn and #msisdn2.
    // OTP screen has different inputs (short maxlength or a single otp field), and
    // #msisdn2 is no longer present.
    const stillOnLogin = await driver.executeScript(function () {
        const inputs = Array.from(document.querySelectorAll('#msisdn2, input[id*="msisdn" i], input[name*="msisdn" i]'));
        return inputs.some((el) => {
            const style = window.getComputedStyle(el);
            const rect = el.getBoundingClientRect();
            return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
        });
    });
    const otpVisible = await driver.executeScript(function () {
        const inputs = Array.from(document.querySelectorAll('input[type="tel"], input[type="text"], input[type="number"]'));
        return inputs.some((el) => {
            const style = window.getComputedStyle(el);
            const rect = el.getBoundingClientRect();
            const hint = `${el.id || ''} ${el.name || ''} ${el.placeholder || ''} ${el.autocomplete || ''}`.toLowerCase();
            return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0 && (/otp|pin|code|verify/.test(hint) || Number(el.maxLength) <= 6);
        });
    });
    return !stillOnLogin || otpVisible || url.includes('otp') || url.includes('verify') || url.includes('pin');
}

async function submitOtp(driver, otp) {
    const digits = otp.replace(/\D/g, '').slice(0, 6);
    // Try boxed single-digit inputs first
    const boxed = await driver.findElements(
        By.xpath("//input[(@maxlength='1' or @size='1') and (@type='tel' or @type='text' or @type='number')]")
    );
    if (boxed.length >= digits.length) {
        for (let i = 0; i < digits.length; i++) {
            await boxed[i].clear();
            await boxed[i].sendKeys(digits[i]);
        }
    } else {
        // Fallback to a single input
        const single = await driver.findElements(
            By.xpath("//input[@type='tel' or @type='text' or @type='number']")
        );
        if (!single.length) throw new Error('OTP input field not found');
        await single[0].clear();
        await single[0].sendKeys(digits);
        await single[0].sendKeys(Key.ENTER);
    }
    // Look for a submit / verify button
    const submitCandidates = await driver.findElements(
        By.xpath("//button[contains(translate(., 'VERIFYSUBMITCONTINUE', 'verifysubmitcontinue'), 'verify') or contains(translate(., 'VERIFYSUBMITCONTINUE', 'verifysubmitcontinue'), 'submit') or contains(translate(., 'VERIFYSUBMITCONTINUE', 'verifysubmitcontinue'), 'continue')]")
    );
    if (submitCandidates.length) {
        try { await submitCandidates[0].click(); } catch (_) {}
    }
    await driver.sleep(5000);
    return isLoggedIn(driver);
}

// ----------- media helpers -----------
async function bufferFromStream(stream) {
    const chunks = [];
    for await (const chunk of stream) chunks.push(chunk);
    return Buffer.concat(chunks);
}

function extForMime(mime = '', fallback = 'bin') {
    const map = {
        'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif',
        'video/mp4': 'mp4', 'video/webm': 'webm', 'video/quicktime': 'mov',
        'audio/mpeg': 'mp3', 'audio/ogg': 'ogg', 'audio/mp4': 'm4a',
        'application/pdf': 'pdf', 'application/zip': 'zip'
    };
    return map[mime.split(';')[0].trim()] || fallback;
}

async function downloadQuoted(quoted) {
    if (!quoted) return null;
    const kinds = [
        ['imageMessage', 'image'], ['videoMessage', 'video'],
        ['audioMessage', 'audio'], ['documentMessage', 'document'],
        ['stickerMessage', 'sticker']
    ];
    for (const [key, type] of kinds) {
        const node = quoted[key];
        if (!node) continue;
        const stream = await downloadContentFromMessage(node, type);
        const buf = await bufferFromStream(stream);
        const filename = node.fileName || `jazz_${Date.now()}.${extForMime(node.mimetype, type === 'image' ? 'jpg' : 'bin')}`;
        return { buffer: buf, filename };
    }
    return null;
}

async function downloadFromUrl(url) {
    const res = await axios.get(url, { responseType: 'arraybuffer', timeout: 120000 });
    const disp = res.headers['content-disposition'] || '';
    let name = decodeURIComponent(url.split('/').pop().split('?')[0] || `jazz_${Date.now()}`);
    const m = /filename\*?=(?:UTF-8'')?"?([^";]+)"?/i.exec(disp);
    if (m) name = m[1];
    if (!/\.[a-z0-9]{1,5}$/i.test(name)) name += '.' + extForMime(res.headers['content-type'] || '');
    return { buffer: Buffer.from(res.data), filename: name };
}

function writeTempFile(filename, buffer) {
    const safe = filename.replace(/[^\w.\-]+/g, '_').slice(0, 120);
    const p = path.join(os.tmpdir(), `jazz_${Date.now()}_${safe}`);
    fs.writeFileSync(p, buffer);
    return p;
}

// ----------- upload + link extraction -----------
async function uploadFile(driver, filePath) {
    const filename = path.basename(filePath);
    const isMedia = /\.(jpg|jpeg|png|gif|webp|mp4|mov|mkv|avi|webm)$/i.test(filename);
    await driver.get(isMedia ? GALLERY_URL : FILES_URL);
    await driver.sleep(3500);

    // JazzDrive uses hidden <input type=file>; reveal + inject the path
    let input;
    try {
        input = await driver.wait(until.elementLocated(By.xpath("//input[@type='file']")), 20000);
    } catch (_) {
        throw new Error('Upload input not found on JazzDrive page');
    }
    await driver.executeScript(
        "arguments[0].style.display='block';arguments[0].style.visibility='visible';arguments[0].style.opacity='1';",
        input
    );
    await driver.sleep(500);
    await input.sendKeys(filePath);

    // Wait for upload completion – poll for a success indicator or 100%
    const deadline = Date.now() + 5 * 60 * 1000; // 5 min max
    let done = false;
    while (Date.now() < deadline) {
        const success = await driver.findElements(By.xpath(
            "//*[contains(translate(text(),'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'upload completed') or contains(translate(text(),'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'successfully') or contains(text(),'100%')]"
        ));
        if (success.length) { done = true; break; }
        await driver.sleep(3000);
    }
    if (!done) throw new Error('Upload timed out (no completion signal after 5 min)');
    await driver.sleep(2500);
    return filename;
}

async function extractShareLink(driver, filename) {
    const isMedia = /\.(jpg|jpeg|png|gif|webp|mp4|mov|mkv|avi|webm)$/i.test(filename);
    await driver.get(isMedia ? GALLERY_URL : FILES_URL);
    await driver.sleep(3500);

    // Search
    try {
        const search = await driver.findElements(By.xpath(
            "//input[contains(@placeholder,'Search') or contains(@placeholder,'search')]"
        ));
        if (search.length) {
            await search[0].clear();
            await search[0].sendKeys(filename.slice(0, 20));
            await search[0].sendKeys(Key.ENTER);
            await driver.sleep(2500);
        }
    } catch (_) { /* ignore */ }

    // Find first file element
    const candidates = await driver.findElements(By.xpath(
        `//*[contains(@title,'${filename.slice(0, 15)}') or contains(text(),'${filename.slice(0, 15)}')]`
    ));
    const target = candidates[0] || (await driver.findElements(
        By.xpath("//*[contains(@class,'item') or contains(@class,'file')]")
    ))[0];
    if (!target) throw new Error('Uploaded file not visible in JazzDrive UI');

    // Right-click → Share (fallback to any clickable share button)
    await driver.actions({ async: true }).contextClick(target).perform();
    await driver.sleep(1500);
    const share = await driver.findElements(By.xpath(
        "//*[self::button or self::a or self::li or self::div][contains(translate(., 'SHARE', 'share'),'share')]"
    ));
    if (!share.length) throw new Error('Share option not found in context menu');
    try { await share[0].click(); } catch (_) {
        await driver.executeScript('arguments[0].click();', share[0]);
    }
    await driver.sleep(2500);

    const linkInputs = await driver.findElements(By.xpath(
        "//input[contains(@value,'cloud.jazzdrive.com.pk')] | //input[starts-with(@value,'https://cloud.jazzdrive')]"
    ));
    if (!linkInputs.length) throw new Error('Share link input not found');
    const link = await linkInputs[0].getAttribute('value');
    if (!link || !link.startsWith('http')) throw new Error('Empty share link value');
    return link;
}

// ----------- command -----------
module.exports = {
    name: 'jazzdrive',
    aliases: ['jazz', 'jd'],
    description: 'Upload files to cloud.jazzdrive.com.pk via headless browser and return a share link.',
    usage: `${config.prefix}jazzdrive login <92xxxxxxxxxx> | upload (reply to media) | status | logout`,
    category: 'owner',
    ownerOnly: true,

    async execute(sock, msg, args, context) {
        const { from, sender, reply, react } = context;
        const sub = (args[0] || 'help').toLowerCase();

        if (sub === 'help' || sub === '--help') {
            return reply(
                `☁️ *JazzDrive Uploader*\n\n` +
                `• \`${config.prefix}jazzdrive login <92xxxxxxxxxx>\` – start login\n` +
                `  → then reply with the 4-digit OTP JazzDrive SMSes you\n` +
                `• \`${config.prefix}jazzdrive upload\` – reply to a photo / video / document\n` +
                `  (or pass a direct URL: \`${config.prefix}jazzdrive upload <url>\`)\n` +
                `• \`${config.prefix}jazzdrive status\` – show cached session state\n` +
                `• \`${config.prefix}jazzdrive logout\` – wipe cookies\n\n` +
                `> Session is cached in \`session/jazzdrive_cookies.json\` for 24 h.\n` +
                `> *Powered by ${config.botName}*`
            );
        }

        if (sub === 'status') {
            const cookies = loadCookies();
            const pending = activeDrivers.has(sender);
            let msgText = `☁️ *JazzDrive Status*\n\n`;
            msgText += cookies
                ? `✅ Cached session: valid (${cookies.length} cookies)\n`
                : `❌ No cached session\n`;
            msgText += pending ? `⏳ OTP verification in progress\n` : '';
            return reply(msgText);
        }

        if (sub === 'logout') {
            clearCookies();
            const existing = activeDrivers.get(sender);
            if (existing) { try { await existing.driver.quit(); } catch (_) {} activeDrivers.delete(sender); }
            await react('✅');
            return reply('👋 Logged out of JazzDrive. Cookies removed.');
        }

        if (sub === 'login') {
            const rawPhone = (args[1] || '').replace(/[^\d]/g, '');
            if (!rawPhone || rawPhone.length < 10) {
                return reply(`⚠️ Usage: \`${config.prefix}jazzdrive login 03247220362\` (or \`923247220362\`)`);
            }
            let phone;
            try { phone = normalizePkPhone(rawPhone); } catch (e) {
                return reply(`⚠️ ${e.message}`);
            }
            if (!/^03\d{9}$/.test(phone)) {
                return reply(`⚠️ Invalid Pakistan number. Expected 11-digit format like \`03247220362\`.`);
            }
            if (activeDrivers.has(sender)) {
                return reply('⏳ A login is already pending. Send the OTP or run `.jazzdrive logout` to reset.');
            }
            await react('🌐');
            let driver;
            try {
                await reply('🚀 Launching headless Chrome and opening JazzDrive...');
                driver = await buildDriver();
                const okPhone = await submitPhone(driver, phone);
                const shot = await screenshot(driver);
                if (shot) {
                    await sock.sendMessage(from, {
                        image: shot,
                        caption: okPhone
                            ? `📲 OTP page reached. Reply with the code sent to *+${phone}* (session times out in 5 min).`
                            : `⚠️ Could not confirm OTP page. Try replying with the OTP anyway.`
                    });
                }
                activeDrivers.set(sender, { driver, phone, createdAt: Date.now() });
                sessionManager.createSession(sender, from, this.name, { step: 'awaiting_otp', phone });
                await react('✅');
            } catch (err) {
                console.error('[JAZZDRIVE] login error:', err);
                if (driver) { try { await driver.quit(); } catch (_) {} }
                activeDrivers.delete(sender);
                await react('❌');
                return reply(`❌ Login failed: ${err.message}`);
            }
            return;
        }

        if (sub === 'upload') {
            const quoted = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
            const urlArg = args[1];
            if (!quoted && !urlArg) {
                return reply(`⚠️ Reply to a media/document message with \`${config.prefix}jazzdrive upload\`, or provide a URL.`);
            }
            const cookies = loadCookies();
            if (!cookies) {
                return reply(`❌ No JazzDrive session. Run \`${config.prefix}jazzdrive login <phone>\` first.`);
            }
            await react('⬆️');
            let driver, tempPath;
            try {
                await reply('📥 Fetching file...');
                const file = quoted ? await downloadQuoted(quoted) : await downloadFromUrl(urlArg);
                if (!file) throw new Error('Unsupported message – reply to an image, video, audio, sticker or document.');
                tempPath = writeTempFile(file.filename, file.buffer);

                await reply(`🌐 Restoring JazzDrive session and uploading \`${file.filename}\` (${(file.buffer.length / 1024 / 1024).toFixed(2)} MB)...`);
                driver = await buildDriver();
                await applyStoredCookies(driver, cookies);
                if (!(await isLoggedIn(driver))) {
                    throw new Error('Cached session no longer valid. Please re-run `.jazzdrive login <phone>`.');
                }

                const uploadedName = await uploadFile(driver, tempPath);
                await reply('🔗 Upload complete. Extracting share link...');
                const shareLink = await extractShareLink(driver, uploadedName);

                // Refresh cookies (extends 24 h TTL)
                try {
                    const fresh = await driver.manage().getCookies();
                    saveCookies(fresh);
                } catch (_) {}

                await sock.sendMessage(from, {
                    text:
                        `✅ *Uploaded to JazzDrive*\n\n` +
                        `📄 File: \`${uploadedName}\`\n` +
                        `📦 Size: ${(file.buffer.length / 1024 / 1024).toFixed(2)} MB\n` +
                        `🔗 Share: ${shareLink}\n\n` +
                        `> *Powered by ${config.botName}*`
                }, { quoted: msg });
                await react('✅');
            } catch (err) {
                console.error('[JAZZDRIVE] upload error:', err);
                await react('❌');
                await reply(`❌ Upload failed: ${err.message}`);
            } finally {
                if (driver) { try { await driver.quit(); } catch (_) {} }
                if (tempPath && fs.existsSync(tempPath)) { try { fs.unlinkSync(tempPath); } catch (_) {} }
            }
            return;
        }

        return reply(`❓ Unknown subcommand. Try \`${config.prefix}jazzdrive help\`.`);
    },

    async handleSession(sock, msg, session, context) {
        const { from, sender, reply, react } = context;
        const text = (msg.message?.conversation || msg.message?.extendedTextMessage?.text || '').trim();
        if (!text) return true;

        if (/^(cancel|stop|exit|quit)$/i.test(text)) {
            const entry = activeDrivers.get(sender);
            if (entry) { try { await entry.driver.quit(); } catch (_) {} activeDrivers.delete(sender); }
            sessionManager.clearSession(session.id);
            await reply('❌ JazzDrive login cancelled.');
            return true;
        }

        if (session.data?.step !== 'awaiting_otp') return true;

        const otp = text.replace(/\D/g, '');
        if (otp.length < 4) {
            await reply('⚠️ OTP must be at least 4 digits. Reply with the code, or type `cancel`.');
            return true;
        }

        const entry = activeDrivers.get(sender);
        if (!entry) {
            sessionManager.clearSession(session.id);
            await reply('⚠️ Login session lost. Please run `.jazzdrive login <phone>` again.');
            return true;
        }

        await react('🔐');
        try {
            await reply(`🔢 Submitting OTP \`${otp}\`...`);
            const ok = await submitOtp(entry.driver, otp);
            const shot = await screenshot(entry.driver);
            if (!ok) {
                if (shot) await sock.sendMessage(from, { image: shot, caption: '❌ Login did not succeed. Reply with a fresh OTP or `cancel`.' });
                else await reply('❌ Login did not succeed. Reply with a fresh OTP or `cancel`.');
                return true;
            }
            const cookies = await entry.driver.manage().getCookies();
            saveCookies(cookies);
            if (shot) await sock.sendMessage(from, { image: shot, caption: '✅ Logged in to JazzDrive. Session cached for 24 h.' });
            else await reply('✅ Logged in to JazzDrive. Session cached for 24 h.');
            await react('✅');
        } catch (err) {
            console.error('[JAZZDRIVE] otp error:', err);
            await reply(`❌ OTP submission failed: ${err.message}`);
            await react('❌');
        } finally {
            try { await entry.driver.quit(); } catch (_) {}
            activeDrivers.delete(sender);
            sessionManager.clearSession(session.id);
        }
        return true;
    }
};