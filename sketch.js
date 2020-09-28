
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var ball,ground;
var d1,d2,d3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	
	var options = {

		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

	var options2 = {
		isStatic:true
	}

	
	//Create the Bodies Here.
	d1 = new box(200,200,50,50,options2);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  d1.display();
  drawSprites();
 
}


