<?php
$server_name = 'localhost';
$dbms_username = 'root';
$dbms_password = '';
$db_name = 'sasa';

$conn = new mysqli($server_name, $dbms_username, $dbms_password, $db_name);
if ($conn->connect_error) {
    echo "连接失败。";
    return;
}

$conn->query('set names utf8');
