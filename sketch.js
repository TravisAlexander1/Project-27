const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var roof1;
var string1,string2,string3,string4,string5;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  bob1 = new Bob(135,300,30);
  bob2 = new Bob(167,300,30);
  bob3 = new Bob(200,300,30);
  bob4 = new Bob(233,300,30);
  bob5 = new Bob(265,300,30);

  roof1 = new Roof(200,100,200,20);

  string1 = new Rope(bob1.body,{x:135,y:100})
  string2 = new Rope(bob2.body,{x:167,y:100})
  string3 = new Rope(bob3.body,{x:200,y:100})
  string4 = new Rope(bob4.body,{x:233,y:100})
  string5 = new Rope(bob5.body,{x:265,y:100})
}

function draw() {
  background(0);

  Engine.update(engine);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  drawSprites();
}