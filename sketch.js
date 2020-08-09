const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var raindrop=[];

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  
  for(var i=0;i<1000;i++){
    r1=new Raindrop(random(0,800),random(0,400),random(0,200));
    raindrop.push(r1);
    World.add(world,r1);

}

function draw() {
  background(255,255,255);  
  
  Engine.update(engine);
  for(var j=0;j<raindrop.length;j++){
    raindrop[j].display();
}
  
}
}

  
 
