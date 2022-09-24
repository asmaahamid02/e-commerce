<?php
include('connection.php');
include_once "common.php";

$common = new common();
$response = [];
if (
    isset($_POST["id"], $_POST["category"])
) {
    $seller_id = $_POST["id"];
    $category = $_POST["category"];

    if ($common->checkUser($seller_id)) {
        $sql = 'INSERT INTO categories(seller_id, category, created_at) VALUES(?,?, NOW())';

        $stmt = $connection->prepare($sql);
        $stmt->bind_param('is', $seller_id, $category);
        $result = $stmt->execute() or die($connection->error);

        if ($result) {
            $response = $common->getRepsonse(1, null, 'Category added Successfully');
        } else {
            $response = $common->getRepsonse(0, null, 'Could not change!');
        }
        $stmt->close();
    } else {
        $response = $common->getRepsonse(0, null, 'Seller not found');
    }
} else {
    $response = $common->getRepsonse(0, null, 'Not enough data submitted');
}

echo json_encode($response);