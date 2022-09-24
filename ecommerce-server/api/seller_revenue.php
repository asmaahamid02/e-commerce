<?php 
    header('Access-Control-Allow-Origin');
    header('Access-Control-Allow-Headers: *');
    include('connection.php');

    if(isset($_GET['id'])){
        $id = $_GET['id'];
    }

    $today = date('Y-m-d');
    $last_week = date("Y-m-d", strtotime($today . "-1 week"));
    $last_month = date("Y-m-d", strtotime($today . "-1 month"));
    $last_year = date("Y-m-d", strtotime($today . "-1 year"));
    // echo $last_week;
    // echo $last_month;
    // echo $last_year;


    $query = $connection->prepare('SELECT p.price, SUM(ci.quantity)
                                    FROM categories AS c, products AS p, cart_items AS ci, carts AS ca
                                    WHERE c.seller_id=? AND c.id=p.categorie_id AND p.id=ci.product_id AND ci.cart_id=ca.id AND ca.purchased_at>=?
                                    GROUP BY p.id');
    $query->bind_param('is', $id, $last_week);
    $query->execute();
    $result = $query->get_result();

    $response = [];

    while($value = $result->fetch_assoc()){
        $response[] = $value;
    }

    echo json_encode($response);
?>