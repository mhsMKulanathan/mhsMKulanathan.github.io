/*Drawing house assignment
Madhusha Kulanathan
09/10/2018*/

//page setup
function setup() {
  // put setup code here
  createCanvas (700,700)
}
//variable setup
function draw() {
var houseWidth=100;
var houseHeight=houseWidth;
var roofheight=houseWidth/2;

// draw body
rect(width/2, height/2, houseWidth, houseHeight/2);

//draw roof
triangle(width/2, height/2, width/2+houseWidth/2, height/2-roofheight, width/2+houseWidth, height/2);

// draw body
rect(width/4, height/4, houseWidth/2, houseHeight/4);

//draw roof
triangle(width/4, height/4, width/4+houseWidth/4, height/4-roofheight/2, width/4+houseWidth/2, height/4);


}
