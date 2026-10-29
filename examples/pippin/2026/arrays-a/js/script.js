/**
 * Horsey Game (Tribute)
 * Pippin Barr
 * 
 * A horse race...
 */

"use strict";

// The horses will be in here
let horses = [];
// The horse image will be loaded here
let horseImage = undefined;
// Is the race running? (As in, should the horses be running?)
let raceActive = false;

let currentHorseNumber = 1;

/**
 * Create canvas, create horse
*/
async function setup() {
    createCanvas(windowWidth, windowHeight);

    horseImage = await loadImage("./assets/images/horse.png");

    // let newHorse = createHorse();
    // horses.push(newHorse);

    horses.push(createHorse());
    horses.push(createHorse());
    horses.push(createHorse());
    horses.push(createHorse());
    horses.push(createHorse());
    horses.push(createHorse());
    horses.push(createHorse());
    horses.push(createHorse());
    horses.push(createHorse());
    horses.push(createHorse());
    horses.push(createHorse());
    horses.push(createHorse());
}

/**
 * Create the horse and return it!
 */
function createHorse() {
    const newHorse = {
        // Where is this horse?
        x: 50,
        y: 0 + currentHorseNumber * 64,
        // How does this horse move?
        speed: random(3, 5),
        bounce: random(0, PI), // An angle to feed into sine for bouncing!
        // What does this horse look like?
        image: horseImage,
        number: currentHorseNumber,
        tint: {
            r: random(0, 255),
            g: random(0, 255),
            b: random(0, 255)
        }
    };
    currentHorseNumber += 1;
    // Here's your horse, sir
    return newHorse;
}

/**
 * Race the horse
*/
function draw() {
    // Green green grass
    background("#55ff88");


    for (let horse of horses) {
        // The horse only moves if the race is on
        if (raceActive) {
            moveHorse(horse);
            checkFinish(horse);
        }
        // We always draw the horse
        drawHorse(horse);
    }
}

/**
 * Move the horse provided in _horse
 */
function moveHorse(_horse) {
    // _horse.speed += random(0, 0.1);
    // Move forward by speed
    _horse.x += _horse.speed + random(-2, 2);
    // Increase the bounce factor so that the horse moves in a sine wave (see drawHorse)
    _horse.bounce += 0.8;
}

/**
 * Check if the horse finished the race
 */
function checkFinish(_horse) {
    if (_horse.x + _horse.image.width >= width) {
        // The horse touched the finish line! Stop the race!
        raceActive = false;
    }
}

/**
 * Draw the horse image
 */
function drawHorse(_horse) {
    push();
    imageMode(CENTER);

    // How much to rotate the horse (so it moves back and forth)
    const rotateAmount = map(sin(_horse.bounce), -1, 1, -0.2, 0.2);
    // How much to bounce the horse (so it goes up and down, using sine)
    const bounceAmount = map(sin(_horse.bounce), -1, 1, 0, 10);

    translate(_horse.x, _horse.y + bounceAmount);
    rotate(rotateAmount);
    tint(_horse.tint.r, _horse.tint.g, _horse.tint.b)
    image(_horse.image, 0, 0, 64, 64);

    fill("white");
    textSize(12);
    textAlign(CENTER, CENTER);
    text(_horse.number, 0, 0);
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