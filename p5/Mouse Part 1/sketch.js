/* Using the mouse assignment part 1
Madhusha Kulanathan
17/10/2018*/

//variable setup
var r1=30;
var r2=20;
var r3= 10;
var r4= 40;

//page setup
function setup() {
  var secondCanvas = createCanvas(600, 600);

}

// Draw shapes
function draw() {
background(0);
ellipse(mouseX,mouseY,r1,r1);
ellipse(mouseX, mouseY, r2, r2);
ellipse(mouseX, mouseY, r3,r3);
rect(mouseX, mouseY,r4,r3);
rect(mouseX, mouseY,-r4,-r3);

//Randomize size of shapes
  if (mouseIsPressed) {
    r1= random(10,100);
    r2= random (5, 80);
    r3= random (1,60);
    r4= random(15,120);

//randomize colour
fill(random(255), random(255), random(255));
  }
}
