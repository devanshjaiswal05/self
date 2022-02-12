var man,man_image;
var building1
var door
var ground
var roof1
var gun


function preload() {
  man_image = loadAnimation("assets/running-0.png","assets/running-1.png","assets/running-2.png",
  "assets/running-3.png","assets/running-4.png","assets/running-5.png","assets/running-6.png",
  "assets/running-7.png","assets/running-8.png","assets/running-9.png","assets/running-10.png",
  "assets/running-11.png","assets/running-12.png","assets/running-13.png","assets/running-14.png",
  "assets/running-15.png","assets/running-16.png","assets/running-17.png","assets/running-18.png",
  "assets/running-19.png")
}

function setup() {
  createCanvas(windowWidth,1000)
building1 = createSprite(600,300,300,500)
door = createSprite(680,520,30,50)

man = createSprite(200,500,100,10)
  man.addAnimation("image",man_image)
  man.scale = 0.1
  man.setCollider("rectangle",0,0,300,500)

ground = createSprite(200,555,200,10)
//roofs
roof1 = createSprite(620,470,160,5)
 gun = createSprite(200,200,20,10)
}

function draw() {
  background(400)
 
  
 //collides
 man.collide(roof1)
  man.collide(ground)

  man.debug = true
  //if conditions
if(keyIsDown(RIGHT_ARROW)){
building1.velocity.x = -2
door.velocity.x = -2
roof1.velocity.x = -2
  }
if (keyWentUp(RIGHT_ARROW)){
    building1.velocity.x = 0
    door.velocity.x = 0
    roof1.velocity.x = 0
  }
if(keyIsDown(LEFT_ARROW)){
    building1.velocity.x = 2
    door.velocity.x = 2
    roof1.velocity.x = 2
  }
 if (keyWentUp(LEFT_ARROW)){
    building1.velocity.x = 0
    door.velocity.x = 0
    roof1.velocity.x = 0
  }
if(keyIsDown(UP_ARROW)){
man.velocity.y = -6
}
if (keyCode === 32){
}

if(door.x === 200){
  man.x = 500
  console.log(man.x)
}


  man.velocity.y = man.velocity.y + 0.8
  
  
 ground.visible = false
  
  drawSprites()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
