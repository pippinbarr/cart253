/**
 * Machines
 * Pippin Barr
 * 
 * A starting point for a project that displays different machines
 * on the canvas. Eventually I'd like to be able to drag and drop
 * items onto the machines and have them act in different ways.
 * For now I'm happy to just show that they're distinct.
 */

"use strict";

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 200);
}

/**
 * Display the three machines
 */
function draw() {
    background(0);

    // Incinerator
    push();
    noStroke();
    fill("#ff4400");
    rect(0, 100, 100, 100);
    pop();

    // Freezer
    push();
    noStroke();
    fill("#bbbbff");
    rect(150, 100, 100, 100);
    pop();

    // Crusher
    push();
    noStroke();
    fill("#777777");
    rect(300, 100, 100, 100);
    pop();
}