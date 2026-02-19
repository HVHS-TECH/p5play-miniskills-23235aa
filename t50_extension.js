/*******************************************************/
// P5.play: t50_extension
// Extension tasks
// Written by ??
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
cnv= new Canvas(1000,1000);
wallLH  = new Sprite(0, 1000/2, 8, 1000, 'k');
wallLH.color = 'black';
wallRH  = new Sprite(1000, 1000/2, 5, 1000, 'k');
wallRH.color = 'blue';
wallBot = new Sprite(500,1000,1000,50,'k');
wallBot.color = 'red';
wallTop = new Sprite(500, 10, 1000, 50, 'k');
ball_1 = new Sprite(100/2, 1000/2, 50, 'd');
ball_1.color = 'cyan';
ball_1.vel.x = 20;
ball_1.bounciness = 0.5;
ball_1.friction = 20;
ball_1.drag = 1;
shots = new Group();
alienGroup = new Group(); 
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('white')
	ball_1.moveTowards(mouseX, mouseY, 0.5);

	if (kb.pressing('left')){
		Rectangle.vel.x=-2
	}
	else if (kb.pressing('right')){
		Rectangle.velocity.x=2
	};
}
function keyPressed(){
		if (keyCode === 32){
			shootBullet();
	}
};
function shootBullet(){
	 bullet= new Sprite(ball_1.x, ball_1.y, 10, 10);
	bullet.color = 'red';
	bullet.speed = 5;
	bullet.direction = ball_1.rotation;
	shots.add(bullet);
	bullet.life = 60;
	for (i = 0; i < 1; i++) {
  alien = new Sprite(100,200,40,70,'d');
  alien.vel.x =  random(10, 200);
  alien.vel.y = random(-2,20);
  alien.bounciness = 1;
  alien.friction = 0;
  alienGroup.add(alien);
}
alienGroup.collides(bullet, func2Call);
function func2Call(_alien, _bullet){
	_alien.remove();
}
};

/*******************************************************/
//  END OF APP
/*******************************************************/