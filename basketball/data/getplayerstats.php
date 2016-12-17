<?php 

	include('connection.php');

	$connection = new createConnection( );
	$connection->connectToDatabase();
	$connection->selectDatabase();

	$playerID = $_GET['playerID'];

	$sql = "SELECT
					statitistics.game_id as gameID,
					(SELECT games.away_team_name from games where games.id = gameID) as opponent,
					statitistics.points as points,
					statitistics.rebounds as rebounds,
					statitistics.assists as assists,
					statitistics.blocks as blocks,
					statitistics.steals as steals
				FROM statitistics
				WHERE statitistics.player_id = ".$playerID;

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