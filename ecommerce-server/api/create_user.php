<?php
include('connection.php');
include_once "convert_file.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');

if (
    isset($_POST["name"], $_POST["username"], $_POST["email"], $_POST["password"], $_POST["type"])
) {
    $type = $_POST["type"];
    $name = $_POST["name"];
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $profile_picture = isset($_POST['profile_picture']) ? $_POST['profile_picture'] : '';
    $created_at = date('Y-m-d H:i:s');
    $false_flag = 0;

    $hashed_password = hash('sha256', $_POST['password']) . 'team1';

    //check if username or email exist
    $sql = "SELECT id from users where username = ? or email = ?";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param('ss', $username, $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();

    if ($result->num_rows > 0) {
        $response = [
            'status' => 0,
            'data' => null,
            'message' => 'Username/Email already existed!'
        ];
    } else {
        $seller_images_path = '../../admin-electron/src/images/sellers-profiles/';
        $client_images_path = '../../client-fronend/assets/images/profiles/';

        $image_name = '';
        $base64String = '';
        if ($profile_picture != '') {
            $coded_image = convertToBase64($profile_picture);
            $image_name = $coded_image['file_name'];
            $base64String = $coded_image['base64string'];
        }

        /*get type id of user */
        $sql = "SELECT id FROM user_types WHERE type= ?";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param('s', $type);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        $type_id = $row['id'];
        $stmt->close();

        $sql = 'INSERT INTO users(type_id,name,username,email,password,profile_picture,is_banned,is_deleted,created_at) 
               VALUES (?,?,?,?,?,?,?,?,?)';

        $stmt = $connection->prepare($sql);
        $stmt->bind_param('issssssss', $type_id, $name, $username, $email, $hashed_password, $image_name, $false_flag, $false_flag, $created_at);
        $result = $stmt->execute() or die($connection->error);

        if ($result) {
            if ($type == 'seller' && !empty($image_name)) {
                file_put_contents($seller_images_path . $image_name, $base64String); //add image to the folder
            } else if ($type == 'client' && !empty($image_name)) {
                file_put_contents($client_images_path . $image_name, $base64String); //add image to the folder
            }
            $response = [
                'status' => 1,
                'data' => null,
                'message' => 'Account Created Successfully'
            ];
        } else {
            $response = [
                'status' => 0,
                'data' => null,
                'message' => 'Could not add the user, Try again!'
            ];
        }
    }
} else {
    $response = [
        'status' => 0,
        'data' =>  null,
        'message' => 'No data submitted'
    ];
}

echo json_encode($response);

$connection->close();