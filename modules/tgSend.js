function list (list, type, bot, message) {
    
    switch (type) {
            
        case "music":
            
            var genMessage = null;
            
            // -------------------- //
            
            var listNum = 1;
            var music = list.music;
            
            genMessage = "Вот список музыки:\n\n";
            
            for (var i = 0; i < music.length; i++) {
                
                genMessage += listNum + ". " + music[i] + "\n";
                listNum++;
                
            }
            
            genMessage += "\nНапомню, чтоб проиграть трек - вводи /playmusic [ЧИСЛО]";
            
            bot.sendMessage(message.chatid, genMessage);
            
        break;
            
        case "video":
            
            var genMessage = null;
            
            // -------------------- //
            
            var listNum = 1;
            var video = list.video;
            
            genMessage = "Вот список видео:\n\n";
            
            for (var i = 0; i < video.length; i++) {
                
                genMessage += listNum + ". " + video[i] + "\n";
                listNum++;
                
            }
            
            genMessage += "\nНапомню, чтоб проиграть видео - вводи /playvideo [ЧИСЛО]";
            
            bot.sendMessage(message.chatid, genMessage);
            
        break;
            
    }
    
}

module.exports.commandList = list;

module.exports.stopped = function (bot, message) {
    
    setTimeout(function () {
        
        bot.sendMessage(message.chatid, "Не хотите ли открыть список файлов снова? - /list");
        
    }, 500);
    
}

module.exports.notFound = function (bot, message) {
    
    bot.sendMessage(message.chatid, "Файл не найден.");
    
}

module.exports.list = function (bot, message) {
    
    const listQuestion = {

        reply_markup: JSON.stringify({

            inline_keyboard: [

                [{ text: 'Музыка', callback_data: '/listmusic' }],
                [{ text: 'Видео', callback_data: '/listvideo' }]
            ]

        })
    
    };
    
    bot.sendMessage(message.chatid, "Какой список вы хотите просмотреть?", listQuestion);
    
}

module.exports.start = function (bot, message) {
    
    bot.sendMessage(message.chatid, "Привет! :з\n\n Я могу тебе включить на телевизоре с Chromecast разные вкусняшки!\n\nЕсли хочешь узнать обо мне больше, то пиши /help.");
    
}

module.exports.help = function (bot, message) {
    
    var commands = [
        '/start - начать работу со мной',
        '/help - узнать список команд',
        '/list - показать список файлов',
        '/playvideo [NUMBER] - проиграть видео',
        '/playmusic [NUMBER] - проиграть трек'
    ];
    
    var messageText = null;
    
    // generating message
    
    messageText = "Вот список моих команд:\n\n";
    
    for (var i = 0; i < commands.length; i++) {
        
        messageText += commands[i] + "\n";
        
    }
    
    messageText += "\nПриятного пользования! :з";
    
    bot.sendMessage(message.chatid, messageText);
    
}

module.exports.sendArray = function (array, bot, message) {
    
    bot.sendMessage(message.chatid, JSON.stringify(array));
    
}

module.exports.noArg = function (bot, message) {
    
    bot.sendMessage(message.chatid, "Не указан номер файла");
    
}

module.exports.stop = function (bot, message) {
    
    bot.sendMessage(message.message.chat.id, "Проигрывание остановлено!");
    
}

module.exports.playMusic = function (list, num, cast, device, bot, message) {
    
    var arrayNum = num - 1;
    var file = list.music[arrayNum];
    
    bot.sendMessage(message.chatid, "Подготовка...");
    cast.playMusic(file, device, bot, message);
    
}

module.exports.openPhoto = function (list, num, cast, device, bot, message) {
    
    var arrayNum = num - 1;
    var file = list.photo[arrayNum];
    
    bot.sendMessage(message.chatid, "Подготовка...");
    cast.openPhoto(file, device, bot, message);
    
}

module.exports.playVideo = function (list, num, cast, device, bot, message) {
    
    var arrayNum = num - 1;
    var file = list.video[arrayNum];
    
    bot.sendMessage(message.chatid, "Подготовка...");
    cast.playVideo(file, device, bot, message);
    
}