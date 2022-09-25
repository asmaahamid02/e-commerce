<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    include('connection.php');
    include('common.php');
    $common = new Common();

    if(!isset($_GET['id'])){
        $response = $common->getRepsonse(0, null, "no id is given");
        echo json_encode($response);
    }else{
        $id = $_GET['id'];

        $query = $connection->prepare('SELECT id, code, percentage FROM discounts WHERE seller_id=?');
        $query->bind_param('i', $id);
        $query->execute();

        $result = $query->get_result();

        $response = [];
        while($value = $result->fetch_assoc()){
            $response[] = $value;
        }

        if($response){
            $response = $common->getRepsonse(1, $response, "query executed successfully");
        }else{
            $response = $common->getRepsonse(1, null, "no discounts yet");
        }
        echo json_encode($response);
    }
?>