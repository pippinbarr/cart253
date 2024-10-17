# Arrays challenges {
   
We're going to start with some example code for you to modify, so start a new p5 project and paste in the following program:

```javascript
/**
 * Boingo
 * Pippin Barr
 *
 * A ball that bounces around on the canvas
 */

let ball = undefined; // Will create it with createBall()

/**
 * Create the canvas and the ball
 */
function setup() {
  // Create the canvas
  createCanvas(400, 400);
  // Create the ball
  ball = createBall();
}

/**
 * Creates a random ball
 */
function createBall() {
  // Create a ball object with appropriate properties
  const newBall = {
    // Position and dimensions
    x: 200,
    y: 200,
    size: 20,
    // Colour
    fill: "#000000",
    // Movement
    velocity: {
      x: random(-5, 5),
      y: random(-5, 5)
    }
  };
  return newBall;
}

/**
 * Moves and draws the ball
 */
function draw() {
  background("#87ceeb");
  
  moveBall();
  bounceBall();
  drawBall();
}

/**
 * Moves the ball according to its velocity
 */
function moveBall() {
  ball.x += ball.velocity.x;
  ball.y += ball.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall() {
  // Check if the ball has reached the left or right
  const bounceX = (ball.x > width || ball.x < 0);
  // Check if the ball has reached the top or bottom
  const bounceY = (ball.y > height || ball.y < 0);
  
  // Handle bouncing horizontally
  if (bounceX) {
    ball.velocity.x *= -1;
  }
  // Handle bouncing vertically
  if (bounceY) {
    ball.velocity.y *= -1;
  }
}

/**
 * Draw the ball on the canvas
 */
function drawBall() {
  push();
  noStroke();
  fill(ball.fill);
  ellipse(ball.x, ball.y, ball.size);
  pop();
}
```
    
## Challenges

We're going to convert this program to use an array so we can have an arbitrary number of balls moving and displaying on the canvas.

### Challenge 1: Upgrade to functions with parameters

If we're going to have multiple balls in our simulation we're going to want our functions to be able to move, bounce, and draw *any* ball, not just the specific one we have right now. So *convert* those three functions to accept a parameter (`ball` would make sense) and act on that parameter.

For now, also pass the current `ball` variable to each function so they still work.

### Challenge 2: Add our array

Instead of a single `ball` variable, create a variable called `balls` and assign an empty array.

### Challenge 3: Add our loop

To deal with our new array, add a `for...of` loop in `draw()` that goes through the `balls` array and calls our three functions on each element.

### Challenge 4: Add some balls!

Add a `mousePressed()` event handler that adds a ball each time the user clicks on the canvas. Consider modifying `createBall()` so that it receives an `x` and `y` and use `mouseX` and `mouseY` when you call it.

### Challenge 5: Debugging

Here's a broken version of one of the examples. See if you can debug it!

[Download the Arrays Debugging Challenge Project](./arrays-debugging-challenge.zip)
    
## }