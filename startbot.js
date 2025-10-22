setInterval(() => {
  bot.chat('Still here! 🧠');
  bot.setControlState('jump', true);
  setTimeout(() => bot.setControlState('jump', false), 500);
}, 60000); // every 60 seconds
