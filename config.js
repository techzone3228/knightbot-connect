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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VU2ZKiSBT9l3zVaAEX0IiKGKDYtGRRwWViHlJIIJU1M1Gxw3+fwOrqroeZnpq33OLcc885N7+DosQULVALZt9BRfAFMtQtWVshMANKE8eIgD6IIINgBkp5XqH1nVZGMPYO9ZssrtbSZdrUsaDqqKc7aOA5bmq3PPcCHn1QNccMh78B9BSDtyrjytf1lasCSpxVHSorWT8n4ttgi537eFfh4VEP6At4dIgQE1wkWpWiHBGYLVDrQky+Rl+2MTJ3d65aCkKmOfZiqsVXNUC0vhZtw5rx69BpRV3e++XX6F+dmzVf69XNuLihsTNNVu+K16yJF15V1cWE940kvB1e6530Tp/ipECRFaGCYdZ+WXeqD+z1RC69PFD59kQFah4Cr7S4hQDrMlxONn478jB83XpfIy5nuh0FDbZyTRezw0hfve2NJaqskJsWjrOP7RLujoKFUuszcZd8ZOX8f3TXXGu5GuPTsSmddiJJfnQboAmm1/ucVeOIHIdGjpqlhMz91+hzwaaXDkW+txqWPrwpQvYWBiEJkpKXRHlyp8gaimiRteon+pA15HcsdcjpmreMi2uj1+qA8IPraR8dUn4wHDLTuxmFWJVTcz3ymX5VC8GazI+54DXbcF/bpcNNx9YrSm/3UT6YwFGF9QMUEu/l2dEZtVYEZvyjDwhKMGUEMlwW3dmkD2B0WaOQIPYUF+QufcXa+W0cr5NbhC+30z0S5crI/aV7nVcbuHcXWpEFC4e+gD6oSBkiSlFkYspK0i4RpTBBFMz+/KsPCnRj77Z1xYZ8H8SYUOYXTZWVMPrw9OMShmHZFGzdFqHaLRABM+7XMWIMFwntVGwKSMIUX5CaQkbBLIYZRT/7QwRFYMZIg37OrFpGnexzb2MeVFUAfZA/7cARmIGpMBxx3JAfi8PRTBD+oN+uHSysqm8FYqAPsuczQeIkQeTEkTDiREHqXnYXj58MO8AIMYgzCmZAdS7+oPR0zYbmbbo0DFlLZDWRwa+OPoLxQ/q7HU1ZddjuPcmIReqv0yNshfCQnw1eaS+cMDDIjrdPrfXyDyDdF+lfV6Hi+qsUHnvxjp0lazrmfYtNdkiuzlzUhmRwUuYDoQnI2XwduSJnN8LJ3ux71mR3Pm8XI3hS7HRPlmv77ONLXCryS1ctQhccos/FJtZtoZh7ZdzG5b7NBedovjXbhZb6161Ctquhk657rtWb2oKrpvOdGWNYNL5jO66zhAHC6c2b7wItPZaXceYbuK7v+Poe2efIZD++KvyMU+dVt40xek5+ATsH/9u7d+JdxLhH/xPGj7/kX+ZROdD7Lj7CbZBrrlL0RF0rtwJlhXGoFOaFZGpfbjU/3ewlDB6Pv/qgyiCLS5KDGYBFREocgT4gZdNl1iri8jfFVNmytCSxus4zSJn8aw42OEeUwbwCM16UxtKIm3Cjx98NzQqTOwcAAA==',
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
