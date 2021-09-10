let bg=255;
let fg=0;
let XSTOP=false;
let YSTOP=false;

function setup() {
  createCanvas(3000, 3000);
  ellipseMode(CORNER);
  rectMode(CORNER);
  colorMode(HSB,255,255,255,255);
}

function draw() {
  background(bg);

  let border=25;
  let w=0;
  let h=0;
  
  let maxX=width-border;
  let maxY=height-border;

  let x = border;
  let y = border;

  noFill();
  stroke(fg, 32);
  //noStroke();
  let count=0;
  
  while (y < maxY && !YSTOP) {
    h = (random(5,maxY/10));

    if (y+h > maxY) {
      h = maxY-y; 
      YSTOP = true;
    }
    
    while (x < maxX && !XSTOP) {
      count++;
      w = (random(5,maxX/10));

      if (x+w > maxX) {
        w = maxX-x;
        XSTOP = true;

      }

      //fill(random(fg),random(128));  // mono
      //fill(0, 0, random(255), random(128));
      fill(random(255), random(255), random(255), random(128));
      rect(x, y, w, h);
       
      x += random(0.75*w,w); // move a bit x-wise, but ensure overlap
    }
    XSTOP=false;
    x = border;
    y += random(0.75*h,h); // move a bit y-wise, but ensure overlap
  }
  YSTOP=false;
  noLoop();
  console.log("stopped after", count);
}

function mouseClicked() {
  redraw();
}

