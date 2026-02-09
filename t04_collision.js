/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
cnv= new Canvas(1000,1000);
Rectangle = new Sprite(200,200,200,200,'d');
Rectangle.colour = '#0000FF';
Rectangle.rotationSpeed = 2;
Rectangle.vel.x=2;
world.gravity.y=10;
platform_1 = new Sprite(500,300,300,400,'k');
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