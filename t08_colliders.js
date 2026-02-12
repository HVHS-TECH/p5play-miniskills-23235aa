/*******************************************************/
// P5.play: t08_colliders
// Work with colliders
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
cnv= new Canvas(1000,1000)
alienGroup = new Group();
wallLH  = new Sprite(0, 1000/2, 8, 1000, 'k');
wallLH.color = 'black';
wallRH  = new Sprite(1000, 1000/2, 5, 1000, 'k');
wallRH.color = 'blue';
wallBot = new Sprite(500,1000,1000,50,'k');
wallBot.color = 'red';
wallTop = new Sprite(500, 10, 1000, 50, 'k');
ball_1 = new Sprite(100/2, 1000/2, 50, 'd');
ball_1.color = 'cyan';
ball_1.vel.x = 2;
ball_1.bounciness = 5;
ball_1.friction = 20;
ball_1.drag = 1;
for (i = 0; i < 10; i++) {
  alien = new Sprite(100,200,40,70,'d');
  alien.vel.x = randNum = random(10, 200);
  alien.vel.y = randNum = random(-2,20);
  alien.bounciness = 1;
  alien.friction = 0;
  alienGroup.collides(ball_1, func2Call);
  function func2Call(_alien, _ball_1){
	_alien.remove();
}
}
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