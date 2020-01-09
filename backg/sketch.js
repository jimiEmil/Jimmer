let starSize;
let starPos;
let ww;
let wh;
let mapSize;

let starPositions = [];


function setup() {
  ww = windowWidth
  wh = windowHeight

  createCanvas(ww, wh);
  starSize = random(2, 10);

  for (let i = 0; i < 700; i++) {
    starPositions.push(generateStarPos())
  }

  starPos = generateStarPos();

  mapSize = {
    x: ww - ww / 5,
    y: wh - wh / 5,
  };
}

function hmm() {
  return random(2, 4);
}

function generateStarPos() {

  let pos = {
    x: random(0 - ww /2+ww/9 , ww/2 - ww/9),
    y: random(0 - wh / 2 + wh /9 , wh/2 - wh/9 ),
    diameter: random(1,3)

  };

  return pos;

}



function draw() {

  background(220);
  translate(width / 2, height / 2)
  rectMode(CENTER)

  // Dette er vores map
  fill(0, 0, 0)
  rect(0, 0, mapSize.x, mapSize.y);

 


  let p = generateStarPos();

stroke('white');
fill(255)
  for (let i = 0; i < starPositions.length; i++) {
    const p = starPositions[i];
    circle(p.x, p.y, p.diameter)
  }

  
  fill(100)
  rect(0, 0, 100, 100);
  

  




}