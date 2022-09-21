<?php
include("connection.php");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
//PHP to get all clients info (except password)
$user_type = 'client';
$sql_query ="
    SELECT users.id client_id, users.username client_username, users.name client_name, users.email client_email, users.profile_picture client_pp, users.is_banned as client_banned_status, users.created_at client_join_date
    FROM users, user_types
    WHERE user_types.id = users.type_id AND user_types.type='$user_type'";

$query = $connection->prepare($sql_query);
$query->execute();
$array = $query->get_result();

$response = [];

while ($a = $array->fetch_assoc()) {
    $response[] = $a;
}

$json = json_encode($response);
echo $json;

?>
