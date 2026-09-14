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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rFGBFQ0YiOWEAFGgRvKPTGPpRQQCE3q0oRJ/z3Dezp6XnYne19q1vkyZOZp76DssIUWagF0++gJvgKGeqWrK0RmAL1EseIgB6IIINgCs5OuNINz9ncRqNolWVc5k5y2WKHSGXFWKY0V052tY4iP3gBjx6oL8cch78BtIPbjaaFeHKisfym3qUW2n4xO+92Zr3EiR1x2W0W8ttAnb+AR4cIMcFlMq9TVCACcwu1K4jJ1+gvXYFIod1y1n55CHXPk0uP8EW7alu08UX+tiDuNpjF2j75Gn2ZMseW+/vXhbEJbvdITBBX2znT3XogbjTdYgd1XihwJjTv9ClOShSZESoZZu2XdR9ZcrTg41lQN+LgLh5n7rCuR7TxSJA71+i0Zkc3KcNCWtCvEbf0OFj5RMzEtFQRx623AiZ9a5TmzB0mA/E1uRdOvb3fDstfia/IR1ZO/0v3ZVaXWW7wAnltLohQ962vDUXmWEOBycYW69eLE6Qb8RR+lf65kGzXV9NbInkrXMpJnYiC3Vxdosfu8qj6K2xWd9rST/qQXcjvWFqmt8pMuRZ8kU/Lig/OQm401XGTHKS+zk1O1K+t+yELzI2s4StcNlaBhPg1YDyCoW7uvYVtKGVjGcJawKjyOfeClZdnRyfUmhGYDh49QFCCKSOQ4ap8no1GPQCj6xaFBLGnvGBUaji+c0V0VNJTPOSHyn54nPN7IVy+jmV0SwaGEE3U/opbv4AeqEkVIkpRZGDKKtIuEaUwQRRM//yrB0p0Y+/GdeXEQQ/EmFDmlZc6r2D04erHJQzD6lKybVuGWrdABEz5z2PEGC4T2ul4KSEJU3xFWgoZBdMY5hT97BARFIEpIxf0c2q1KuqEn+m65lujDeiB4mkIjsAUTARR4nlxMByL0lQc/0G/NR0srOtvJWKgB/LnM0HmZWHMjyVB4seC3L3sLh4/GXaAEWIQ5xRMgWYLziSstPlq5pTM03VlnihaooDPjj6i8S79+T45ucuo33TSYL+Zx7fJJHVjR92uhThQd6q0S6w8sQTz5R9AwBQMltqbXRF7VeuNlnHrzdlortxesC/zuSAeF1c369OwcBot5TYt2hwn59YyreNk4eiL7GTMYWHthxFHlZZXpdRh9laarV+6ahG64hD9WmzWePyO9w2YKmdOyKutsDzg5raS6fH11R/INtdAMvJavlAWTF0HWREtPAW1ppHSYzDRlhelODUL45JAyQrHjai0Bk7eQ/scmvzHZ4Wfceq86rYxRs/ZL2Hn4H979068ixj/6P2C8eM3+ZeJVCHtv80yI5YtvfSrXFYNOY6DXXlfeyenFBSvQXNJqwONYfB4/NUDdQ5ZXJECTAEsI1LhCPQAqS5dZs0yrn5TTFNMc54kZtd5DilTPudghwtEGSxqMB2M5Yk4FgaS/PgbmIpQ+j0HAAA=',
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
