let va; // Vector array
let vxa; // curveVertex array...

let v1;
let v2;
let vtmp;

let step=5; // percent stepsize

function setup() {
  let c = createCanvas(800, 800);
  va = []
  vxa = []

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
  //vxa.push(va[0])
  for (let i=0; i<(va.length-1); i+=1) {
    
    v1 = va[i]
    v2 = va[i+1]
  
    for (let i=0; i<=1.0; i+=0.1) {
        vtmp = p5.Vector.lerp(v1, v2, i)
        
        vtmp.x += random(-5,5)
        vtmp.y += random(-5,5)
        vxa.push(vtmp);    
    }
    vxa.pop()
    //curveVertex(va[va.length-1].x, va[va.length-1].y);
    //curveVertex(v2.x, v2.y);
  }
  //vxa.push(va[va.length-1])
  
  curveVertex(va[0].x, va[0].y);

  // for (let i=0; i<(vxa.length); i+=1) {
  //   curveVertex(vxa[i].x, vxa[i].y);
  //   ellipse(vxa[i].x, vxa[i].y, 20, 20);
  // }

  for (let i=0; i<(va.length); i+=1) {
    curveVertex(va[i].x, va[i].y);
    ellipse(va[i].x, va[i].y, 20, 20);
  }

  //curveVertex(va[0].x, va[0].y);
  //curveVertex(vxa[vxa.length-1].x, vxa[vxa.length-1].y);
  //curveVertex(va[va.length-1].x, va[va.length-1].y);
  
  curveVertex(va[va.length-1].x, va[va.length-1].y);
  //curveVertex(va[1].x, va[1].y);
  //curveVertex(vxa[vxa.length-1].x, vxa[vxa.length-1].y);
  //curveVertex(va[va.length-1].x, va[va.length-1].y);

  //curveVertex(va[0].x, va[0].y);
  //curveVertex(va[0].x, va[0].y);
  //curveVertex(va[va.length-1].x, va[va.length-1].y);

  endShape();
  
  noLoop();
}
