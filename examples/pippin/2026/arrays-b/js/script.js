/**
 * Arrays B
 * Horse Race???
 * Pippin Barr
 * 
 * Horse race, ideally with a sine wave to make them look cool?
 * Lotsa horses? But start with one horse and generalize to an array?
 * 
 * Finish line
 * Victory screen
 * Timer and showing the time of the winner
 * Display the current leaders
 * Betting!
 * Restart for the next race (keep the same horses so you can develop a relationship)
 * Tamagotchi (look after the horses)
 * Give the horses names (display the names with the horses in the race)
 */

"use strict";

let horseImage = undefined;

let raceStarted = false;

const horses = [];

/**
 * Create a canvas...
*/
async function setup() {
    createCanvas(1400, 10 * 32);

    horseImage = await loadImage("./assets/images/horse.png");

    const horse1 = birthHorse(0, 0 * 32);
    horses.push(horse1);
    const horse2 = birthHorse(0, 1 * 32);
    horses.push(horse2);
    const horse3 = birthHorse(0, 2 * 32);
    horses.push(horse3);
    const horse4 = birthHorse(0, 3 * 32);
    horses.push(horse4);
    const horse5 = birthHorse(0, 4 * 32);
    horses.push(horse5);
    const horse6 = birthHorse(0, 5 * 32);
    horses.push(horse6);
    const horse7 = birthHorse(0, 6 * 32);
    horses.push(horse7);
    const horse8 = birthHorse(0, 7 * 32);
    horses.push(horse8);
    const horse9 = birthHorse(0, 8 * 32);
    horses.push(horse9);
    const horse10 = birthHorse(0, 9 * 32);
    horses.push(horse10);
}

function birthHorse(x, y) {
    const horse = {
        x: x,
        y: y,
        height: horseImage.height,
        speed: random(1.0, 1.5),
        angle: random(0, TWO_PI),
        tint: {
            r: random(0, 255),
            g: random(0, 255),
            b: random(0, 255)
        }
    };
    return horse;
}


/**
 * What?
*/
function draw() {
    background("#7282bf");

    for (let horse of horses) {
        if (raceStarted) {
            horse.x += horse.speed + random(-1, 2);
            horse.angle += 0.4;
        }

        const hopAmount = sin(horse.angle);
        tint(horse.tint.r, horse.tint.g, horse.tint.b);
        image(horseImage, horse.x, horse.y + hopAmount * 4);
    }
}

function mousePressed() {
    raceStarted = true;
}