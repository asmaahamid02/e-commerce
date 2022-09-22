<?php
include("connection.php");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
//PHP to ban a specific client


if (isset($_GET["client_id"])) {

    $client_id = $_GET['client_id'];

    $sql_query = "
    UPDATE users
    SET is_banned=1
    WHERE users.id=$client_id";

    $query = $connection->prepare($sql_query);
    $query->execute();
    $response = [];
    $response['success'] = true;
    echo json_encode($response);
}



?>