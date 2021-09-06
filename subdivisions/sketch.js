
let blocks=[];

let bx=12;
let by=bx;
let grid=12;

function randomSubdivision(m, n, min) {

  /* integers: subdivide m into n values, each with a minimum 'min' */

  let vals = [];

  // fill with random numbers
  let isum = 0;
  for (let i=0; i<n; i++) {
    vals[i] = int(random(m));
    isum += vals[i];
  }

  // Divide each value by sum of the array, normalising.
  for (let i=0; i<n; i++) {
    vals[i] = (int( m * vals[i] / isum ));
    if (vals[i] == 0) {
      vals[i] = 1;
    }
  }

  // Ensure each element is at least "min". Error correction will handle this later
  for (let i=0; i<n; i++) {
    if (vals[i] < min) {
      vals[i] = min;
    }
  }

  // // There may be an error from the int() rounding.
  // // distribute (or subtract) the difference randomly over the array
  let sum=0;
  for (let i=0; i<n; i++) {
    sum += vals[i];
  }

  let err = m - sum;
  for (let i=0; i<Math.abs(err); i++) {
    let idx = int(random(n));
    if (err > 0) {
      vals[idx]++;
    } else {
      vals[idx]--;
    }
  }

  return vals;
}

/* END random subdivision */

function init() {
  blocks = [];
  let w = (width - (bx*(grid+1))) / grid;
  let h = (height - (by*(grid+1))) / grid;

  for (let i=0; i<grid; i++) {
    for (let j=0; j<grid; j++) {
      block = new Block(bx*(i+1)+w*i, by*(j+1)+h*j, w, h);
      blocks.push(block);
    }
  }
}

function setup() {
  createCanvas(800, 800);
  init();
}

function draw() {
    background(0);

    for (let i=0; i<blocks.length; i++)  {
      blocks[i].draw();
    }
    
    noLoop();
}

function mouseReleased() {
  background(0);
  loop();
  init();
}

class Block {

  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sb = 3;
    this.wvals = randomSubdivision(int(w), this.sb, 25);
    this.hvals = randomSubdivision(int(h), this.sb, 25);
  }

  draw() {
    
    let nx=this.x; 
    let ny=this.y;
    
    for (let j=0; j<this.hvals.length; j++){
      nx=this.x;
      for (let i=0; i<this.wvals.length; i++){
          fill(floor(random(64,255)),floor(random(64,255)),0);
         
          if (i==0 || i==this.wvals.length-1 || j==0 || j==this.hvals.length-1) {
            rect(nx,ny,this.wvals[i],this.hvals[j]);
          }
         nx += this.wvals[i];
       }
       ny += this.hvals[j];
    }
  }
}