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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VVXZOiOBT9L3nVmkZAPqzqqkUaFfwARER7ax/SEDAKAZOA4pT/fQt7enoedmd7eQpJ6t5zzz3n5jsgJWZojlow+g4qihvIUbfkbYXACIzrNEUU9EECOQQj4LozUdCLNNfPg3Sst7P6enB8Uck9099CUqjboj5k6Wsyy57BvQ+q+i3H8W8CmuH0uL3KvuQvqvDksCKI3YHiuFdoqTUfuyuHCOZSZUsSPoN7FxFiiklmVQdUIArzOWo9iOnX4NtGa+6nQjTEqXJFNaypM5geDbbXzy9DLJxubTrVLAOq2y/Cz06H1TBeri7eq6iUqWBpq5cGWgsaFeJqrvlHXqorKRoMwvIdPsMZQYmdIMIxb7/Me7TUDmLj+Uc6k4ITy4deOxHO/ronaAf5IL32mDsMNf1CQv9rwBOp2T1FLDMnlTF+i5dn53hr3Iv1ut3n5GTMIuc4Geb6jV72vwL36IdWTv+Hd9GxF6XCq5mbo5zPVptoOTyxptz2oqpd3lRtmB0n+ROaFF+Ev5+09QKfxpD0sl7tyhVMX7zWedO1cm7yy5I4k5g7l2NssE/4kNf0dyjR2X5aL2bz4UEIoqGXWy9RVlwCNLBu3l6iZlpUyhND3tofuplC7Zvneo7qGsberMNkI99MvOeBk0+mUHxtw6KYF6HhPz8qOqHWTsBocO8DijLMOIUcl6TbU8U+gEkToJgi/mAXJEq9UGZLUQ4DXYnqeqqGinRqpCKd6bLfBIsI7yattm6G7Bn0QUXLGDGGkhlmvKTtEjEGM8TA6M+/+oCgK3/vW5dNGvRBiinjIamrvITJR1M/DmEclzXhQUtis1sgCkbC5zbiHJOMdTTWBNL4gBtkHiBnYJTCnKGfBSKKEjDitEY/TWuWScd7MJjMvYm4BX1QPPqBEzACuijJgiANhqokj0TtD/bt0oWFVfWNIA76IH9cEzVBE1VBlUVZUEWtu9kd3H8i7AImiEOcs26+zOuVHpem5Xq9YbKcTg0rM8zMAJ8VfSjjnfq3tNz0ZtddPV74tHlV/EJch1kok54eXRMjXryNrePsYB3HxvM/BHl4Nb8+LYkWrc955nhvLEcWx5P6NSOrzF4UgSAvLERa24/t/c7WnSozrytZP54lxXoySu/iOIoYnze5hAUdr+yVWb8Yz122BDU4Rr8mc/e3JjggV+69rWLLOyXj44ZsFj28IDcquy+7iixrUzfRbieovbN7hsLy3COBlYW0MVvqQ7uXUqYbsdpbHVpBSSfz8Q/NPjyT/5hV+CGnrlfdb4rRw/oEdh387969A+8kJtz7v8T4MUz+xZDjqGPkoG3VLBDmqohODj9t7YnrPDVbtvNnpnhZ21d5bV98cL//1QdVDnla0gKMACQJLXEC+oCWdadZm6Tl714iw7atLLO7ynPIuPHpgw0uEOOwqMBooGqKJKuSOuiDojWqKuCQf9gHGN3nEQ7ufwNe/JwxWQcAAA==',
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
