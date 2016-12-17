$(function(){

	/////////////////////////////////////
	//	MEMEBRS 
	/////////////////////////////////////

	var canvas,ctx,cHeight,cWidth,newDirection,direction,message,score,pixelSize,rate;
   
   var gStart			= false;
   var gPaused			= false;
   
   var snake = [];
   var food = [];

	/////////////////////////////////////
	//	METHODS
	/////////////////////////////////////

	/**
	 * -- This function checks to see if the canvas is compatiable with your browser
	 * -- Some browsers can not handle canvas.
	 */
	function checkSupported()
	{
		canvas = $("#canvas")[0];
		if(canvas.getContext)
		{
			ctx = canvas.getContext('2d');
		} 
		else
		{
			alert("We're sorry but your browser does not support canvas. Please update your browser");
		}
	}
   
   

	/**
	 * -- This  is the initial function, this creates the variables and the movement listeners.
	 */
	function init(h,w,ps,r)
	{
		cHeight 	= h;
		cWidth 		= w;
		pixelSize	= ps;
		rate		= r;
		canvas.height = cHeight * pixelSize;
		canvas.width = cWidth * pixelSize;

		$(document).keydown(function(e){
			switch(e.which)
			{
				case 37: 
            case 65:
					if( direction != 'right' )
						newDirection = 'left';
					break;
				case 38:
            case 87:
					if( direction != 'down' )
						newDirection = 'up';
					break;
				case 39:
            case 68:
					if( direction != 'left' )
						newDirection = 'right';
					break;
				case 40:
            case 83:
					if( direction != 'up' )
						newDirection = 'down';
					break;
				case 32:
            case 13:
					if( !gStart )
						startGame();
					else	
						togglePause();
               break;
				case 80:
               togglePause();
					break;

			}
		});

		showIntro();
	}

	/**
	 * -- This will create an intro screen for the game. 
	 * -- It will show the instructions.
	 */
	function showIntro()
	{
      ctx.fillStyle 	= 'blacks';
	 	ctx.fillRect(0,0,cWidth*pixelSize,cHeight*pixelSize);

	 	ctx.fillStyle 	= 'white';
	 	ctx.font 		= '30px sans-serif';
	 	ctx.textAlign	= 'center';
	 	ctx.fillText('Snake',cWidth/2*pixelSize, cHeight/4*pixelSize,cWidth*pixelSize);

		ctx.font		= '12px sans-serif';
		ctx.fillText('Arrows or WASD = change direction', cWidth/2*pixelSize, cHeight/2*pixelSize);
		ctx.fillText('Space/Enter = Start or Pause game', cWidth/2*pixelSize, cHeight/1.5*pixelSize);
	}

	/**
	 * -- This is the start function of the game. This creats the snake. 
	 */ 
	function startGame()
	{
	  	var x = Math.floor(cWidth/2), y = Math.floor(cHeight/2);

	  	genFood();
	  	snake = [
	  		[x, y],
	  		[--x, y],
	  		[--x, y],
	  		[--x, y]
	  	];

	  	direction 	   = 'right';
      newDirection   = 'right';
	  	score 		   = 0;
	  	gStart 		   = true;
	  	gPaused 	      = false;
	  	frame();
	}

   /**
    * -- This is the end game function
    */
   function endGame() 
   {
      gStart = false;
      ctx.fillStyle = 'rgba(0,0,0,0.8)';
      ctx.fillRect(0, 0, cWidth*pixelSize, cHeight/2*pixelSize);
      ctx.fillStyle = '#f00';
      ctx.font = '20px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Game Over', cWidth/2*pixelSize, cHeight/2*pixelSize);
      ctx.fillStyle = '#fff';
      ctx.font = '12px sans-serif';
      ctx.fillText('Score: ' + score, cWidth/2*pixelSize, cHeight/1.5*pixelSize);
   }
     
   /**
    *
    */
   function togglePause()
   {
      if(!gPaused)
      {
         gPaused = true;
         ctx.fillSyle = '#fff';
         ctx.font = '20px sans-serif';
         ctx.textAlign = 'center';
         ctx.fillText('Paused', cWidth/2*pixelSize, cHeight/2*pixelSize);
      }
      else
      {
         gPaused = false;
         frame();
      }
   }
   
   /**
    * -- This function checks for any collisions between objects. 
    */
   function testCollision(x, y)
   {
      var i, l;
      if( x < 0 || x > cWidth - 1)
      {
         return true;
      }
      if( y < 0 || y > cHeight - 1)
      {
         return true;
      }
      for(i = 0, l = snake.length; i < l; i++)
      {
         if(x == snake[i][0] && y == snake[i][1])
         {
            return true;
         }
      }
      
      
      return false;
   }
   
   /**
    * -- This function generates the new food;
    */
   function genFood()
   {  
      var x, y;
      do
      {
         x = Math.floor(Math.random()*(cWidth-1));
         y = Math.floor(Math.random()*(cHeight-1));
      } while( testCollision(x, y));
      
      food = [x,y];
   }
   
   /**
    * -- This draws the snake
    */
   function drawSnake()
   {
      var i, l, x, y;
      
      for(i = 0, l = snake.length; i < l; i++)
      {
         x = snake[i][0];
         y = snake[i][1];
         ctx.fillRect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);
         ctx.strokeStyle = "#000";
         ctx.strokeRect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);
      }
   }
    
   /**
    * -- This draws the food
    */
   function drawFood()
   {
      ctx.fillRect(food[0]*pixelSize, food[1]*pixelSize, pixelSize, pixelSize);
      ctx.strokeStyle = "#000";
      ctx.strokeRect(food[0]*pixelSize, food[1]*pixelSize, pixelSize, pixelSize);
   }
   
   /**
    *
    */
   function frame() 
   {
      if(!gStart || gPaused)
      {
         return;
      }
      
      var x = snake[0][0], y = snake[0][1];
      
      switch(newDirection)
      {
         case "up":
            y--;
            break;
         case "right":
            x++;
            break;
         case "down":
            y++;
            break;
         case "left":
            x--;
            break;
      }
      
      if(testCollision(x, y))
      {
         endGame();
         return;
      }
      
      snake.unshift([x,y]);
      
      if(x == food[0] && y == food[1])
      {
         score++;
         genFood();
      }
      else
      {
         snake.pop();
      }
      
      direction = newDirection;
      
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, cWidth*pixelSize, cHeight*pixelSize);
      ctx.fillStyle = '#fff';
      drawFood();
      drawSnake();
      
      setTimeout(frame, rate);
   }
   checkSupported();
   init(50,50,10,75);
	/**
	 * -- This creates a each snake piece and adds it to an array
	 */
	



});