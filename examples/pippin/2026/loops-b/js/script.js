/**
 * Loops B
 * Pippin Barr
 * 
 * Some playing with loops. Explorations of iterations.
 */

"use strict";


let r = 0;

/**
 * Create the canvas
*/
function setup() {
    createCanvas(800, 800, WEBGL);
}


/**
 * Amazing loopy things?
*/
function draw() {
    background(0);

    orbitControl();
    lights()

    // The void
    background(0);

    // rotateZ(r);
    // rotateX(r * 0.5);
    r += 0.005;
    let r2 = r;
    let step = 20;
    randomSeed(0);
    for (let x = -width / 2; x <= width / 2; x += step) {
        for (let y = -height / 2; y <= height / 2; y += step) {
            r2 += 0.1;
            // for (let z = -width / 2; z <= width / 2; z += 50) {
            push();
            translate(x + sin(r2) * 50, y, sin(r2) * 100);
            colorMode(HSB);
            fill(map(dist(x, y, 0, 0, 0, 0), 0, width / 2, 0, 360), 50, random(50, 100));
            // fill(0, 75);
            // noFill();
            // stroke(255, 255, 0, 50);
            strokeWeight(10);
            noStroke();
            // rotateY(r * 3);
            // rotateZ(r * 2);
            sphere(step * 1.5);
            pop();
            // }
        }
    }



    // let step = map(mouseX, 0, width, 10, 100);

    // for (let x = 0; x <= width; x += step) {
    //     for (let y = 0; y <= height; y += step) {
    //         noStroke();
    //         rotate(0.1)
    //         fill(255, 10)
    //         ellipse(x + random(-5, 5), y + random(-5, 5), step * 10);
    //     }
    // }



    // let step = 0;

    // for (let x = 0; x <= width; x += step) {
    //     push();
    //     colorMode(HSB);
    //     step += 0.025;
    //     translate(x, height / 2);
    //     rotate(map(x, 0, width, 0, mouseX))
    //     // rotate(0.03)
    //     stroke(map(x, 0, width, 360, 0), 100, 100);
    //     strokeWeight(100);
    //     line(0, -height / 2, 0, height / 2);
    //     pop();
    // }

    // let x = 0;
    // while (x <= width) {
    //     stroke(255);
    //     line(x, 0, x, height);
    //     x += 50;
    // }
}



























// let gridSize = 20;
// fill(255);
// stroke(255);
// strokeWeight(2);

// // Lines
// for (let x = 0; x < width; x += gridSize) {
//     line(x, 0, x, height);
// }

// Grid
// for (let x = 0; x < width; x += gridSize) {
//     line(x, 0, x, height);
//     for (let y = 0; y < height; y += gridSize) {
//         line(0, y, width, y);
//     }
// }

// Circles in a grid
// for (let x = 0; x < width; x += gridSize) {
//     for (let y = 0; y < height; y += gridSize) {
//         ellipse(x, y, gridSize);
//     }
// }