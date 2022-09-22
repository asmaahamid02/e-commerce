<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');
include('connection.php');
/*get total sellers */
$user_type=$connection->prepare("SELECT count(*) as total_sellers FROM seller");
$user_type->execute();
$array=$user_type->get_result();
$var=$array->fetch_assoc(); 
$response=[];
$response=$var;
$total_user=$response;
$json=json_encode($response);
echo $json;

/*get totalproducts */
$user_type=$connection->prepare("SELECT count(*) as total_products FROM products");
$user_type->execute();
$array=$user_type->get_result();
$var=$array->fetch_assoc(); 
$response=[];
$response=$var;
$total_user=$response;
$json=json_encode($response);
echo $json;


/*get totalclients */
$user_type=$connection->prepare("SELECT count(*) as totalclients_ FROM client");
$user_type->execute();
$array=$user_type->get_result();
$var=$array->fetch_assoc(); 
$response=[];
$response=$var;
$total_user=$response;
$json=json_encode($response);
echo $json;
?>

 
