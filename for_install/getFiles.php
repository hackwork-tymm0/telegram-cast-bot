<?php

    $list = null;

    function deleteDots ($array) {
        
        $reverse = array_reverse($array);
        
        array_pop($reverse);
        array_pop($reverse);
        
        $returned = array_reverse($reverse);
        
        return $returned;
        
    }

    $rawMusic = scandir("./music/");
    $rawPhoto = scandir("./photo/");
    $rawVideo = scandir("./video/");

    $music = deleteDots($rawMusic);
    $photo = deleteDots($rawPhoto);
    $video = deleteDots($rawVideo);

    $list['music'] = $music;
    $list['photo'] = $photo;
    $list['video'] = $video;

    $jsonResponse = json_encode($list);

    echo $jsonResponse;