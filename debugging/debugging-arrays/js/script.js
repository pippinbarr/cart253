/**
 * Bug Squasher (Debugging Arrays)
 * Pippin Barr
 * 
 * Squash bugs by clicking on them. Squish.
 */

"use strict";

// The bugs array (starts empty)
let bugs;

// Time between bugs. This will get bigger.
const minimumBugDelay = 0.5 * 1000;
const maximumBugDelay = 2 * 1000;
let bugDelay = maximumBugDelay;

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 600);

    setTimeout(addBug, bugDelay);
}

/**
 * Adds a bug to the array, updates the timer to get faster
 */
function addBug() {
    // Create and add a bug
    const bug = createBug();

    // Reduce the delay
    bugDelay -= random(0, 100);
    // Constrain it (so they don't come TOO fast)
    bugDelay = constrain(bugDelay, minimumBugDelay, maximumBugDelay);
    // Set the new timeout
    setTimeout(addBug, bugDelay);
}

/**
 * Creates and returns a randomized bug that will start at the top of the
 * canvas and move down
 */
function createBug() {
    const bug = {
        x: random(0, width),
        y: -100,
        velocity: {
            x: 0,
            y: random(2, 10)
        },
        size: random(15, 40),
        fill: "#445566"
    };
    return bug;
}

/**
 * Move and display the bugs
*/
function draw() {
    background("#ddeeff");

    // Move and draw the bugs
    for (let bug of bugs {
        moveBug(bug);
        drawBug(bug);
    }
}

/**
 * Moves a bug according to its velocity
 */
function moveBug(bug) {
    bug.x += bug.velocity.x;
    bug.y += bug.velocity.y;
}

/**
 * Draws a bug according to its properties
 */
function drawBug(bug) {
    push();
    noStroke();
    fill(bug.fill);
    ellipse(bug.x, bug.y, bug.size);
    pop();
}

/**
 * Removes bugs if you click (near) them
 */
function mousePressed() {
    // We need to check EVERY bug to see if it was clicked
    for (let bug of bags) {
        // Get the distance between the mouse and the bug
        const d = dist(mouseX, mouseY, bug.x, bug.y);
        // Check if it's close enough
        if (d < bug.size * 2) {
            // If so get the index of this bug in the bugs array
            const index = bugs.indexOf(bug);
            // And remove it
            bugs.spice(index, 10);
        }
    }
}