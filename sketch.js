const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ball, box;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var options = {restitution : 1.3};

    ball = Bodies.circle(200,50,20,options);
    World.add(world,ball);
    
    ground = Bodies.rectangle(200,390,600,20,ground_options);
    World.add(world,ground);

    box = Bodies.rectangle(300,15,30,30,options);
    World.add(world,box);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipse(ball.position.x, ball.position.y,20,20)

    rect(box.position.x,box.position.y,30,30);

}