<?php
include("connection.php");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
//PHP to get a specific seller's info

if (isset($_GET["seller_id"])) {

    $seller_id = $_GET['seller_id'];

    $sql_query = "
    SELECT users.id seller_id, users.username seller_username, users.name seller_name, users.email seller_email, users.profile_picture seller_pp, users.created_at seller_join_date
    FROM users, user_types
    WHERE user_types.id = users.type_id AND users.id=$seller_id";

    $query = $connection->prepare($sql_query);
    $query->execute();
    $array = $query->get_result();

    $response = [];

    while ($a = $array->fetch_assoc()) {
        $response[] = $a;
    }

    $json = json_encode($response);
    echo $json;
}


?>