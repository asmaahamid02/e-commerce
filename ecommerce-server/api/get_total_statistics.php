<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');
include('connection.php');
/*get total sellers */
$id_seller=2;
$id_client=1;
$user_type=$connection->prepare("SELECT count(*) as total_sellers FROM users WHERE  type_id=$id_seller");
$user_type->execute();
$array=$user_type->get_result();
$var=$array->fetch_assoc(); 
$response=[];
$response[]=$var;


/*get totalproducts */
$user_type=$connection->prepare("SELECT count(*) as total_products FROM products");
$user_type->execute();
$array=$user_type->get_result();
$var=$array->fetch_assoc(); 
$response[]=$var;




/*get totalclients */
$user_type=$connection->prepare("SELECT count(*) as totalclients_ FROM users WHERE type_id=$id_client");
$user_type->execute();
$array=$user_type->get_result();
$var=$array->fetch_assoc(); 
$response[]=$var;
$json=json_encode($response);
echo $json;
?>

 
