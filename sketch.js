
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof1;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth/2, windowHeight/1.5);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new roof(300, 20, 620, 50);
	
	bobObject1 = new Bob(90, 450, 100);
	bobObject2 = new Bob(200, 450, 100);
	bobObject3 = new Bob(310, 450, 100);
	bobObject4 = new Bob(420, 450, 100);
	bobObject5 = new Bob(530, 450, 100);
	rope1 = new Rope(bobObject1.body, roof1.body, -210, 5);
	rope2 = new Rope(bobObject2.body, roof1.body, -100, 5);
	rope3 = new Rope(bobObject3.body, roof1.body, 10, 5);
	rope4 = new Rope(bobObject4.body, roof1.body, 120, 5);
	rope5 = new Rope(bobObject5.body, roof1.body, 230, 5);
	
	Engine.run(engine);
  
}


function draw() {
 	rectMode(CENTER);
  	background(0);
  
	
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();


  	drawSprites();
 
}
function mouseDragged(){
		Matter.Body.setPosition(bobObject5.body, {x: mouseX, y: mouseY});

}



