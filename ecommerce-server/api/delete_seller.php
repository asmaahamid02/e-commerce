<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');
include('connection.php');
include_once "common.php";
$common = new Common();
//

if (isset($_POST['id'])) {
  $id = $_POST['id'];
  $sql = 'SELECT id from users where id = ?';
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
  }
} else {
  $response = $common->getRepsonse(0, null, 'Not enough data submitted');
}

echo json_encode($response);