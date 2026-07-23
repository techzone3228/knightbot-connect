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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGBFQxIiOWERURPAC0o0b+1BCgQVYIFWAMOG/b2BPT8/D7mzvW90iT548mfUdkAxTZKAGTL+DvMAVZKhbsiZHYApmZRiiAvRBABkEU4CVUWCOVpAXON6m7nYWLNucz2DJ9WwsT5buzr0vVp6/1cQX8OiDvDyn2P8N4Pmwb4UwPJuHDIa1EjkFsxxMVd8QFo3C646k1ZcmodFceQGPDhHiApNIyy/oigqYGqjZQVx8jX5jwQDtTc8664lkX3pr/b48uYVIi7u7iUZyiuJY1SsjTOqv0VctshCkoHVNg0VztNjcoXeytnZUblI3zXryukaRribN8gd9iiOCAj1AhGHWfFl3X0V6MqRLLzx5h8Asl5LpYOdNF8rDkVup4Uxw3LtJa4c7fo24oF7Mnb5YxjARBKG01oJ8Fpsx53Ht6bCNpLsmSq3oZLmQ/Ep8V3x4Jfk/ui/n1415XfDetvTn4UWeZHCYM1U4X2XhdiZ7rWfc0vYo7Z/VvkC/SZywaOh1PZjZm70tV2w2loexEfLeKILlLZ5QhSOtMTruP+lDVha/Yzl/LfF5jbB9Kx21rnJ+fV+Mz/faukm1HO8NvDLxdoYPYTuogkytysXgJC9lPQ8Jui4WtXt2L9YaDuY952SPETlqsTvbvzw7SlCjB2A6fPRBgSJMWQEZzsjzjJv0AQwqG/kFYk95wasoe57b2qdxGgh4nyh6q5aenjmqaxxJSjSVXzHhdEI59wL6IC8yH1GKghWmLCsaE1EKI0TB9M+/+oCgO3sfXFdOGPZBiAvKjqTM0wwGH1P9uIS+n5WE2Q3x1W6BCjDlPo8RY5hEtNOxJLDwL7hC6gUyCqYhTCn62SEqUACmrCjRz9SqWdAJvz9olqXyHuiD63MgOABTIPOCyHHCcCQJ4pTn/qDf6g4W5vk3ghjog/T5jJ9wE17iJJEXOYmfdC+7i8dPhh1ggBjEKe0SuiXHQbZfaMam15P15VLRIkWNFPDZ0Yc13qUPUMUt4nl5o+tS7bX1dRuJSdkzb7tym7akju698bVpJtJQfPkHkC6skWZgOHeO+VE0kLc6JSSC3szi7Sap1hYN22ogr+5OO87KgyJxaCdfVHd0fDtLu0K9IN4fJNyrFtXrkj+/5cK1J4WK8tJVC1CFffRrMfjKJg0sILqFw+GIz534zbK92S1WDs7MnNsjMjrUd3Hg3oIZhLJF3rSaUP0yR2a8D8jmdBznvH5J5fLgBcZhfkTKSoneTfsMTfrjs8JPO3Wz6rYhRs/sE9hN8L9n9068sxj36P+C8eM3+ZdEzt7eCnnm1dKtUM9RRSfrONuuN1VsxFKc+6OJboZlTmm1lRF4PP7qgzyFLMyKa6cMCYoMB6APiqzsPKuTMPvdX67ouhZFetd5CilTPnPg4CuiDF5zMB1KE3E85MYc//gb8mBvbD0HAAA=',
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
