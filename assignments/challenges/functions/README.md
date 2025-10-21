# Functions Challenge

Let's make sure we understand the key ideas of using *functions* in JavaScript by using them in a miniature project.

As with all challenges, do this work *in pairs* and *in class*. This means you will both submit the same work and should work together on one computer to produce the project. You can take turns typing stuff in.

To start up you should:

1. Download the [template project](../../../templates/template-p5-project.zip)
2. Rename that folder, maybe to `functions-challenge`
3. Put that folder in your `cart253` repository
4. Commit and push that change with a message like "Started the events challenge"
5. Keep committing and pushing as you go along to practice your commit message writing

### 🔥 Do not do the challenge solo. 🔥
### 🔥 Do not do the challenge at home. 🔥
### 🔥 It is okay not to finish the challenge. 🔥
### 🔥 The main thing it to try hard and ask for help. 🔥
### 🔥 The 🌶️ steps are for people wanting to be ambitious 🔥
### 🔥 Try to spend 30-45 minutes maximum to save time for your other work 🔥

## Challenge

With your partner(s):

> Bounce a ball

### Step 1: Set up the example code
   
We're going to start with some example code for you to modify, so start paste the following code into your `script.js`:

```javascript
/**
 * Bouncy Ball Ball Bonanza
 * Pippin Barr
 * 
 * The starting point for a ball-bouncing experience of
 * epic proportions!
 */

"use strict";

// Our ball
const ball = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0,
        y: 10
    }
};

// Our paddle
const paddle = {
    x: 300,
    y: 280,
    width: 80,
    height: 10
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);
}


/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#87ceeb");

    movePaddle(paddle);
    moveBall(ball);

    handleBounce(ball, paddle);

    drawPaddle(paddle);
    drawBall(ball);
}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {

}

/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball) {

}

/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce(ball, paddle) {

}

/**
 * Draws the specified paddle on the canvas
 */
function drawPaddle(paddle) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}

/**
 * Draws the specified ball on the canvas
 */
function drawBall(ball) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}

/**
 * Returns true if rectA and rectB overlap, and false otherwise
 * Assumes rectA and rectB have properties x, y, width and height to describe
 * their rectangles, and that rectA and rectB are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlap(rectA, rectB) {
  return (rectA.x + rectA.width/2 > rectB.x - rectB.width/2 &&
          rectA.x - rectA.width/2 < rectB.x + rectB.width/2 &&
          rectA.y + rectA.height/2 > rectB.y - rectB.height/2 &&
          rectA.y - rectA.height/2 < rectB.y + rectB.height/2);
}
```

### Step 2: Implement `movePaddle()`

Make the paddle move by setting its `x` to the mouse position. 

🌶️ Implement something more cute if you feel like it by using the keys or anything else. (Check out `keyIsDown()` for a potentially useful way to control the paddle with keys.)

### Step 3: Implement `moveBall()`

Make the ball move by adding its current velocity to its current position.

🌶️ If you want to be really fancy you could add the idea of acceleration.

### Step 4: Implement `handleBounce()`

Write an `if`-statement in `handleBounce()` that checks if the `ball` and `paddle` overlap. If they overlap, reverse the `ball`'s `y` velocity. That is, if it's positive, make it negative, and if it's negative, make it positive. (You could multiply by -1 for instance.)

You can use the `checkOverlap()` function to do the overlap check but first make sure you understand what it's doing (essentially "if the right edge of a is to the right of the left edge of b, and the left edge of a is to the left of the right edge of b, and ...").

### Step 5: Two balls!

Add another ball object to the program (calling it `ball2` is fine) with a different position and velocity etc., then call `moveBall()`, `drawBall()` and `handleBounce()` with that ball to see some of the magic of functions!

🌶️ Could you have two paddles as well? How would you control them separately? (Maybe the simplest would be if they each moved in the opposite direction to one another?) 

## References

- The course materials
- [The p5 reference](https://p5js.org/reference/)

## Evaluation

When you're finished, show the instructor or teaching assistant your work and they will confirm you've passed the challenge and can submit it on the Moodle.

This challenge is pass/fail and is worth 1% of your final grade.

## Submission

Once you're cleared to submit, go to the Moodle and both submit your work. You should **all separately submit**:

- Your names
    - The link to the repository on GitHub (e.g. https://github.com/pippinbarr/cart253/topics/functions/functions-challenge/)
    - The link to the website version on GitHub Pages (e.g. https://pippinbarr.github.io/cart253/topics/functions/functions-challenge/)
    
*Note*: It's fine if the project is only in one of your repositories, but it's not a bad idea to make sure you *both* have it for your own reference.



# Functions challenges {
   
We're going to start with some example code for you to modify, so start a new p5 project and paste in the following program:


    
## Challenges

### Challenge 1: Write a function that can draw both elements

Right now there are separate functions for `drawBall()` and `drawPaddle()` that are almost identical. Write a new function called `drawBlock()` that takes an object as a parameter and draws that element in the same way. Then call `drawBlock()` twice in `draw()` to draw both the ball and the paddle.

### Challenge 2: Implement `movePaddle()`

Make the paddle move by setting its `x` to the mouse position. Implement something more cute if you feel like it by using the keys or anything else (check out `keyIsDown()` for a potentially useful way to control the paddle with keys).

### Challenge 3: Implement `moveBall()`

Make the ball move according to its current velocity. Set its `y` velocity to a positive number in the `ball` object at the top of the script so that it starts out moving downwards.

### Challenge 4: Implement `handleBounce()`

Write an `if`-statement in `handleBounce()` that checks if the `ball` and `paddle` overlap. If they overlap, reverse the `ball`'s `y` velocity. That is, if it's positive, make it negative, and if it's negative, make it positive. (You could multiply by -1 for instance.)

You can use this helper function to do the overlap check but try to make sure you understand what it's doing (essentially "if the right edge of a is to the right of the left edge of b, and the left edge of a is to the left of the right edge of b, and ..."):

```javascript
/**
 * Returns true if a and b overlap, and false otherwise
 * Assumes a and b have properties x, y, width and height to describe
 * their rectangles, and that a and b are displayed centred on their
 * x,y coordinates.
 */
function centredRectanglesOverlap(a, b) {
  return (a.x + a.width/2 > b.x - b.width/2 &&
          a.x - a.width/2 < b.x + b.width/2 &&
          a.y + a.height/2 > b.y - b.height/2 &&
          a.y - a.height/2 < b.y + b.height/2);
}
```

### Challenge 5: Add gravity

Create a constant at the top of the program called `gravity` and assign `0.1` to it. (You can and should experiment with this number later.)

In `moveBall()` before you update the `ball`'s position add `gravity` to the `ball`'s `y` velocity to apply gravity (which is always trying to make the `ball`'s `y` velocity more positive).

### Challenge 6: Debugging

Here's a broken version of one of the examples. See if you can debug it!

[Download the Functions Debugging Challenge Project](./functions-debugging-challenge.zip)
    
## }