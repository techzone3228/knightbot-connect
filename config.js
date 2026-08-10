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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VU2bKiSBT8l3rFaFlUkIgbMYAoCO4L6sQ8FFBAyWpRgNjhv0/g7du3H2Z67rzVFnnyZOap7yDLcYks1AL5OygIriFF3ZK2BQIyUKsgQAT0gA8pBDKYTSeLJvfio7qc8FcmWDCn80wROa6Ml0JiKwK/PsGmvjnx4Q08e6Co3AR7vwF09+fZqVVTq+i7S88Yp5pHWQ3X+VR1TsLKO9gFNI+54UzLN/DsECEmOAv1IkIpIjCxULuGmHyNPtbb28LJ2W29VbykYbiYsZBga+nOvdQbxhbdnQOXg0VtxF+jj0ZTZesk0pAupBhlh6pf2ZtJBZWHa1N2Mza2xZGe9JO2i9/plzjMkG/6KKOYtl/WfaCssmgTphcyedDmmlyc3eUa8mTrDZRL7PuiPlW3tZZeefZrxKNwb+CrSdyJ1OxpGho3qmzP56QS5xdO6q+4asMybUBczvyV+Jp8ZCX+P7pvrJbBW2kaweFpuB4V2uC820sPfnYUgizJb9RqUi5ro5sgfY3+8NyWoV57+NGy6iOMRg4TVfcZVapmiY9DdcMrhtmoBRI2n/QhrcjvWHKPwp6fZpFvpIFdxCSbOvv9nrkeNLfMUzPnDzsDjZe5YxZUc2ITmTW3JYY3irSxm5sDU8que6fMpdFace0503eJcw3fXh3FqDV9IHPPHiAoxCUlkOI8e50Nxj0A/XqHPILoS15gGo+lVxiPFg1yYYKIiRByPL7vzC6teI7ZVWyI80fgSp73BnqgILmHyhL5Bi5pTtoFKksYohLIf/7VAxm603fjunIC1wMBJiU9ZFWR5ND/cPXjEnpeXmV012ae1i0QATL7eYwoxVlYdjpWGSRehGukRZCWQA5gUqKfHSKCfCBTUqGfU6vlfie8sB/z+9naAj2QvgzBPpDBmBcGLCtwQ1EYyPz4j/Jb08HCoviWIQp6IHk94yVW4kVWHPADVuSl7mV38fzJsAP0EYU4KYEMNKtdjr1c062bNRwvZjNFDxUtVMBnRx/ReJfeDfI9Y9xPlWpvSH0ZbVJ+ewgPg4wZO3df8WxX1a9GpF9V5e0fQIAMnPtwdGk5fJiYee4mhb2y4XDqJku1DMRb1KpNeBf3WLJ1Dxb0pvexqMZmfpWUeuGjJsgMK85SlqfoumAumn9cRPxEeeuq+ajGHvq12AptI1d4EDZFSeT7pzRajdbH8jZPFozKO34OJ5IetpI1Dci1OdqS3oaOX17sddAKu3aR1HrJOuLypu6c2GrF6M7U+EdoX0OT/Pis8CtOnVfdNsDoNfsZ7Bz8b+/eiXcRY5+9XzB+/Cb/MpGqI4z0fiQdxXDHWiKP4jmNj+Z0Ne/Xx/K0MTS+2Zr3wdZsNuD5/KsHigTSICcpkAHMfJJjH/QAyasus2YW5L8ppimmqYeh2XWewJIqn3OwxykqKUwLIHOiNBJGQ17gnn8Da2G5Jz0HAAA=',
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
