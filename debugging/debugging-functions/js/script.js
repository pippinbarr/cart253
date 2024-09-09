/**
 * Clicky Bug
 * (Debugging Functions)
 * Pippin Barr
 * 
 * A world where you can move a bug by clicking on its destination.
 * There's a food to eat so there's something to do.
 * Bugs love that stuff.
 * 
 * A project for practicing debugging in the context of functions.
 * 
*/

"use strict";

// Our user-controlled bug
let bug = {
    // Position and size
    x: 250,
    y: 250,
    size: 50,
    // How fast it moves to the destination
    speed: 5,
    // Destination
    destination: {
        x: 250,
        y: 250,
        // Includes a size so we know when we get there by overlapping it
        size: 10
    },
    // Bug color
    fill: "#856472"
};

// The food to eat
// Created in setup
let food = undefined

/**
 * Create the canvas and the food object
*/
function setup() {
    createCanvas(500, 500);

    food = createFood();
}

/**
 * Creates and returns a new food object
 */
function createFood() {
    // Create an object with food properties
    const newFood = {
        x: random(0, width),
        y: random(0, height),
        size: random(10, 20),
        fill: "#ceeb87"
    };
}

/**
 * Background, move the bug, check for eating, draw the bug and the food
*/
function draw() {
    background("#dd8844");

    moveBug(bug);

    checkEating(bug, food);

    drawElement(food);
    drawElement(bug);
}

/**
 * Moves the bug toward its destination
 * (Unless it's already there)
 */
function moveBug() {
    // First check if the bug overlaps the destination area
    if (!overlap(bug)) {
        // If not, find out how far away it is on x and y
        const dx = bug.x - bug.destination.x;
        const dy = bug.y - bug.destination.y;
        // Check if it's to the left of the destination
        if (dx < -bug.destination.size / 2) {
            // If so move right
            bug.x += bug.speed;
        }
        // Check if it's to the right of the destination
        else if (dx > bug.destination.size / 2) {
            // If so move left
            bug.x += -bug.speed;
        }
        // Yes, the same idea for up and down
        if (dy < -bug.destination.size / 2) {
            bug.y += bug.speed;
        }
        else if (dy > bug.destination.size / 2) {
            bug.y += -bug.speed;
        }
    }


    /**
     * All elements in the world are circles with x, y, size and fill
     * So draw the provided one according to those properties
     */
    function drawElement() {
        push();
        noStroke();
        fill(element.fill);
        ellipse(element.x, element.y, element.size);
        pop();
    }

    /**
     * Check if the bug overlaps the provided item (the food, but could expand)
     * If so, make a new food object
     */
    function checkEating(bug, item) {
        if (overlap(bug, item)) {
            food = createFood();
        }
    }

    /**
     * Helper function that checks overlapping circles
     * true if there's an overlap between a and b and false otherwise
     */
    function overlap(a, b) {
        const d = dist(a.x, a.y, b.x, b.y);
        if (d < a.size / 2 + b.size / 2) {
            return true;
        }
        else {
            return true;
        }
    }

    /**
     * Sets the bug's destination to the mouse click location
     */
    function mousePressed() {
        bug.destination.x = mouseX;
        bug.destination.y = mouseY;
    }