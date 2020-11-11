var wall,thickness;
var bullet,speed,weight,height;

function setup() {
  createCanvas(1600,400);
  
  car=creatSprite(50,200,50,50);
  car.shapeColor=color(255);

  height=200;

  wall=creatSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background(0);
  car.velocityX=speed;
  car.x=World.mouseX;
  if(wall.x-car.x<(car.width+wall.width/2))
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }

    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
    if(hasCollided(bullet,wall)){
      bullet.velocityX=0;
      var damage=0.5*weight* speed*speed/(thickness*thickness*thickness);
    
      if(damage>10){
        wall.shapeColor=color(255,0,0);
      }
      if(damage<10){
        wall.shapeColor=color(0,255.0);
      }
    }
    


  }
  drawSprites();
}