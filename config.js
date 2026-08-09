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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGBGRixEdsYCgeFdUhI19KKGAUm5WFQJO+O8b2NPT87A72/tWt8iTJzNPfQdZjimaowaMvoOC4DtkqF2ypkBgBLQyDBEBXRBABsEIqDPbxLeZknOph9czc28rR7WYBCcTz1ZmknImGk+X6vjS99/AswuK8pxg/zeAM8ug7DwsCykYW6XZyUlZwZqZSYc/L9O+F86r3nW8IxfNegPPFhFigrPIKGKUIgKTOWo2EJOv0Y9UzVbk9bT3mAq5MzDhXE+ZuyVoQkRKH9l6wynm2Qv9SfQ1+vvYN4emNAivfu7FqmLAXbDf8rL6qJNJ6DfuwvXuXmqHmv9On+IoQ4EVoIxh1nxZd3elS4t1XawFlkf+bZOPz48hZiuZsgcfFPo2mZd2AvHh6n6NOL4HK3pfL3ezvhHz5+lNvA/PQU2VRozOmX4TtrSOd/piywm/Et+Qj6xc/4/uua4Mprm4i/XCE3fBRFCEvSrBh3iv+OFtPt3UJhoP18PjtPoa/dpck+1uJpxmW5PnDma/Pvhn13COp2pRxFFsWbvKOw4fswP3SR+ykvyOpZ3bqrxxpmJPnjh+7OuT1W5+wZvw4oq62hlr50Ws7N3OMBg76infu6ygioDDZj+ulLxvROFGKISjhxXVbCIVBeI90tS3V0dX1FgBGPWfXUBQhCkjkOE8a88UoQtgcLeRTxB7qQtKyRAlvddfi3CMjRvsIG+vIWGhBTyM5MjFt4cYY8EL1OUb6IKC5D6iFAVTTFlOmiWiFEaIgtGff3VBhmr27ltbbdDvghATyg5ZWSQ5DD5M/biEvp+XGbObzNfbBSJgxH0eI8ZwFtFWxjKDxI/xHekxZBSMQphQ9LNBRFAARoyU6OfQ6nnQ6u6sBvxmvuFBF6QvP3AARkDhBwLHDfpDaSCMeOkP+q1qYWFRfMsQA12QvJ7xMifzEicJvMBJvNy+bC+ePxm2gAFiECcUjIC+uRx6+dY0FgNeCJaTiWpEqh6p4LOjj2S8S58+VoHCCs9xt/IklOjBjs+w4X0vvU76WnPn+N6EnPqrS2O9/QMIGIGKDuvTsifOPHgmu7jC6eM6izaFk0hYGGjLpTI3D1bH0jLOWOl8tF1sbTQ5oMzpaYvF9OHOM11MxEV1OxbFgbEqt209emurBeiOffRrMVWG28eFS3ZkHDt3/RgVRDkdbN/vd8qoKpoNuzykytlZq6SWHaOp62iYxjx0D0t0M/NqYIxFrZAM3Ql28J5PT3Xs69v3zL5mJvnxV+FXnFqv2m2I0Wv0M9g6+N/evRNvI8Y9u79g/PhM/mUgNY8+TuEZOsfU2GhZRzKN3OEpyyZeobGtT5TVvb71lb0rY/B8/tUFRQJZmJMUjADMApLjAHQBycs2s1YW5r8ppquWZUSR1XaeQMrUzznY4xRRBtMCjPqSLPIyJ0nc829xsFC3PAcAAA==',
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
