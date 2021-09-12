let va; // Vector array

let v1;
let v2;
let vtmp;

let bg='grey'
let fg='black'

function setup() {
  let c = createCanvas(3000, 3000);
  va = []

  // a rectangle
  va.push(createVector(110, 105));
  va.push(createVector(680, 94));
  va.push(createVector(701, 678));
  va.push(createVector(88, 709));
  va.push(createVector(110, 105)); // back to the start

  // square with a piece missing
  // va.push(createVector(100, 350));
  // va.push(createVector(350, 350));
  // va.push(createVector(350, 100));
  // va.push(createVector(700, 100));
  // va.push(createVector(700, 700));
  // va.push(createVector(100, 700));
  // va.push(createVector(100, 350));
  
  // triangle
  // va.push(createVector(400, 150));
  // va.push(createVector(150, 650));
  // va.push(createVector(650, 650));
  // va.push(createVector(400, 250));
  
}

function getShape(x,y,w,h) {
  va = []

  // a rectangle
  let min = -w/25;
  let max = w/25;
  p = random(min, max); q=random(min, max);
  let initx=x+p;
  let inity=y+q;
  va.push(createVector(x+p, y+q));
  p = random(min, max); q=random(min, max);
  va.push(createVector(x+w+p, y+q));
  p = random(min, max); q=random(min, max);
  va.push(createVector(x+w+p, y+h+q));
  p = random(min, max); q=random(min, max);
  va.push(createVector(x+p, y+h+q));
  //p = random(min, max); q=random(min, max);
  va.push(createVector(initx, inity)); // back to the start

  return va;

}

function draw() {
  background(bg);

  ////for (let y=100; y<height-100; y+=random(100,200)) {
  ////  for (let x=100; x<width-100; x+=random(100,200)) {
  // for (let y=height/10; y<9*height/10; y+=random(height/10,2*height/10)) {
  //   for (let x=width/10; x<9*width/10; x+=random(width/10,2*width/10)) {    
  //     push();
  //     translate(x, y);
  //     //scale(0.1);
  //     shp = getShape(0,0,width/10,height/10);
  //     drawShape(shp);
  //     pop();
  //   }
  // }
  va=getShape(100,100,600,600);
  drawShape2(va);
  
  noLoop();
}

function drawShape(va){
  /* takes an array of vectors and decomposes into an array of curveVertices */

  let vxa = []
  stroke(fg);
  strokeWeight(8)
  
  beginShape();

  for (let i=0; i<(va.length-1); i+=1) {
    
    v1 = va[i]
    v2 = va[i+1]
  
    let step = 0.175;  //map(v1.dist(v2), 0, width, 0.125, 0.275)
    for (let i=0; i<=1.0; i+=step) {
        vtmp = p5.Vector.lerp(v1, v2, i)
        
        vtmp.x += floor(random(-5,6))
        vtmp.y += floor(random(-5,6))
        vxa.push(vtmp);    
    }
    vxa.pop()
  }


  for (let i=0; i<(vxa.length); i+=1) {
    curveVertex(vxa[i].x, vxa[i].y);
    ellipse(vxa[i].x, vxa[i].y, 20, 20);
  }

  // close the curve
  curveVertex(vxa[0].x, vxa[0].y);
  curveVertex(vxa[1].x, vxa[1].y);
  curveVertex(vxa[2].x, vxa[2].y);
   noFill();
  endShape();

}


function drawShape2(va){
  /* takes an array of vectors and decomposes into an array of curveVertices */

  let vxa = []
  stroke(fg);
  strokeWeight(8)
  
  beginShape();

  for (let i=0; i<(va.length-1); i+=1) {
    
    v1 = va[i]
    v2 = va[i+1]
  
    let step = 0.075; 
    for (let i=0; i<=1.0; i+=step) {
        vtmp = p5.Vector.lerp(v1, v2, i)
        
        vtmp.x += floor(random(-2,3))
        vtmp.y += floor(random(-2,3))
        vxa.push(vtmp);    
    }
    vxa.pop()
  }


  for (let i=0; i<(vxa.length); i+=1) {
    curveVertex(vxa[i].x, vxa[i].y);
    //ellipse(vxa[i].x, vxa[i].y, 20, 20);
  }

  // close the curve
  curveVertex(vxa[0].x, vxa[0].y);
  curveVertex(vxa[1].x, vxa[1].y);
  curveVertex(vxa[2].x, vxa[2].y);
   noFill();
  endShape();

}