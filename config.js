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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rFGAFBgYiOWEBEGm+otJeNfSihgFIssKpQcMJ/38Cenp6H3dnet7pFnjyZeeo7IAVmyEcNML6DkuIr5Khd8qZEwABWlSSIgg6IIYfAAJsxGfuJe691T9GWiFhbPRVCmR3tTSVbWSW+7dyDbW674ukFPDqgrA45jn4DSOjhnhVrdnA1WZ4sxNBGU5fU0UnK1haaCFE+WtbX6Wq4VV7Ao0WEmGKSOmWGzojC3EfNAmL6Nfqil430+zlAfl1uqsk617ua+obWDImKpQhvA8ka16uF3T/fvkY/9eJqVZxzcTosRHHvzFgZ1XjSyxkbDw+T86mvXxqFx/Lm9k6f4ZSg2IsR4Zg3X9Y99AvztlF2CdWEg58LVmbbq6k3VYqDpinqWVBUlM390M3FrxHPb3tCJlqlIzlSiRfk87iOg/yoisJ1ulP3t1SEODq/WqfTr8QX9CMrp/+jezCeDpK+3/V98zA0yw06LTJntfS7YXifiWtVimnd2zek/3T5C/SFnljcMn/E+T3M8MStm9OUbrA/7d4UmMth3lfCAxwdtcD8pA95RX8rchiN3HC6Sh1smslSOaY6Lsz0omn3xC+PhLmXcrJQeX+Tng61562G9zBO+93RSGBbbV8GaeYUo15ETUkwB9XkdWE6Q/Pl2dEJNV4MDOnRARSlmHEKOS7I80zpdwCMrysUUcSf8oLB2Y/U5a6MWO1t5Pt9VJ+lcWE30riwSHWei84bncuuRi7RC+iAkhYRYgzFY8x4QZspYgymiAHjz786gKCavxvXlutJHZBgynhIqjIvYPzh6scljKKiInzVkMhuF4gCQ/w8RpxjkrJWx4pAGmX4iuwMcgaMBOYM/ewQURQDg9MK/Zxau4hb4aVeYMt2XwcdcH4agmNgAF3uKaLYk9RBTzF66h/s262FhWX5jSAOOiB/PpM1UZMH4kCRFXEga+3L9uLxk2ELGCMOcc6AAeyJP9Ojwnbmzf4UB65rOqlppyb47OgjGu/SX+76aT6Nu7dWGry9OUmt69k8mVmrQE521tpS1qmfp77svfwDCDDAbrY89mOaiRF3gyg8yLrdaD4qbEUT/HFh345QbDbdyGnecr+0LxPER9Yc9c29Q4Vgy9O0yeiFeraSYbrVpa5UvFnBS1stRlccoV+LJX1beB1fm+m2eZ0FA7cerMqw6c6oPNzKS4+laFO9jhdmKQxNxR8lVIqWGlJwAtNVlDk3txes190ovMy9Hu8e0fH+aj6LfQxN/uOzws84tV612wSj5+wT2Dr43969E28jJj46v2D8+E3+ZSItyLr74XGcaL5LtkWuWWMtSXZrcg/C04zIZnhDjmKXO5tj8Hj81QFlDnlS0DMwACQxLXAMOoAWVZtZjyTFb4rZpuc5aeq1neeQcfNzDtb4jBiH5xIY0kAbiKraU9TH36UpkUE9BwAA',
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
