var sun;
var planet1,planet2,planet3,planet4,planet5,planet6,planet7,planet8;
function setup() {
  createCanvas(800,400);
  var sun=createSprite(100, 200, 150, 150);
  planet1=createSprite(300, 200, 50, 50);
  planet2=createSprite(400, 200, 50, 50);
  planet3=createSprite(500, 200, 50, 50);
  planet4=createSprite(600, 200, 50, 50);
  planet5=createSprite(700, 200, 50, 50);
  planet6=createSprite(800, 200, 50, 50);
  planet7=createSprite(900, 200, 50, 50);
  planet8=createSprite(980, 200, 50, 50);
}

function draw() {
  background(255,255,255);
if (World.frameCount % 50 === 0){
  var sun=createSprite(100, 200, 400, 400);
  planet1.shapeColor="white";
  var sun=createSprite(100, 200, 150, 150);
}
  drawSprites();
}