angular.module('clockApp', []).controller('ClockCtrl', function($interval) {

	var clockctrl = this;     
    
   $interval(function( ){
		clockctrl.time = new Date( );
        
      var h = clockctrl.time.getHours( );
      var m = clockctrl.time.getMinutes( );
      var s = clockctrl.time.getSeconds( );
		 
		var r = ( Math.round( 100 * ( h / 23 ) ) ).toString ( 16 );
		var g = ( Math.round( 100 * ( m / 59 ) ) ).toString ( 16 );
		var b = ( Math.round( 100 * ( s / 59 ) ) ).toString ( 16 );
		
		r = (r.length === 1 ? "0" : "") + r;
		g = (g.length === 1 ? "0" : "") + g;
		b = (b.length === 1 ? "0" : "") + b;
		
		$('body').attr("style", "background-color:#" + r + g + b);
		  
	}, 1);

});
