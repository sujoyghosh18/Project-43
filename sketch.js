var hr,mn,sc;
var scAngle,hrAngle,mnAngle;

function setup() {
  createCanvas(1200,1200);
  
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);

  translate(750,350);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);
  mnAngle = map(mn,0,60,0,360);
  
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,200,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,175,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,150,0);
  pop();

  stroke(255,0,255);
  point(0,0);
  strokeWeight(10);
  noFill();

  stroke(255,0,0);
  noFill();
  arc(0,0,500,500,0,scAngle);

  stroke(0,255,0);
  arc(0,0,480,480,0,mnAngle);

  stroke(0,0,255);
  arc(0,0,460,460,0,hrAngle);
}