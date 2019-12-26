<?php

session_start();

$file_id = $_REQUEST['fileid'];

$file_url = $_SESSION["drop_uploader_".$file_id];

if($file_url != "") {
    unlink($file_url);
}