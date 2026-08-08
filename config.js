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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VU2Y6jSBD8l3pta8AcxkZqabiMb4ON8bGahwIKjM3lqgIDI//7CPf09Ky0O9v7VpVQGZEZkfkdZHlM0Bw1QP4OChxXkKLuSJsCARmoZRgiDHoggBQCGRwXEd1zixapq5po89FOySaz0ewgVMe+6uNqhdbn1CjPzfX6Ch49UJReEvt/SDhIzN1csTwLz1eTk9MeR8UuFeo6WjKxqhnzEkW79qouuAN5BY8uI4xxnEVGcUYpwjCZo8aCMf4cfUOTuAuz9fg5k3De7qXFjSuym3mmn8U2i6YurwwNd3Q22enn6DPSSwYvB8mDWjXdDKTDOleO80QY3cSWW92qk2PWB6+8zbbXN/okjjIUTAOU0Zg2n+77fuwzh8i3rLWJcTyOCd63eK5Wk1Y/8oWjO1G1rvWycHn7c8Qv/mzoQnu1Me8rT4jaixr6VVm4bD67OSMlsHf1JoM5a97/RtzC7165/p++c3PbNvwq5XQ/PZXNalhbfsvlMxOzJhxEzGlU2u45ci9Z/jn6OpPqqn6dbYVsoygk4e/B6UVb12Mu8Jpda3Bz5Bq0YlqXfNCHtMR/YnmJeMiW1u5Gq9jOr7MhsRHeTvCOxbx4MWye3g8TluZwoKJTtLXTfc24J8neePd8h5Tb4DCiyxKlVzYXBiuPbHRvpdxfnxVdUTMNgNx/9ABGUUwohjTOsy4mDnoABtUW+RjRZ3dBXp1HY13Y5hfHKCw2XHt+UPJ9A5dWHPqWM5o2OuOQwwaSV9ADBc59RAgKJjGhOW6WiBAYIQLkv771QIZq+qZbh8b3eyCMMaG7rCySHAbvor5/hL6flxndNpmvdQeEgcx+hBGlcRaRro1lBrF/jiuknSElQA5hQtCvAhFGAZApLtGvodXyoOv7ShfE5XC/BD2QPvWIAyCDEcdzgsRxLD/g5P5X8uXeZYVF8SVDFPRABrufgZLlWZPmJQE9kDwfcoIosFyf5weCJAojuf+1iz9+Ue4QAkRhnBAgA21tklpYqoa1dflgaZrKNFK2kQI+Sny3ypsWdWvr8f2esKfgdGlKVhzVheb4Zk3CUr/CaKO0IasfjIV6ff2HJEAGY50sxMjKoj1TOMZeUHO9RfpwefH9Be2/nD270qTWtBma3E4ME8Vrd3jjNxle55XTv+wGg3Asif5wP5WkubQOwxmPNPu1QwtQFfvodzAxOVnZxhJbumg8dbY0wuntfBQaJx27ymxCabFkLHg7hwQ7gruAlwnbn6pKjK8tTictuWPH3rMomb9w0XIX9c+KeX838XOIkp/LK376qxOvu4Yxeu6Cnyr9l5hvvDvLsY/ebyl+Lpd/GVDV91lFIMtZYB72xyGm69CH9pVXiTeRItHMDXvJj5R+rd1P4PH41gNFAmmY4xTIgKQeBD2A87Iz8DQL8z8gaUo0NaJI66pOIKHKx1A4cYoIhWkB5L40HHAsN5TExw9papYGSQcAAA==',
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
