<?php
  
    include ('connection.php');

	$connection = new createConnection();
	
	$connection->connectToDatabase();

	$connection->selectDatabase();

	$divisionID = $_GET['divisionID'];
   
    $sql = "SELECT * FROM team WHERE division_id = ".$divisionID;

    $result = mysqli_query($connection->myconn, $sql);
   
    $rows = array( );
    
    if (mysqli_num_rows($result) > 0) {
        while( $r = mysqli_fetch_assoc($result)){
            $rows[] = $r;
        }
    }

   $json_string = json_encode($rows, JSON_PRETTY_PRINT);
   
    echo $json_string;

	$connection->closeConnection();
 ?>