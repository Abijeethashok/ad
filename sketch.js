const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
function preload(){

}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(200,240,50,300);
    box2 = new Box(251,290,50,200);
    box3 = new Box(149,290,50,200);
    box4 = new Box(88,240,70,300);
    box5 = new Box(312,240,70,300);
    box6 = new Box(200,85,40,10);
    box7 = new Box(200,75,30,10);
    box8 = new Box(200,65,20,10);
    box9 = new Box(250,185,40,10);
    box10 = new Box(250,175,30,10);
    box11 = new Box(252,165,20,10);
    box12 = new Box(150,185,40,10);
    box13 = new Box(150,175,30,10);
    box14 = new Box(152,165,20,10);
}

function draw(){
    background(255);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
}