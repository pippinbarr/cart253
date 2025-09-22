/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    // Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    },
    rage: 0,
    angle: 0
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400, WEBGL);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
    background(240, 220, 50);



    mrFurious.rage = constrain(mrFurious.rage + 0.001, 0, 1);

    mrFurious.size += random(-9, 10);
    mrFurious.size = constrain(mrFurious.size, 0, width / 2);

    mrFurious.fill.g += random(-0.1, -0.3);
    mrFurious.fill.b += random(-0.1, -0.2);

    mrFurious.angle += 0.1;

    // Draw Mr. Furious as a coloured circle
    push();
    // noStroke();
    rotateY(mrFurious.angle)
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    box(mrFurious.size);

    fill(100);

    // Eyes
    translate(mrFurious.size / 3, -mrFurious.size / 8, mrFurious.size / 2);
    box(mrFurious.size / 10);

    translate(-mrFurious.size / 1.5, 0, 0);
    box(mrFurious.size / 10);

    // Mouth?
    translate(mrFurious.size / 3, mrFurious.size / 3, 0)
    box(mrFurious.size / 2, 40);


    pop();
}