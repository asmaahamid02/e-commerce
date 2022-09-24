<?php 
    header('Access-Control-Allow-Origin');
    header('Access-Control-Allow-Headers: *');
    include('connection.php');
    include('common.php');
    $common = new Common();


    if(isset($_GET['id'])){
        $id = $_GET['id'];

        $today = date('Y-m-d');
        $last_week = date("Y-m-d", strtotime($today . "-1 week"));
        $last_month = date("Y-m-d", strtotime($today . "-1 month"));
        $last_year = date("Y-m-d", strtotime($today . "-1 year"));
        // echo $last_week;
        // echo $last_month;
        // echo $last_year;


        // get the price and the quantaty sold of the products that are not discounted
        $query = $connection->prepare('SELECT p.price, SUM(ci.quantity) AS purchased_number
                                        FROM categories AS c, products AS p, cart_items AS ci, carts AS ca, discounts AS d
                                        WHERE c.seller_id=? AND c.id=p.categorie_id AND p.id=ci.product_id AND ci.cart_id=ca.id AND ca.purchased_at>=? AND (ca.discount_id IS NULL OR (ca.discount_id=d.id AND d.seller_id != ?))
                                        GROUP BY p.id');
        $query->bind_param('isi', $id, $last_month, $id);
        $query->execute();
        $result = $query->get_result();

        $noDiscount = [];
        while($value = $result->fetch_assoc()){
            $noDiscount[] = $value;
        }
        // price of all non discounted products
        $noDiscountPrice = 0;
        foreach($noDiscount as $value){
            $noDiscountPrice += $value['price'] * $value['purchased_number'];
        }

        // get the price, the quantity, and the discount percentage of the discounted prducts
        $query = $connection->prepare('SELECT p.price, d.percentage, SUM(ci.quantity) AS purchased_number
                                        FROM categories AS c, products AS p, cart_items AS ci, carts AS ca, discounts AS d
                                        WHERE c.seller_id=? AND c.id=p.categorie_id AND p.id=ci.product_id AND ci.cart_id=ca.id AND ca.purchased_at>=? AND ca.discount_id=d.id AND d.seller_id = ?
                                        GROUP BY p.id');
        $query->bind_param('isi', $id, $last_month, $id);
        $query->execute();
        $result = $query->get_result();
        
        $discounted = [];
        while($value = $result->fetch_assoc()){
            $discounted[] = $value;
        }

        $discountedPrice = 0;
        foreach($discounted as $value){
            $discountedPrice += $value['price'] * $value['percentage']/100 * $value['purchased_number'];
        }
        echo $discountedPrice;

        $discounted = $common->getRepsonse(1, $discounted, "query executed successfully");

        echo json_encode($discounted);
    }else{
        $response = $common->getRepsonse(0, null, "no id is given");
        echo json_encode($response);
    }
?>