/**
 * Variables B
 * Pippin Barr
 * 
 * Variables.
 */

"use strict";

let salaryMan = {
    x: 1000,
    y: 100,
    size: 25,
    fill: "#aaaaaa",
    speed: -1
};

/**
 * Create the canvas
*/
function setup() {
    // Create a square canvas
    createCanvas(900, 100);
}


/**
 * Drawings that change...
*/
function draw() {
    // Make the background as grey as the salary man's heart
    background("grey");

    fill(salaryMan.fill);
    strokeWeight(10);
    square(salaryMan.x, salaryMan.y - salaryMan.size, salaryMan.size);

    salaryMan.x = salaryMan.x + salaryMan.speed;
    salaryMan.speed = salaryMan.speed - 100;
}   