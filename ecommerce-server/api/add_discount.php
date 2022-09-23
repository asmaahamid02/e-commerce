<?php
include('connection.php');
include_once "common.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');

if (
    isset ($_POST["seller_id"], $_POST["code"], $_POST["percentage"])
    )
{
    $seller_id = $_POST["seller_id"];
    $code = $_POST["code"];
    $percentage = $_POST["percentage"];

    $sql='INSERT INTO discounts(seller_id, code, percentage) VALUES(?,?,?)';

    $stmt = $connection->prepare($sql);
    $stmt->bind_param('isi', $seller_id, $code, $percentage);
    $stmt->execute() or die($connection->error);

    // echo json_encode($stmt);
    $response = [];
    $response["success"] = true;

    echo json_encode($response);

}
//else {
//     $response  = $common->getRepsonse('Not enough data submitted');
// }


?>