<?php
class Common
{

    public function __construct()
    {
    }

    public function convertToBase64($file)
    {
        list($type, $file) = explode(';', $file); //split the type of image from its url
        list(, $extension)          = explode('/', $type); //get the extension of the file by splitting the type (data:image/jpeg)
        list(, $file)       = explode(',', $file); //remove (base64) prefix
        $file_name                  = uniqid('te1am', true) . date('Y-m-d') . '.' . $extension; //define unique name for the image
        $base64string              = base64_decode($file); //decode base64 string

        $data = [
            'file_name' => $file_name,
            'base64string' =>  $base64string,
        ];
        return $data;
    }

    public function getSellerPath()
    {
        return '../../admin-electron/src/images/sellers-profiles/';
    }

    public function getClientPath()
    {
        return '../../client-fronend/assets/images/profiles/';
    }

    public function getProductsPath()
    {
        return '../../seller-frontend/assets/images/products/';
    }

    public function emailAndUsernameExist($username, $email)
    {
        require("connection.php");
        //check if username or email exist
        $sql = "SELECT id from users where username = ? or email = ?";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param('ss', $username, $email);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();
        $connection->close();
        return $result->num_rows > 0;
    }

    public function emailAndUsernameExistWithID($username, $email, $id)
    {
        require("connection.php");
        //check if username or email exist
        $sql = "SELECT id from users where (username = ? or email = ?) and id != ?";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param('ssi', $username, $email, $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();
        $connection->close();
        return $result->num_rows > 0;
    }

    public function getUserData($id)
    {
        require("connection.php");
        //check if username or email exist
        $sql = "SELECT * from users where id = ? ";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param('i', $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();
        $connection->close();
        return $result->fetch_assoc();
    }

    public function getRepsonse($status, $data, $message)
    {
        return [
            'status' => $status,
            'data' => $data,
            'message' => $message
        ];
    }

    public function checkUser($id)
    {
        require("connection.php");
        $sql = "SELECT * from users where id = ? and is_deleted = 0";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param('i', $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();
        $connection->close();
        return $result->num_rows == 1;
    }

    public function getUserType($id)
    {
        require("connection.php");
        $sql = "SELECT type from users inner join user_types on users.type_id = user_types.id where users.id = ?";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param('i', $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();
        $connection->close();
        return $result->fetch_assoc()['type'];
    }

    public function getUserTypeID($type)
    {
        require("connection.php");
        $sql = "SELECT id from user_types where type = ?";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param('s', $type);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();
        $connection->close();
        return $result->fetch_assoc()['id'];
    }
}