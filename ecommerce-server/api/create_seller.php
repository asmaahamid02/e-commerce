<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');
include('connection.php');
if(isset($_POST["name"]) &&isset($_POST["username"])  &&isset($_POST["email"]) 
    &&isset($_POST["password"])  ){
   $name=$_POST["name"];
   $username=$_POST["username"];
   $email=$_POST["email"];
   $password=$_POST["password"];
   $profile_picture = isset($_POST['profile_picture']) ? $_POST['profile_picture'] : '';
   $created_at = date('Y-m-d H:i:s');
   
   $password =hash('sha256',$_POST['password']). 'team1';
   /*get the id for the type seller */
   $user_type=$connection->prepare("SELECT id FROM user_types WHERE type='seller' ");
   $user_type->execute();
   $array=$user_type->get_result();
   $var=$array->fetch_assoc();
   echo $var["id"];
   /* */ 
   $query1 = $connection->prepare("INSERT INTO users(type_id,username,password,name,email ,created_at) VALUES (?,?,?,?,?,?)");
   $query1->bind_param('isssss',$var["id"],$username,$password,$name,$email ,$created_at);
   $new_seller_id = $query1->insert_id;
   $query1->execute();
   $response = [];
   $response["success"] = true;
   echo json_encode($response);
   /*get the last added id to put it as a foring key to the other table */
   $new_profile_id = $query1->insert_id;

   /*add the image with id of the user on the seller table */
   $query1 = $connection->prepare("INSERT INTO seller(user_id,profile_picture) VALUES (?,?)");
   $query1->bind_param('is', $new_profile_id,$profile_picture);
   $query1->execute();
   $response = [];
   $response["success"] = true;
   echo json_encode($response);

//   $profile_path = '';
//     if ($profile != '') {
//         $profile_img_data = convertToBase64($profile, '../../iamges', 'assets/images');
//         $profile_path = $profile_img_data['ecommerce_db'];

}
?>