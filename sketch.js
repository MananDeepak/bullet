
var wall 
var bullet,speed,weigth

function setup() {
createCanvas(1600,400);
bullet=createSprite(50, 200, 50, 50);
bullet.velocityX=speed;

speed=random(30,52)
weight=random(400,1500)
  
thikness=random(22,83)

wall=createSprite(1200, 200,thickness,height/2);
wall.shapeColor=color(80,80,80);
}

function draw() {
background("black");  

if(hasColloided(bullet,wal)){
  bullet.velocityX=0
  var damage=0.5*weigth*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor=color(225,0,0)
  }
  if (damage<10){
    wall.shapeColor=color(0,225,0);
  }
}


  drawSprites();
}

function hasColloided (lwall,lbullet){
  bulletrightEdge=bullet.x+bullet.width;
  wallleftEdge=wall.x
if(bulletrightEdge>=wallleftEdge)
{
return true
}
return false
}