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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VUyY6jSBT8l7xitdlcLFJJg/GGMV4LbDOaQwIJTnaSxBi3/O8jXF1dfZjpqbnlpnjxIuLld5AXuEYm6oD6HZQEXyFF/ZJ2JQIqGDdhiAgYgABSCFRQbDTPzJRhZqw0rmv3R4XMeBzp4/naRjMe561JTlcd0Rn7Ch4DUDZeiv3fAK4Otxwxd/5yszS72bWB6JuKd4kFKlyD1a4wQ9vqjpGDj/4rePSIEBOcR9PygjJEYGqibgsx+Rr9bNqGR6wjhUWKgS2BxctEqk+xO0b7JDxtrejNP1zW0jmRv0b/HIvcfVsy6/SMFJFZL5RVFOWCLsx3Y2zVsTwxONfi0mamvdOvcZSjwAhQTjHtvqy7vfbaaSI0nHjS5qO6OcuZ6Hos7rxRVW0lQZsowx3qRkOu/RrxvebpxxcX6gIV1s5qKWnbsXO0BL27uNb9eJ9MtOuk3FtYN34lviUfWUn+j+7yZt3Ws7Uzh1S0hXq4QZHHo4QGCcvOc/hmV42QMIk/S6yv0Ucnd8pt2106XS2PiUmqZip70HqrJ6doQ6BhrTgtIgveTKef9CFtyO9YsuGIS6L0ZYd2G8Yp4VxbeDsiiBnvB2HB6Mg+hR7J54IxkTmjDsdbjA7uWY5Ydi9NLnNbK/kovs+7/VgQdOfysjTKaPf67ChBnREAlXsMAEERrimBFBd5fyaPBgAG1wPyCaJPdcGVu8zG1VAbo0BBL4RxKmU32kP3uhtn6Y4wzRFxkTsZYXv6CgagJIWP6hoFC1zTgnQWqmsYoRqof/41ADm60Xff+moCNwAhJjW186ZMCxh8mPpxCX2/aHJ66HJf7xeIAJX9PEaU4jyqexmbHBL/gq9Iv0BaAzWEaY1+NogICoBKSYN+Dq1eBL3uR/44WbnaFgxA9vQDB0AFCi+ILCtwI0kQVU75o/7W9rCwLL/liIIBSJ/PeJmVeYmVRF5kJV7uX/YXj58Me8AAUYjTGqhA36zsYbGbTY0qV6gxn2vTSNMjDXx29JGMd+kDdGVn8aSp6mWjM/c220Ri0jBWtW026T1voxvzknWdLHHi6z+AABWks4XZLGB6E6uFODlfSLpp6fq4WVd3XYalbjorwgvTdX4LQjfe3t4cZZhQBfIsi5hzpNhvy5IlphdEYVkymeu8tG96H6NBTw776NdiC1YYrS+H1LnmFZp1yja2pWW6dUpxzBw4wWUFIx7ezJGD3fWuO6G7wywOmnTy24AjXkzd29GIDGRR81pyWWw7/rT6yOxzZtIffxV+xqn3qt+GGD1HP4e9g//t3TvxPmLsY/ALxo/P5F8Gcnw6EWV8bqWK6F50reVlXGyWq2tsxlJc+iPZsMKmrOvrRkHg8fhrAMoU0rAgGVABzANS4AAMACmaPrNGHha/KaZrhjGNIqPvPIU11T7n4A1nqKYwK4HKSbI44qQRzz7+BnyMapw8BwAA',
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
