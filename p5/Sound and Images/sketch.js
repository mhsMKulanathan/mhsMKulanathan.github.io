var img;
var mySound;
  function preload() {
       img= loadImage("Nutcracker.jpg");
    mySound = loadSound('The Nutcracker Dance Of The Sugar Plum Fairy.mp3');
  }

  function setup() {
    createCanvas(640, 480);
    mySound.setVolume(50);
    mySound.play();
  }
function draw() {

  image(img, 0, height/2, img.width/2, img.height/2);
}

