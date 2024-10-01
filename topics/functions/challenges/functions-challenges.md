# Functions challenges {
   
We're going to start with some example code for you to modify, so start a new p5 project and paste in the following program:

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
        y: 0
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
 * Moves the ball
 */
function moveBall(ball) {

}

function handleBounce(ball, paddle) {

}

/**
 * Draws the paddle on the canvas
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
 * Draws the ball on the canvas
 */
function drawBall(ball) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}
```
    
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