const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundIMG,platform;
var gameState= "attach";
var score=0;


function preload() {
  
ChangeBG();

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 505, 300, 170);

    box1 = new Box(700,520,70,70);
    box2 = new Box(920,520,70,70);
    pig1 = new Pig(810, 550);
    log1 = new Log(810,460,300, PI/2);

    box3 = new Box(700,440,70,70);
    box4 = new Box(920,440,70,70);
    pig3 = new Pig(810, 420);

    log3 =  new Log(810,380,300, PI/2);

    box5 = new Box(810,360,70,70);
    log4 = new Log(760,320,150, PI/7);
    log5 = new Log(870,320,150, -PI/7);

    
   

    bird = new Bird(200,260);
    slingShot= new SlingShot(bird.body,{x:200, y:260});
}

function draw(){
    if(backgroundIMG){
    background(backgroundIMG);
    }
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    

    bird.display();
    platform.display();
    slingShot.display();

    textSize(50);
    fill("red");
    text("Score:"+score,800,50);
}
function mouseDragged(){
 if(gameState !="fly" ){
    Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY});
}
}
function mouseReleased(){
    slingShot.fly();
    gameState="fly";
}
function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(bird.body, {x:250, y:200})
        slingShot.attach(bird.body);
        bird.trajectory=[];
        gameState="attach";
    }
    
}
async function ChangeBG(){
 
    var tr= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var dr= await tr.json();
    var dt= dr.datetime;
     
    var t= dt.slice(11,13);

    if(t>6 && t<17){
        bg= "sprites/bg.png";
    }
    else{
 bg= "sprites/bg2.jpg";
    }
 backgroundIMG= loadImage(bg);
}
