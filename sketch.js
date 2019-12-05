function setup() {
  
  createCanvas(windowWidth, windowHeight);
}

let mapSizeX = 1000;
let mapSizeY = 600;

let startPos = (0,0)

let starSize = Math.random(2,9)
function draw() {
  
  background(220);
  translate(width/2,height/2)
  rectMode(CENTER)

  // Dette er vores map
  fill(0,0,0)
   rect(0,0,mapSizeX,mapSizeY); 

  fill(100)
   rect(0, 0, 100, 100);


}