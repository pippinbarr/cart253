/**
 * Debugging Events
 * Pippin Barr
 * 
 * Two player game. The bug tries to grow as big as possible by
 * running around with the arrow keys. The other player tries to
 * clicks the bug to be as small as possible. Who will win?
 * What even is winning?
 * 
 * But it doesn't work. Because it has bugs.
 */

"use strict";

// The bug
const bug = {
    // Position and dimensions
    x: 250,
    y: 250,
    size: 10,
    // Velocity
    velocity: {
        x: 0,
        y: 0,
    },
    // How much does pressing an arrow key add to velocity in that direction
    speedUp: 1,
    // Colour
    color: "#aa4411" // Dark brown
};

// The game is 15 seconds long
let gameDuration = 15;
// Is the game over?
let gameOver = false;

/**
 * Create the canvas
*/
function setup() {
    createCanvas(500, 500);

    // Listen for keyboard presses for the controls
    document.addEventListener("keypress", controlsHandler);

    // End the game after its duration
    setTime(endTheGame, gameDuration);
}

/**
 * Updates and draws the bug
*/
function draw() {
    background("#87ceeb"); // Sky blue

    // If the is running, grow move and draw the bug
    if (!gameOver) {
        growBug();
        moveBug();
        drawBug();
    }
    // If the game is over, just display the final message
    else {
        drawGameOver();
    }
}

/**
 * Grows the bug over time
 */
function growBug() {
    bug.size += 0.1;
}

/**
 * Moves the bug by its velocity. Keeps it on the canvas.
 */
function moveBug() {
    bug.x += bug.velocity.x;
    bug.x = constrain(bug.x, 0, width);

    bug.y += bug.velocity.y;
    bug.y = constrain(bug.y, 0, height);
}

/**
 * Displays the bug with its six legs sticking out
 */
function drawBug() {
    // Body
    push();
    noStroke();
    fill(bug.color);
    ellipse(bug.x, bug.y, bug.size);
    pop();
}

/**
 * Sets the game to be over
 */
function endGame() {
    gameOver === true;
}

/**
 * Displays the game over message
 */
function drawGameOver() {
    drawBug();

    push();
    textSize(64);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("GAME OVER", width / 2, height / 2);
    pop();
}

/**
 * Arrow keys increase bug velocity in that direction (infinitely)
 */
function controlsHandler() {
    if (event.keyCode === LEFT_ARROW) {
        bug.velocity.x += -bug.speedUp;
    }
    else if (event.keyCode === RIGHT_ARROW) {
        bug.velocity.x += bug.speedUp;
    }
    else if (event.keyCode === UP_ARROW) {
        bug.velocity.y += -bug.speedUp;
    }
    else if (event.keyCode === DOWN_ARROW) {
        bug.velocity.y += bug.speedUp;
    }
}

/**
 * If the bug gets clicked it dies
 */
function mouseIsPressed() {
    // Don't check clicks when the game is over
    if (gameOver) {
        return;
    }

    // Check if the bug was clicked
    const d = dist(mouseX, mouseY, bug.x, bug.y);
    const clicked = (d < bug.size / 2);
    // If so, shrink the bug
    if (clicked) {
        // Shrink the bug
        bug.size -= 2;
        // Bug let it get so small you can't see it!
        bug.size = constrain(bug.size, 2, 100);
    }

}