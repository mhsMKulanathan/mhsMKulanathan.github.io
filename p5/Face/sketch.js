function setup() {
  // put setup code here
  createCanvas (1250,900)
  background (0)
}

function draw() {
var faceWidth=750;
var faceHeight=faceWidth;
var posX= faceWidth/2;
var posY= faceWidth/2;

//draw face outline
fill (238,203,173);
stroke (238,203,173);
ellipse(width/2,height/2,faceWidth,faceHeight);

//draw hair
fill (204, 102, 0);
stroke(204, 102, 0);
ellipse (faceWidth/3.4,faceHeight/3, posX/1.2, posY/1.1);
ellipse (faceWidth/1.8, faceHeight/6.9, posX/1.3, posY/1.4);
ellipse (faceWidth/3, faceHeight/6.9, posX/1.3, posY/1.4);
ellipse (faceWidth/1.3, faceHeight/10, posX/1.5, posY/1.4);
ellipse (faceWidth/0.9, faceHeight/8.9, posX/1.1, posY/1.2);
ellipse (faceWidth/0.8,faceHeight/3, posX/1.3, posY/1.1);

//draw highlights of hair
fill (255,215,0);
stroke (255,215,0);
ellipse (faceWidth/2.9,faceHeight/2.4, posX/1.56, posY/1.9);
ellipse (faceWidth/1.6, faceHeight/5.3, posX/1.6, posY/1.7);
ellipse (faceWidth/2.5, faceHeight/4, posX/1.4, posY/1.7);
ellipse (faceWidth/1.2, faceHeight/5.9, posX/1.7, posY/2.1);
ellipse (faceWidth/0.94, faceHeight/5.6, posX/1.6, posY/1.6);
ellipse (faceWidth/0.82,faceHeight/2.6, posX/1.5, posY/1.6);

//draw eyebrows
fill (204, 102, 0);
stroke(204, 102, 0);
strokeWeight(6)
line(faceWidth/1.8,faceHeight/2.2,faceWidth/1.4,faceHeight/2.2);
line(faceWidth/2.05,faceHeight/2,faceWidth/1.8,faceHeight/2.2);
line(faceWidth/0.93,faceHeight/2,faceWidth/0.98,faceHeight/2.2);
line(faceWidth/0.98,faceHeight/2.2,faceWidth/1.16,faceHeight/2.2);


//draw neck
fill (238,203,173);
stroke (238,203,173);
rect(faceWidth/1.53,faceHeight/1.1, posX/1.4, posY/1.6);
}
