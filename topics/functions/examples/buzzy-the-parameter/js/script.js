/**
 * Buzzy the parameter
 * Pippin Barr
 * 
 * A fly that buzzes around on the canvas
 */

"use strict";

// Our fly that will buzz around
let buzzyTheFly = {
    x: 200,
    y: 200,
    size: 30,
    buzziness: 4
};

/**
 * Create a canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Background, move and draw buzzy
 */
function draw() {
    background("#87ceeb");

    // Move buzzy
    buzzyTheFly.x += random(-buzzyTheFly.buzziness, buzzyTheFly.buzziness);
    buzzyTheFly.y += random(-buzzyTheFly.buzziness, buzzyTheFly.buzziness);

    // Draw buzzy
    push();
    noStroke();
    fill(0);
    ellipse(buzzyTheFly.x, buzzyTheFly.y, buzzyTheFly.size);
    pop();
}