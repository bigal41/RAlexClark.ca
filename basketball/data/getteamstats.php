<?php 

	include('connection.php');

	$connection = new createConnection( );
	$connection->connectToDatabase();
	$connection->selectDatabase();

	$teamID = $_GET['teamID'];
	
	$select_clause = "SELECT players.team_id as teamID,
    								 players.team_name as teamName,
									 players.id as playerID,
								    players.first_name as name, 
									 Count(statitistics.game_id) as gamesPlayed,
						  			 SUM(statitistics.points) as totalPoints,
									 SUM(statitistics.rebounds) as totalRebounds,
									 SUM(statitistics.assists) as totalAssists,
									 SUM(statitistics.blocks) as totalBlocks,
									 SUM(statitistics.steals) as totalSteals,
									 AVG(statitistics.points) as avgPoints";

	$from_clause = "FROM statitistics, players, teams";

	$where_clause = "WHERE statitistics.player_id = players.id AND players.team_id = teams.id". 
						 " AND teams.id = ". $teamID;

	$group_by_clause = "GROUP BY statitistics.player_id";

	$sql = $select_clause." ".$from_clause." ".$where_clause." ".$group_by_clause;

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