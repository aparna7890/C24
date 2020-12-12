const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground (600, 390, 1200, 20)

    box2 = new Box(1020, 320, 70, 70);
    box1 = new Box(800, 320, 70, 70);
    pig1 = new Pig(910, 350)
    log1 = new Log(910, 260, 300, PI/2)
   

    box3 = new Box(1020, 240, 70, 70);
    box4 = new Box(800, 240, 70, 70);
    pig2 = new Pig(910, 220)
    log2 = new Log(910, 170, 300, PI/2)

    box5 = new Box(910, 150, 70, 70)
    log3 = new Log(860, 120, 150, PI/8)
    log4 = new Log(970, 120, 150, -PI/8)

    bird = new Bird(300, 200)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x)

    ground.display();

    box2.display();
    box1.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
}