/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['923247220362','923400315734'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Tech Zone', 'Anonymous'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Tech Zone',
    prefix: '.',
    sessionName: 'session',
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9l3rVGLmo0ER0xCAiIiPgBW8b81BCUZRys6pAccJ/38CenumH3dnet6qEyjx5zsn8AfKCMOSgBmg/QElJDTlqj7wpEdDAqIpjREEXRJBDoAHVmM1Nf4YL/lIN7mGNWB9OvctWl0aVPolG6ahznLJNHW7Or+DRBWV1TEn4h4Tb3XSN4/E2v2a+X2x0c+uPAzZWXHuTz4ZC45zXEgm8yepavIJHmxESSnJslgnKEIWpgxofEvo5+I7vzqm65+KhbDbXXY3DGh8WiN+G0WS30JcX+ShExBOEqfo5+On+uPnG1HuR03lvPXu5qlC68cGwh4vNnhrpIt6vTS5Ng0x/g88IzlFkRyjnhDef5t22nKsoltYthmdjM/eWzeRYJ+f7RH/Bi2CA76wqkqN6OqSfBO7EUNgtBVNV4gDOMRPzrDayu7PBvbMfKfPoyNzFyJrOBOEjcJ++e+X8f3g/65idPPfcoeNmFaXwuB+eFDmf3Jw4iaPxnc/F++Z4MF1T+Bz8fKTkge6tHboYznmBe/HJ6W+Vlbft6NuxkdLMGoTLi+4HH+BDXtE/oXyZCJVFttVez67SpEmucunuFkTaLkTfcOLDLJrowcVWA93qyIpYOSfELwv9IovK2J8v7aJydkvW7Me5HBfMMcf1LTtdX58dnVFjR0ATH11AESaMU8hJkT9jfaELYFSvUEgRf9ILiIjdfCou7FLI9njvUS9EjEtuIFObHR2n7CTZC10JjTV/BV1Q0iJEjKFoShgvaDNHjEGMGND++t4FObrxN+HacrLYBTGhjAd5VaYFjN5Vff8Iw7Cocr5q8tBoD4gCTfgdRpyTHLOWxyqHNExIjYwEcga0GKYM/eoQURQBjdMK/Zpao4ha4ify8rAVxwPQBdlTEBK19Euy1FckSZCHkiZ9ZV+ubVZYll9yxEEX5LD9Geh5kTdZUTHQBenzodQf9AVJlOVhXxn0XzTpaxt//ILcVogQhyRlQAPGt15B/P7Y9O7xzZ1blo6xvsI6+N3iu1fetPBGltfrDwSDcPdu2cjayNkAjd17c4s6bm/HoqZ/zFyFr9XXf0gCNHDk9mo5TY3NuT84m/XCETfCpJxaLqQXAyW90XRn8cMw9S8+q1Vr5sfi3qn4CDvHBdxkEJpJukdB0Dncl0bfqkgUrg39ta0WoZqE6GMxQ7Xd5HDm17XNpMtwXqjb3vq2W61qI9vP0tx1yxfPLvfU83PVqHG12yZJfFGqMF7iTvnNXc3MctkUY2+B49W5yqSFmeA3Fz+nKP25vcjTX6147TUm6LkMfqr0X2K+4W4tJzy6H1L83C7/MqGjNV6e6o4X6QVdhzcyTdJoUO3wPVTZLj7FojINK2twQkrQA4/H9y4oU8jjgmZAAyw7QtAFtKhaA9t5XPyhkqFj28TYaLtOIeP676FYkwwxDrMSaKKiDlRBUmTl8TcVQsQ8SgcAAA==',
    newsletterJid: '120363304414452603@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://lora.comds/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Telegram--> @techzonex',
    
    // Bot Behavior
    selfMode: true, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    
    // ===== LINK CAPTURE CONFIGURATION =====
    captureEnabled: false,      // Master switch for link capture (on/off)
    autoJoinEnabled: false,     // Automatically join captured group links
    autoMessageEnabled: false,  // Send welcome message to open chat groups after joining
    
    // ===== AUTO-REACT CONFIGURATION =====
    autoReact: false, // Master switch - set to true to enable auto-react
    autoReactMode: 'all', // 'bot' (only reacts to commands) or 'all' (reacts to all messages)
    
    // Granular auto-react controls
    autoReactInPrivate: false,   // Enable auto-react in private chats
    autoReactInGroups: true,    // Enable auto-react in groups
    autoReactSpecificGroups: ['120363420955143933@g.us'], // Array of specific group JIDs to enable auto-react (empty = all groups if autoReactInGroups is true)
    
    autoReactEmojis: ['❤️','🔥','👌','💀','😁','✨','👍','🤨','😎','😯','🤝','💫'], // Default emojis for 'all' mode
    autoReactCommandEmoji: '⏳', // Emoji for command messages in 'bot' mode
    
    autoDownload: false,
    
    // ===== NEW: Telegram Bridge Auto-Start =====
    autoStartTelegram: true, // Set to false to disable auto-start of Telegram bridge
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    // Add to your config.js
    github: {
        token: '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', // Replace with your actual token
        username: 'ssccoouutt' // Replace with your GitHub username
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
