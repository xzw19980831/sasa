<?php


$resp = array("result" => false, "data" => null);

if (empty($_COOKIE['userid'])) {
    echo json_encode($resp);
    return;
}

$userid = $_COOKIE['userid'];

include "./conn.php";

$sql = "
    SELECT `name`, `price`, `count`, `img`, `description` FROM `cart`
    WHERE `cart`.`userid`=$userid
";

$ret = $conn->query($sql);



if ($ret->num_rows > 0) {
    $data = array(); 

    $row = $ret->fetch_assoc(); 
    while ($row !== null) {
        $data[] = $row;  
        $row = $ret->fetch_assoc(); 
    }
    $resp["result"] = true;
    $resp["data"] = $data;
    echo  json_encode($resp); 
} else {
    echo json_encode($resp);
}




$conn->close();
