/**
 * Thinking like a computer with conditionals
 * Pippin Barr
 * 
 * A simple program to make sure we understand conditionals.
 */

"use strict";

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 400);
}


/**
 * Draw shapes based on conditions
 */
function draw() {
    background("#000000");

    // Draw a square if the mouse is in the left third
    if (mouseX < width * 0.33) {
        drawSquare();
    }
    // Draw a circle if the mouse is in the right third
    else if (mouseX > width * 0.66) {
        drawCircle();
    }
    // Otherwise make the background red
    else {
        background("#ff0000");
    }
}

/**
 * Draws a square on the left side of the canvas
 */
function drawSquare() {
    push();
    fill("#ff0000");
    noStroke();
    rectMode(CENTER);
    rect(width * 0.1666, height * 0.5, width * 0.33);
    pop();
}

/**
 * Draws a circle on the right side of the canvas
 */
function drawCircle() {
    push();
    fill("#ff0000");
    noStroke();
    ellipse(width * 0.8333, height * 0.5, width * 0.33);
    pop();
}