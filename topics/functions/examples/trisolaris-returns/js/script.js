/**
 * Trisolaris Returns (get it?)
 * Pippin
 * 
 * Draws the three suns of Trisolaris. Calculate their colour
 * based on their parameters.
 */

"use strict";

/**
 * Create the canvas
 */
function setup() {
    createCanvas(600, 400);
}

/**
 * Draw the three suns
 */
function draw() {
    // Sky blue
    background("#87ceeb");

    drawSun(500, 100, 80);
    drawSun(350, 180, 200);
    drawSun(120, 100, 160);
}

/**
 * Draws a Trisolarian sun
 */
function drawSun(x, y, size) {
    // Calculate the stroke weight of the sun based on
    // the distance of the mouse position
    const minWeight = 20;
    const maxWeight = 1;
    let d = dist(mouseX, mouseY, x, y);
    let weight = map(d, 0, width, minWeight, maxWeight);

    push();
    strokeWeight(weight);
    stroke("#ffff00");
    fill("#f99736");
    ellipse(x, y, size);
    pop();
}