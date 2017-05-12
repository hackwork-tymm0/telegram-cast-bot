
module.exports.startApp = function () {
    
    console.log("");
    console.log("   Telegram cast bot v1.0.0");
    console.log("");
    console.log("==========================================");
    console.log("");
    console.log("Я буду включать для тебя разные штуки на Chromecast! :з");
    
}

module.exports.loadLibs = function () {
    
    console.log("");
    console.log("Загружаю конфиги и библиотеки...");
    console.log("Конфиги и библиотеки загружены!");
    
}

module.exports.tokenCheck = function (token) {
    
    console.log("");
    console.log("Твой токен - " + token);
    console.log("");
    
}

module.exports.connection = function () {
    console.log("Пробую подключиться к Telegram...");
    console.log("");
    
}

module.exports.connected = function (name, id, username) {
    
    console.log("Я подключился к Telegram, вот информация обо мне!");
    console.log("");
    console.log("Имя - " + name);
    console.log("ID - " + id);
    console.log("Имя пользователя - " + username);
    
};

module.exports.checkMessages = function () {
    
    console.log("");
    console.log("Ожидаю сообщения...");
    console.log("");
    
}

module.exports.scanningFiles = function () {
    
    console.log("");
    console.log(">> Список файлов загружен!");
    console.log("");
    
}

module.exports.noArg = function (message) {
    
    console.log("");

    function greet () {
        
        console.log("В чате " + message.chatid + " говорят:");
        console.log("");
        console.log("       " + message.text);
        console.log("");
        
    }
    
    greet();
    console.log("Скажу, что не указан аргумент");
    
    console.log("");
    
}

module.exports.onPlay = function (message) {
    
    console.log("");
    
    function greet () {
        
        console.log("В чате " + message.chatid + " говорят:");
        console.log("");
        console.log("       " + message.text);
        console.log("");
        
    }
    
    greet();
    console.log("Включаю песню...");
    
    console.log("");
    
}

module.exports.play = function (message) {
    
    console.log("");
    console.log("Проигрывание восстановлено!");
    console.log("");
    
}

module.exports.pause = function (message) {
    
    console.log("");
    console.log("Проигрывание на паузе!");
    console.log("");
    
}

module.exports.stop = function (message) {
    
    console.log("");
    console.log("Проигрывание остановленно!");
    console.log("");
    
}

module.exports.onMessage = function (message) {
    
    console.log("");
    
    function greet () {
        
        console.log("В чате " + message.chatid + " говорят:");
        console.log("");
        console.log("       " + message.text);
        console.log("");
        
    }
    
    switch (message.text) {
            
        case "/start":
            
            greet();
            console.log("Расскажу кто я, да расскажу про /help");
            
        break;
            
        case "/help":
            
            greet();
            console.log("Кину ему список команд");
            
        break;
            
        case "/listmusic":
            
            greet();
            console.log("Покажу ему список музыки");
            
        break;
            
        case "/listphoto":
            
            greet();
            console.log("Покажу ему список фото");
            
        break;
            
        case "/listvideo":
            
            greet();
            console.log("Покажу ему список видео");
            
        break;
            
    }
    
    console.log("");
    
}

