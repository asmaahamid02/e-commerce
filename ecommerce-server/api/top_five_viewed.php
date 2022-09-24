<?php 
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Headers: *');
    include('connection.php');
    include('common.php');
    $common = new Common();

    if(!isset($_GET['id'])){
        $response = $common->getRepsonse(0, null, 'id is not sent');
        echo json_encode($response);
    }else{
        $id = $_GET['id'];
        $query = $connection->prepare('SELECT p.title, p.price, p.image, p.description, p.quantity, p.views
                                        FROM categories AS c, products AS p
                                        WHERE c.seller_id=? AND c.id=p.categorie_id
                                        ORDER BY p.views DESC
                                        LIMIT 5');
        $query->bind_param('i', $id);
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