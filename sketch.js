const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var object;
var ground;
var ball;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var ball_options = {
    restitution: 0.8
  }
  ball = Bodies.circle(100,100,20 , ball_options );

  var obj_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(400,390,800,20, obj_options);
  World.add(world, ground);
  World.add(world, ball);

console.log(ball);
  
}

function draw() {
  background("pink");  
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20, 20);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 800, 20);
}