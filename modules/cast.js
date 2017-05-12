const ip = require("ip");
const chromecast = require("chromecast-api");

const menu = {
  
    reply_markup: JSON.stringify({
        
        inline_keyboard: [
            
            [{ text: 'Play', callback_data: '/play' }],
            [{ text: 'Pause', callback_data: '/pause' }],
            [{ text: 'Stop', callback_data: '/stop' }]
            
        ]
        
    })
    
};

module.exports.playMusic = function (playFile, device, bot, message) {
    
    console.log("Генерирую URL для chromecast");

    var media = "http://" + ip.address() + "/music/" + playFile;

    device.play(media, 0, function () {

        console.log("Песня " + playFile + " проигрывается!");
        bot.sendMessage(message.chatid, "Песня " + playFile + " проигрывается!", menu);

    });
    
}

module.exports.play = function (device) {
    
    device.unpause();
    
}

module.exports.pause = function (device) {
    
    device.pause();
    
}

module.exports.stop = function (device, bot, message) {
    
    device.stop();
    
}

module.exports.openPhoto = function (playFile, device, bot, message) {
    
    console.log("Генерирую URL для chromecast");

    var media = "http://" + ip.address() + "/photo/" + playFile;

    device.play(media, 0, function () {

        console.log("Фото " + playFile + " открыто!");
        bot.sendMessage(message.chatid, "Фльл " + playFile + " открыто!", menu);

    });
    
}

module.exports.playVideo = function (playFile, device, bot, message) {
    
    console.log("Подключение к chromcast завершено!");
    bot.sendMessage(message.chatid, "Я подключился к chromecast!");

    console.log("Генерирую URL для chromecast");

    var media = "http://" + ip.address() + "/video/" + playFile;

    device.play(media, 0, function () {

        console.log("Видео " + playFile + " проигрывается!");
        bot.sendMessage(message.chatid, "Видео " + playFile + " проигрывается!", menu);

    });
    
}