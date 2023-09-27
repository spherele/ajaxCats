<?php
    $pictureId = $_GET['pictureId'];
    $imagesFolder = '/images/';
    $imagesPath = $imagesFolder . $pictureId . '.jpg';

    $images = [
        1 => ["imageUrl" => "/images/1.jpg", "caption" => "Удивленная морда"],
        2 => ["imageUrl" => "/images/2.jpg", "caption" => "Хитрожопая морда"],
        3 => ["imageUrl" => "/images/3.jpg", "caption" => "Кислая морда"],
        // Добавьте другие изображения и тексты
    ];

if (file_exists($_SERVER['DOCUMENT_ROOT'] . $imagesPath)) {
    // Изображение существует
    echo json_encode(['exists' => true, 'imageUrl' => $imagesPath, 'caption' => $images[$pictureId]['caption']]);
} else {
    // Изображение не существует
    echo json_encode(['exists' => false]);
}


