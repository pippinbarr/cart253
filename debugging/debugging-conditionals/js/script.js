/**
 * Debugging Conditions
 * Pippin Barr
 * 
 * Lets the user sneak up on a bug and squash it. 
 * But it doesn't work.
 * Because it has bugs.
 * 
 */

"use strict";

// The bug
const bug = {
    // Position and dimensions
    x: 250,
    y: 250,
    w: 20,
    h: 20,
    // Movement
    velocity: {
        x: 0,
        y: 0
    },
    // Colour
    fill: "#5C4033", // Dark brown default
    fills: {
        alive: "#5C4033",
        dead: "#FF0000" // Red means dead
    },
    // Fear of the mouse: moving more than this many pixels in one frame
    // will scare the bug
    mouseMoveThreshold: 3,
    // Living or dead?
    alive: undefined
};

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
    background("#87ceeb"); // Sky blue

    checkMouse();
    moveBug();
    drawBug();
}

/**
 * Checks if the mouse moves enough to scare away the bug
 * Checks if the user clicks on the bug to kill it
 */
function checkMouse() {
    // Don't react if the bug is already dead
    if (!bug.alive) {
        return;


        // Check if the bug gets scared away
        // First get the total distance the mouse moved by calculating
        // the distance between its previous position and its current position
        const mouseMovedDistance = dist(pmouseX, pmouseY, mouseX, mouseY);
        // Now decide if the bug is scared based on its threshold
        const bugScared = (mouseMovedDistance <= bug.mouseMoveThreshold);
        // If the bug is scared it runs away fast!
        if (bugScared) {
            bug.velocity.y = 15; // Run away!


            // Now check if the user managed to click on the bug
            // First find out if the mouse if over the bug's body 
            const mouseToBugDistance = dist(mouseX, mouseY, bug.x, bug.y);
            const mouseOverBug = mouseToBugDistance < bug.w / 2;
            // Check if the mouse is pressed over the bug
            // (Not perfect since it would be better if the click happed right then
            // but this will do)
            if (mouseOverBug || mouseIsPressed {
                // Splat!
                bug.alive = false;
                bug.fill = bug.fills.dead;
            }
        }

        function moveBug() {
            bug.x += bug.velocity.x;
            bug.y += bug.velocity.y;
        }

        /**
         * Displays the bug with its six legs sticking out
         */
        function drawBug() {
            // Body
            push();
            noStroke();
            fill(bug.fill);
            ellipse(bug.x, bug.y, bug.w, bug.h);
            pop();

            // Legs
            push();
            stroke(bug.fill);
            // Thicken the legs a bit
            strokeWeight(2);
            // Three lines horizontally across the body at different heights for the legs
            line(bug.x - bug.w, bug.y - bug.h / 4, bug.x + bug.w, bug.y - bug.h / 4);
            line(bug.x - bug.w, bug.y, bug.x + bug.w, bug.y);
            line(bug.x - bug.w, bug.y + bug.h / 4, bug.x + bug.w, bug.y + bug.h / 4);
            pop();
        }