
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1300, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(650,380,1300,20)

	
	block1 = new BlockBlue(850,350,30,40);
	block2 = new BlockBlue(880,350,30,40);
	block3 = new BlockBlue(910,350,30,40);
	block4 = new BlockBlue(940,350,30,40);
	block5 = new BlockBlue(970,350,30,40);
	block6 = new BlockBlue(1000,350,30,40);
	block7 = new BlockBlue(1030,350,30,40);

	block8 = new BlockGreen(880,310,30,40);
    block9 = new BlockGreen(910,310,30,40);
    block10 = new BlockGreen(940,310,30,40);
    block11 = new BlockGreen(970,310,30,40);
    block12 = new BlockGreen(1000,310,30,40);

    block13 = new BlockOrange(910,270,30,40);
    block14 = new BlockOrange(940,270,30,40);
    block15 = new BlockOrange(970,270,30,40);

    block16 = new BlockRed(940,230,30,40);

    block17 = new BlockRed(500,350,30,40);
    block18 = new BlockRed(530,350,30,40);
    block19 = new BlockRed(560,350,30,40);
    block20 = new BlockRed(590,350,30,40);
    block21 = new BlockRed(620,350,30,40);

    block22 = new BlockOrange(530,310,30,40);
    block23 = new BlockOrange(560,310,30,40);
    block24 = new BlockOrange(590,310,30,40);

    block25 = new BlockBlue(560,270,30,40);

	polygon = new Polygon(150,200,45)

	slingshot = new SlingShot(polygon.body,{x:200,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);


  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
 
  polygon.display();
  slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
	if(keyCode === 32){
		slingshot.attach(this.polygon.body);
	}
}