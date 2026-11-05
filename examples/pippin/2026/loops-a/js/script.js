/**
 * Loopy-loo
 * Pippin Barr
 * 
 * What could we do...
 * - Single loop to draw shapes?
 * - Double loop to draw a grid of shapes?
 * - 3D shapes?
 * - Change the properties of the shapes in the loop? Outside the loop?
 */

"use strict";

// Data about our cube
const cube = {
    // How long are its sides?
    x: 100,
    y: 0,
    z: 0,
    size: 50,
    // How is it currently rotated on x and z (radians)
    rotation: {
        x: 0,
        y: 0,
        z: 0
    },
    // How much does it rotate each frame on x and z (radians)
    rotationSpeed: {
        x: 0.1,
        z: 0.01
    }
};



/**
 * Create a canvas
*/
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

// let fillOffset = 0;


/**
 * Something loopy
*/
function draw() {
    sortOfMadness();
    // swoopyLinesWhileLoop();
    // swoopyLinesForLoop();
}

function swoopyLinesForLoop() {
    background(0);
    randomSeed(1);
    let y = height / 2;
    let step = 40;
    angleMode(DEGREES);
    for (let x = 0; x <= width; x += step) {
        push();
        translate(x, y);
        rotate(frameCount * 100 / x);
        colorMode(HSB);
        stroke("pink");
        strokeWeight(x / width * 0.2);
        const saturation = map(x, 0, width, 0, 100);
        fill(200, saturation, 100);
        rectMode(CENTER);
        rect(0, 0, mouseX, mouseY * 100);
        pop();
    }
}

function swoopyLinesWhileLoop() {
    background(0);
    // Start at the left side of the canvas
    let x = 0;
    randomSeed(1);
    let y = height / 2;
    let step = 40;
    // Keep going until we reach the right side
    while (x <= width) {
        push();
        translate(x, y);
        rotate(frameCount * 100 / x);
        colorMode(HSB);
        stroke("pink");
        strokeWeight(x / width * 0.2);
        const saturation = map(x, 0, width, 0, 100);
        fill(200, saturation, 100);
        rectMode(CENTER);
        rect(0, 0, mouseX, mouseY * 40);
        pop();

        // Move to the right
        x += step
    }
}

let angle = 0;

function sortOfMadness() {
    background(255, 255, 0);

    // lights();
    orbitControl();

    angle += 0.01;
    rotateX(45);
    randomSeed(1);
    for (let x = -width; x <= width; x += cube.size / 3) {
        for (let y = -height; y <= height; y += cube.size / 3) {

            // Still makes sense to protect these transformations (the rotations)
            // by using push() and pop()
            push();
            const offsetZ = map(sin(angle + x), -1, 1, -500, 500);
            const offsetX = map(sin(angle + y), -1, 1, -500, 500);
            const offsetY = map(sin(angle + x + y), -1, 1, -500, 500);

            translate(x + offsetX, y + offsetY, cube.z + offsetZ);
            noStroke();
            // Rotates everything we're about to draw on the x-axis
            rotateX(cube.rotation.x);
            rotateY(cube.rotation.y);
            colorMode(HSB);
            fill(0, 0, map(random(), 0, 1, 0, 50))

            // Rotates everything we're about to draw on the z-axis
            rotateZ(cube.rotation.z);
            // Draw a "box" (a cube), specifying the length of its sides
            sphere(cube.size);

            pop();

        }
    }
}