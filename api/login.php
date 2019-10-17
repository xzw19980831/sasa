<?php
    $username = $_POST['username'];
    $password = $_POST['password'];

    include "./conn.php";

    $password = md5($password);
    
    $sql = "
        SELECT `id` FROM `users`
        WHERE `users`.`username`='$username' AND `users`.`password`='$password'
    ";

    $ret = $conn->query($sql);

    if($ret->num_rows > 0) {
        $userid = $ret->fetch_assoc()["id"];
        header("set-cookie: userid=$userid;path=/");
        echo "登录成功";
    } else {
        echo "登录失败";
    }
