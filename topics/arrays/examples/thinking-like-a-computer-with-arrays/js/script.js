/**
 * Thinking like a computer with arrays
 * Pippin Barr
 * 
 * A simple program to follow arrays (and for...of loops)
 */

"use strict";

// Our empty array that will contain circles to draw
let circles = [];

/**
 * Create the canvas and adds circles to our array
*/
function setup() {
    createCanvas(500, 500);

    // Create a circle
    const newCircle = createCircle();
    // Push it into the array
    circles.push(newCircle);

    // Also add another circle using an explicit index (less great)
    circles[1] = createCircle();
}

/**
 * Creates a randomly positioned and sized circle
 */
function createCircle() {
    return {
        x: random(0, width),
        y: random(0, height),
        size: random(10, 50)
    };
}

/**
 * Display the contents of the array
*/
function draw() {
    background("yellow");

    // Go through every circle in the array one at a time
    // and draw it
    for (let currentCircle of circles) {
        drawCircle(currentCircle);
    }
}

/**
 * Displays the provided circle
 */
function drawCircle(circleToDraw) {
    push();
    noStroke();
    fill(0);
    ellipse(circleToDraw.x, circleToDraw.y, circleToDraw.size);
    pop();
}

/**
 * Adds a circle to the canvas
 */
function keyPressed() {
    // Create the circle (data)
    const newCircle = createCircle();
    // Add the circle onto the array
    circles.push(newCircle);
}