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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3ptY0BABSM6YgERkPZCAwq9sQ8lFFhylSoEnPDfN7Cnp+dhd7b3rW6RJ09mnvoOihITZKEezL+DqsZXSNGwpH2FwBwoTRyjGoxABCkEc5Ao2TE8Fwe2Y0vboEcR3/g6cqSJsQuac3CTzJPcvEHlwLbP4D4CVXPMcPgbQO/Q7StTV3BXvOiuwi/ilrRd4NkLQ7zQ/ZqJTsEajXOPl5/BfUCEuMZFolUnlKMaZhbqdxDXX6NvK77xSmPytGle7Lhb9L3NbnZ+yliVICbpuplegmS3UFqv/Bp9t9kvj6YaSLpjuowTa6tIf+ICzcaFRA9lcCbhpN8051S13+kTnBQoMiNUUEz7L+uurfT8xThqkYxWJ3URk7d1u7ewLpzwmrl0yctKrLhmc1H8LxLf8Yq1luGhcDe4o9ylOFspcXMt3yTH7UG8nNlLVrM0YBber8R39UdW0v+je2807D5o+8OVw7AhOt4uGDcKLUcKu5CNkmtVGg2f1nkufI3+IutfUtk5hms2c9NY8/t6hk3Fa9DMX67ketxWRN74znpRftKHtKl/x/KEqJQ1hXD0jp2t8SIVIz0TLulqecVV4MX6JEiuXuKzWRwuDXm8e9oYNdzyr7I3FeFhGp23zMu0FOJr+hpb9fmp4SxZfn50lKLejMB8fB+BGiWY0BpSXBbDGTcWRgBGVweFNaIPeQFfqi4uE2Ny3k1ftqXrCUxVLQ1fNsilm7QR85oFqHFbFMjPYASqugwRISgyMKFl3a8RITBBBMz//GsECtTRd+OGcvx4BGJcE+oVTZWVMPpw9eMShmHZFNTpi1AdFqgGc/bzGFGKi4QMOjYFrMMTviL1BCkB8xhmBP3sENUoAnNaN+jn1KplNAi/DoT9glN5MAL5wxAcgTmQOF5gWX48mfHCnOf+IN/aARZW1bcCUTAC2eMZJ7IiN2NnAiewM04cXg4X958MB8AIUYgzAuZAtZ42Uliq2opbS9Ja12UtkdVEBp8dfUTjXfrLTUq364hpB2mw32pxJ0mnbbxRHJuLA8VVBDexssTizOd/ABkQuCTV0NaPydhiom71dAoofCVXGC4tfRomArRXndezGtqhk2FYfBnLrl809FLBSuZvezbIVdk5n72dbXTjSSCP/UeORiBCVxyiX4u1b4WxS7Bz4LXmxjgkz5HjpqX6Jktowk3jguMN3rrFxJkpZR9IYtbku2pBGTg2N+ioV9KreRFPjK9tZzT27WVlqx+hfQxN9uOzwo84DV4N2xijx+wXcHDwv717Jz5EjL2PfsH48Zv8y0QqkDBvi7MRi5Ze+GUmKoYYx4Fb3Gwv3RSc7LVIE9QqUCkG9/tfI1BlkMZlnYM5gEVUlzgCI1CXzZBZs4jL3xRTZdPUksQcOs8gofLnHLg4R4TCvALz8UycTrnZlGPvfwM/LoKGPQcAAA==',
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
