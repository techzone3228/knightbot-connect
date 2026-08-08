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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5WUaW+jSBCG/0t/xRpz2RxSpAF8cBh8J45X86ENDW6by92NAY/831c4yWS00s5mvzUFVD1V71v9E+QFpshDLdB/gpLgK2SoO7K2REAHZhXHiIAeiCCDQAe1FczltnxerOa31752RDhPNRNRb/zCXcyz7aLMFx1FUnL/Cdx7oKwOKQ7/kHBpiqZPPDN3K2u5XdbD5/GNWVxygmLi2bZ5clZ8WxYOq9UncO8yQkxwnozLI8oQgamH2gXE5Gv4c2+uDPwtN5IRG/WNthGWijxeTNRk4DdTl/Hcyybo3wR7F34NfzjymsWzvGtPmf1apRPYHxex1irakTVp3+S2h4uNfDse7eo3fIqTHEVOhHKGWfvlucuudYtvh03mV33DM8aL+AZN82qIhd3PgvN8aXEuLw/9RDh/DXxDTsuoX3K3aIbYmJs1mVgr0TmMXWft7YMRGoxmAkTeJJV/B1+QD6+c/8/cX62l6lmielyU48grWPNSDtDCnk8tv956l/mY7i3B0ryLwH8NP0gH6XFxTIN9lFTYVKJEdQ10zFq8Lt18dIJJEnFNtrVGzic+ZBX5E+V0tdzaxyq47tGK368XZAtn9Ip8Ig58LlQYPqcvc+XMVdaCXMnx4gkTlg3SVXHkeaPdb6aDmyWZUrXBbl+RGk1cy9Zp+fTo6IxaJwK6cO8BghJMGYEMF3kXG0o9AKPrGoUEscd0AbeGtpoMGuQ283NuNgNxpb6u3IPBAiefGHJfkfdn0VlNO1v1QEmKEFGKIhtTVpDWR5TCBFGg//WjB3LUsDfdumqS0AMxJpRt86pMCxh9iPrxEoZhUeVs3eah1R0QATr/GUaM4Tyh3RirHJLwiK/IOkJGgR7DlKJfDSKCIqAzUqFfS2sVUTf31/WLPJkYMuiB7KEHjoAONFESZUUUeWko6sJ3+q3ussKy/JYjBnogh93HwMiLvM2KioIeSB8/ivJA5kVBkoayMpA1Xfjexe+/kLsKEWIQpxTowPIllQ/U8Xh+S0XNn04NJzHWiQE+W/ywypsWqJkTPkkot4kpNnfrpghl2z3Ht8GyHk36V0dC+yKwbnz+0OKfSTpA0jbpbJI7m9kWZVcNNQ2n3ZobNx6vzbKsi9Fm646qTRCsd+I8PAl8v75uvP3FOT0L9YwXy+nOCVuzZuUQH5s01fDZqp+6ahG64hD9XmyTVy8pg+azGtBoSQaRJ4VmlZJFgj1XMy/OiZ3lxKz3U/lE+7Lw2i4Lzl1t9lXZlvg6Uv2htECreo+y5VQ4BId4556MNxM/lih9v7zww1+deN1jjNHjLnhX6b/EfOPuLMffe7+leL9c/mVBzR3dXDTHmS3OkuIkzzyF9txs97bKbX2jiZU2kDI4WlLNVcH9/qMHyhSyuCAZ0AHNDhD0ACmqzsBOHhd/qGQZiTNOEqvrOoWUGZ9LscEZogxmJdAFRR0KKi9Jyv1vBfrfCkkHAAA=',
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
