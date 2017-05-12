#!/bin/bash

echo "   Telegram cast bot v1.0.0";
echo "";
echo "==========================================";
echo "";
echo "Удаление";
echo "";

echo "Директория где находится ваш сервер >";
read DIRINSTALL;

rm -r $DIRINSTALL/music;
rm -r $DIRINSTALL/video;
rm $DIRINSTALL/getFiles.php;
rm -r ./node_modules;

echo "Удаление завершено!";