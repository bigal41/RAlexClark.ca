function DivisionCtrl( $http, $scope ) {
	//http://plnkr.co/edit/?p=preview	
	
	//MEMBERS
//	var teamsRequest, statsRequest;
	
	/**
	 * Options for the team Standing Table. 
	 */
//	$scope.standingOptions = { enableRowSelection: true, enableRowHeaderSelection: false };
//	$scope.statsOptions = { enableRowSelection: true, enableRowHeaderSelection: false };
//	$scope.scheduleOptions = { enableRowSelection: true, enableRowHeaderSelection: false };

//	$scope.standingOptions.columnDefs = [
//		{ name: 'i', visible: false },
//	 	{ name: 'division', visible: false },
//		{ name: 'name', displayName: "Team Name", width: 250},
//		{ name: 'gamesPlayed', displayName: "GP", width: 75},
//		{ name: 'wins', displayName: "W", width: 75},
//		{ name: 'losses', displayName: "L", width: 75},
//		{ name: 'pointsFor', displayName: "PF", width: 75},
//		{ name: 'pointsAgainst', displayName: "PA", width: 75},
//		{ name: 'points', displayName: "PTS", width: 75},
//		{ name: 'pointDiff', displayName: "PD", width: 75},
//		{ name: 'winningPer', displayName: "WP"}
//	];
//	
//	$scope.standingOptions.multiSelect = false;
//    $scope.standingOptions.modifierKeysToMultiSelect = false;
//  	$scope.standingOptions.noUnselect = false;
//	$scope.standingOptions.onRegisterApi = function ( gridApi ) {
//		$scope.gridApi = gridApi;
//		gridApi.selection.on.rowSelectionChanged( $scope, onTeamSelect );
//	}
	
	/**
	 * Options for the schedule table
	 */
//	
//	$scope.scheduleOptions.columnDefs = [
//		{ name: 'gameID', visible: false },
//		{ name: 'date', displayName: "Date"},
//		{ name: 'home', displayName: "Home", width: 250},
//		{ name: 'score', displayName: ""},
//		{ name: 'away', displayName: "Away", width: 250},
//		{ name: 'timeStatus', displayName: "Time/Status"},
//		{ name: 'venue', displayName: "Venue"},
//		{ name: 'gameType', displayName: "Game Type"},
//	];
//	
//	$scope.scheduleOptions.multiSelect = false;
//    $scope.scheduleOptions.modifierKeysToMultiSelect = false;
//  	$scope.scheduleOptions.noUnselect = true;
//	$scope.scheduleOptions.onRegisterApi = function ( gridApi ) {
//		$scope.gridApi = gridApi;
//		gridApi.selection.on.rowSelectionChanged( $scope, onGameSelect );
//	}
	
	
	/**
	 * Options for the statistics table
	 */	
//	$scope.statsOptions.columnDefs = [
//		{ name: 'teamID', visible: false },
//		{ name: 'teamName', visible: false },
//		{ name: 'playerID', visible: false },
//		{ name: 'name', displayName: "Player"},
//		{ name: 'gamesPlayed', displayName: "GP", width: 75},
//		{ name: 'totalPoints', displayName: "Points"},
//		{ name: 'totalRebounds', displayName: "Rebounds"},
//		{ name: 'totalAssists', displayName: "Assists"},
//		{ name: 'totalBlocks', displayName: "Blocks"},
//		{ name: 'totalSteals', displayName: "Steals"},
//		{ name: 'avgPoints', displayName: "Avg Pt"}
//	];
//	
//	$scope.statsOptions.multiSelect = false;
//    $scope.statsOptions.modifierKeysToMultiSelect = false;
//    $scope.statsOptions.noUnselect = true;
//	$scope.statsOptions.onRegisterApi = function ( gridApi ) {
//		$scope.gridApi = gridApi;
//		gridApi.selection.on.rowSelectionChanged( $scope, onPlayerSelect );
//	}
	
	/**
	 * Handles a row select on the standings grid. 
	 * Calls two requests to the db. 
	 *   1. Gets the selected teams schedule
	 *   2. Gets the selected teams player stats. 
	 */
//	function onTeamSelect( row, event )
//	{
//		if( ( $scope.team === undefined || $scope.teamName === row.entity.name ) && row.isSelected )
//		{
//			
//			$scope.teamName = row.entity.name;
//
//			$.ajax({
//				url: "data/getteamstats.php",
//				data: { teamID : row.entity.i },
//				method: "GET",
//				success: function( response, status ) {
//					$scope.statsOptions.data = JSON.parse( response );
//				}
//			});
//
//			$.ajax({
//				url: "data/getteamschedule.php",			
//				data: { teamID : row.entity.i },
//				method: "GET",
//				success: function( response, status ) {
//					$scope.scheduleOptions.data = JSON.parse( response );
//				}
//			});
//		}
//		else
//			getDivisionData( );
//	}
//	
//	function onGameSelect( row, event )
//	{
//		console.log("Game Select");
//		$scope.mainctrl.game = row.entity;
//		window.location.replace( window.location.origin + window.location.pathname + "#/game" );
//	}
	
//	function onPlayerSelect( row, event )
//	{
//		console.log("Player Select");
//		$scope.mainctrl.player = row.entity;
//		window.location.replace( window.location.origin + window.location.pathname + "#/player" );
//	}
        
//	
//	function getDivisionData( )
//	{
//		$.ajax({
//			url: "data/getallstats.php",
//			data: { divisionID : 1 },
//			method: "GET",
//			success: function( response, status ) {
//				$scope.statsOptions.data = JSON.parse( response );
//			}
//		});
//
//		$.ajax({
//			url: "data/getschedule.php",
//			data: { divisionID : 1 },
//			method: "GET",
//			success: function( response, status ) {
//				$scope.scheduleOptions.data = JSON.parse( response );
//			}
//		});
		
//	}	
	
	
	//On Startup
	$.ajax({
		url: "data/getteams.php",
		data: { divisionID : $scope.mainctrl.selectedDivision.division_id },
		method: "GET",
		success: function( response, status ) {
//			$scope.standingOptions.data = JSON.parse( response );
            console.log( JSON.parse( response ) );
		}
	});
	
	//getDivisionData( );
	
}