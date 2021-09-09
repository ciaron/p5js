let bg=32;
let fg=0;

function setup() {
  createCanvas(1000, 1000);
  ellipseMode(CORNER);
  rectMode(CORNER);
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
  //stroke(0, 64);
  noStroke();
  let count=0;
  
  while (y < maxY) {
    h = int(random(maxY/25));

    if (y+h > maxY) {
      h = maxY-y;
      if (h<=1) break;
    }
    
    while (x < maxX) {
      count++;
      w = int(random(maxX/5));

      if (x+w > maxX) {
        w = maxX-x;
        if (w<=1) { 
          //console.log("breaking");
          break;
        }
      }

      fill(random(255), 32);
      rect(x, y, w, h);
      
      x += int(random(w));
      
    }

    x = border;
    y += int(random(h));
  }
  noLoop();
  console.log("stopped after", count);
}
