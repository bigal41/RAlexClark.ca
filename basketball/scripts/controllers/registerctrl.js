function RegisterCtrl( $http, $scope ) {
	
	console.log('Register Page Loaded');
	
	$('#registerform').submit( function( event) {
	
		console.log( "name: " + $('#firstname').val() + $('#lastname').val() );
		console.log( "email: " + $('#email').val() );
		console.log( "dob: " + $('#dob').val() );
		console.log( "username: " + $('#username').val( ) );
		console.log( "password: " + $('#password').val( ) );
		
		$.ajax({
		
			url: "data/register.php",
			method: "POST",
			data: {
				username: $('#username').val( ), 
				password: $('#password').val( ),
				firstname: $('#firstname').val(),
				lastname: $('#lastname').val(),
				email:$('#email').val(),
				dob: $('#dob').val(),
			},
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