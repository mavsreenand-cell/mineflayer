const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'Welcome-DwM5.aternos.me', 
  port: 63780, 
  username: 'AFK_Bot' 
});

bot.on('spawn', () => {
  console.log('✅ Bot joined your server successfully!');
});

bot.on('end', () => {
  console.log('❌ Bot disconnected. Reconnecting in 10 seconds...');
  setTimeout(() => process.exit(1), 10000); // Render restarts automatically
});

bot.on('error', err => console.log(err));
