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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGBFBkIiOWFBUvOAVL2zsQwkFlECBVYUIE/77Bvb09Dzszva+1S3y5MnMU98ByTBDc1QB7TvIKb5Djpolr3IENGAUQYAoaAMfcgg0sLMDd6pQ5bA7BKlxuVnuPgv9aHG7sOv26PihnezLnriix+UbeLZBXlwS7P0GcJmRXjbhV+8xqye7A27NV8tqra9itjfLAq4OwWSjprZ47pZv4NkgQkwxCc08QimiMJmjag0x/Rr920o9WuE65d7ozgxSnWg1vNpmmVyMctrCUOUlNt3lPnDY1+ivIn9+LePLfDRdRCNxvEbzTXgtR+dgZiTnwUOq92ks0To6eu/0GQ4J8i0fEY559WXd0zmLfX3vEON6S0w3OOIkSCMm2KdSTMl+Ng7U1k7JKIqlrxFno5Fqct0skFTue4Qv7uQwEtx0JznBYb4wegt2jdRT3D1kvxJf04+sxP9Hd3V0iHk2eeR2NJVTcWKqjzAupGScLKRW2e/4VZKaI5IcSfk1+sNpZaZZtdvuzIvnDvTq7t1WSf3Ia0/qTCv3dLGP8snKVRJ+0oe8oL9jOZ0mOdvwVXry6TbMx6OBsqnkTZJtrWxld+CsHNT967ZVd4ZJGMF6K0V0/Nj6TuuSLqJkXdfjYXU7kz6dG3fnNhRON1nX314dxaiyfKB1n21AUYgZp5DjjDRnktwG0L/vkEcRf6kLhmUu9UauLBg3kVmiHi2l284WJaFThBPilCrfR0IdjTO0eQNtkNPMQ4whf4oZz2i1RIzBEDGg/flXGxD04O++NdV63TYIMGXcIUWeZND/MPXjEnpeVhC+q4g3bBaIAk34PEacYxKyRsaCQOpF+I6GEeQMaAFMGPrZIKLIBxqnBfo5tMPMb3Q/9uStMlifQRukLz+wDzQwEHuSIPS6stKTNFH6g30rG1iY598I4qANktczURVUUREUSZQERVSbl83F8yfDBtBHHOKENUquek4n24zNBRx0/eVkopuhPgx18NnRRzLepU9r2x/w3D2eN+okUJiziy6wEj03jSddo7oLYmdCT137Wllv/wACNCDMHMhuEO6mtjRTmT269o/jw2nV6Xq+2Vlvlx0haalS31xX7l5EdD2Kzqlz2Syyi0AHlPaCQ1FQVRRcvphRveJXNhuWb001H92xh34t1sPBXJlIYujKF8E7xF6xPTn1EsfZ8hBVxlbebw2eWEy8+rIV+3PaqYXTjBXKaujEXTKXkRyItq9LHslloubbTrwwwvfMvmYm+fFX4VecGq+abYDRa/QJbBz8b+/eiTcRE57tXzB+fCb/MpCGy+pTcIHHQ2quDdJSxmZ2FBknEzc3+MajA/v+uHUH+7OKwfP5VxvkCeRBRlOgAUh8mmEftAHNiiazFgmy330pumWZYWg1nSeQcf1zDvY4RYzDNAdaV1H7gtJX+8Lzb1n3RxY8BwAA',
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
