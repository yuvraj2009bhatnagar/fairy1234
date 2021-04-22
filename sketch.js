const Engine =  Matter.Engine;
const World =  Matter.World;
const Bodies = Matter.Bodies;


var engine , world;
var object ;
var ground ;
var fairy,fairyImg, starImg,star, starbg;


function preload() {

	fairyImg= loadAnimation("fairy1.png", "fairy2.png");
	starImg= loadImage("star.png");
	starbg= loadImage("starnight.png")

}

function setup() {
  var Canvas = createCanvas(800,800);
  


engine = Engine.create();
world = engine.world;



fairy = createSprite(100,600);
fairy.addAnimation("fairy",fairyImg)
fairy.scale=0.2;

star = createSprite(650,30);
star.addImage(starImg);
star.scale = 0.2;

var options ={

	isStatic: true,
	
	}
starBody = Bodies.rectangle(700,50,10,10,options);
World.add(world,starBody)

ground= Bodies.rectangle(200,390,600,20,Option)
World.add(world,ground)

}




function draw() {
  background(starbg);

  star.x=starBody.position.x;
  star.y=starBody.position.y;
Engine.update(engine);


Engine.update(engine);
image(starImg,starBody.position.x,starBody.position.y,20,20)


if(starBody.position.y > 470 && star.y>470  ){
	Matter.Body.setStatic(starBody,true);
}




 drawSprites();
  
}

function keyPressed(){

if(keyCode===LEFT_ARROW){

	fairy.x = fairy.x-30;

}
	
if(keyCode===RIGHT_ARROW){
	
	fairy.x=fairy.x+30;

}



if(keyCode===DOWN_ARROW){
	
    Matter.Body.setStatic(starBody, false);

}
	
}
