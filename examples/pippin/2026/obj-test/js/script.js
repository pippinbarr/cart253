/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let deerOBJ = undefined;

/**
 * Create canvas, load model
*/
async function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    deerOBJ = await loadModel("./assets/models/deer.obj");
}

let angle = 0;

/**
 * Display model...
*/
function draw() {
    background(0);
    lights();


    spotLight(255, 0, 0, 0, 0, 100, 0, 0, -1, PI / 32);
    angleMode(DEGREES);
    scale(1);
    rotateZ(180);
    rotateY(angle);
    noStroke();
    model(deerOBJ);

    angle += 0.1;
}