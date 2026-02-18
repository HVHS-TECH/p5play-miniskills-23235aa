/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
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
	if (kb.pressing('left')){
		Rectangle.vel.x=-2
	}
	else if (kb.pressing('right')){
		Rectangle.velocity.x=2
	};
	if (kb.released('left')){
		Rectangle.vel.x=0
	}
	else if(kb.released('right')){
		Rectangle.vel.x=0
	};
}

/*******************************************************/
//  END OF APP
/*******************************************************/