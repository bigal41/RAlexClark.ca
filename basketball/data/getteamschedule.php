<?php
  
   include ('connection.php');

	$connection = new createConnection();
	
	$connection->connectToDatabase();

	$connection->selectDatabase();

	$teamID = $_GET['teamID'];
   
   $sql = "SELECT id as gameID, DATE_FORMAT( date, \"%a-%b-%d\" ) as date, ome_team_id as homeID, home_team_name as home, CONCAT( CONCAT( home_team_score, \" - \" ), away_team_score ) as score, away_team_id as awayID, away_team_name as away, time_status as timeStatus, venue as venue, game_type as gameType FROM games WHERE home_team_id = " . $teamID ." or away_team_id = ".$teamID;

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