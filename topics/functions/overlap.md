let mouseSize = 100;

let target = {
  x: 200,
  y: 200,
  size: 100
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  let overlapping = overlap(mouseX, mouseY, mouseSize, target.x, target.y, target.size);
  if (overlapping) {
    background("#ff0000");
  }
  else {
    background("#000000");
  }
  
  ellipse(mouseX, mouseY, mouseSize);
  ellipse(target.x, target.y, target.size);
}

function overlap(x1, y1, size1, x2, y2, size2) {
  let d = dist(x1, y1, x2, y2);
  if (d < size1/2 + size2/2) {
    return true;
  }
  else {
    return false;
  }
}