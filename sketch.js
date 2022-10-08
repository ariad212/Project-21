
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var groundObj;

function setup() {
	createCanvas(600, 2000);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1600,600,20,120);

	Engine.run(engine);
	rectMode(CENTER);
}


function draw() {
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  rect(groundObj.position.x,groundObj.position.y,2000,100)
 
  ball.show();
  groundObj.display();

  Engine.update(engine);

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
	}
}

