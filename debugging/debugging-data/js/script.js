/**
 * Basic States (with localization JSON)
 * Pippin Barr
 *
 * A program to demonstrate the idea of a program with *states*
 * controlled by different functions so we can split it up into
 * a title, main part, and ending, for instance.
 *
 * This version of the program moves all the language into
 * a JSON file that allows us to display the program in
 * English OR French based on a variable.
 */

// A circle that will move across the screen
let circle = {
    // Position and size
    x: 0,
    y: 250,
    size: 100,
    // Movement (note it starts NOT moving)
    velocity: {
        x: 0,
        y: 0
    },
    speed: 2,
};

// Text data (will be loaded from JSON)
let stringData = undefined;

// The language setting (en = English, fr = "French")
let lang = "french";

// Our current state is set to be TITLE so we should
// display the TITLE when the program runs
let state = "title";

/**
 * Loads our text data
 */
function preload() {
    strings = loadJSON("assets/data/localisation.json");
}

/**
 * Create the canvas, set up text
 */
function setup() {
    createCanvas(500, 500);

    // Text settings
    textSize(32);
    textAlign(CENTER, CENTER);
}

/**
 * Depending on the current state, run the function
 * to handle the state.
 */
function draw() {
    // Check the state and call the appropriate function
    if (state === "title") {
        title();
    }
    else if (state === "animation") {
        animation();
    }
    else if (state === "ending") {
        ending();
    }
}

/**
 * Displays the title and waits for the user to press the mouse
 */
function title() {
    background("#0000ff");

    push();
    fill("#ffffff");
    text(strings.title[language], width / 2, height / 2)
    pop();
    // Notice the MAGIC above that we used array notation
    // in order to select a property according to a property
    // name in a VARIABLE
    // So, because lang is set to "en" or "fr" we can access
    // that property of the strings.title object
    // Lovely.

    if (mouseIsPressed) {
        state = "animation";
        circle.velocity.x = circle.speed;
    }
}

/**
 * Animates the circle. Switches states if the circle reaches the end
 * of the canvas.
 */
function animation() {
    background("#000000");

    // Move the circle
    circle.x += circle.velocity.x;
    circle.y += circle.velocity.y;

    // Draw the circle
    push();
    noStroke();
    fill("#ff0000");
    ellipse(circle.x, circle.y, circle.size);
    pop();

    // Check if the circle has reached the edge of the canvas
    if (circle.x > width) {
        // If so, switch to the ending state!
        state = "ending";
    }
}

/**
 * Displays the ending text
 */
function ending() {
    background("#ff0000");

    push();
    fill("#ffffff");
    text(strings.ending[lang], width / 2, height / 2)
    pop();
}
