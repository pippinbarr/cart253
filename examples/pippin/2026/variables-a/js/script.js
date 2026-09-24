/**
 * Variables A
 * Pippin Barr
 * 
 * Launches a rocket launch downward
 */

// Our rocket
const rocket = {
    x: 50,
    y: 0,
    size: 50,
    speed: 0,
    acceleration: 0.2
};

/**
 * Setup creates a canvas
 */
function setup() {
    createCanvas(100, 800);
}

/**
 * Make a rocket launch down
 */
function draw() {
    background("skyblue");

    // Move the rocket and accelerate it
    rocket.y += rocket.speed;
    rocket.speed += rocket.acceleration;

    // Draw the rocket
    push();
    rectMode(CENTER);
    noStroke();
    fill("rebeccapurple");
    square(rocket.x, rocket.y + rocket.size / 2, rocket.size);
    pop();
}

