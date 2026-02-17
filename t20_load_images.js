/*******************************************************/
// P5.play: t20_load_images
// load & display images
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function preload(){
	imgBG = 
	loadImage('/assets/images/space.jpg');
	imgFace = loadImage('/assets/images/face.png')
}
function setup() {
console.log("setup: ");
cnv = new Canvas(1000,1000);
ball_1 = new Sprite(100/2, 100/2, 50, 'd');
ball_1.bounciness = 1;
ball_1.friction   = 0;
ball_1.image = (imgFace);
imgFace.resize(50, 50);
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(imgBG);
}

/*******************************************************/
//  END OF APP
/*******************************************************/