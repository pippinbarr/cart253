/**
 * Red record
 * Pippin Barr
 * 
 * Draws a bright red vinyl record on the canvas.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    // A nice square canvas to work with
    createCanvas(640, 640);
}

/**
 * Draws a bright red record
 */
function draw() {
    // A grey background
    background(150, 150, 150);

    // The main part of the record is red
    push();
    fill(255, 0, 0);
    stroke(255, 255, 255);
    ellipse(320, 320, 480, 480);
    pop();

    // The label on the record
    push();
    fill(255, 255, 255);
    noStroke();
    ellipse(320, 320, 140, 140);
    pop();

    // The hole in the record
    push();
    fill(150, 150, 150);
    stroke(50, 50, 50);
    ellipse(320, 320, 20, 20);
    pop();
}