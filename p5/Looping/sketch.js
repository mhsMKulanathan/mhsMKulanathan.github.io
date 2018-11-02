/* Looping asssignment
Madhusha Kulanathan
2/11/2018*/

// Variable setup
var x = 0;
canvasWidth=1279
var width= canvasWidth

//page setup
function setup() {
  createCanvas(1279, 910);
  noLoop();
}

// create the speed and movement
function draw() {
  background(203, 255, 250);
  x = x + 1;
  if (x > width) {
    x = 0;
  }
  //create the subjects
  strokeWeight(6)
  ellipse(x, 450, x, height);
  line(width, 450, x, height);
}
// When mouse presses, objects move
function mousePressed() {
  loop();
}
// When mouse released objects stop moving
function mouseReleased() {
  noLoop();
}
