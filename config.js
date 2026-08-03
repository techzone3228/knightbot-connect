/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['923247220362','923400315734'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Tech Zone', 'Anonymous'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Tech Zone',
    prefix: '.',
    sessionName: 'session',
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9l3qVGK6CEtERA0jboKgoKroxDyUUWMrNqgLFCf99g77M9MPubO9bVUJlnjznZP4ERYkpmqAW6D9BRXADGeqOrK0Q0IFZJwkigAMxZBDoYDXPbflkn4RRtPcmu7wNJjx2pjs120t2uj3z11HN5sYgWdtP4MGBqj5kOPpDQm16TVO7TkbJdnQpdiQrjFCqb25/MjASQRSFKZ7fT7NxdS2fwKPLCDHBRWpXR5QjArMJahcQk6/BP1t1uMfKWarzmHe05Z05A3lLF4Il877rtXjfHPquOY5D5WvwZ4NWScOXVVRs16vCTo6Ros2OobVZjbx5JpfkVrVlejq72Tt8itMCxU6MCoZZ+2Xe1ee88jbOsTptjr3Gqu/X1ZiW9ODOnrXxUr6evdyJDluX2v7XgPfG7lQKJ9mJ+CXxl63hplhbbpc8JHccXW50vdhqcSiFJ+Ez8AX58Mr5f/FuJoEp8Q2i81Ddid5wRlq3mqnqbQjlJJ8mbNcsNoOwzISvwb+u9rm1UfMwCPbFTKOn4B4pSZ2WeRE4yyQIkgG/t9cmXn3iHbKa/Allo7zIUyHEvWhYq5dkTSYL0bTJ0LtT065X82aB0v01zRzD84RWWWu7nq3tJ9ZB9GCJhUlaasrzzvCrQbKozpMoKALXSp9eOzqj1omBLj44QFCKKSOQ4bLoYpI84ACMmxWKCGKv9AJna0JZVDJUbbaeqmpT92DE5fAYMnFyGUxpWUEPmYKtGsoT4EBFyghRiuIXTFlJWg9RClNEgf7XDw4U6MbehOvKySIHEkwoWxd1lZUw/lD14yOMorIu2KotIqs7IAJ04XcYMYaLlHY81gUk0RE3yDpCRoGewIyiXx0igmKgM1KjX1NrlXFHvKw9+6YR+IAD+asgOAY6GEqypGiSJMiqpIvf6bdrlxVW1bcCMcCBAnY/A6MoizYvawo4kL0+lJS+IkiiLKuK1leGuvi9iz9+Qe4qxIhBnFGgA2vKl3ihjOyFxF9jbzw2nNRYpQb43eKHV960mJvjOa/0BQuz2X3soPFGzvtoNLu3t7g340Mat8ohn2ksGDz9QxKgA1fx3YSXjg0Ph8ewx4otrP0jn57byaxpxHV9MY/Gzk3d8dYfCnfsy+ozqo+SlpuhlVGHRtY5k2FNvblzLi4t7HmXUWcsDsSowRH6XOxSjrWBi4TTaOH31Lxn9F15jPChrfPovlOnU1/Yik0/E9aTsp7ywtDJHTnfqAP+6ofLUzRZK8N7XLrCVXkmci/k7T0aGW8ufp2i7H174Vd/deJ11wSj12XwrtJ/ifmGu7Oc8OA+pXjfLv8yoWaQLk9Nbx4bJQmiG345ZnG/DtN7NKBhckpE7SWqx/0T0tY8eDx+cKDKIEtKkgMd0PwAAQdIWXcGdoqk/EMly0gdO02trusMUmb8HooA54gymFdAF7VBX1OGfUF7/A0IYxKbSgcAAA==',
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
