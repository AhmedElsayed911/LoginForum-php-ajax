<?php
  session_start();
  $db = mysqli_connect("localhost", "root" , "" , "db_lab2"); ///////// make a connection


  $str_json = file_get_contents('php://input');       ////// get the contents of the POST REQUEST
  $obj = json_decode($str_json, false);             //// DECODE the json sting into a PHP object associtive

  $name = $obj->Name;
  $email =  $obj->Email ;
  $password = $obj->Password;

  if ($email == "")                               /////////////////////// validation before doing a query
  die();
  if ($password == "")
  die();
  if ($name == "")
  die();

   $sql_query = "SELECT * FROM users WHERE email='$email'";     /////////////// select query to see if the user exists in the db
    $sql= mysqli_query($db,$sql_query);

    $number = 0 ;
      while($row = $sql->fetch_array())                           ////////// converting the rows into an array
    {
      $rows[] = $row;                                     ////////// 2D ARRAY
      $number = $number+1;
    }
//////////////////////////////////////INSERTING IN THE DATABASE ////////////////////////////////////////////////////////////////////////////////////////
  if($number==1){                                         ////////// if inserted email already existis stop
    echo "found";
    die();
  }
  else{
        $password = md5($password);                ///////////// encrypt password              
        $sql_query = "INSERT INTO users (email , name , password )
          VALUES ('$email', '$name', '$password')";                            ////// insert into the db
        $sql= mysqli_query($db,$sql_query);

      }


         $sql_query = "SELECT * FROM users WHERE email='$email'";     // bad idea but i am retaking the entire row to send it with the depratments data
        $sql= mysqli_query($db,$sql_query);
        while($row = $sql->fetch_array())
      {
        $rows[] = $row;
      }
          $sql_query = "SELECT * FROM department";
          $sql= mysqli_query($db,$sql_query);
          while($row1 = $sql->fetch_array())                           ////////// converting the rows into an array
          {
          $rows2[] = $row1;                                     ////////// 2D ARRAY
          }



          $result = array_merge($rows2, $rows);               //merge the depratments array and the user row into one big 2D array
         echo json_encode($result);                         ////// encode 2D array into json string and send it back to js

 ?>
