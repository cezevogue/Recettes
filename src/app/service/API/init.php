<?php

header("Access-Control-Allow-Origin: http://127.0.0.1, http://127.0.0.1:4200");
header("Content-Type: application/json, text/html; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, DELETE, PUT, GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$pdo=new PDO('mysql:host=localhost;dbname=recettes', 'root', '',array(
  PDO::ATTR_ERRMODE=>PDO::ERRMODE_WARNING, PDO::MYSQL_ATTR_INIT_COMMAND=>'SET NAMES utf8'
));
