/*                                           This Game is created by Aditya with the help of WHITEHAT EDUCATION TECHNOLOGY PRIVATE LIMITED On Visual Studio Code
                                                         All the Images used are credited to WHITEHAT EDUCATION TECHNOLOGY PRIVATE LIMITED 
															 We Request you not to Copy -Paste our coding without creditng it to us        
																						JavaScript Coding     
																			   Project Name- Deadly Mission 2
															               Orignal Project Name- Supply Mission 2        
																						JavaScript Coding                                                                                       */


// Created Variables helicopterIMG, helicopterSprite, packageSprite,packageIMG.
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;

// Created variables packageBody,ground,box1,box2,box3.
var packageBody,ground,box1,box2,box3;

// Created Constant Engine = Matter.Engine, World = Matter.World, Bodies = Matter.Bodies, Body = Matter.Body.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// Function preeload
function preload()
{

	// Loading helicopterIMG.
	helicopterIMG=loadImage("helicopter.png")

	// Loading packageIMG.
	packageIMG=loadImage("package.png")

}

// Function setup
function setup() {

	// Creating Canvas with size 800x700.
	createCanvas(800, 700);
	rectMode(CENTER);
	
    // Creating Package Sprite and assigning it its image and scale.
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	// Creating Helicopter Sprite and assigning it its image and scale.
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	// Creating Ground Sprite and Giving it Colour.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	// Creating Box1 which is the left hand side box.
	// Giving Box1 RED colour.
	box1=createSprite(300, 610, 20, 100, {isStatic:true});
	box1.shapeColor = "red";
	
	// Creating Box2 which is the right hand side box.
	// Giving Box2 RED colour.
	box2=createSprite(500, 610, 20, 100, {isStatic:true});
	box2.shapeColor = "red";
	
	// Creating Box3 which is the horizontal box.
	// Giving Box3 RED colour.
	box3=createSprite(400, 650, 200, 20, {isStatic:true});
	box3.shapeColor = "red";
	
	// So "engine" will create Engine.
	engine = Engine.create();

	// So "world" will make engine.world.
	world = engine.world;
	
	// Making package sprite and giving it physical properties.
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5});
	Matter.Body.setStatic(packageBody, true);

	// So world and packageBody are added to World.
	World.add(world, packageBody);
	

	// Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
 	World.add(world, ground);

    // To update engine
	Engine.run(engine);
  
}


// Function Draw
function draw() {
	// To make its center the center.
  rectMode(CENTER);

  // To make Background White.
  background(0);

  // So Sprite's and Body's X and Y position are same.
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  // To make everything visible. 
  drawSprites();
 
}

//To make Package fall on pressing DOWN KEY.
function keyPressed() {
 if (keyCode === DOWN_ARROW) {

     Matter.Body.setStatic(packageBody, false);
    
  }
}


