# Arrays Challenge

Let's make sure we understand the key ideas of using *arrays* in JavaScript by using them in a miniature project.

As with all challenges, do this work *in pairs* and *in class*. This means you will both submit the same work and should work together on one computer to produce the project. You can take turns typing stuff in.

To start up you should:

1. Download the [template project](../../../templates/template-p5-project.zip)
2. Rename that folder, maybe to `arrays-challenge`
3. Put that folder in your `cart253` repository
4. Commit and push that change with a message like "Started the arrays challenge"
5. Keep committing and pushing as you go along to practice your commit message writing

### 🔥 Do not do the challenge solo. 🔥
### 🔥 Do not do the challenge at home. 🔥
### 🔥 It is okay not to finish the challenge. 🔥
### 🔥 The main thing it to try hard and ask for help. 🔥
### 🔥 The 🌶️ steps are for people wanting to be ambitious 🔥
### 🔥 Try to spend 30-45 minutes maximum to save time for your other work 🔥

## Challenge

With your partner(s):

> Bounce a *lot* of balls

### Step 1: Set up the example code
   
We're going to start with some example code for you to modify, so start paste the following code into your `script.js`:

```javascript
/**
 * Boingo
 * Pippin Barr
 *
 * A ball that bounces around on the canvas
 */

let ball1 = undefined; // Will create it with createBall()

/**
 * Create the canvas and the ball
 */
function setup() {
  // Create the canvas
  createCanvas(400, 400);
  // Create the ball
  ball1 = createBall();
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
  ball1.x += ball1.velocity.x;
  ball1.y += ball1.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall() {
  // Check if the ball has reached the left or right
  const bounceX = (ball1.x > width || ball1.x < 0);
  // Check if the ball has reached the top or bottom
  const bounceY = (ball1.y > height || ball1.y < 0);
  
  // Handle bouncing horizontally
  if (bounceX) {
    ball1.velocity.x *= -1;
  }
  // Handle bouncing vertically
  if (bounceY) {
    ball1.velocity.y *= -1;
  }
}

/**
 * Draw the ball on the canvas
 */
function drawBall() {
  push();
  noStroke();
  fill(ball1.fill);
  ellipse(ball1.x, ball1.y, ball1.size);
  pop();
}
```

### Step 2: Convert to functions with parameters

If we're going to have multiple balls in our simulation we're going to want our functions to be able to move, bounce, and draw *any* ball, not just the specific one we have right now. So *convert* those three functions to accept a parameter (`ball` would make sense) and act on that parameter, you'll need to change:

- `moveBall()`
- `bounceBall()`
- `drawBall()`

Make sure you pass in the current `ball1` variable to each function when they are called in `draw()` so the program still works.

### Step 3: Add an array

Instead of a single `ball1` variable, create a variable called `balls` and assign an empty array.

### Step 4: Add a `for...of` loop to `draw()`

To use our new array, we need to *loop* through it to call each of our three functions `moveBall()`, `bounceBall()` and `drawBall()` on each of the balls in the array.

Add a `for...of` loop in `draw()` that goes through every ball in the `balls` array and calls our three functions, passing through the current element each time.

Note: we won't see any balls on the canvas when we run the program now because the array is empty! Add a ball to the array manually in `setup()` if you want to check, or just follow step 5 below.

### Step 5: Add some balls!

Add a `mousePressed()` (event handler) function that adds a ball each time the user clicks on the canvas. You can call `createBall()` in there to create a ball, then add it to the `balls` array (using `.push()` is probably the best here).

🌶️ Consider modifying `createBall()` so that it receives an `x` and `y` and use `mouseX` and `mouseY` when you call it?

🌶️ Consider checking the motion of the mouse using `pmouseX` and `pmouseY` along with `mouseX` and `mouseY` to "throw" the ball in the direction of mouse movement in the last frame?

## References

- The course materials
- [The p5 reference](https://p5js.org/reference/)

## Evaluation

When you're finished, show the instructor or teaching assistant your work and they will confirm you've passed the challenge and can submit it on the Moodle.

This challenge is pass/fail and is worth 1% of your final grade.

## Submission

Once you're cleared to submit, go to the Moodle and both submit your work. You should **all separately submit**:

- Your names
    - The link to the repository on GitHub (e.g. https://github.com/pippinbarr/cart253/topics/arrays/arrays-challenge/)
    - The link to the website version on GitHub Pages (e.g. https://pippinbarr.github.io/cart253/topics/arrays/arrays-challenge/)
    
*Note*: It's fine if the project is only in one of your repositories, but it's not a bad idea to make sure you *both* have it for your own reference.
