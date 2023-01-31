let paintColor
let redPaint
let orangePaint
let yellowPaint
let greenPaint
let cyanPaint
let bluePaint
let magentaPaint
let brownPaint
let whitePaint
let blackPaint

function setup() {
  createCanvas(500, 500);
  background(220);
  paintColor = color(255);
}

function draw() {

  //If statements to change paint color
  redPaint = dist(mouseX,mouseY,0,0);
  if(redPaint < 15 && mouseIsPressed){
    paintColor = color(255,0,0);
  }
  orangePaint = dist(mouseX,mouseY,0,30);
  if(orangePaint < 15 && mouseIsPressed){
    paintColor = color(255,165,0);
  }
  yellowPaint = dist(mouseX,mouseY,0,60);
  if(yellowPaint < 15 && mouseIsPressed){
    paintColor = color(255,255,0);
  }
  greenPaint = dist(mouseX,mouseY,0,90);
  if(greenPaint < 20 && mouseIsPressed){
    paintColor = color(0,255,0);
  }
  cyanPaint = dist(mouseX,mouseY,0,120);
  if(cyanPaint < 15 && mouseIsPressed){
    paintColor = color(0,255,255);
  }
  bluePaint = dist(mouseX,mouseY,0,150);
  if(bluePaint < 15 && mouseIsPressed){
    paintColor = color(0,0,255);
  }
  magentaPaint = dist(mouseX,mouseY,0,180);
  if(magentaPaint < 15 && mouseIsPressed){
    paintColor = color(255,0,255);
  }
  brownPaint = dist(mouseX,mouseY,0,210);
  if(brownPaint < 15 && mouseIsPressed){
    paintColor = color(165,42,42);
  }
  whitePaint = dist(mouseX,mouseY,0,240);
  if(whitePaint < 15 && mouseIsPressed){
    paintColor = color(255);
  }
  blackPaint = dist(mouseX,mouseY,0,270);
  if(blackPaint < 15 && mouseIsPressed){
    paintColor = color(0);
  }



  //Paint Brush
  if(mouseIsPressed){
  stroke(paintColor);
  strokeWeight(15);
  line(mouseX,mouseY,pmouseX,pmouseY);
  }

  stroke(0);
  strokeWeight(2);
  //Red Paint 
  fill(255,0,0);
  square(0,0,20);
  //Orange Paint
  fill(255,165,0);
  square(0,30,20);
  //Yellow Paint
  fill(255,255,0);
  square(0,60,20);
  //greenPaint
  fill(0,255,0);
  square(0,90,20);
  //Cyan Paint
  fill(0,255,255);
  square(0,120,20);
  //Blue Paint
  fill(0,0,255);
  square(0,150,20);
  //Magenta Paint
  fill(255,0,255);
  square(0,180,20);
  //Brown Paint
  fill(165,42,42);
  square(0,210,20);
  //White Paint
  fill(255);
  square(0,240,20);
  //Black Paint
  fill(0);
  square(0,270,20);
}

