/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
console.log("setup: ");
width = random(300,600);
height = random(300,600);


cnv = new Canvas(width, height);
red = new Sprite(0, 0 ,100,100);
red.color = 'red';
green = new Sprite( width, 0 ,  100,100);
green.color = 'green';
blue = new Sprite( width, height ,  100,100);
blue.color = 'blue';
yellow = new Sprite( 0, height ,  100,100);
yellow.color = 'yellow';
purple = new Sprite( width/2, height/2 ,  100,100);
purple.color = 'purple';
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
background('#ffffff')
}

/*******************************************************/
//  END OF APP
/*******************************************************/