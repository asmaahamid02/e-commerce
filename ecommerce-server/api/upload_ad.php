<?php 
    include('connection.php');
    include('common.php');
    $common = new Common();

    if(!isset($_POST['seller_id']) || !isset($_POST['image']) || !isset($_POST['cost']) || !isset($_POST['exp_date'])){
        $response = $common->getRepsonse(0, null, 'not enough data is sent');
        echo json_encode($response);
    }else{
        $seller_id = $_POST['seller_id'];
        $image_base64 = $_POST['image'];
        $cost = $_POST['cost'];
        $exp_date = $_POST['exp_date'];

        $image_data = $common->convertToBase64($image_base64);
        file_put_contents($common->getSellerPath() . $image_data['file_name'], $image_data['base64string']);

        $query = $connection->prepare('INSERT INTO ads(seller_id, image, cost, end_date) VALUES(?, ?, ?, ?)');
        $query->bind_param('isds', $seller_id, $image_data['file_name'], $cost, $exp_date);
        $query->execute();

        $response = $common->getRepsonse(1, null, "ad added successfully");

        echo json_encode($response);
    }

?>