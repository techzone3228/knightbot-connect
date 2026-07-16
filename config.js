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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGLmKGtERC4gtKApiq7ixDyUUWIhcqgoQJ/z3Dezp6XnYne19q1vkyZOZp76DLMcULVALJt9BQXANGeqWrC0QmACtiiJEQB+EkEEwAfu1oo51jTh+bdHFJV1yb/zGOA3kOrk66tG9Q54K1DqMUvsFPPqgqE4pDn4DWIraxptPF4pWwMioBH9uaFlUQ3ax5+VC3TFNCZPTiG0b4wU8OkSICc5iozijKyIwXaDWgZh8jX6zXtkzleYOyaeiW+V8VaBI34uXe96Dr75w0Wp7IJvszJlfox+fzeDqLTe3caZeU1GVg+NWRfNanS5nnLIL5ufU93UD8ULzTp/iOEOhGaKMYdZ+WXfdCE+L3mwUDgZ+FGiBfD6+Ls+5h1arJjF0UtLKzgUPWwL3NeLcVhsL+4O9PJQBYkl1Wukr/9U7asudtL37gT1y/egie1Nd+pW4Qz6ycvk/uiNNdfhzIM+4461ESXPKHSTtd5GF+GUpXcanjapzDvM9sflibKL0kLik17TSQGwjQSlYthV1Kwn01ppKZaSIli1tjCkXf9KHrCK/Y1nmrpt7JroehKY83l4PrjWHCk7EslgtfI/htbRaCSJU8oUYex4xLyfB2GwOkbDDuXGzh66n+MOhXGhyK1jWbjDjqjh+eXZ0Qa0Zggn/6AOCYkwZgQzn2fNMkPsAhrWHAoLYU15wf62Uhs5i5CYWDSpomvH+Nk6i+WawyaWIWsrS2K9G5tyPX0AfFCQPEKUonGPKctLaiFIYIwomf/7VBxm6sXfjunIi3wcRJpS9ZVWR5jD8cPXjEgZBXmXMa7NA7xaIgAn3eYwYw1lMOx2rDJLgjGuknyGjYBLBlKKfHSKCQjBhpEI/p1bPw054iR+724UugT64Pg3BIZiAsSBKHCfysiJKE374B/3WdLCwKL5liIE+SJ/PhBE3EhROkQSJU4RR97K7ePxk2AGGiEGc0m5yVoO3Qe7ODAevpdB8fVWNWNVjFXx29BGNd+lDVHOzZFqV1Kr03r25rmPpUvXs0qnW6T1r4ltveG3bkcJLL/8AAibAGt9P4WAHfdcuz/cMWZJWziO3idc2qbbjyNM3u8NOu59VaB+cnoeGLOkVviF7aO0NfNNOHPsNSuedGM1utLIX3Ko3dV+6aiGqcYB+LbbF51QbizhZuZyb9zaWMNDHo7eyGMxmvRYODZMJtjVrZ7A+uNeen5kK1WIJL1zFSat54Du9o+znwySm8mJeRHtF9uLmPbTPoUl/fFb4GafOq24bYfSc/Qx2Dv63d+/Eu4hxj/4vGD9+k3+ZSO1wIGPNb5SS6Ke4piMrydfWsk4WiZIUgTwy7agqKK3XYwQej7/6oEghi3JyBRMAs5DkOAR9QPKqy6yZRfnv/ljVNI04NrvOU0iZ+jkHW3xFlMFrASa8MpJ4hROH8uNvf6eJhT0HAAA=',
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
