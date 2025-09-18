/**
 * Landscape
 * Pippin
 * 
 * Let's see... 
*/

"use strict";

let angle = 0;

/**
 * Create a canvas...
*/
function setup() {
    createCanvas(260, 720);
}


/**
 * Draw a landscape...
*/
function draw() {
    background("pink");

    angle += 0.01;
    if (angle >= TWO_PI) angle = 0;

    // Sun
    push();
    translate(width / 2, height / 2);
    rotate(angle);
    noStroke();
    fill("orange")
    ellipse(0, -height / 2, width / 2, width / 2);
    pop();

    // Land mass
    for (let d = width * 4; d > 0; d -= 20) {
        push();
        noStroke();
        const f = map(d, width * 4, 0, 100, 0);
        fill(f);
        ellipse(width / 2, height, d, d + width);
        pop();
    }


    // Flowers
    randomSeed(0);
    let x = random(0, width);
    let y = random(height / 10, height);
    for (let i = 0; i < 800; i++) {

        let offset = map(sin(angle + random(0, 1)), -1, 1, -5, 5);

        push();
        strokeWeight(random(1, 2));
        stroke(0, random(50, 155), 0);
        const x2 = x + random(-20, 20) + offset;
        const y2 = y + random(-40, -50);
        line(x2, y2, x, y);
        fill(random(200, 255), random(100, 120), random(80, 120));
        noStroke();
        ellipse(x2, y2, random(10, 15))
        fill(random(200, 255), random(200, 255), random(20, 50), 100);
        ellipse(x2, y2, random(5, 8))
        pop();
        x = random(0, width);
        y = random(height / 10, height);
    }

    let sunlight = map(sin(angle - PI / 2), -1, 1, 0, 150);
    push();
    fill(0, sunlight);
    noStroke();
    rect(0, 0, width, height);
    pop();
}