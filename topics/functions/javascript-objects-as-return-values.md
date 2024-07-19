```javascript
let fly1 = undefined;
let fly2 = undefined;

function setup() {
  createCanvas(400, 400);
  
  fly1 = createFly(100, 100, 10, 5);
  fly2 = createFly(200, 200, 5, 1);
}

function createFly(x, y, size, buzziness) {
  return {
    x: x,
    y: x,
    size: size,
    buzziness: buzziness
  };
}

function draw() {
  background(220);
  
  moveFly1();
  moveFly2();
  
  displayFly1();
  displayFly2();
}

function moveFly1() {
  fly1.x += random(-fly1.buzziness, fly1.buzziness);
  fly1.y += random(-fly1.buzziness, fly1.buzziness);
}

function moveFly2() {
  fly2.x += random(-fly2.buzziness, fly2.buzziness);
  fly2.y += random(-fly2.buzziness, fly2.buzziness);
}

function displayFly1() {
  push();
  fill(0);
  noStroke();
  ellipse(fly1.x, fly1.y, fly1.size);
  pop();
}

function displayFly2() {
  push();
  fill(0);
  noStroke();
  ellipse(fly2.x, fly2.y, fly2.size);
  pop();
}
```

```javascript
const fly1 = {
  x: 100,
  y: 100,
  size: 10,
  buzziness: 5
};

const fly2 = {
  x: 200,
  y: 200,
  size: 5,
  buzziness: 1
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  moveFly(fly1);
  moveFly(fly2);
  
  displayFly(fly1);
  displayFly(fly2);
}

function moveFly(fly) {
  fly.x += random(-fly.buzziness, fly.buzziness);
  fly.y += random(-fly.buzziness, fly.buzziness);
}

function displayFly(fly) {
  push();
  fill(0);
  noStroke();
  ellipse(fly.x, fly.y, fly.size);
  pop();
}
```