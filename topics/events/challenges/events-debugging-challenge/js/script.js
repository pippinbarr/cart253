/**
 * Debugging Events
 * Pippin Barr
 *
 * A very basic game of clicking as many coins as you
 * can (by clicking them) before the timer runs out. But it's broken.
 */

"use strict";

// The background colour
const backgroundColour = "#eb87eb";

// Current score
let score = 0;

// The coin to click
const coin = {
    x: undefined, // will be random
    y: undefined, // will be random
    size: 50,
    fill: "#ebeb87",
};

// How long is the game (in milliseconds)
let gameTime = 10 * 10000; // 10 seconds
// Is the game over yet?
let gameOver = true;

/**
 * Load the coin collection sound
 */
function preload() {
    coin.collectSFX = loadSound("assets/sounds/collect.wav")
}

/**
 * Create the canvas
 */
function setup() {
    createCanvas(600, 600);

    // Reset the coin to put it in a random place
    resetCoin();
    // Start the timer for the game to be over
    startGameOverTimer();
}

/**
 * Positions the coin randomly on the canvas, making sure it
 * won't overlap the edges.
 */
function resetCoin() {
    coin.x = random(coin.size / 2, width - coin.size / 2);
    coin.y = random(coin.size / 2, height - coin.size / 2);
}

/**
 * Starts a timer that will end the game
 */
function startGameOverTimer() {
    setTimeout(stopGame, gameTime);
}

/**
 * Ends the game
 */
function endGame() {
    gameOver = true;
}

/**
 * If the game isn't over, display the coin, otherwise
 * show it's game over
 */
function draw() {
    background(backgroundColour);

    // Always display the score
    drawScore();

    // If the game isn't over, draw the current coin
    if (!gameOver) {
        drawCoin();
    }
    // Otherwise, display the game over message
    else {
        drawGameOver();
    }
}

/**
 * Displays the current score at the top left
 */
function drawScore() {
    push();
    fill("#87ceeb");
    textSize(64);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(score, width / 8, height / 8);
    pop();
}

/**
 * Displays the coin in its position
 */
function drawCoin() {
    push();
    noStroke();
    fill(coin.fill);
    ellipse(coin.x, coin.y, coin.size);
    pop();
}

/**
 * Displays the game over message
 */
function drawGameOver() {
    push();
    fill("#ce8787");
    textSize(64);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2);
    pop();
}

/**
 * Handles user clicking, if they click the coin
 * then they get a point
 */
function mouseClick() {
    // Only check coin clicks if the game is not over yet
    if (!gameOver) {
        // Check if the coin is clicked through math!
        const d = dist(mouseX, mouseY, coin.x, coin.y);
        const clicked = (d < coin.size / 2);
        // If it was clicked, increase the score and move the coin
        if (clicked) {
            resetCoin();
        }
    }
}
