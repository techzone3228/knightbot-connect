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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VU2bKiSBT8l3rVaJFFwIgbMYAoiIoLuE3MQwkFFjtFoWCH/z6Bt2/ffpjpufNWW+TJk5mnvoMsxxWyUAvG30FB8A1S1C1pWyAwBmodBIiAPvAhhWAMlNVEHdxibXgRRd51SWyyy3C6Wzhy2giGD0trO5HqlLKJ/gaefVDUlwR7vwE8FytmVZ3abGqtoFlmvM24u6Vc7CKf6kd4ymVr9kBFw2+9N/DsECEmOAv14opSRGBioXYNMfkafVu3janLQ2S0F72ex1JhzdiwUT1oowI6XBafi8Tn+GBmfo1+GxbrRZqbq+kqn2ZWhuaBe7sp9USMS+4gOg6Xe9OCzTxu806/wmGGfNNHGcW0/bLu+brE/sqeT+BG1u62UMv2drE/pPt9b+ZsWqtkI9MTVnl++KLudloWtrx55Px1OlKVm7guyjZPTL9JXKGCt7XjDQN8Fg4h/yvxNfnISvx/dJf0Yyq4odTWnrKQam29a4+yGZw3UaQamuywvCcfJF5yXjJ9gX5dFzfM7FXTWG5t7myYDlsguW497D+8I6vyc17cxw9h1pw+6UNak9+xVHtyqyqE2w94JmnkKF8w5wMtb9Z+OVhtSfSI+Mv5PGqEqzUqMsuOLCtbH/zmtI0tYrScr0Xzak/OD6c32OCAivBOIuXt1VGMWtMH4+GzDwgKcUUJpDjPXmes0AfQv+2QRxB9yQu2j2M5KQeqcFeRUO1ys+RRSstk7g/T03Z5bqanaq9eorstvYE+KEjuoapCvoErmpN2iaoKhqgC4z//6oMMNfTduK4cN+yDAJOKulldJDn0P1z9uISel9cZ3bWZp3ULRMCY+TxGlOIsrDod6wwS74pvSLtCWoFxAJMK/ewQEeSDMSU1+jm1Wu53wmvWYSlsxCnog/RlCPbBGMgsxzMMNxREjh9zzB/Vt3sHC4viW4Yo6IPk9YyVGIkVGZFneUZkpe5ld/H8ybAD9BGFOKletdiV7OWabh6vI7qczRQ9VLRQAZ8dfUTjXfpLkDs9oznW6mJDbufRJmW3bujyWU8+NL7iLS6qHhlXPVKVt38AAWMQmdtFLR4LdZBdrkYulHwvTgx5SWKi8jsTGUrh6hy7WoysAau2Jbm42+oe2ROitG6zc7lSQ0UimlVvnbBe4JbWUVE2b101H92wh34ttlJq+bQ5Njsqp81Cn09agosjPp7XuWmtl9emhy37iiWHe6j7ZU/MG6Z8MJSa1lQfcbvaGLBO1TtdWN6W61iIpYG7iu7voX0NTfLjs8KvOHVeddsAo9fsZ7Bz8L+9eyfeRYx59n/B+PGb/NtEHriRPrhKezHcMZbIonhO4705teeD2746bgyNvW/Nht+a9w14Pv/qgyKBNMhJCsYAZj7JsQ/6gOR1l1kzC/LfFNMU09TD0Ow6T2BFlc85cHCKKgrTAoyHojTiWYGX2OffU7KQUD0HAAA=',
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
