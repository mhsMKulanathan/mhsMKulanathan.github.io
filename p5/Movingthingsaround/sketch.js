/* Moving things and staying on the canvas
Courtney Edwards
2018-09-01*/

//position variables
var posX= 200;
var posY = 200;
// speed variables
var speedX = 0;
var speedY = 0;

function setup() {
  var myCanvas = createCanvas(600, 600);
  frameRate(30);
 noStroke();
}
//draw the cross
 function draw() {
   background(0);
 fill(205,0,290);
rect(posX, posY, 10, 50);
rect(posX, posY, 50, 10);
rect(posX, posY, -50, 10);
rect(posX, posY, 10, -50);
noFill();
//positions and speed
posX = posX + speedX;
posY = posY + speedY;

  // New code for staying on the canvas
  if (posX > width) {    // the object has moved off the canvas to the right
      speedX = -speedX;
  }
  if (posX < 0) {    // the object has moved off the canvas to the left
      speedX = -speedX;
  }
  if (posY > height) {    // the object has moved off the canvas to the bottom
      speedY = -speedY;
  }
  if (posY < 0) {    // the object has moved off the canvas to the top
      speedY = -speedY;
  }
}

function mouseClicked() {
  posX = mouseX;
  posY = mouseY;
  speedX = round(mouseX/100);
  speedY = round(mouseY/100);
}
