<?php
ini_set("display_errors",1);
//PHP to check for admin login and generate a JSON Web Token (JWT) to be used for authorization
//Connection
include("connection.php");
//Headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
//Ensuring that the Composer-generated autoloader is available 
use \Firebase\JWT\JWT;
require_once('./vendor/autoload.php');


if (isset($_POST["user_indentifier"], $_POST["password"])) {
    $user_indentifier = $_POST['user_indentifier'];
    $password = $_POST['password'];

    $hashedpass = hash('sha256', $password.'team1');

    $query = $connection->prepare(
        "
        SELECT users.id, users.email, users.username 
        FROM users 
        WHERE (username=? OR email=?) AND password=? ");

    // $query->bind_param('ss',$username,$hashedpass);
    $query->bind_param('sss',$user_indentifier,$user_indentifier,$hashedpass);
    $query->execute();
    $array = $query->get_result();

    $hasValidCredentials  = [];
    while($a = $array->fetch_assoc()){
        $hasValidCredentials []  = $a;
    }


    if($hasValidCredentials  == []){
        echo json_encode(array(
            "error" => true,
            "msg" => "user does not have valid credentials",
        ));
    }
    else{
        //Generate the jwt token

        //payload_info
        $iss= "localhost"; //issuer
        $iat= time(); //iat: issued at , time(): current time
        $nbf= $iat + 10; //nbf: not before, will give this token after 10 seconds
        $exp= $iat + 30; //expiration will be after 30 seconds
        $aud= "admin"; //targeted audience are the admins
        $user_arr_data = array(
            "id" => $hasValidCredentials[0]['id'],
            "username"=>$hasValidCredentials[0]['username'],
            "email" => $hasValidCredentials[0]['email']
        );

        $payload_info = array(
            "iss"=> $iss,
            "iat"=> $iat,
            "ntb"=> $nbf,
            "exp"=> $exp,
            "aud"=> $aud,
            "data"=> $user_arr_data
        );

        //secret key
        $secret_key = "ecomteam1";

        $jwt = JWT::encode($payload_info, $secret_key,'HS256'); //'HS256' is the algorithm we are using

        echo json_encode(array(
            "user_id" => $user_arr_data['id'],
            "username" => $user_arr_data['username'],
            "email" => $user_arr_data['email'],
            "user_jwt" => $jwt,
        ));
    }

    
}
else{
    echo json_encode(array(
        "error" => true,
        "msg" => "empty fields",
    ));
}
?>