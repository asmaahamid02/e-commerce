<?php
include('connection.php');
include_once "common.php";

$common = new common();
$response = [];
if (
    isset($_POST["category_id"], $_POST["title"], $_POST["price"], $_POST["qty"], $_POST["description"], $_POST["picture"])
) {
    $category_id = $_POST["category_id"];
    $title = $_POST["title"];
    $price = $_POST["price"];
    $qty = $_POST["qty"];
    $description = $_POST["description"];
    $picture = $_POST["picture"];

    $images_path = $common->getProductsPath();

    $image_name = '';
    $base64String = '';
    if ($picture != '') {
        $coded_image = $common->convertToBase64($picture);
        $image_name = $coded_image['file_name'];
        $base64String = $coded_image['base64string'];
    }

    $sql = 'INSERT INTO products(categorie_id, title,price,quantity,description,image,is_deleted,views, created_at) 
        VALUES(?,?,?,?,?,?,0,0, NOW())';

    $stmt = $connection->prepare($sql);
    $stmt->bind_param('isddss', $category_id, $title, $price, $qty, $description, $image_name);
    $result = $stmt->execute() or die($connection->error);
    if ($result) {
        file_put_contents($images_path . $image_name, $base64String); //add image to the folder
        $response = $common->getRepsonse(1, null, 'Product added Successfully');
    } else {
        $response = $common->getRepsonse(0, null, 'Could not change!');
    }
    $stmt->close();
} else {
    $response = $common->getRepsonse(0, null, 'Not enough data submitted');
}

echo json_encode($response);