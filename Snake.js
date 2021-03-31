var s;

var scl = 20;

var food;

var Score;

function setup() {
  createCanvas(600, 600);
  button2 = createButton(this.length);
  button2.position(100,0);
  button1 = createButton('Your Score = ');
  button1.position(0,0);
  button = createButton("Play Again")
  button.position(0,25);
  button.mousePressed(changeBG);
  button.mousePressed(resetsketch);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function resetsketch () {
  setup();
}

function changeBG() {
  let val = random(255);
  background(val);
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)),                       floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(255,100);
  s.death();
  s.update();
  s.show();
  
  if (s.eat(food)) {
    pickLocation();
  }
  
  fill(255,0,0);
  ellipse(food.x+10,food.y+10,scl,scl)
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    s.dir(0,-1);
  }
  else if(keyCode === DOWN_ARROW) {
    s.dir(0,1);
  }
  else if(keyCode === RIGHT_ARROW) {
    s.dir(1,0);
  }
  else if(keyCode === LEFT_ARROW) {
    s.dir(-1,0);
  }
}