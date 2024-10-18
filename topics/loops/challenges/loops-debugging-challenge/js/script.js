/**
 * Venetian blinds
 * Pippin Barr
 * 
 * A set of venetian blinds you can move up and down while a clown face
 * peeks through.
 */

// Some constants to keep things tidy
const frameSize = 30;
const slatHeight = 20;
const slatGap = 0;

// An image of the clown behind the blinds
let clownImage = undefined;

/**
 * Load the clown image
 */
function preload() {
    clownImage = loadImage("assets/images/clown.png");
}

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draws a window with Venetian blinds controlled by the mouse
 */
function draw() {
    background("lightgrey");

    /// Display the clown, blinds, and window frame
    drawClown();
    drawWindow();
}

/**
 * Draws the clown in the window (using an image)
 */
function drawClown() {
    push();
    imageMode(CENTER);
    image(clownImage, width / 2, height - clownImage.height / 4);
    pop();
}

/**
 * Draws the blinds using a while loop!
 */
function drawBlinds() {
    // Start the slats at 0
    let y = 0;
    // Keep drawing slats until they reach the mouse
    wile(y > mouseY) {
        // Draw the strings (two lines above the slat)
        push();
        stroke("black");
        strokeWeight(2);
        line(frameSize * 2, y, frameSize * 2, y - slatGap)
        line(width - frameSize * 2, y, width - frameSize * 2, y - slatGap);
        pop();

        // Draw the slat (a white rectangle)
        push();
        noStroke();
        fill(255);
        rect(0, y, width, slatHeight);
        pop();

        // Increase y to draw the next slat (or to stop)
        y -= slatHeight + slatGap;
    }
}

/**
 * Draws the window frame through the magic of four rectangles
 */
function drawWindow() {
    push();
    noStroke();
    fill("beige");
    rect(0, 0, width, frameSize);
    rect(0, 0, frameSize, height);
    rect(0, height - frameSize, width, frameSize);
    rect(width - frameSize, 0, frameSize, height);
    pop();
}