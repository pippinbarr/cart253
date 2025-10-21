/**
 * Thinking like a computer with functions
 * Pippin Barr
 * 
 * An example of a function with parameters and a return value.
 */

"use strict";

/**
 * Create a canvas
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * Draw the shapes, calculate a result
*/
function draw() {
    background("pink");

    // Draw two coloured rectangles
    drawCenteredNoStrokeRectWithColor(width / 2, height / 4, 200, 100, "#ceeb87");
    drawCenteredNoStrokeRectWithColor(width / 2, 3 * height / 4, 200, 100, "#ce87eb");

    // Calculate the meaning of life
    const meaningOfLife = add(21, 21);

    // Display the meaning of life
    push();
    textSize(64);
    textAlign(CENTER, CENTER);
    text(meaningOfLife, width / 2, height / 2);
    pop();
}

/**
 * Adds a and b and returns the result
 */
function add(a, b) {
    const result = a + b;
    return result;
}

/**
 * Draws a centered rect with no stroke at the provided position
 * with the provided dimensions and fills it with the provided colour
 */
function drawCenteredNoStrokeRectWithColor(x, y, w, h, c) {
    push();
    rectMode(CENTER);
    noStroke();
    fill(c);
    rect(x, y, w, h);
    pop();
}