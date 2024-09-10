/**
 * Flies flies flies!
 * Pippin Barr
 * 
 * A project 
 */

"use strict";

// An array for our flies
// Starts out empty!
let flies = [];

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(300, 300);

    // Create a fly so we can see something
    flies[0] = createFly();
}

/**
 * Creates a fly (data) with random numbers
 */
function createFly() {
    // Generate the random fly
    let fly = {
        x: random(0, width),
        y: random(0, height),
        size: random(10, 20),
        buzziness: random(2, 8)
    };
    // Return the random fly
    return fly;
}

/**
 * Moves and displays the flies
 */
function draw() {
    background("#87ceeb");

    // Go through all the flies
    for (let fly of flies) {
        moveFly(fly);
        drawFly(fly);
    }
}

/**
 * Moves the fly by changing its position randomly
 * according to its buzziness
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

/**
 * Draws the fly parameter to canvas
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}