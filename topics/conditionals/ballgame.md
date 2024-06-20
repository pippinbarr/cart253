```javascript
const ball = {
  x: 200,
  y: 200,
  size: 50,
  velocity: {
    x: 0,
    y: 0
  },
  fill: "#ffffff",
  fills: {
    default: "#ffffff",
    overlap: "#ff0000"
  }
};

function setup() {
  createCanvas(400, 400);
  
  resetBall();
}

function draw() {
  background(220);
  
  moveBall();
  checkBall();
  drawBall();
}

function moveBall() {
  ball.x += ball.velocity.x;
  ball.y += ball.velocity.y;
}

function checkBall() {
  checkBallOffScreen();
  checkBallMouseOverlap();
}

function checkBallOffScreen() {
  if (ball.x < 0) {
    resetBall();
  }
  else if (ball.x > width) {
    resetBall();
  }
  else if (ball.y < 0) {
    resetBall();
  }
  else if (ball.y > height) {
    resetBall();
  }
}

function checkBallMouseOverlap() {
  ball.fill = ball.fills.default;
  if (mouseX > ball.x - ball.size/2) {
    if (mouseX < ball.x + ball.size/2) {
      if (mouseY > ball.y - ball.size/2) {
        if (mouseY < ball.y + ball.size/2) {
          ball.fill = ball.fills.overlap;
        }
      }
    }
  }
}

function drawBall() {
  push();
  noStroke();
  fill(ball.fill);
  rectMode(CENTER);
  rect(ball.x, ball.y, ball.size, ball.size);
  pop();
}

function resetBall() {
  ball.x = width/2;
  ball.y = width/2;
  ball.velocity.x = random(-5, 5);
  ball.velocity.y = random(-5, 5);
}
```