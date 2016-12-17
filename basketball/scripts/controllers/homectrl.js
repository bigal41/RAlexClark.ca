function HomeCtrl( $scope ) {
	
	var homectrl = this;
    
    homectrl.sessions = [ "June 2016", "February 2016", "September 2015",  "June 2015", "February 2015" ];
    
    homectrl.divisions = [ ];
	
	console.log("Home Controller reporting for duty.");	
    
    homectrl.goToDivision = function( division ){
       
        $scope.mainctrl.selectedDivision = division;
        
        window.location.replace( window.location.origin + window.location.pathname + "#/division" );
    }
    
    homectrl.setSession = function( session ){
        homectrl.sessionName = session;
        
        //We need to get the Divisions
        $.ajax( {
            url: "data/getdivisions.php",
            data: { session : homectrl.sessionName },
            method: "GET",
            success: function( response, status ) {

            	//we need to save the response
                var divisions = JSON.parse( response );

                //we need to clear out the old divisions
                homectrl.divisions = [ ];

                divisions.forEach( function(item, index){
                    homectrl.divisions.push( item );
                })
                
                 $scope.$apply();
            }
        });
        
    };		
    
    
    homectrl.setSession( "June 2016" );
    
    
}