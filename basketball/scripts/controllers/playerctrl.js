function PlayerCtrl( $http, $scope ) {
	
	var playerctrl = this;
	
	if( $scope.mainctrl.player )
	{
		
		$scope.player = $scope.mainctrl.player;
		
		$scope.statsOptions = { enableRowSelection: true, enableRowHeaderSelection: false };
		/**
		 * Options for the statistics table
		 */	
		$scope.statsOptions.columnDefs = [
			{ name: 'gameID', visible: false },
			{ name: 'opponent', displayName: "Opponent"},
			{ name: 'points', displayName: "Points"},
			{ name: 'rebounds', displayName: "Rebounds"},
			{ name: 'assists', displayName: "Assists"},
			{ name: 'blocks', displayName: "Blocks"},
			{ name: 'steals', displayName: "Steals"}
		];

		$scope.statsOptions.multiSelect = false;
		$scope.statsOptions.modifierKeysToMultiSelect = false;
		$scope.statsOptions.noUnselect = true;
		$scope.statsOptions.onRegisterApi = function ( gridApi ) {
			$scope.gridApi = gridApi;
			gridApi.selection.on.rowSelectionChanged( $scope, onGameSelect );
		}
		
		function onGameSelect( row, event )
		{
			console.log("Game Select");
			$scope.mainctrl.game = row.entity;
			window.location.replace( window.location.origin + window.location.pathname + "#/game" );
		}
		
		$.ajax({
			url: "data/getplayerstats.php",
			data: { playerID : $scope.player.playerID },
			method: "GET",
			success: function( response, status ) {
				$scope.statsOptions.data = JSON.parse( response );
			}
		});
		
	}
		
}