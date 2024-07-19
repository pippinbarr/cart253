The importance of the idea that you can *change* JS objects inside a function, which can lead to structural benefits

Also the idea that you can have an object as a way to make cleaner/more readable arguments? Though that really needs to be combined with that expansion technique... destructuring, which might be a bit overwhelming for them? Or just have it as one more video showing how it works

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