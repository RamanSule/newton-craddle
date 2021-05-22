
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roof
var rope1,rope2,rope3, rope4,rope5;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof =new Roof(400,100,400,50);
bob1 = new Ball(200,300,100);
bob2 = new Ball(300,300,100);
bob3 = new Ball(400,300,100);
bob4 = new Ball(500,300,100);
bob5 = new Ball(600,300,100);
rope1 = new Rope(bob1.body, roof.body, -200, 0)
rope2 = new Rope(bob2.body, roof.body, -100, 0)
rope3 = new Rope(bob3.body, roof.body, 0, 0)
rope4 = new Rope(bob4.body, roof.body, 100, 0)
rope5 = new Rope(bob5.body, roof.body, 200, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display(); 
  bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-50,y:-45});

	}
}

