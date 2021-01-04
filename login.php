<?php
  session_start();
  $db = mysqli_connect("localhost", "root" , "" , "db_lab2"); ///////// make a connection


  $str_json = file_get_contents('php://input');       ////// get the contents of the POST REQUEST
  $obj = json_decode($str_json, false);             //// DECODE the json sting into a PHP object associtive

  $email =  $obj->Email ;
  $password = $obj->Password;

  if ($email == "")             /////////////////////// validation before doing a query
  die();
  if ($password == "")
  die();

    $password = md5($password);

    $sql_query = "SELECT * FROM users WHERE email='$email' and password='$password' ";     /////////////// select query to see if the user exists in the db
    // $sql_query = "SELECT * FROM users ";
    $sql= mysqli_query($db,$sql_query);

    $number = 0 ;
      while($row = $sql->fetch_array())                           ////////// converting the rows into an array
    {
      $rows[] = $row;                                     ////////// 2D ARRAY
      $number = $number+1;
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// & ($rows[0]['password']==$password)
        if($number==1){   /////////// if there is only one row and the password is correct

      $sql_query = "SELECT * FROM department";
      $sql= mysqli_query($db,$sql_query);
      while($row1 = $sql->fetch_array())                           ////////// converting the rows into an array
      {
      $rows2[] = $row1;                                     ////////// 2D ARRAY
      }
  $result = array_merge($rows2, $rows);
     echo json_encode($result);                         ////// encode 2D array into json file
        // echo $rows2[0][0];
    }
    else
    echo "wrong";


 ?>
