/**
 * Flies
 * Pippin Barr
 * 
 * A program for drawing flies on the canvas. The flies are stored
 * in an array.
 */

"use strict";

// Our array of flies (specifically "fly data" really)
// Each fly has a position and a size
let flies = [
    {
        x: 100,
        y: 125,
        size: 10
    },
    {
        x: 160,
        y: 170,
        size: 14
    },
    {
        x: 180,
        y: 50,
        size: 5
    }
];

/**
 * Create the canvas
 */
function setup() {
    // Let's make it tiny for some reason
    createCanvas(200, 200);
}

/**
 * Display the flies in the array
 */
function draw() {
    background("#87ceed");

    // Display each fly in the array

    // The fly at index 0
    push();
    fill(0);
    ellipse(flies[0].x, flies[0].y, flies[0].size);
    pop();

    // The fly at index 1
    push();
    fill(0);
    ellipse(flies[1].x, flies[1].y, flies[1].size);
    pop();

    // The fly at index 2
    push();
    fill(0);
    ellipse(flies[2].x, flies[2].y, flies[2].size);
    pop();
}