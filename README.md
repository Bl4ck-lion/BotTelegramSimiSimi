# Bot Telegram SimiSimi
Membuat Bot Telegram Integrasi Simi Simi

Ada 2 Cara Untuk bot chat 
1. Menggunakan dbot.js https://github.com/dionarya6661/dbot-js
2. Menggunakan Simi Simi 

# Membuat Bot Menggunakan dbot.js 
```
npm install node-telegram-bot-api request dbot-js --save
```
Buat file bernama appBot.js
Kodingan-Nya seperti dibawah ini 
```
// channel bot : nodejsBot

process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');
const dbot = require('dbot-js');

const token = 'TOKEN TELEGRAM';
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
```
Selanjutnya buat bot terlebih dahulu, kamu search dengan nama BotFather, lalu ketikan /newbot, selanjutnya akan meminta nama dan meminta 
username yang diakhirnya HARUS menggunakan kata bot, example :  @nodejsgerald_bot, Terakhir BotFather akan memberikan TOKEN. lalu copy kan
TOKEN tersebut pada script appBot.js dibagian dibawah ini
```
const token = '';
```

Jalankan aplikasi tersebut dengan cara
```
node appBot.js
```

Selesai

# Cara Bot Chat Telegram + Simi Simi 
Daftar key simi simi terlebih dahulu di
http://developer.simsimi.com/signUp

Lalu buat file bernama simiSimi.js kodingan-Nya seperti dibawah ini ya
```
// invite bot  @simi1994_bot 

process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

const token = 'TOKEN TELEGRAM';
const simsimiKey = 'KEY SIMI SIMI';
const url = `http://sandbox.api.simsimi.com/request.p?key=${simsimiKey}&lc=id&ft=1.0&text=`;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    request(url + msg.text.toString(), (err, response, body) => {
        bot.sendMessage(chatId, JSON.parse(body).response);
    });
});
```

untuk token telegram bisa digunakan pada akun bot sebelumnya 

jalankan dengan cara
```
node simiSimi.js

```
