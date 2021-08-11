var steve,stever,stevel,zombie,zombieimg,bg;





function preload(){
  stever = loadImage("stever.png");
  stevel = loadImage("stevel.png");
  zombieimg = loadImage("zombie.png");
  bg = loadImage("bg.jpg");

}




function setup() {
  createCanvas(1280,720);
  
  steve = createSprite(540,563,100,40);
  steve.addImage(stever);
  steve.scale = 0.5;

  zombie = createSprite(450,550,100,40);
  zombie.addImage(zombieimg);
  zombie.scale = 0.7;


}

function draw() {
  background(bg);  

if(keyDown(LEFT_ARROW)){
  steve.addImage(stevel);
  steve.x = steve.x-10;
}
if(keyDown(RIGHT_ARROW)){
  steve.addImage(stever);
  steve.x = steve.x+10;
}






  drawSprites();
}