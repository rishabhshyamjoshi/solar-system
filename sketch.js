  var sun;
  var planet1,planet2,planet3,planet4,planet5,planet6,planet7,planet8;
  function setup() {
    createCanvas(800,400);
    sun=createSprite(200,200,200,200);
    planet1=createSprite(90, 200, 50, 50);
    sun.shapeColor="orange";
    planet2=createSprite(400, 200, 50, 50);
    planet3=createSprite(500, 200, 50, 50);
    planet4=createSprite(600, 200, 50, 50);
    planet5=createSprite(700, 200, 50, 50);
    planet6=createSprite(800, 200, 50, 50);
    planet7=createSprite(900, 200, 50, 50);
    planet8=createSprite(980, 200, 50, 50);
  }
  function draw() {
    background(mouseX,mouseY,250);
  if (World.frameCount % 50 === 0){
    sun.scale=sun.scale+0.1;
  }
  if(sun.isTouching(planet1)){
   planet1.shapeColor="orange";
    }
  if(sun.isTouching(planet2)){
    planet2.shapeColor="orange";
   }
   if(sun.isTouching(planet3)){
    planet3.shapeColor="orange";
   }
   if(sun.isTouching(planet4)){
    planet4.shapeColor="orange";
   }
   if(sun.isTouching(planet5)){
    planet5.shapeColor="orange";
   }
   if(sun.isTouching(planet6)){
    planet6.shapeColor="orange";
   }
   if(sun.isTouching(planet7)){
    planet7.shapeColor="orange";
   }
   if(sun.isTouching(planet8)){
    planet8.shapeColor="orange";
   }
drawSprites();  
  }
