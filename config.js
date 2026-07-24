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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGBBUwIiOWEREGlHwguLGPJRUgdVAgVCA9IT/PoHdPT0Pu7O9b3WLPHky89QPQDNSYgu3YPID5AWpIcPdkrU5BhMwrcIQF6APEGQQTMDWOrs1ovahWRONU5FkeGOvt1l5p5gLYvnlTPkwmO2rWxo/gXsf5NU5IcEfAHcWgUqwkNOt27RomvdGlSukobrY6GsH8qNy7HGj/DhaXIIncO8QISkIjfT8glNcwMTCrQNJ8TX6/vNmj9RxSblk6RwGHCcdAs6vWp0tkXOmxLsF8sswr1EafI2+uW7S9oov41Qkpthr06OFXo5mbCrTJUJcqEdVQuXlmTbDN/oliShGJsKUEdZ+Wffe8ugkqehnZKUgR5c20tWu/aWHimq088OrMxePFFm1G2dfI75Wmb6liyYxSsldWkq1prM5v9laW2hzC3gSSXsWMyeQtvvfiTvFR1bi/6N7ug5rKji5W6KVy7/OOU7QmuZ6yUWHH64SuHG3U4GScU/cf41+4a/I9aLHnq7WTXUbEjtsrtbomEuuZK/Sl3DnhflsPXdU95M+ZFXxJ5a6WPGGPvYqbIj1Sb1JaiPvn/kwCE7+KtsZulKImp82io7igb4bB+7tFHtm9FpbOnfNMTdGds+IC8+wxzXP5PEZthf16dFRjFsTgcng3gcFjkjJCshIRh9nitQHENVbHBSYPeQFAb4KcrYYKDV0S9+0elTwnakwOpSLmhTT9XTWDNevN8dW1SfQB3mRBbgsMVqQkmVFa+OyhBEuweTv731A8Y29GdeVEwd9EJKiZHta5UkG0YerH5cwCLKKsm1LA61b4AJM+M9jzBihUdnpWFFYBBdSY+0CWQkmIUxK/KtDXGAEJqyo8K+p1TLUCS86kmvMD3PQB+nDEILABCiCOOR5cTCSxOFEGPxVfms6WJjn3yhmoA+SxzNB5mVB4qWhMOQlQe5edhf3Xww7QIQZJEkJJkBbF3suc+e6ucAvK9swVD1StUgFnx19RONNevgcJbxyQYuzbIeyT0bjZiTvSBvrQ5sV9OS7ezzYnPZs5j/9AwiYgLGmOHWpVKEwO59ee5480yxjZir11tLnxwCxUcvhcFDd/Fr3TMZQGqOx15ak9a+H3XaXnzl99nrKUz1SmFHD/DKQ1eapq4ZwTQL8ezGn5+3clc3M7JZdDilNNoMwHJQKqjbJ8+J5d5pVqqZZl8ryLHdvKRc9nhXXxOL32tHxa2opRnK2Vj6liNufGRJz24reQ/sYmuT9syKPOHVedduQ4MfsU9g5+N/evRHvIsbf+79hvP8m/zKR0wPxn5HjHzcCN1twhlnhch3qwzKfrmdLOBIO+nzB9gdv6Qrgfv/eB3kCWZgVaWckRUVGEOiDIqu6zJo0zP5QTFNNU48is+s8gSVTP+dgR1JcMpjmYDKQ5KEsj3iev/8EIQiyIj0HAAA=',
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
