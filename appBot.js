// channel bot : nodejsBot

process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');
const dbot = require('dbot-js');

const token = 'TOKEN TELEGRAM'
// const bot = new TelegramBot(token, {polling: true});
const bot = new TelegramBot(token, {polling: true});

bot.on('message', function(msg) {
    var chatId = msg.chat.id;
    var message = msg.text.toString()
    
dbot.get_response(message, function(err, result){
     if (!err) {
      bot.sendMessage(chatId, result)
     }
     
  })
})