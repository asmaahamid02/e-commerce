<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');
include('connection.php');

if (isset($_POST['id'])) {
    
     $id = $_POST['id'];
     $username=$_POST["username"];
     $password=$_POST["password"];
     $name=$_POST["name"];
     $email=$_POST["email"];
     
     $profile_picture = isset($_POST['profile_picture']) ? $_POST['profile_picture'] : '';
   //  $created_at = date('Y-m-d H:i:s');
     $password =hash('sha256',$_POST['password']). 'team1';
     echo $name;
     echo $email;
     echo $id;
     echo  $username;
     echo $profile_picture;
     //echo $created_at;
    
      $edit_seller_sql= "UPDATE users SET `username`=?,`password`=?,`name` = ?,`email`=?,`created_at`=now() WHERE `id` = ?";
      $edit_seller_stmt = $connection->prepare($edit_seller_sql);
      if($edit_seller_stmt){
        echo"true";
      }
      else{echo "false";}
      $edit_seller_stmt->bind_param('ssssi', $username,$password,$name,$email,$id);
      $edit_seller_stmt->execute();
      $edit_seller_stmt->close();


     // $edit_seller_sql="UPDATE seller SET `profile_picture`=$profile_picture WHERE `user_id`=$id";
      $edit_seller_stmt = $connection->prepare("UPDATE seller SET `profile_picture`=? WHERE `user_id`=?");
      $edit_seller_stmt->bind_param('si',$profile_picture,$id);
          if($edit_seller_stmt){
        echo"true";
      }
      else{echo "false";}
     $edit_seller_stmt->execute();
    
 //send the  the informations back?
}
?>