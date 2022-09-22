<?php
include_once "connection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

$weekly_sql = "SELECT main.seller_id, main.username,main.name,main.max_total,total_qry.total ,total_qry.date_title  from
        (select seller_id , username, name,  max(max_total) max_total from (
        select 
        users.id seller_id, username, name,sum(total - if(percentage is null or percentage = 0,0, (total*percentage/100))) as max_total
        from users
        inner join user_types on user_types.id = users.type_id
        inner join categories on categories.seller_id = users.id
        inner join products on products.categorie_id = categories.id 
        inner join cart_items on cart_items.product_id = products.id
        inner join carts on cart_items.cart_id = carts.id
        left join discounts on discounts.id = carts.discount_id
        where Week(carts.purchased_at) = week(now()) and type = 'seller'
        group by users.id
        )qry) main
        inner join (
        select  users.id as seller_id,dayname(carts.purchased_at) as date_title
        , sum(carts.total - if(percentage is null or percentage = 0,0, (carts.total*percentage/100))) as total
        from users
        inner join user_types on user_types.id = users.type_id
        inner join categories on categories.seller_id = users.id
        inner join products on products.categorie_id = categories.id 
        inner join cart_items on cart_items.product_id = products.id
        inner join carts on cart_items.cart_id = carts.id
        left join discounts on discounts.id = carts.discount_id
        where Week(carts.purchased_at) = week(now()) and type = 'seller'
        group by  date_title, users.id
        ) as total_qry on total_qry.seller_id = main.seller_id";


$monthly_sql = "SELECT main.seller_id, main.username,main.name,main.max_total,total_qry.total ,total_qry.date_title  from
        (select seller_id , username, name,  max(max_total) max_total from (
        select 
        users.id seller_id, username, name,sum(total - if(percentage is null or percentage = 0,0, (total*percentage/100))) as max_total
        from users
        inner join user_types on user_types.id = users.type_id
        inner join categories on categories.seller_id = users.id
        inner join products on products.categorie_id = categories.id 
        inner join cart_items on cart_items.product_id = products.id
        inner join carts on cart_items.cart_id = carts.id
        left join discounts on discounts.id = carts.discount_id
        where month(carts.purchased_at) = month(now()) and type = 'seller'
        group by users.id
        )qry) main
        inner join (
        select  users.id as seller_id,concat('Week', floor((day(purchased_at)-1)/7)+1) as date_title
        , sum(carts.total - if(percentage is null or percentage = 0,0, (carts.total*percentage/100))) as total
        from users
        inner join user_types on user_types.id = users.type_id
        inner join categories on categories.seller_id = users.id
        inner join products on products.categorie_id = categories.id 
        inner join cart_items on cart_items.product_id = products.id
        inner join carts on cart_items.cart_id = carts.id
        left join discounts on discounts.id = carts.discount_id
        where month(carts.purchased_at) = month(now()) and type = 'seller'
        group by  date_title, users.id
        ) as total_qry on total_qry.seller_id = main.seller_id";


$yearly_sql = "SELECT main.seller_id, main.username,main.name,main.max_total,total_qry.total ,total_qry.date_title  from
        (select seller_id , username, name,  max(max_total) max_total from (
        select 
        users.id seller_id, username, name,sum(total - if(percentage is null or percentage = 0,0, (total*percentage/100))) as max_total
        from users
        inner join user_types on user_types.id = users.type_id
        inner join categories on categories.seller_id = users.id
        inner join products on products.categorie_id = categories.id 
        inner join cart_items on cart_items.product_id = products.id
        inner join carts on cart_items.cart_id = carts.id
        left join discounts on discounts.id = carts.discount_id
        where year(carts.purchased_at) = year(now()) and type = 'seller'
        group by users.id
        )qry) main
        inner join (
        select  users.id as seller_id,monthname(purchased_at) as date_title
        , sum(carts.total - if(percentage is null or percentage = 0,0, (carts.total*percentage/100))) as total
        from users
        inner join user_types on user_types.id = users.type_id
        inner join categories on categories.seller_id = users.id
        inner join products on products.categorie_id = categories.id 
        inner join cart_items on cart_items.product_id = products.id
        inner join carts on cart_items.cart_id = carts.id
        left join discounts on discounts.id = carts.discount_id
        where year(carts.purchased_at) = year(now()) and type = 'seller'
        group by  date_title, users.id
        ) as total_qry on total_qry.seller_id = main.seller_id";

$response = array();

if (isset($_POST['interval'])) {
    $interval = $_POST['interval'];

    $sql = '';
    if ($interval === 'weekly') {
        $sql =  $weekly_sql;
    }

    if ($interval === 'monthly') {
        $sql =  $monthly_sql;
    }

    if ($interval === 'yearly') {
        $sql =  $yearly_sql;
    }

    $stmt = $connection->prepare($sql);
    $stmt->execute();
    $result = $stmt->get_result();

    $response = array();
    if ($result) {
        if ($result->num_rows > 0) {
            //data found
            $data = [];
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }

            $response = [
                'status' => 1,
                'data' => $data,
                'message' => 'Data returned successfully'
            ];
        } else {
            //no data
            $response = [
                'status' => 1,
                'data' =>  null,
                'message' => 'No data found'
            ];
        }
    } else {
        //error 
        $response = [
            'status' => 0,
            'data' =>  null,
            'message' => 'Something went wrong, try again'
        ];
    }
    $stmt->close();
} else {
    $response = [
        'status' => 0,
        'data' =>  null,
        'message' => 'No data submitted'
    ];
}

echo json_encode($response);