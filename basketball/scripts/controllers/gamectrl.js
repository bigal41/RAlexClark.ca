function GameCtrl( $http, $scope ) {
	
	var gamectrl = this;
	
	console.log("Game Controller reporting for duty.");
	
	if( $scope.mainctrl.game )
	{
		
		$scope.game = $scope.mainctrl.game;
		
		$scope.awayStatsOptions = { enableRowSelection: true, enableRowHeaderSelection: false };
		$scope.homeStatsOptions = { enableRowSelection: true, enableRowHeaderSelection: false };
		
		$scope.awayStatsOptions.columnDefs = [
			
			{ name: 'teamID', visible: false },
			{ name: 'teamName', visible: false },
			{ name: 'playerID', visible: false },
			{ name: 'name', displayName: "Player"},
			{ name: 'points', displayName: "Points"},
			{ name: 'rebounds', displayName: "Rebounds"},
			{ name: 'assists', displayName: "Assists"},
			{ name: 'blocks', displayName: "Blocks"},
			{ name: 'steals', displayName: "Steals"}
		
		];
		
		$scope.awayStatsOptions.multiSelect = false;
		$scope.awayStatsOptions.modifierKeysToMultiSelect = false;
		$scope.awayStatsOptions.noUnselect = true;
		$scope.awayStatsOptions.onRegisterApi = function ( gridApi ) {
			$scope.gridApi = gridApi;
			gridApi.selection.on.rowSelectionChanged( $scope, onPlayerSelect );
		}
		
		$scope.homeStatsOptions.columnDefs = [
			
			{ name: 'teamID', visible: false },
			{ name: 'teamName', visible: false },
			{ name: 'playerID', visible: false },
			{ name: 'name', displayName: "Player"},
			{ name: 'points', displayName: "Points"},
			{ name: 'rebounds', displayName: "Rebounds"},
			{ name: 'assists', displayName: "Assists"},
			{ name: 'blocks', displayName: "Blocks"},
			{ name: 'steals', displayName: "Steals"}
			
		];
		
		$scope.homeStatsOptions.multiSelect = false;
		$scope.homeStatsOptions.modifierKeysToMultiSelect = false;
		$scope.homeStatsOptions.noUnselect = true;
		$scope.homeStatsOptions.onRegisterApi = function ( gridApi ) {
			$scope.gridApi = gridApi;
			gridApi.selection.on.rowSelectionChanged( $scope, onPlayerSelect );
		}
		
		function onPlayerSelect( row, event )
		{
			console.log("Player Select");
			$scope.mainctrl.player = row.entity;
			window.location.replace( window.location.origin + window.location.pathname + "#/player" );
		}
		
		$.ajax({
			url: "data/getgamestats.php",
			data: { gameID : $scope.game.gameID, teamID : $scope.game.awayID},
			method: "GET",
			success: function( response, status ) {
				$scope.awayStatsOptions.data = JSON.parse( response );
			}
		});
		
		$.ajax({
			url: "data/getgamestats.php",
			data: { gameID : $scope.game.gameID, teamID : $scope.game.homeID},
			method: "GET",
			success: function( response, status ) {
				$scope.homeStatsOptions.data = JSON.parse( response );
			}
		});
		
	}
	
}