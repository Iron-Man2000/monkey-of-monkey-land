
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  

  ground = createSprite(400,350,1200,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup(); 
}


function draw() {
  background("white");
  textSize(20);
  
  monkey.collide(ground);
  //console.log(World.frameCount)
    
    text("Score : "+ score,100,50);
    
    bananaPlayz();
    obstaclePlayz();
    
    if(keyDown("space") && monkey.y >=314.3){
      monkey.velocityY = -10;
    }
    monkey.velocityY = monkey.velocityY+0.5;
    
    if(bananaGroup.isTouching(monkey)){
      score = score+2;
      bananaGroup.destroyEach();
    }
    
    if(ground.x < 0){
      ground.x = ground.width/2;
    }
      
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.setVelocityXEach(0);
  }
  else {
  obstacleGroup.setVelocityXEach(-7);
  }
  
  drawSprites();
}
      function bananaPlayz(){
    if(frameCount%80===0){
      banana = createSprite(600,160,20,20);
      banana.velocityX = -7;
      banana.addImage(bananaImage);
      banana.scale = 0.1;
      banana.y = Math.round(random(120,220));
      
      banana.lifetime = 11.4285714;
      
      bananaGroup.add(banana);
    }
  }
    
    function obstaclePlayz(){
      if(frameCount%300===0){
        obstacle = createSprite(600,330,20,20);
        obstacle.velocityX = -7;
        obstacle.addImage(obstacleImage);
        obstacle.scale = 0.1;
        
        obstacle.lifetime = 42.8571429;
        
        obstacleGroup.add(obstacle);
      }
    }




