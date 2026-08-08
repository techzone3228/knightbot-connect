/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['923400315734','923247220362'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Tech Zone', 'Anonymous'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Tech Zone',
    prefix: '.',
    sessionName: 'session',
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9l3rVGBEQLxEdMaAo2FxU8IIb81BCcREosKoQccJ/38Dunp6H3dnet6qEynMyz8n8CXCRUPSKGjD5CUqSXCFD7ZE1JQIToFRhiAjoggAyCCbAtrZ2imZEUqaNEYvbznlvnAR2yBbqwDtb/VDbFaZZNStBfAGPLiirU5b4f0iY2tI2Hl1Go0FxP85nmMfBceOINzHeFlRcvCbiAqp0LVu8/AIebUaYkARHahmjHBGYvaJmBRPyNfrU9ra6fL4Fdu30T1y0EMgyxPV53MRXWx0vdxXVAku7Z3z0NfrrnjUPxam9KU35Yve4fXxfVDTj/JvtJsaYQBWp6DiIXwXujT5NIowCPUCYJaz5ct9VbcsJGvFLBZJqiQa7RIrVfJc74Q7SzXnOLPsq2PLwrMlfIw6lA1zapbz0imXMSRbdNfZyl6EC7TaZd01UjZm13DkYvPo78RX58Er6f/ouWqInm52LJiq7cL10uNH2ePc7oxPXHPVbx/U0KVwx/R5i9Wv0xeDCDTTfQVInCjpu2IPp6q4YDKH+uBMWaoSqrcZVs21ef9KHrCJ/YnlRL3Uuj9dN2rNSRW4uurVeDJsNHMvpa011NxXF5XQ8Qm766kCF7BXvVJvVxb1frh0jqTezjdRbGr14NohPe2puY9+cyS/PilLU6AGY9B9dQFCUUEYgSwrcxvi+2AUwuDrIJ4g92wsWB6kkfnlf9VKl1u25Kt2GtqdAUa7dnYrToTui8JxtLth8AV1QksJHlKJASygrSGMiSmGEKJj89aMLMLqxN+FaOKHfBWFCKNviqswKGHyo+vER+n5RYeY02J+2B0TAhPsMI8YSHNG2jxWGxI+TK5rGkFEwCWFG0a8KEUEBmDBSoV9TOy2CtvHOwBFm1n4OuiB/CpIEYALGvMCLQ57nBImf8N/pt7rNCsvyG0YMdAGG7c9AxgVu8qKioAuy50NeHIgc3xcESRwOxPGE/97GH78otwgBYjDJKJiAqTkrkpU4U+18IwTmYiGrkTyNZPBZ4odX3rSIkDhU7G3OcYpPrwGDsxyPqMfnHSM28kIIrvNwh4+StKYv/5Ck3Zq21U+F4wUeF16q43pzYAIkXG+Y7bGYSytPn5q6d3aXPWewt93xmAmrqJetlWCoBOaGyPcrLFcHo16xeHsaDQQvN+XopUUL0DXx0e9g6aHSfZjjSlLW6zAx66BGN4ZxBgNHF1eHPecKdTrTlrv1/uQinoZu/jo1FGlusmMzu1TDhlDioRvl4qtjrcd0vJ9Fby5+TlH2vr2Sp79a8dprmKDnMnhX6b/EfOPdWo57dH9L8b5d/mVCFU+r7NrNlsySD4YhnPbRoOwZC6u8JqIzuFjC6XboH3lUpQZ4PH50QZlBFhYkb5d/foKgC0hRtQbWcVj8AWkqR7oaRdO26gxSJn8OhZvkiDKYl2DSH44knuMFcfz4G4EAOchKBwAA',
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
