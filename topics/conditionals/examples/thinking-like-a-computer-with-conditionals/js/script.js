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
    // Otherwise draw and X in the centre
    else {
        drawX();
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

/**
 * Draws an X in the centre of the canvas
 */
function drawX() {
    push();
    stroke("#ff0000");
    strokeWeight(10);
    line(width * 0.33, height * 0.25, width * 0.66, height * 0.75);
    line(width * 0.66, height * 0.25, width * 0.33, height * 0.75);
    pop();
}