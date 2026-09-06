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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VU2bKiSBT8l3rVaBA3MOJGDIuyuYCoiBPzUEIBpWwWBQod/vsE3r59+2Gm585bbZEnT2ae+g6yHJfIRA2YfQcFwTWkqFvSpkBgBqQqDBEBfRBACsEM7BXsjA4TdllOq41gJ3rae1xEmXPthRA2fjCKT9p82TOLxeoNPPugqM4J9n8DuEtjndlY7XV0O0B3vRkullF12GytfbDWC9c43Qxpi1u5uXaAHSLEBGfRvIhRighMTNRYEJOv0W+MaSir3rBamfXoJO6I4d1PDs+s74rBTfh2cYwT4gQqc5x/jb42xXkg7/0Bx8kwFXrWeMvZgdRO/EXauoQvoqXNWMeg2F7f6Zc4ylCgByijmDZf1j1X7gsjLtNxNqzzeF0NIa/2Wq1eVD1nM4TkIFJ2sX0Yu+H+a8SFcRzzuFbGHMOaCgxlMVLQ6Zw73h0e13bpjy/t1V8lA8f+lbhFPrJy/T+661JxO4lnEyP3FHPeXHPby3XyMA5OXN9iJNX6PHO1aVAd+K/RL83FQD1jV+xhSYjbhsE6TRmZzaPErpPipg78h6XpVnr0P+lDWpHfsZwmkVUKjKnBet1sLlEwCVF9Eyfjdu/f/HYsCJODW99GTBGKvCkZ23NJvOvCV9TrsMWnh2YfJHklTjR5fbd6hTqWz+Ylent1dEWNHoDZ4NkHBEW4pARSnGevs2kfwKB2kE8QfakLtPtOleVQpmy6d3zHqTKLXDSlcTXPPoSSjZRrkqK5bXj3N9AHBcl9VJYo0HBJc9KsUFnCCJVg9udffZChB333ras2HPRBiElJ91lVJDkMPkz9uIS+n1cZdZrMl7sFImDGfh4jSnEWlZ2MVQaJH+MayTGkJZiFMCnRzwYRQQGYUVKhn0Mr50Gnu7oWXMVeGqAP0pcfOOgSyQ1HLDscjKfD0Ww4+aP8du9gYVF8yxAFfZC8nnE8y3NTdjriRuyU47uX3cXzJ8MOMEAU4qQEMyAvm7Xg5/LczFZCYKuqOI9EORLBZ0cfyXiX/tYK180qYO6dNPh4n4cPQYg34VpybC70pJ002kVmEpmc/vYPIGAGsvMStsbG5xTXca8Mt/VWnCmeamjk/iPydoo1xqtpY2Wj3F2gdSL4tWVgRhG5E9NU+9xmc7q5xI66WZds4Tp4dN6K97euWoBq7KNfi8nt8hbdoolOYq/C3mJ55FmxPosIqqxQyGEyPFZE34TKQZeuiU0OeG/ZKX5MJgqWajhQ+Oy0cXbH+SQ5ntOSqVMqxPf3zL5mJvnxV+FXnDqvum2I0Wv0M9g5+N/evRPvIsY++79g/PhM/mUgJVgyJ+WihbypZsc84SWND0Nvl7X2/rrOOHF/R/ORXHgyxeD5/KsPigTSMCcpmAGYBSTHAegDklddZvUszH9TTBZ1fR5Fetd5Aksqfs7BDqeopDAtumHl+SnLcuz0+TcFdk5zPAcAAA==',
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
