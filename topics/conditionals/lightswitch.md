```javascript

let lightOffBGColour = "#000000";
let lightOnBGColour = "#ffff00";
let bgColour = lightOffBGColour;

let button = {
  x: 200,
  y: 200,
  size: 100,
  offset: {
    x: 5,
    y: 5
  },
  unpressedOffset: 5,
  on: false
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(bgColour);
  
  push();
  noStroke();
  fill(50, 50, 50);
  ellipse(button.x, button.y, button.size);
  pop();
  
  push();
  noStroke();
  fill(255, 0, 0);
  ellipse(button.x - button.offset.x, button.y - button.offset.y, button.size);
  pop();
}

function mousePressed() {
  if (dist(button.x, button.y, mouseX, mouseY) < button.size/2) {
    button.offset.x = 0;
    button.offset.y = 0;
    button.on = !button.on;
    if (button.on) {
      bgColour = lightOnBGColour;
    }
    else {
      bgColour = lightOffBGColour;
    }
  }
}

function mouseReleased() {
  button.offset.x = button.unpressedOffset;
  button.offset.y = button.unpressedOffset;
  button.pressed = false;
}
```