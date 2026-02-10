/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
console.log("setup: ");
cnv= new Canvas(1000,1000);
wallLH  = new Sprite(0, 800/2, 8, 800, 'k');
wallLH.color = 'black';
wallRH  = new Sprite(1000, 800/2, 5, 800, 'k');
wallRH.color = 'blue';
wallTop = new Sprite(200, 800/2, 0, 800, 'k');
wallTop.color = 'red';
wallBot = new Sprite(500, 400, 200, 100, 'k');
ball_1 = new Sprite(100/2, 200/2, 50, 'd');
ball_1.color = 'cyan';
ball_1.vel.x = 2;
ball_1.bounciness = 1;
ball_1.friction = 0;
ball_1.drag = 0;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('white')
}

/*******************************************************/
//  END OF APP
/*******************************************************/