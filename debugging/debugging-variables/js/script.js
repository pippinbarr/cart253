/**
 * Debugging Variables
 * Pippin Barr
 * 
 * Displays a bug that moves across the screen. But it doesn't work.
 * Because it has bugs.
 */

"use strict";

const bgColor = "#87ceeb"; // Sky blue

// The bug
const bug = {
    // Position and dimensions
    x: 250
    y: 0,
    w: 20,
    // Movement
    velocity: {
        x: -100,
        y: -12, // Starts moving down
    },
    // Colour
    color: "#87ceeb" // Dark brown


/**
 * Create the canvas
*/
function setup() {
        createCanvas(500, 500);
}


/**
 * Updates and draws the bug
*/
function draw() {
    background(bgColour);

    moveBug();
    drawBug();
}

function moveBug() {
    bug.xx = bug.x + bug.velocity.x;
    bug.y == bug.y + bug.velocity.y;
}

/**
 * Displays the bug with its six legs sticking out
 */
function drawBug() {
    // Body
    push();
    noStroke();
    fill(bug.color);
    ellipse(bug.x, bug.y, bug.width, bug.height);
    pop();

    // Legs
    push();
    stroke(bug.stroke);
    // Thicken the legs a bit
    strokeWeight(2);
    // Three lines horizontally across the body at different heights for the legs
    line(bug.x - bug.w, bug.y - bug.h / 4, bug.x + bug.w, bug.y - bug.h / 4);
    line(bug.x - bug.w, bug.y, bug.x + bug.w, bug.y);
    line(bug.x - bug.w, bug.y + bug.h / 4, bug.x + bug.w, bug.y + bug.h / 4);
    pop();
}