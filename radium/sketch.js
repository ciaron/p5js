let n = 16;
let q = 6;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  noFill();
  strokeCap(SQUARE);
  stroke(0, 128);
  translate(width/2, height/2);

  for (let i=0; i<n; i++){
    strokeWeight(floor(random(32)));
    r = random(width/5, 3*width/4);
    arc(0, 0, r, r, random(TWO_PI), random(TWO_PI));
  }

  strokeWeight(1);
  for (let j=0; j<q; j++) {
    r = random(width/5, 1*width/3);
    let start = random(TWO_PI);
    let end = random(TWO_PI);
    let step = radians(floor(random(1,12))); 

    for (let a=start; a<end; a+=step) {
      let x1 = (r + 20) * cos(a);
      let y1 = (r + 20) * sin(a);
      let x2 = (r - 20) * cos(a);
      let y2 = (r - 20) * sin(a);
      line(x1,y1,x2,y2);

    }

  }
  noLoop();
}

function mouseReleased() {
  loop();
}