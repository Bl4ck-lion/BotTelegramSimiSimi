// invite bot  @simi1994_bot 

process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

const token = '6064826250:AAGMC2876tt8Pkv_853Gx94UvLtgw0XBEpA';
const simsimiKey = 'MdjT~5hT2-F7TurVodvVtExabiJpqTEiX3xQNhf0';
const url = `http://sandbox.api.simsimi.com/request.p?key=${simsimiKey}&lc=id&ft=1.0&text=`;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    request(url + msg.text.toString(), (err, response, body) => {
        bot.sendMessage(chatId, JSON.parse(body).response);
    });
});
