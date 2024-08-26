/**
 * Random Artist
 * Pippin Barr
 *
 * An artist paints a painting (by not filling the background and
 * moving a shape randomly around on the canvas)
 * The artist is random()
 */

"use strict";

// The artist's brush
// Full of settings we can change over time with random()
const brush = {
    x: 250,
    size: 5,
    fill: {
        r: 127,
        g: 127,
        b: 127

    };

    /**
     * Creates the canvas
     */
    function setup() {
        createCanvas(500, 500);

// A one time background fill
background("#fffffe");
}

/**
 * Updates and draws the current bit of paint
 */
function draw() {
    updateBrush();
    drawBrush();
}

function updateBrush() {
    // Update position randomly
    brush.x += random(-3, 3);

    // Update fill randomly
    brush.fill.red += random(-2, 2);
    brush.fill.green += random(-2, 2);
    brush.fill.blue += random(-2, 2);

    // Update brush size randomly
    brush.size += random(-1, 1);
}

/**
 * Draws the brush on the canvas
 */
function drawBrush() {
    // Display the brush with its fill
    push();
    noStroke();
    fill(brush.fill.r, brush.fill.g, brush.fill.b);
    ellipse(brush.x, brush.y, brush.diameter);
    pop();
}
