/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
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
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('white')
	Rectangle.moveTowards(mouseX, mouseY, 0.5);
}

/*******************************************************/
//  END OF APP
/*******************************************************/