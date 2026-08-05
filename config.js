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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VUXZOiOBT9L3nVGkFAhKquGsRvbRBFRbfmIZKAkU+TgOCU/30Lu3umH3Zne9+SC7n33HPOvT9BmhGGF7gG+k+QU1JCjpsjr3MMdDAoggBT0AYIcgh0IAzPW8NTrstBOoXxNpFKaT6T0zo97nyGyGXes1Q1HnNZ8F/Aow3y4hQT/w8Jz1Eo1EWNLeYexVd4DfwZvAnVUQnvXrifiJexGTkoxbPIeQGPJiMklKThKD/jBFMYL3C9goR+DX403LnVXtuvasrMq8wOfb5U6QoxjNahWfTCpYWMMgtn3f7X4EfGwV4Qp7RlJ1FvdjbxazdxrFbf2tDIm8eV5ngFfLWzevQGn5EwxWiGcMoJr7/M+2J87Wul0t0VQsuf12WvFQlzNzIRG2/HIdm51bi6zeWBkxhfAz6RBphg97aWFu5+pBpLa13NY3t837P+XNkuO9sVusaLgx0Jn4Gv6IdXov/D+2S1ORqv65Zjoo7Ym8eD2d2Bp3JViutMkZlquJJ735+nNPoifBosqpGw6pBKzbaXDA98684iJSPshubRctzqm31+jZV6+ol3yAv6J5Qht8h+as2shWFeL2x7OjjDsnURSr44xCczMtTevWB5fFQPqre2dy2ywFtxVjlVLrmu4l9W01Wt0sgc1ssgKgZX7bAhzsuzowjXMwR08dEGFIeEcQo5ydJnTJbbAKJyg32K+ZNesJ0Gg220W94UaSP2mXHIKk+Qdx2K7UrcFKWNdovJVdFuufwC2iCnmY8Zw2hKGM9o/YoZgyFmQP/rRxukuOJvwjXlJLENAkIZ36ZFHmcQfaj68RH6flakfFOnvtkcMAW68DuMOSdpyBoeixRS/0xKbJ4hZ0APYMzwrw4xxQjonBb419SaGWqI3+8ObtdSeqANkqcgBAEdaF2pK6vdriD1urr0nX27NVlhnn9LMQdtkMLmZ2CkWVonWcFAG8TPh11ZkYWuKEk9WVVkTZe+N/HHL8hNBYQ5JDEDOjCXnYys5OHIdvOav04mRhQam9AAv1v88MqbFvZgYndkRTAJt+6TGZ7spETBQ+teV6hldTyGavmUWCp3+y//kATooBxG18TpacpBwsbmDFFVbSbBqCjGe6O7PYWaXbJJ2sd2y2JlRxPsXk/oeFprEauHoxCFJxT5yVoo77tbh7g7IzLoYGi8NNUQLomPPxebe7HhDy4tzauHYlccEXk4OW0g3M/zak/HfguO5xdJTOSMHChfhBch1xxFPAqed1qNtNBSrNs1CKOOVEFzfC0Ks3g9395c/Jyi+H17kae/GvGaa0Dwcxm8q/RfYr7hbiwnPNqfUrxvl3+Z0IEbri9ly0ZGRl2/ItNzjJTCC+9+n3nBJRDVqV9MlAtWtx3wePxogzyGPMhoAnTAkhMEbUCzojHwLA2yP1QyjXA2CkOz6TqGjBu/h8IlCWYcJjnQRbWvaEJXEuXH37WpsKJKBwAA',
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
