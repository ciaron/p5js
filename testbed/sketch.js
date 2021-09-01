let capture;

let symmetry = 6;

function setup() {
  createCanvas(400, 400);
  background(0);
  angleMode(DEGREES);
}

function draw() {

  translate(width/2, height/2);

  let mx  = mouseX-width/2;
  let my  = mouseY-height/2;
  let pmx = pmouseX-width/2;
  let pmy = pmouseY-height/2;
  let angle = 360/symmetry;

  let x=75;
  let y=0;

  stroke(255); //white
  point(x,y);
 
  px=x;
  py=y;

  push();
  scale(-1,1);
  point(x,y);
  pop();

  stroke(255,0,0); // RED
  rotate(30);
  point(x,y);

  push();
  scale(-1,1);
  point(x,y);
  pop();
}
