<?php

require_once 'init.php';


if ($_GET['action']=='create')
{
  $data= json_decode(file_get_contents('php://input'), true);

  foreach ($data as $key=>$value)
  {

    $data[$key]=htmlspecialchars($value);

  }



  $sql="INSERT INTO categorie (titre) VALUES (:titre)";

  $result=$pdo->prepare($sql);
  $result->execute($data);
  // echo 'je suis la';
  echo json_encode($data);



}

if ($_GET['action']=='edit')
{
  $data= json_decode(file_get_contents('php://input'), true);

  foreach ($data as $key=>$value)
  {

    $data[$key]=htmlspecialchars($value);

  }



  $sql="UPDATE categorie SET titre=:titre WHERE id=:id";

  $result=$pdo->prepare($sql);
  $result->execute($data);
  // echo 'je suis la';
  echo json_encode($data);



}




if ($_GET['action']=='readAll')
{


  $sql="SELECT * FROM categorie";

  $result=$pdo->prepare($sql);
  $result->execute();
  $data=$result->fetchAll(PDO::FETCH_ASSOC);
  // echo 'console.log("coucou")';
  echo json_encode($data);



}


if ($_GET['action']=='readOne')
{

  $sql="SELECT * FROM categorie WHERE id=:id ";

  $result=$pdo->prepare($sql);
  $result->execute([':id'=>$_GET['id']]);
  $data=$result->fetch(PDO::FETCH_ASSOC);

  echo json_encode($data);



}

if ($_GET['action']=='delete')
{
  $sql="DELETE FROM categorie WHERE id=:id";

  $result=$pdo->prepare($sql);
  $result->execute([':id'=>$_GET['id']]);




  return;



}
