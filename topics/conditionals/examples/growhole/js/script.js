/**
 * Growhole
 * Pippin Barr
 * 
 * An example of storing the result of a condition in a variable
 * to make a program more readable.
*/

"use strict";

// The hole itself
const hole = {
    // Position
    x: 200,
    y: 200,
    // Size
    size: 10,
    // Maximum size
    maxSize: 200,
    // How much it grows per frame
    growthRate: 1
};

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Updates and displays the hole
 */
function draw() {
    background(225);

    growHole();
    checkHoleSize();
    drawHole();
}

/**
 * Increases the hole's size by its growth rate
 */
function growHole() {
    hole.size += hole.growthRate;
}

/**
 * Checks if the hole has reached its maximum size
 */
function checkHoleSize() {
    // We can *store* the condition we care about in a variable
    const holeAtMaximum = (hole.size >= hole.maxSize);
    // This makes the conditional even easier to read!
    if (holeAtMaximum) {
        // Stop the hole's growth! It's big enough!
        hole.growthRate = 0;
    }
}

/**
 * Draws the hole on the canvas
 */
function drawHole() {
    push();
    noStroke();
    fill(0);
    ellipse(hole.x, hole.y, hole.size);
    pop();
}