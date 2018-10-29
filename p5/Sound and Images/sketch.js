
var mySound;
  function preload() {
    mySound = loadSound('The Nutcracker Dance Of The Sugar Plum Fairy.mp3');
  }

  function setup() {
    createCanvas(640, 480);
    mySound.setVolume(50);
    mySound.play();
  }
function draw () {
   image(Nutcracker.jpg,200,200,200,300);
}
