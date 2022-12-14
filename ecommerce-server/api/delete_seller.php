<?php
include('connection.php');
include_once "common.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

$common = new Common();
$response = [];
if (isset($_GET['id'])) {
  $id = $_GET['id'];
  $sql = 'SELECT id from users where id = ? and is_deleted = 0';
  $stmt = $connection->prepare($sql);
  $stmt->bind_param('i', $id);
  $stmt->execute();
  $result = $stmt->get_result();
  $stmt->close();

  if ($result->num_rows > 0) {
    $sql = "UPDATE users SET `is_deleted`=1 WHERE `id` = ? ";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param('i', $id);

    if ($stmt->execute()) {
      $response = $common->getRepsonse(1, null, 'Seller Deleted Successfully');
    } else {
      $response = $common->getRepsonse(0, null, 'Could not delete seller!');
    }
    $stmt->close();
  } else {
    $response = $common->getRepsonse(0, null, 'Not Found');
  }
} else {
  $response = $common->getRepsonse(0, null, 'Not enough data submitted');
}

echo json_encode($response);