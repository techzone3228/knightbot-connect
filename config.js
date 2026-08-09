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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VVW5OiOBj9L3nVGrkpl6quWkDaOwqIClv7ECBAmpuGgOKU/30Le3p6HnZne99Ckjrf+c45X/gOygrXaIU6oHwHZ4JbSFG/pN0ZAQVoTRwjAoYgghQCBXDLkV/V9ibRxjNrjSUWzhiSnZwNm9ljY8kcHSl8C3dufGJewGMIzk2Q4/A3gNo8sbsSrlhLc948b+575sq8disbUtdrLPNALdnAe3tdGC/g0SNCTHCZGOcUFYjAfIW6HcTka/SzzX4zo/ItUetDVaxNkzPbjveJF1Zuxl8XTLS8xObVdhnva/Qvtx255m4yMblxps2d17HIv93H4jhkXld7q81b6k39IGcZ4Z1+jZMSRYsIlRTT7su6u5q7EFPm4qxCOgnoLtKQGDOl6+npqPJf7Zw5pelW6ww+/BrxZsKZuXs+Muck0xbLRW6nLfG4QsbxYMxtx8WFDeD0poml9SvxHfnISvZ/dEfbyyYIhPm2NB3d9wchd7d0QX1Lply09f1qfPcdMeej7dH4Gn3kCAPLXLa7lMu4CRSq2B7zbgY7ozGLi1/vJDebHjorfNt80oe0Ib9jyaMuCpm8pvtUs28yGVysdZyM1ls902VsnDo9VRkiS0f35CexwLPHnEYNk4qTSxCVbt5MvaMBcfrGudd0LHAhqyaq9fLsKEPdIgIK+xgCghJcUwIprsp+j2eGAEatg0KC6FNdUC6zwoP6zc2IZMBsqsu+vmICtEMI3+d5YNxtqbBt2DTSCxiCM6lCVNcomuOaVqTboLqGCaqB8udfQ1CiG3337VmNHYIYk5q6ZXPOKxh9mPpxCMOwakrqdGWo9wtEgMJ8biNKcZnUvYxNCUmY4hbpKaQ1UGKY1+hng4igCCiUNOjn0OpV1OvOGavpZLlkwRAUTz9wBBQgc7zAMDw7FnlB4SZ/1N+uPSw8n7+ViIIhyJ/XOImROJERBU5gRE7qb/YHj58Me8AIUYjzGihA38XuqLJejc1FEKLNbKYaiaonKvjs6CMZ79IXdzOS6dk/epY0i8XaddIAdlzoF9mM1bqW4UYzcmLNt27x8g8gQAEBqVaXUYD2WNrvZXEDd9htD7edS1pq65y6NddksrBWdxOTuqROFAUaN77NaWuZEe+MoDyIjvMVI0vqaX2/Q7qtuGeMhiBCLQ7Rr8Xcem0sdbwd8HM3JRNxe99bs/kAHtWVNyFSUpkuPlzZQ+gfzXTpqPticbvas+mcbg68dvP9VrweCO+uqHtSD+5xb7qsen3P7HNm8h9vFX7Gqfeq/4wxeo5+CXsH/9u7d+J9xJjH8BeMH4/Jv/0c/Pp+igN4PBTGTisH4qtRHbmaljP/rFErJLLZ3i6svPckDB6Pv4bgnEMaV6QACoBlRCocgSEgVdNndlHG1W+K6epiYSTJou88hzVVP+dgjwtUU1icgcKK0oQTOUmQH38DNuEqLTwHAAA=',
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
