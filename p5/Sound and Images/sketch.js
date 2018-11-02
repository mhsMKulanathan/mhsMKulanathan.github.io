/* Sound and Image assignment 
Madhusha Kulanathan
29/10/2018*/

//Variable setup
var img;
var mySound;

//preload setup
  function preload() {
       img= loadImage("Nutcracker.jpg");
    mySound = loadSound('The Nutcracker Dance Of The Sugar Plum Fairy.mp3');
  }
//page setup
  function setup() {
    createCanvas(640, 480);
    mySound.setVolume(50);
    mySound.play();
  }
  // image postion and size
function draw() {

  image(img, 0, height/2, img.width/2, img.height/2);
}
