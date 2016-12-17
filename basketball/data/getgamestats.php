<?php 

	include('connection.php');

	$connection = new createConnection( );
	$connection->connectToDatabase();
	$connection->selectDatabase();

	$gameID = $_GET['gameID'];
	$teamID = $_GET['teamID'];

	$sql = "SELECT
					players.team_id as teamID,
					players.team_name as teamName,
					players.id as playerID,
					players.first_name as name, 
					statitistics.points as points,
					statitistics.rebounds as rebounds,
					statitistics.assists as assists,
					statitistics.blocks as blocks,
					statitistics.steals as steals
				FROM statitistics, players
				WHERE players.id = statitistics.player_id and statitistics.team_id = ".$teamID." and statitistics.game_id = ".$gameID;

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