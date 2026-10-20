/**
 * Functions B
 * Pippin Barr
 * 
 * Some sort of Avoidant Behaviour Game
 */

"use strict";

// Three balls to avoid, defined later
let ball1 = undefined;
let ball2 = undefined;
let ball3 = undefined;

/**
 * Creates canvas and the balls
 */
function setup() {
    createCanvas(800, 400);

    // Create each ball in a different position and colour
    ball1 = createBall(0, height * 0.25, 75, "red");
    ball2 = createBall(0, height * 0.5, 75, "orange");
    ball3 = createBall(0, height * 0.75, 75, "yellow");
}

/**
 * Creates a ball object with position, size, color, and velocity 
 */
function createBall(x, y, size, color) {
    const ball = {
        x: x,
        y: y,
        size: size,
        color: color,
        velocity: {
            x: random(10, 20),
            y: 0
        }
    };
    return ball;
}

/**
 * Draws the field, moves the balls, draws them, checks avoidance
 */
function draw() {
    drawField();
    moveBalls();
    drawBalls();

    checkCollisions();
}

/**
 * Draws the field - just green with a line on it
 */
function drawField() {
    background("#ceeb55");
    stroke("green");
    line(width * 0.5, 0, width * 0.5, height);
}

/**
 * Move the three balls
 */
function moveBalls() {
    moveBall(ball1);
    moveBall(ball2);
    moveBall(ball3);
}

/**
 * Moves the provided ball according to its velocity
 * Checks if it goes off the right side and resets it
 */
function moveBall(ball) {
    // Move the ball
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;

    // Check for going off screen
    if (ball.x > width) {
        // Reset to left
        ball.x = 0;
        // Randomize velocity and size for some excitement
        // These numbers are really key to the whole experience
        ball.velocity.x = random(10, 20);
        ball.size = random(40, 150);
    }
}

/**
 * Check for collision between mouse and the balls
 */
function checkCollisions() {
    checkCollision(ball1);
    checkCollision(ball2);
    checkCollision(ball3);
}

/**
 * Check if the provided ball overlaps the mouse
 */
function checkCollision(ball) {
    // Check the distance
    const d = dist(ball.x, ball.y, mouseX, mouseY);
    // See if the mouse is inside the ball
    if (d < ball.size / 2) {
        // If so we have a cheap game over by stopping the program
        background("red");
        noLoop();
    }
}

/**
 * Draws the three balls
 */
function drawBalls() {
    // Draw the red ball at the top
    drawBall(ball1);
    // Draw the orange in the middle
    drawBall(ball2);
    // Draw the yellow ball at the bottom
    drawBall(ball3);
}

/**
 * Draws the provided ball as a circle
 */
function drawBall(ball) {
    // Draw the ball as a circle according to its properties
    push();
    noStroke();
    fill(ball.color);
    circle(ball.x, ball.y, ball.size);
    pop();
}
