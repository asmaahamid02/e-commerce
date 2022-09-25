<?php
include('connection.php');
include_once "common.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');

$common = new Common();
$response = [];
if (
    isset($_POST["seller_id"], $_POST["code"], $_POST["percentage"], $_POST["expiry"])
) {
    $seller_id = $_POST["seller_id"];
    $code = $_POST["code"];
    $percentage = $_POST["percentage"];
    $expiry = $_POST["expiry"];

    $sql = 'INSERT INTO discounts(seller_id, code, percentage, expired_at, created_at) VALUES(?,?,?,?, NOW())';

    $stmt = $connection->prepare($sql);
    $stmt->bind_param('isds', $seller_id, $code, $percentage, $expiry);

    if ($stmt->execute() or die($connection->error)) {
        $response  = $common->getRepsonse(1, null, 'Added Successfully');
    } else {
        $response  = $common->getRepsonse(0, null, 'Something went wrong!');
    }
} else {
    $response  = $common->getRepsonse(0, null, 'Not enough data submitted');
}
echo json_encode($response);
//else {
//     $response  = $common->getRepsonse('Not enough data submitted');
// }