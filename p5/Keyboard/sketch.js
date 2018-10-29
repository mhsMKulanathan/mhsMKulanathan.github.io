/*Using the Keyboard assignment
Madhusha Kulanathan
23/10/2018*/

//setup page
function setup() {
createCanvas(900,900);
}

//Variable setup
var posW=900;
var posX= posW;
var posY= posW;
var posZ= posW;
var posM= posW

  // Draw the circles
  function draw() {
  background(0);
  fill(	255,0,0);
  ellipse(posW/4,posX/4,posM/9,posM/9);
  fill(	0,0,255);
  ellipse(posY/1.5,posZ/4,posM/9,posM/9);
}
//move the red circle
function keyPressed() {

  if (key === 'd') {
    posW += 100;
  }
  else if (key ==="a") {
    posW -= 100;
  }
  else if (key ==='s'){
    posX += 100;
  }
  else if (key ==='w'){
    posX -= 100;
  }

  //move the blue circle
    else if (key === 'l') {
  		posY += 100;
    }
    else if (key ==="j") {
      posY -= 100;
    }
    else if (key ==='k'){
      posZ += 100;
    }
    else if (key ==='i'){
      posZ -= 100;
    }

}
