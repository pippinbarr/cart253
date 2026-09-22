/**
 * Variables B
 * Pippin Barr
 * 
 * Variables.
 */

"use strict";

let salaryMan = {
    x: 900,
    y: 100,
    size: 25,
    fill: "#aaaaaa",
    speed: -0.5
};

/**
 * Create the canvas
*/
function setup() {
    // Create a square canvas
    createCanvas(900, 100);
}


/**
 * A salaryman walks across the screen to work
*/
function draw() {
    // Make the background as grey as the salary man's heart
    background("grey");

    // Draw the salary man
    fill(salaryMan.fill);
    strokeWeight(10);
    square(salaryMan.x, salaryMan.y - salaryMan.size, salaryMan.size);

    // Make the salaryman move
    salaryMan.x = salaryMan.x + salaryMan.speed;
}   