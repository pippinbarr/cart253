/**
 * Moving Stones
 * Pippin Barr
 *
 * Moving two stones with the mouse
 * Similar to Moving a Stone but we'll only affect the stone
 * within a radius and there's more than one of them
 */

// Stones that will move around
let stone1 = undefined;
let stone2 = undefined;

/**
 * Creates the canvas and the two stones
 */
function setup() {
    createCanvas(500, 500);

    stone1 = createStone(100, 100);
    stone2 = createStone(200, 200, 50);
}

/**
 * Creates a JS object representing a stone and using the
 * parameters provided in its properties
 */
function createStone(x, y, size) {
    const stone = {
        // Position and dimensions
        x: x,
        y: y,
        size: size,
        // How it moves!
        velocity: {
            x: 0,
            y: 0
        },
        // Appearance
        fill: "#999999"
    };
    return stone;
}

/**
 * Updates and draws the stone
 */
function draw() {
    background("#87ceeb");

    updateStone(stone1);
    updateStone(stone2);
    drawStone(stone1);
    drawStone(stone1);
}

/**
 * Sets a stone's velocity based on the mouse then updates position
 */
function updateStone(stone) {
    applyForces(stone);
}

/**
 * Applies friction (diminishing velocity over time) and
 * the mouse force (movement based on running away from the mouse)
 */
function applyForces(stone) {
    // Apply friction to the stone by multiplying it by a fraction
    // less than 1, reducing it
    stone.velocity.x *= 0.95;
    stone.velocity.y *= 0.95;
    // If it gets close to 0, make it zero
    if (abs(stone.velocity.x) < 0.1) {
        stone.velocity.x = 0;
    }
    if (abs(stone.velocity.y) < 0.1) {
        stone.velocity.y = 0;
    }

    // If the mouse is in range it affects the stone...
    const d = dist(mouseX, mouseY, stone.x, stone.y);
    if (d < stone.size) {
        // Change the stone's velocity based on the mouse position 
        // relative to the stone position
        // (Essentially it accelerates away from the mouse)
        stone.velocity.x += (stone.x - mouseX) * 0.005;
        stone.velocity.y += (stone.y - mouseY) * 0.005;
    }
}

/**
 * Applies the stone's velocity to its position
 */
function moveStone(stone) {
    stone.x += stone.velocity.x;
    stone.y += stone.velocity.x;
}

/**
 * Displays a stone as a circle
 */
function draw_stone(stone) {
    push();
    noStroke();
    fill(stone.fill);
    ellipse(stone.x, stone.y, stone.size);
    pop();
}


