
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, boyImage, stone, treeImage;
var mango1 , mango2, mango3, mango4, mango5;
var chain;
var gameState;

function preload()
{
  boyImage = loadImage("sprites/boy.png")
  treeImage = loadImage("sprites/tree.png")
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;
  ground = new Ground(200, 380, 400, 70);
  stone = new Stone(80, 300);

  mango1 = new Mango(260, 200, 15);
  mango2 = new Mango(340, 200, 15);
  mango3 = new Mango(320, 180, 15);
  mango4 = new Mango(310, 210, 15);
  mango5 = new Mango(280, 220, 15);

  chain = new Chain({x: 80, y: 300}, stone.body);
  gameState = "PLAY";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#81c2f7");
  
  drawSprites();
  ground.display();
  
  imageMode(CENTER);
  image(treeImage, 300, 250, 140, 200);

  chain.display();

  imageMode(CENTER);
  image(boyImage, 100, 325, 70, 100);
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);

  if(gameState === "END") {
    text("Press Space for a another chance", 10, 20);
  }
 
}

function mouseDragged(){
  if(chain.chain.bodyB){
      Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
  }
}


function mouseReleased(){
  chain.fly();
  gameState = "END";
}

function detectCollision(lstone, lmango) {
  mangoPosition = lmango.body.position;
  stonePosition = lstone.body.position;

  var distance = dist(mangoPosition.x, mangoPosition.y, stonePosition.x, stonePosition.y);

  if(distance <= 10+7.5){
    Matter.Body.setStatic(lmango.body, false)
  }
}

function keyPressed() {
  if(keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x: 80, y: 300});
    chain.attach(stone.body);
    gameState = "PLAY";
  }
}



