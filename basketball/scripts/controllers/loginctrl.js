function LoginCtrl( $http, $scope ) {
	
	$('#loginform').submit( function( event) {
	
		console.log( "username: " + $('#username').val( ) );
		console.log( "password: " + $('#password').val( ) );
		
		$.ajax({
		
			url: "data/login.php",
			data: {username: $('#username').val( ), password: $('#password').val( ) },
			method: "POST",
			success: function( response, status ) {
				console.log( response );
			},
			error:  function( response, status ) {
				console.log('Failed');
			}
			
			
		});
		
		event.preventDefault( );
	
	});
	
}