/**
 * Functions A
 * Avoidant Behaviour 2
 * Pippin Barr
 */

"use strict";

// Danger
let danger = undefined;
let danger2 = undefined;
let danger3 = undefined;

let me = {
    x: 100,
    y: 600,
    size: 100,
    fill: "#ffffff"
};

/**
 * Create a canvas
*/
function setup() {
    createCanvas(200, 600);

    danger = createDanger();
    danger2 = createDanger();
    danger3 = createDanger();
}

function createDanger() {
    const danger = {
        x: random(0, width),
        y: -100,
        size: random(10, 100),
        fill: random(0, 255),
        velocity: {
            x: 0,
            y: random(2, 10)
        }
    };
    return danger;
}

/**
 * Move and display the danger and me
*/
function draw() {
    background(0);

    moveDanger(danger);
    moveDanger(danger2);
    moveDanger(danger3);
    moveMe();

    checkCollision(danger);
    checkCollision(danger2);
    checkCollision(danger3);

    checkOffscreen(danger);
    checkOffscreen(danger2);
    checkOffscreen(danger3);

    drawElement(me);
    drawElement(danger);
    drawElement(danger2);
    drawElement(danger3);
}

function moveDanger(pDanger) {
    pDanger.x += pDanger.velocity.x;
    pDanger.y += pDanger.velocity.y;
}

function moveMe() {
    me.x = constrain(mouseX, 0, width);
    me.y = constrain(mouseY, 0, height);
}

function checkCollision(pDanger) {
    const d = dist(me.x, me.y, pDanger.x, pDanger.y);
    if (d < me.size / 2 + pDanger.size / 2) {
        background("#ff0000");
        noLoop();
    }
}

function checkOffscreen(pDanger) {
    if (pDanger.velocity.x > 0 && pDanger.x - pDanger.size / 2 > width) {
        pDanger.x = -100;
        pDanger.y = random(0, height);
        pDanger.size = random(10, 40);
        pDanger.velocity.x += 1;
    }

    if (pDanger.velocity.y > 0 && pDanger.y - pDanger.size / 2 > height) {
        pDanger.x = random(0, width);
        pDanger.y = -100;
    }
}

function drawElement(element) {
    push();
    fill(element.fill);
    noStroke();
    ellipse(element.x, element.y, element.size);
    pop();
}