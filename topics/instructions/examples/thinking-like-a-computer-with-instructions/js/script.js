/**
 * Thinking like a computer with instructions
 * Pippin Barr
 * 
 * An ultra simple example of instructions
 */

"use strict";

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(400, 400);
}


/**
 * Sets background, draws the eye
*/
function draw() {
    // The void
    background("#000000");

    // The eye
    drawEye();
}

/**
 * Draws a creepy void eye
 */
function drawEye() {
    // Eyeball
    push();
    noStroke();
    fill("#ffffff");
    ellipse(200, 200, 100);
    pop();

    // Retina
    push();
    noStroke();
    fill("#000000");
    ellipse(200, 200, 25);
    pop();
}