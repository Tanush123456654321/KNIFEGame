var PLAY=1
var END=0
var gameState=PLAY
function preload(){
knifeImage=loadImage("sword.png")
fruit1=loadImage("fruit1.png")
fruit2=loadImage("fruit2.png")
fruit3=loadImage("fruit3.png")
fruit4=loadImage("fruit4.png")
bacteria=loadImage("alien2.png")
game=loadImage("gameover.png")
}
function setup(){
  createCanvas(600,600)
 knife=createSprite(40,200,10,10)
knife.addImage(knifeImage)
  knife.scale=0.6
  score=0;
  fruitGroup=new Group
  rrGroup=new Group
}

function draw(){
background("orange")
    text("Score: "+ score, 500,50);
  if(rrGroup.isTouching(knife)){
      gameState=END;
  }
  if(gameState === END){
      
fruitGroup.destroyEach();
    rrGroup.destroyEach();
    fruitGroup.setVelocityXEach(0)
    rrGroup.setVelocityXEach(0)
    knife.addImage(game)
    knife.y=200
    knife.x=200
  
  }

  knife.y=mouseY;
  knife.x=mouseX;
   if (World.frameCount % 80===0) {
    fruit=createSprite(400,200,5,5)
     fruit.scale=0.2
    r=Math.round(random(1,4));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
       fruit.addImage(fruit2);
    } else if (r == 3) {
       fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    }
    fruit.y=Math.round(random(50,340))
fruit.velocityX=-15;
fruitGroup.add(fruit)
  }
  if(fruitGroup.isTouching(knife)){
  fruitGroup.destroyEach();
    score=score+100
  }
  if (World.frameCount % 200===0) {
    fungi=createSprite(400,200,5,5)
fungi.addImage(bacteria)
fungi.y=Math.round(random(100,300))
fungi.velocityX=-15;
rrGroup.add(fungi)
  }

    
  
   
  drawSprites();
}

  
 