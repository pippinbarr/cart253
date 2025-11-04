/**
 * Thinking like a computer with loops
 * Pippin Barr
 */

"use strict";

/**
 * Create a canvas
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * Draw some loopy things
*/
function draw() {
    background(0);

    // Draw some circles
    let x = 0;
    const y = height / 2;
    while (x <= width) {
        push();
        stroke(255);
        ellipse(x, y, 10);
        pop();

        x += 50;
    }

    // Draw some more circles
    x = width / 2;
    for (let y = 0; y <= height; y += 50) {
        push();
        noFill();
        stroke(255);
        ellipse(x, y, 15);
        pop();
    }
}