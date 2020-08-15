var fixedRect,movingRect;

var object1,object2;



function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 80);
  fixedRect.shapeColor="green";
  movingRect=createSprite(600,200,50,30);
  movingRect.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(Istouching(movingRect,fixedRect)){
      movingRect.shapeColor="red";
      fixedRect.shapeColor="red";
     } else{
      fixedRect.shapeColor="green";
      movingRect.shapeColor="green";
      }
  
  
  drawSprites();
}

function Istouching(object1,object2)
{
  if(object1.x-object2.x < object2.width/2+object1.width/2 &&
    object2.x-object1.x<object2.width/2+object1.width/2 && 
    object1.y-object2.y<object2.width/2+object1.width/2 && 
    object2.y-object1.y<object2.width/2+object1.width/2)
    {
      return true;
    
    } else{
      return false;
    }


}