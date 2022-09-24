<?php 
    include('connection.php');
    include('common.php');
    $common = new Common();

    if(!isset($_GET['seller_id'])){
        $response = $common->getRepsonse(0, null, 'no id is sent');
        echo json_encode($response);
    }else{
        $seller_id = $_GET['seller_id'];
        $today = date('Y-m-d');

        // only get ads that have not expired yet
        $query = $connection->prepare('SELECT image FROM ads WHERE seller_id=? AND end_date>?');
        $query->bind_param('is', $seller_id, $today);
        $query->execute();
        $result = $query->get_result();

        $response = [];
        while($value = $result->fetch_assoc()){
            $response[] = $value;
        }

        $response = $common->getRepsonse(1, $response, 'query executed successfully');
        echo json_encode($response);
    }

?>