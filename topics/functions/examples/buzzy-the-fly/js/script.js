/**
 * Buzzy the fly
 * Pippin Barr
 * 
 * A fly that buzzes around on the canvas
 */

"use strict";

// Our fly that will buzz around
// Starts undefined because we will create it with a function
let buzzyTheFly = undefined;

/**
 * Create a canvas
 */
function setup() {
    createCanvas(400, 400);

    buzzyTheFly = createFly();
}

function createFly() {
    const fly = {
        x: random(0, width),
        y: random(0, height),
        size: random(20, 50),
        buzziness: random(1, 5)
    };
    return fly;
}

/**
 * Background, move and draw buzzy
 */
function draw() {
    background("#87ceeb");

    moveFly(buzzyTheFly);
    drawFly(buzzyTheFly);
}

/**
 * Move the fly passed in as an argument by updating its position
 * When buzzyTheFly is passed in, that means we will be changing
 * buzzyTheFly's position!
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

/**
 * Draw the fly passed in as an argument
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}