/**
 * Refactoring
 * Pippin Barr
 * 
 * A simulation of bouncing three balls off a paddle in zero gravity
 * with perfect restitution (bounce)...
 * 
 * This is a project that is intentionally repetitive so that we can practice
 * noticing repetition and using functions (with parameters and return
 * values) to reduce it. That is, modularity and reuse.
 */

"use strict";

// Ball 1
const ball1 = {
    // Position and size
    x: 100,
    y: 0,
    size: 20,
    // Velocity
    velocity: {
        x: 0,
        y: 4 // Moves down
    }
};

// Ball 2 is just like ball1 in a different place with different velocity
const ball2 = {
    x: 200,
    y: -50,
    size: 20,
    velocity: {
        x: 0,
        y: 5
    }
};

// Ball 2 is just like ball1 and ball2 in a different place 
// with different velocity
const ball3 = {
    x: 300,
    y: -25,
    size: 20,
    velocity: {
        x: 0,
        y: 6
    }
};

// The paddle the user controls
const paddle = {
    // Position
    x: undefined, // Will be mouseX
    y: undefined, // Will be set in setup,
    // Dimensions
    width: 100,
    height: 20
};

/**
 * Create the canvas and position the paddle
*/
function setup() {
    createCanvas(400, 400);

    // Position the paddle at the bottom
    paddle.y = height - paddle.height;
}


/**
 * Background, update balls and paddle, check bounces, display it all
*/
function draw() {
    // Black background!
    background(0);

    // Move balls
    moveBall1();
    moveBall2();
    moveBall3();

    // Move paddle
    movePaddle();

    // Check for bounces
    checkBall1Bounce();
    checkBall2Bounce();
    checkBall3Bounce();

    // Display balls
    drawBall1();
    drawBall2();
    drawBall3();

    // Display paddle
    drawPaddle();
}

/**
 * Move ball 1 by its velocity
 */
function moveBall1() {
    ball1.x += ball1.velocity.x;
    ball1.y += ball1.velocity.y;
}

/**
 * Move ball 2 by its velocity
 */
function moveBall2() {
    ball2.x += ball2.velocity.x;
    ball2.y += ball2.velocity.y;
}

/**
 * Move ball 3 by its velocity
 */
function moveBall3() {
    ball3.x += ball3.velocity.x;
    ball3.y += ball3.velocity.y;
}

/**
 * Move the paddle to the mouse location
 */
function movePaddle() {
    paddle.x = mouseX;
}

/**
 * Checks if ball1 is bouncing off the paddle
 */
function checkBall1Bounce() {
    // Check if ball1 overlaps the paddle
    const overlap = (ball1.x + ball1.size > paddle.x &&
        ball1.x < paddle.x + paddle.width &&
        ball1.y + ball1.size > paddle.y &&
        ball1.y < paddle.y + paddle.height);
    // If there is an overlap, bounce the ball back up
    if (overlap) {
        ball1.velocity.y *= -1;
    }
}

/**
 * Checks if ball2 is bouncing off the paddle
 */
function checkBall2Bounce() {
    // Check if ball2 overlaps the paddle
    const overlap = (ball2.x + ball2.size > paddle.x &&
        ball2.x < paddle.x + paddle.width &&
        ball2.y + ball2.size > paddle.y &&
        ball2.y < paddle.y + paddle.height);
    // If there is an overlap, bounce the ball back up
    if (overlap) {
        ball2.velocity.y *= -1;
    }
}

/**
 * Checks if ball3 is bouncing off the paddle
 */
function checkBall3Bounce() {
    // Check if ball3 overlaps the paddle
    const overlap = (ball3.x + ball3.size > paddle.x &&
        ball3.x < paddle.x + paddle.width &&
        ball3.y + ball3.size > paddle.y &&
        ball3.y < paddle.y + paddle.height);
    // If there is an overlap, bounce the ball back up
    if (overlap) {
        ball3.velocity.y *= -1;
    }
}

/**
 * Draw ball 1 as a white square
 */
function drawBall1() {
    push();
    noStroke();
    fill(255);
    rect(ball1.x, ball1.y, ball1.size);
    pop();
}

/**
 * Draw ball 2 as a white square
 */
function drawBall2() {
    push();
    noStroke();
    fill(255);
    rect(ball2.x, ball2.y, ball2.size);
    pop();
}

/**
 * Draw ball 3 as a white square
 */
function drawBall3() {
    push();
    noStroke();
    fill(255);
    rect(ball3.x, ball3.y, ball3.size);
    pop();
}

/**
 * Draw the paddle as a white rectangle
 */
function drawPaddle() {
    push();
    noStroke();
    fill(255);
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}