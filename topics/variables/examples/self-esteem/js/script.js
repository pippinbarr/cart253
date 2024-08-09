/**
 * Self-Esteem
 * Pippin Barr
 * 
 * A portrait of Pippin's self-esteem on a sunny day.
 */

"use strict";

// Colour of the sky
let skyRed = 150;
let skyGreen = 180;
let skyBlue = 250;

// The sun

// Colour
let sunRed = 255;
let sunGreen = 255;
let sunBlue = 0;
// Position and size
let sunX = 500;
let sunY = 70;
let sunSize = 100;

// My self-esteem

// Greyscale shade
let selfEsteemShade = 0;
// Position and size
let selfEsteemX = 320;
let selfEsteemY = 320;
let selfEsteemSize = 20;

/**
 * Create the canvas
 */
function setup() {
    // Create the canvas
    createCanvas(640, 320);
}

/**
 * Displays the sky, sun, and self-esteem
 */
function draw() {
    // A nice blue sky
    background(skyRed, skyGreen, skyBlue);

    // The sun
    push();
    fill(sunRed, sunGreen, sunBlue);
    noStroke();
    ellipse(sunX, sunY, sunSize);
    pop();

    // My self esteem
    push();
    fill(selfEsteemShade);
    noStroke();
    ellipse(selfEsteemX, selfEsteemY, selfEsteemSize);
    pop();
}