<?php
include_once "connection.php";
include_once "common.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

$common = new Common();

$weekly_sql = "SELECT main.client_id, main.username,main.name,main.max_total,total_qry.total ,total_qry.date_title  from
    (select client_id, username, name,  max(max_total) max_total from (
    select 
    client_id, username, name,sum(total - if(percentage is null or percentage = 0,0, (total*percentage/100))) as max_total
    from users
    inner join user_types on user_types.id = users.type_id
    inner join carts on users.id = carts.client_id
    left join discounts on discounts.id = carts.discount_id
    where Week(carts.purchased_at) = week(now()) and type = 'client'
    group by client_id
    )qry) main
    inner join (
    select  client_id,dayname(carts.purchased_at) as date_title
    , sum(total - if(percentage is null or percentage = 0,0, (total*percentage/100))) as total
    from users
    inner join user_types on user_types.id = users.type_id
    inner join carts on users.id = carts.client_id
    left join discounts on discounts.id = carts.discount_id
    where Week(carts.purchased_at) = week(now()) and type = 'client'
    group by  date_title, client_id
    ) as total_qry on total_qry.client_id = main.client_id";


$monthly_sql = "SELECT main.client_id, main.username,main.name,main.max_total,total_qry.total ,total_qry.date_title  from
    (select client_id, username, name,  max(max_total) max_total from (
    select 
    client_id, username, name,sum(total - if(percentage is null or percentage = 0,0, (total*percentage/100))) as max_total
    from users
    inner join user_types on user_types.id = users.type_id
    inner join carts on users.id = carts.client_id
    left join discounts on discounts.id = carts.discount_id
    where month(carts.purchased_at) = month(now()) and type = 'client'
    group by client_id
    )qry) main
    inner join (
    select  client_id,concat('Week', floor((day(purchased_at)-1)/7)+1) as date_title
    , sum(total - if(percentage is null or percentage = 0,0, (total*percentage/100))) as total
    from users
    inner join user_types on user_types.id = users.type_id
    inner join carts on users.id = carts.client_id
    left join discounts on discounts.id = carts.discount_id
    where month(carts.purchased_at) = month(now()) and type = 'client'
    group by  date_title, client_id
    ) as total_qry on total_qry.client_id = main.client_id";


$yearly_sql = "SELECT main.client_id, main.username,main.name,main.max_total,total_qry.total ,total_qry.date_title  from
    (select client_id, username, name,  max(max_total) max_total from (
    select 
    client_id, username, name,sum(total - if(percentage is null or percentage = 0,0, (total*percentage/100))) as max_total
    from users
    inner join user_types on user_types.id = users.type_id
    inner join carts on users.id = carts.client_id
    left join discounts on discounts.id = carts.discount_id
    where year(carts.purchased_at) = year(now()) and type = 'client'
    group by client_id
    )qry) main
    inner join (
    select  client_id,monthname(purchased_at) as date_title
    , sum(total - if(percentage is null or percentage = 0,0, (total*percentage/100))) as total
    from users
    inner join user_types on user_types.id = users.type_id
    inner join carts on users.id = carts.client_id
    left join discounts on discounts.id = carts.discount_id
    where year(carts.purchased_at) = year(now()) and type = 'client'
    group by  date_title, client_id
    ) as total_qry on total_qry.client_id = main.client_id";

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

            $response = $common->getRepsonse(1, $data, 'Data returned successfully');
        } else {
            //no data
            $response = $common->getRepsonse(1, null, 'Not enough data found');
        }
    } else {
        //error 
        $response = $common->getRepsonse(0, null, 'Something went wrong, try again');
    }
    $stmt->close();
} else {
    $response = $common->getRepsonse(0, null, 'No data submitted');
}

echo json_encode($response);

$connection->close();