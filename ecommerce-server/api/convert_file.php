<?php

function convertToBase64($file)
{
    list($type, $file) = explode(';', $file); //split the type of image from its url
    list(, $extension)          = explode('/', $type); //get the extension of the file by splitting the type (data:image/jpeg)
    list(, $file)       = explode(',', $file); //remove (base64) prefix
    $file_name                  = uniqid('te1am', true) . date('Y-m-d') . '.' . $extension; //define unique name for the image
    $base64string              = base64_decode($file); //decode base64 string

    $data = [
        'file_name' => $file_name,
        'base64string' =>  $base64string,
    ];
    return $data;
}