<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');
include('connection.php');
//
$id = $_POST['id'];
if (isset($_POST['id'])) {
  $delete_seller_sql= "UPDATE users SET `is_deleted`=1 WHERE `id` =$id ";
      $delete_seller_stmt = $connection->prepare($delete_seller_sql);
      if($delete_seller_stmt->execute()){
      $response["success"] = true;
      echo json_encode($response);
      }
     else{
       $response["success"] = false;
       echo json_encode($response);
       }
 
    
}
    ?>