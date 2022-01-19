var background1
var ghost,ghostImg
var  gunpointer
var ghostGroup
function preload() {
background1 = loadImage("./assets/background.jpg")
ghostImg  = loadImage("./assets/ghost.jpg")

gunpointer1 = loadImage("./assets/gun pointer.png")
}

function setup() {

  createCanvas(600,600);

  ghostGroup = new Group();
  tower = createSprite(300,300);
  tower.addImage("tower",background1);
  tower.velocityY = 1;
 

  gunpointer = createSprite(300,300,10,10)
 gunpointer.addImage("gunpointer1",gunpointer1)
 gunpointer.scale = 0.1


console.log(gunpointer)

}

function draw() {
  background(0);
  console.log(frameCount)

  if(keyIsDown(LEFT_ARROW)){
   // console.log(gunpointer.position.x)
    
   gunpointer.position.x = gunpointer.position.x-6
    }
    if(keyIsDown(RIGHT_ARROW)){
      gunpointer.position.x = gunpointer.position.x+6
    }
    if(keyIsDown(DOWN_ARROW)){
      gunpointer.position.y = gunpointer.position.y+6
    }
    if(keyIsDown(UP_ARROW)){
      gunpointer.position.y = gunpointer.position.y-6
    }
    spawnGhost();
  drawSprites()
 
 
  }
function keyPressed(){
if(keyCode===32 && gunpointer.collide(ghostGroup) ){
 
  ghost.visible=false
}


}

function spawnGhost(){
 
  if (frameCount % 60 === 0){
  ghost = createSprite(400,400,10,10)
  //ghost.y = Math.round(random(120,400));
  ghost.addImage("ghost",ghostImg)
   ghost.scale = 0.2
   ghost.velocityY = 1;
   ghost.lifetime = 800;
   ghostGroup.add(ghost);
   console.log(ghostGroup)
}
}



