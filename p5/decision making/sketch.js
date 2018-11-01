
var textColor;
var answers = ["Mexico", "Indonesia","South Africa","Argentina"]
var textButtonMexico;
var textButtonIndonesia;
var textButtonSouthafrica;
var textButtonArgentina;

function setup() {
  createCanvas(1200, 600);

  // default text color
  textColor = color(0, 0, 0);

  // create answer buttons
  textButtonMexico = createButton("Mexico");
  textButtonMexico.position(width/3.3, 400);
  textButtonMexico.size(100,50);
  textButtonMexico.mousePressed(clickButton);

  textButtonIndonesia = createButton("Indonesia");
  textButtonIndonesia.size(100,50);
  textButtonIndonesia.position(width/1.8, 500);
  textButtonIndonesia.mousePressed(clickButton);

  textButtonSouthafrica = createButton("South Africa");
  textButtonSouthafrica.size(100,50);
  textButtonSouthafrica.position(width/1.8, 400);
  textButtonSouthafrica.mousePressed(clickButton);

  textButtonArgentina = createButton("Argentina");
  textButtonArgentina.size(100,50);
  textButtonArgentina.position(width/3.3, 500);
  textButtonArgentina.mousePressed(clickButton);

}

function draw()
{
  background(255);

  // display text
  noStroke();
  fill(textColor);
  textAlign(CENTER);
  textFont("Futura");
  textSize(50);
  text( "What is the fourteenth biggest country?", width/2, height/2);
}

function clickButton() {


textButtonMexico.size(75,45);
textButtonIndonesia.size(200,100);
textButtonSouthafrica.size(75,45);
textButtonArgentina.size(75,45);
}
