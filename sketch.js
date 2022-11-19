
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;

function setup() {
	createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(500,490,1000,20);
	leftSide = new Ground(900,420,20,120);
	rightSide = new Ground(800,420,20,120);

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(220,10,30,ball_options);
	World.add(world,ball);
  
	ellipseMode(RADIUS);
	rectMode(CENTER);
}


function draw() {
  background(0);

  ellipse(ball.position.x,ball.position.y,15);
	
  groundObj.show();
  leftSide.show();
  rightSide.show();

  Engine.update(engine);
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:150,y:-165});
	}
}



