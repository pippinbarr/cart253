/**
 * Horsey Game (Tribute)
 * Pippin Barr
 * 
 * A horse race...
 */

"use strict";

let horse = undefined;
let horseImage = undefined;
let raceActive = false;

/**
 * Create canvas, create horse
*/
async function setup() {
    createCanvas(windowWidth, windowHeight);

    horseImage = await loadImage("./assets/images/horse.png");

    horse = createHorse();
}

/**
 * Create the horse and return it!
 */
function createHorse() {
    const newHorse = {
        // Where is this horse?
        x: 0,
        y: height / 2,
        // How does this horse move?
        speed: 5,
        bounce: 0, // An angle to feed into sine for bouncing!
        // What does this horse look like?
        image: horseImage
    };
    // Here's your horse, sir
    return newHorse;
}

/**
 * Race the horse
*/
function draw() {
    background("#55ff88");

    // The horse only moves if the race is on
    if (raceActive) {
        moveHorse();
        checkFinish();
    }
    drawHorse();
}

/**
 * Move the horse
 */
function moveHorse() {
    horse.x += horse.speed;
    horse.bounce += 0.8;
}

/**
 * Check if the horse finished the race
 */
function checkFinish() {
    if (horse.x + horse.image.width >= width) {
        // The horse touched the finish line! Stop the race!
        raceActive = false;
    }
}

/**
 * Draw the horse image
 */
function drawHorse() {
    push();
    imageMode(CENTER);

    // How much to rotate the horse (so it moves back and forth)
    const rotateAmount = map(sin(horse.bounce), -1, 1, -0.6, 0.6);
    // How much to bounce the horse (so it goes up and down)
    const bounceAmount = map(sin(horse.bounce), -1, 1, 0, 10);

    translate(horse.x, horse.y + bounceAmount);
    rotate(rotateAmount);
    image(horse.image, 0, 0);
    pop();
}

/**
 * Start the race
 */
function mousePressed() {
    if (!raceActive) {
        raceActive = true;
    }
}