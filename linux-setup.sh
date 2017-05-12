#!/bin/bash

echo "   Telegram cast bot v1.0.0";
echo "";
echo "==========================================";
echo "";
echo "Установщик";
echo "";

echo "Директория где находится ваш сервер >";
read DIRINSTALL;

echo "Токен бота Telegram > ";
read TOKEN;

echo '{"token":"'$TOKEN'"}' > tg.config.json;

mkdir $DIRINSTALL/music;
mkdir $DIRINSTALL/video;

cp ./for_install/getFiles.php $DIRINSTALL/getFiles.php;

npm install;

echo "Установка завершена!";