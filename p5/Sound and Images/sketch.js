
var mySound;
  function preload() {
    mySound = loadSound('The Nutcracker Dance Of The Sugar Plum Fairy.mp3');
       image(Nutcracker.jpg,200,200,200,300);
  }

  function setup() {
    createCanvas(640, 480);
    // Notice that you have to put the variable name in front of the functions
    mySound.setVolume(50);
    mySound.play();
  }
