function setup() {
  createCanvas(400, 400);
  ellipseMode(CORNER);
  rectMode(CORNER);
}

function draw() {
  background(220);

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
    h = int(random(maxY/2));

    if (y+h > maxY) {
      h = maxY-y;
      if (h<=1) break;
    }
    
    while (x < maxX) {
      count++;
      w = int(random(maxX/2));

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
