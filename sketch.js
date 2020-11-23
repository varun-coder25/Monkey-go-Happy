
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;

var score = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(800,400);
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  
  ground = createSprite(400,370,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  
  
  FoodGroup = new Group ();
  obstacleGroup = new Group ();
}


function draw() {
background("white");
  
   
  if(ground.x<400){
     ground.x=ground.width/2;
     }
  
  if(keyDown("space") && monkey.y >=280){
     monkey.velocityY=-13;
     }
    monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  if(FoodGroup.isTouching(monkey)){
     FoodGroup.destroyEach();
    score = score+2;
     }
  
  
  
  spawnBanana ();
  spawnObstacle();
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score : "+ score,300,30);
}


function spawnBanana() {
  if (frameCount % 80 == 0){
    var banana = createSprite(600,250,40,10);
    banana.y = random(180,230);
    banana.addImage(bananaImage);
    banana.scale = 0.08;
    banana.velocityX = -5;
    monkey.depth = banana.depth + 1;
    banana.lifetime = 300;
   FoodGroup.add(banana);
    
  }
}

function spawnObstacle () {
  if(frameCount % 300 == 0){
    var obstacle = createSprite(800,330,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}

