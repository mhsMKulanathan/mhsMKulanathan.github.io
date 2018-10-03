//setup the canvas
function setup () {
  // sets the screen to be 640 pixels wide and 480 pixels high
  createCanvas (400,400)
}

function draw () {
  //create ground
  rect (0,350,400,50);

// create the snowman body
ellipse(200,300,150,150);
ellipse(200,200,100,100);
ellipse(200,120,75,75);

//create the arms
line(160,200,100,100);
line(240,200,300,100);

//create eyes
var c= color(1,1,1,1);
fill(c);
rect(180, 110, 10, 10);
rect(210, 110, 10, 10);
noFill();

//create nose
var c= color (204, 102, 0);
fill (c);
triangle(200,125,200,135,230,130);
noFill();
}
