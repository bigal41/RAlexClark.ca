<?php
    
    include ('connection.php');

	$connection = new createConnection();
	
	$connection->connectToDatabase();

	$connection->selectDatabase();

    $sessionName = $_GET['session'];

    $sql = "SELECT * FROM division WHERE session = '" .$sessionName. "'";

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
