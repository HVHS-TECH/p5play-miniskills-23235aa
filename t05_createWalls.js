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
wallLH  = new Sprite(0, 1000/2, 8, 1000, 'k');
wallLH.color = 'black';
wallRH  = new Sprite(1000, 1000/2, 5, 1000, 'k');
wallRH.color = 'blue';
platform_1 = new Sprite(500,1000,1000,50,'k');
wallTop = new Sprite(500, 10, 1000, 50, 'k');
ball_1 = new Sprite(100/2, 1000/2, 50, 'd');
ball_1.color = 'cyan';
ball_1.vel.x = 70;
ball_1.bounciness = 5;
ball_1.friction = 20;
ball_1.drag = 1;
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