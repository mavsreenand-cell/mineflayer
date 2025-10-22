// Aternos 24/7 Bot by ChatGPT

const mineflayer = require('mineflayer')

// === CONFIGURATION ===
const botOptions = {
  host: 'Welcome-DwM5.aternos.me', // your Aternos IP (without port)
  port: 63780, // your Aternos port
  username: 'AFK_Bot', // bot name
  version: false // auto-detect Minecraft version
}

// === FUNCTION TO START BOT ===
function startBot() {
  const bot = mineflayer.createBot(botOptions)

  bot.on('login', () => {
    console.log('✅ Bot joined the server successfully!')
    bot.chat('Hello! I am now online 24/7 😎')
  })

  bot.on('end', () => {
    console.log('❌ Bot was disconnected! Reconnecting in 10 seconds...')
    setTimeout(startBot, 10000) // reconnect after 10s
  })

  bot.on('error', err => {
    console.log('⚠️ Error: ', err)
  })

  // Keep Aternos active by chatting/jumping every 60 seconds
  setInterval(() => {
    if (bot.player) {
      bot.chat('Still here keeping the server awake 💤')
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }
  }, 60000)
}

startBot()
