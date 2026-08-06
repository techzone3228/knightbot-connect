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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VUW5OiOBj9L3nVGgFR0KquWlBQtPGKl2ZrHyKEEAUCSUBxyv++hT09PQ+7s71vudX5znfO+fIdZJRwNEc1GH4HOSMVFKhZijpHYAjMMooQA20QQgHBELhOtkiKI+yV+8g9WZOp18vLe52dO/mYu67GTC+kmFPjIr2ARxvk5SkhwW8AC39wq9N6sbpmdn0ojEkM9wdpKiUruyar9WJwVlo5o68stV7Ao0GEhJEMW3mMUsRgMkf1ChL2Nfp9R1oUFPv3vibmHp+VfHMqp6zncml2k69VbkrmzJ+7xZ5/jb5EudkvDdx/xeujL07HzWCOi8jSQ+NW4aVzOqF9JbBcTK/v9DnBGQqdEGWCiPrLuqtzdtKW3avt+GcSwahTbSbb6TUN4Mbgq6iWDrBlx+ZleQy+RnzXUfFo9jY1VufR5d4f93rXw2siFjwbtGBvEeYs5P2EihjrvxJfsY+sXP6P7hNntlNnLj0ddmOM03ROe2phRK9G7dqrXDkjc4OCuDOWp9bX6C83ZL8/uct7nXlpsqaRexCZ7ufHDrtqXnrRbmWws+9qaF0+6UNRst+xzEkc3M3u3JKus+1ubbCQLm05lgzd5vXkFc6tZHzWazKfeXbrCo31aKyoZletWLgx8n6Zz5V45AzK5aFaYTu19/fX3MAvz44uqHZCMJQfbcAQJlwwKAjNnmfKoA1gWG1RwJB4ygv8tV4cKfN2u5EuLzyO7B0eG11pAYNzy72NWBzo275S9Jn1AtogZzRAnKNwSrigrHYR5xAjDoZ//tUGGbqJd+Oacl25DSLCuNhlZZ5QGH64+nEJg4CWmdjWWTBqFoiBofR5jIQgGeaNjmUGWRCTCo1iKDgYRjDh6GeHiKEQDAUr0c+pHdGwEV6fDNyF++qBNkifhpAQDMFA6aqS1JV7WlcdKt0/+LdrAwvz/FuGBGiD5PlM0SVd0SRNVVRJU/TmZXPx+MmwAQyRgCThYAhGy/uuQ9e2tRp3pNCdTAwLGyNsgM+OPqLxLn16X4QDkfuHt7U+iTS+28YnWCuBn14msllXktKZsKO8ONfOyz+ANJ+CZkxVr0hXvN7GtVK4Owh53ns7GGlR6QS9EcOezfF2rll4fdU2U/k2xn4f0vBi3m6nS/12C2HqaJQaqirq5Sa4zM0mR20QoooE6NdiAVu1aMUlqxX71X639bejPrKFwrZ8ahlwrHlXgus6OiAzxWd2qgwqnNjvY4tdX6VunHnhzutVana06XKSLuSocAzjPbTPoUl+fFbkGafGq2YbEfSc/Qw2Dv63d+/Em4hJj/YvGD9+k3+ZSNPn92N0god9aq3MrKXZFj0oXGQTPzfFOmCDRXUr5IH3phPwePzVBnkCRURZCoYAZiGjJARtwGjZZNbJIvqbYiPDcSyMnabzBHJhfM6BR1LEBUxzMJQ1vS/JA70rPf4Gv8iBUD0HAAA=',
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
