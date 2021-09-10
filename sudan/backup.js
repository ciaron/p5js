let pv;

let v1;
let v2;
let v3;

let step=5; // percent stepsize

function setup() {
  let c = createCanvas(800, 800);
  
  v1=createVector(700,100);
  v2=createVector(700,700);
  
  noFill();
  strokeWeight(2);

  pa = new PointArray()

  pa.add(100, 100)
  pa.add(700, 100)
  pa.add(700, 700)
  pa.add(700, 100)
  // pa.add(100, 100) // close 
  
}

function draw() {
  background(0);


  stroke('red');
  //for (let point of pa.get()) {
  //  vertex(point[0], point[1]);
  //}


  stroke('red');
  ellipse(v1.x, v1.y, 12, 12);
  ellipse(v2.x, v2.y, 12, 12);

  stroke('white');

  // strokeJoin(ARC, 40)
  beginShape();
  
  curveVertex(v1.x, v1.y);

  // LINE 1

  for (let i=0; i<0.95; i+=0.1) {
      v3 = p5.Vector.lerp(v1, v2, i)
      v3.x += random(-5,5)
      v3.y += random(-5,5)
      curveVertex(v3.x, v3.y);
      // ellipse(v3.x, v3.y, 20, 20);
  }
  
  v1 = v2;
  v2 = createVector(100,700);

  // LINE 2
  
  for (let i=0; i<0.95; i+=0.1) {
      v3 = p5.Vector.lerp(v1, v2, i)
      v3.x += random(-5,5)
      v3.y += random(-5,5)
      curveVertex(v3.x, v3.y);
      // ellipse(v3.x, v3.y, 20, 20);
  }

  curveVertex(v3.x, v3.y);

  endShape();

  noLoop();
}

class PointArray {
  constructor() {
    this.pointArray = []
  }

  add(pX, pY) {
    this.pointArray.push(new Point(pX, pY))
  }

  addRandom(pX, pY) {
    // add a point with a little randomness
    this.pointArray.push(new Point(pX+random(-10,10), pY+random(-10,10)))
  }


  display() {
    for (let point of this.pointArray) point.display()
  }

  update(mX, mY) {
    for (let point of this.pointArray) {
      if (dist(mX, mY, point.position[0], point.position[1]) < 60)
        point.update(mX, mY)
    }
  }

  get() {
    // Return an array of array
    // for p5bezier.newBezier function to use
    let positionArray = []
    // point is a Point object
    for (let point of this.pointArray) positionArray.push(point.position)
    return positionArray
  }
}

class Point {
  constructor(x, y) {
    this.position = [x, y]
    this.r = 10
  }

  display() {
    push()
    fill(255)
    stroke(0)
    strokeWeight(2)
    ellipse(this.position[0], this.position[1], 2 * this.r, 2 * this.r)
    fill(0)
    noStroke()
    text(
      '(' + this.position[0] + ', ' + this.position[1] + ')',
      this.position[0] + 10,
      this.position[1] - 10
    )
    pop()
  }

  update(mX, mY) {
    this.position = [mX, mY]
  }
}