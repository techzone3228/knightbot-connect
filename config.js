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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGBFQxIiOWEAExDsg6sY+lFBAIRZ0UVx0wn/foHt6eh52Z3vf6hZ58mTmqe+A5LhENrqD6XdQUFxDhroluxcITIFaRRGioA9CyCCYAk+f4cM1FB56fZqv1UOhZG403Ay4dniaqX574bLT1W8fvax5Ac8+KKpLhoPfAR5sZSAHRf0gSQGbsJ6PB5pVC/L8Ybpt4qNgeRELs4pN7gU8O0SIKSaxXiTohijMbHTfQky/Rt/Z7JxN6NiHW8WMenHT9JV7SZWG93q95bb152P1lsNbtBO4r9EndDQbyOzumRM+eFQu27p7t8qzlPjOsEyXC28wmwfJaeXr7/RLHBMUWiEiDLP7l3W3N4+DX9seKTnZ3hiOv/Gb0JxhaxFzemFjM/eLQNaVlpRfI44Phew7aiW4PUGO81ffMyJ5cvc1HfbWMIAtXMDaet07j8mvxLf0IyvX/6P7dVPz+mA1367kvDcw6cG+1k7s10m4HbBxIlrcxp5QOFtevxibIOcNo3LOs4hLtXnVhqbncI/xiA5StdaIq1toMUgytHWbT/qQVfR3LE1r4eXSnkjJUUsvF1Noy6sYa5ur6VtRE3toW7kxHQXelTzGXOJIel1lUDlU2zRd12cJl+7qGM/I7qHUxjk6FcjAWvzy1tEV3a0QTIfPPqAoxiWjkOGcdGejUR/AsHZQQBF7Uxd4wwU32yOeSC5OiRNj4ewMFZKTsukxQ72tj0HaOzV1lXsvoA8KmgeoLFFo4pLl9L5CZQljVILpn3/1AUEte/etqyYM+yDCtGQeqYosh+GHqR+XMAjyijDnTgKtWyAKptznMWIMk7jsZKwIpEGCa6QlkJVgGsGsRD8bRBSFYMpohX4OrZaHne7aWdsLOr8HfXB78wOHYApkXhA5ThiOJEGcCsM/ym9NBwuL4htBDPRB9vaMn3ATXuIkkRc5iZ90L7uL50+GHWCIGMRZ2dWyx2s5yDXdvqsTtjIMRY8VLVbAZ0cfyXiX/hLlbs9sj5W63NH6PN7d+L0XeyLpyX4bKsHyouqpmeipqrz8AwiYAqHdDQ3Leq3Po93hdbJcpWO5WTU9fwQtNzYWN7u5mHD9yteXcLyrpdEaDrXyMlk5zJY42dvTRSYSk08K/nReXY/efmWoXYz6IEQ1DtCvxYriWq52lRo2oSOwS3iTFeXkL7VorwojMi+bdRSVsrezj5hAV2XzGTKom+o7xat0Ik7c2eigD5mXiXm78I9OMDINVXnP7NvMZD/+KvwWp86rbhth9Db6BHYO/rd378S7iHHP/i8YPz6TfxlI1RfG+iCZHKTY4WyJR9cFux6s+WYxqA/lcWdqfLO3WnFvNTvwfP7VB0UGWZTTG5gCSEKa4xD0Ac2rLrMWifLfFNMUy9Lj2Oo6z2DJlM85cPENlQzeCjAdSpPxSBQFTnr+DfL8XO48BwAA',
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
