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
    fill: "#aaaaaa"
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

    fill("#aaaaaa");
    strokeWeight(10);
    square(800, 100 - 25, 25);
}