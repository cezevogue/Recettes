<?php

require_once 'init.php';


if ($_GET['action']=='create')
{
  $data= json_decode(file_get_contents('php://input'), true);

  foreach ($data as $key=>$value)
  {

    $data[$key]=htmlspecialchars($value);

  }



  $sql="INSERT INTO recette (titre,description,cout, preparation,cuisson,difficulte, etapes, ingredients, photo, id_categorie) VALUES (:titre,:description,:cout, :preparation,:cuisson,:difficulte, :etapes,:ingredients, :photo, :id_categorie)";

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



  $sql="UPDATE recette SET titre=:titre, description=:description, difficulte=:difficulte, cout=:cout, preparation=:preparation, cuisson=:cuisson, photo=:photo, etapes=:etapes, ingredients=:ingredients, id_categorie=:id_categorie WHERE id=:id";

  $result=$pdo->prepare($sql);
  $result->execute($data);
  // echo 'je suis la';
  echo json_encode($data);



}




if ($_GET['action']=='readAll')
{


  $sql="SELECT c.titre as categorie_titre, c.id as categorie_id, r.* FROM recette r INNER JOIN categorie c ON c.id=r.id_categorie";

  $result=$pdo->prepare($sql);
  $result->execute();
  $data=$result->fetchAll(PDO::FETCH_ASSOC);
 // echo 'console.log("coucou")';
  echo json_encode($data);



}


if ($_GET['action']=='readOne')
{

  $sql="SELECT c.titre as categorie_titre, c.id as categorie_id, r.* FROM recette r INNER JOIN categorie c ON c.id=r.id_categorie WHERE r.id=:id ";

  $result=$pdo->prepare($sql);
  $result->execute([':id'=>$_GET['id']]);
  $data=$result->fetch(PDO::FETCH_ASSOC);

  echo json_encode($data);



}

if ($_GET['action']=='delete')
{
  $sql="DELETE FROM recette WHERE id=:id";

  $result=$pdo->prepare($sql);
  $result->execute([':id'=>$_GET['id']]);




  return;



}
