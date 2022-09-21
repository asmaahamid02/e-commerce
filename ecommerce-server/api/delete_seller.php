<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');
include('connection.php');

if (isset($_POST['id'])) {

    $id = $_POST['id'];
    $user_type=$connection->prepare("DELETE  FROM userS WHERE id=$id ");
    $user_type->execute();
}
    ?>