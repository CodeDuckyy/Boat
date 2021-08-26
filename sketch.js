var sea
var seaImg
var ship
var shipImg

function preload(){

//images and animations
  seaImg = loadImage("sea.png");  
  shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);

//creating Sea
  sea = createSprite(400,200);
  sea.scale = 0.5;
  sea.addImage(seaImg);
  sea.velocityX = -2;

//creating Ship
  ship = createSprite(200,220,10,10);
  ship.addAnimation("ship",shipImg);
  ship.scale = 0.2;
}

function draw() {
  background("blue");

sea.velocityX = -2;

  //resetting background
  if(sea.x<0){
    sea.x = sea.width/8;
  }

    drawSprites();
}