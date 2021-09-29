let n = 25;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noFill();
  strokeCap(SQUARE);
  translate(width/2, height/2);

  for (let i=0; i<n; i++){
    strokeWeight(floor(random(8)));
    r = random(width/5, 3*width/4);
    arc(0, 0, r, r, random(TWO_PI), random(TWO_PI));
  }
  noLoop();
}

function mouseReleased() {
  loop();
}