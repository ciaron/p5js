let va; // Vector array

let v1;
let v2;
let vtmp;

let step=5; // percent stepsize

function setup() {
  let c = createCanvas(800, 800);
  va = []

  //v1=createVector(700,100);
  //v2=createVector(700,700);
  
  noFill();
  strokeWeight(2);

  // a rectangle
  va.push(createVector(100, 100));
  va.push(createVector(700, 100));
  va.push(createVector(700, 700));
  va.push(createVector(100, 700));
  va.push(createVector(100, 100));
    
}

function draw() {
  background(0);

  stroke('white');
  strokeWeight(2)

  beginShape();

  //curveVertex(va[0].x, va[0].y);

  for (let i=0; i<(va.length-1); i++) {

    v1 = va[i]
    v2 = va[i+1]

    curveVertex(v1.x, v1.y);

    for (let i=0; i<=1.0; i+=0.1) {
        vtmp = p5.Vector.lerp(v1, v2, i)
        vtmp.x += random(-5,5)
        vtmp.y += random(-5,5)
        curveVertex(vtmp.x, vtmp.y);
        ellipse(vtmp.x, vtmp.y, 20, 20);
    }
    curveVertex(v2.x, v2.y);
  }

  curveVertex(v2.x, v2.y);
  endShape();

  noLoop();
}
