<?php
include('connection.php');
include_once "common.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');

$seller_id = $_POST["seller_id"];
$code = $_POST["code"];
$percentage = $_POST["percentage"];


?>