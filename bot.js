var log = require("./modules/log.js");

log.startApp();

const telegram = require("node-telegram-bot-api");
const chromecast = require("chromecast-api");
const ip = require("ip");
const config = require("./tg.config.json");
const tgSend = require("./modules/tgSend");
const files = require("./modules/scan");
const cast = require("./modules/cast");

log.loadLibs();

var fileList = null;

files.scan();
setTimeout(function () {
    
    fileList = files.list();
    log.scanningFiles();
    
}, 500);

log.tokenCheck(config.token);
log.connection();

const bot = new telegram(config.token, {polling: true});

bot.getMe().then(function (me) { 

    log.connected(
        me.first_name,
        me.id,
        me.username
    );
    
    log.checkMessages();
    
});

var browser = new chromecast.Browser();

browser.on("deviceOn", function (device) {
    
    var message = {

        chatid: null,
        text: null,
        username: null

    }
    
    bot.on("text", function (msg) {

        message.chatid = msg.chat.id;
        message.text = msg.text;
        message.username = msg.from.username;
        
        console.log(message.text);

        switch (message.text) {

            case "/start":

                log.onMessage(message);
                tgSend.start(bot, message);

            break;

            case "/help":

                log.onMessage(message);
                tgSend.help(bot, message);

            break;
                
            case "/list":
                
                tgSend.list(bot, message);
                
            break;

            case "/listmusic":

                log.onMessage(message);
                tgSend.commandList(fileList, "music", bot, message);

            break;

            case "/listvideo":

                log.onMessage(message);
                tgSend.commandList(fileList, "video", bot, message);

            break;

            case "/sendarray":

                tgSend.sendArray(fileList, bot, message);

            break;

            default:

                if (message.text.indexOf("/playmusic") + 1) {

                    var fileNumber = message.text.split(" ")[1];

                    if (fileNumber != undefined) {
                        
                        console.log(fileList.music.length);
                        
                        if (fileNumber > fileList.music.length) {
                         
                            tgSend.notFound(bot, message);
                            
                        } else {
                            
                            log.onPlay(message);
                            tgSend.playMusic(fileList, fileNumber, cast, device, bot, message);
                            
                        }

                    } else {

                        log.noArg(message);
                        tgSend.noArg(bot, message);

                    }

                }

                if (message.text.indexOf("/playvideo") + 1) {

                    var fileNumber = message.text.split(" ")[1];

                    if (fileNumber != undefined) {

                        if (fileNumber.toNumber > fileList.video.length) {
                        
                            tgSend.notFound(bot, message);
                            
                        } else {
   
                            log.onPlay(message);
                            tgSend.playVideo(fileList, fileNumber, cast, device, bot, message);
                            
                        }

                    } else {

                        log.noArg(message);
                        tgSend.noArg(bot, message);

                    }

                }

            break;

        }

    });

    bot.on("callback_query", function (msg) {

        var callback = msg.data;
        
        switch (callback) {
                
            case "/play":
                
                cast.play(device);
                
            break;
                
            case "/pause":
            
                cast.pause(device);
                
            break;
                
            case "/stop":
            
                cast.stop(device);
                
                tgSend.stop(bot, msg);
                tgSend.stopped(bot, message);
                
            break;
                
            case "/listmusic":

                log.onMessage(message);
                tgSend.commandList(fileList, "music", bot, message);

            break;

            case "/listvideo":

                log.onMessage(message);
                tgSend.commandList(fileList, "video", bot, message);

            break;
                
        }

    });
    
});
