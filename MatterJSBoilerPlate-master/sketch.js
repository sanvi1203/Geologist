
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,ground,rubber;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer = new Hammer(mouseX,mouseY,150,100);
	rubber = new Rubber(300,300,100)
	ground = new Plane(400,700,800,20);
	stone = new Stone(100,100,50,50);



  
}


function draw() {

 Engine.update(engine);

 hammer.depth = stone.depth 
 hammer.depth =  hammer.depth + 1


  rectMode(CENTER);
  background(0);
  


  drawSprites();

  hammer.display();
  rubber.display();
  ground.display();
  stone.display();
 
 
}



