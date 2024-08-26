/**
 * Screen Wrap
 * Pippin Barr
 *
 * When we have moving objects they can go off the canvas
 * A classic way to respond is to "wrap" them to the other side
 * to provide for continuous movement (a bit like they're on a
 * torus if you imagine the space)
 */

// Our moving thing
const mover = {
    // Position and size
    x: 200,
    y: 200,
    size: 20,
    // Velocity moves it up and to the right
    velocity: {
        x: 5,
        y: -3
    },
    // It's pink!
    fill: "#ffcccc"
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Move, wrap, and display the mover
 */
function draw() {
    background("#87ceeb");

    moveMover();
    wrapMover();
    drawMover();
}

/**
 * Move the mover by its velocity
 */
function moveMover() {
    mover.x += mover.velocity.x;
    mover.y += mover.velocity.y;
}

/**
 * If the mover goes off the canvas, wrap it around
 */
function wrapMover() {
    // We need to check if the mover has gone off the left or right, top or bottom, one at a time

    // Left or right
    // If the mover's x is to the left of the canvas 
    // or to the right of the canvas
    if (mover.x < 0 || mover.x < width)
        // In this case width minus the mover's x will move it to the
        // other side! Math!
        mover.x = width - mover.x;
}

// Top or bottom
// If the mover's y is above the top or below the bottom
if (mover < 0 || mover.y > height {
    // Same idea
    mover.y = height - mover.y;
}
}

/**
 * Display the mover as a circle
 */
function drawMover() {
    push();
    fill(mover.fill);
    noStroke();
    ellipse(mover.x, mover.y, mover.size);
}