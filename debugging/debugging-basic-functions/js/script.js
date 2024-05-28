/**
 * Rollerskate
 * Pippin Barr
 * 
 * Draws a stylized rollerskate
 */

"use strict";

/**
 * Creates the canvas
*/
function setup() {
    console.log("setup() running");
    createCanvas(640, 480);
}


/**
 * Draws the rollerskate on a blue background
*/
function draw() {
    // A nice blue
    background(140, 180);

    drawSkate();
}

/**
 * Draws the actual skate
 */
function drawSkate() {
    console.log("drawSkat() running");
    // The shoe part
    // Drawn with a path of vertexes "for fun"
    // Don't forget to look up beginShape() and endShape()
    // and vertex() if they don't make sense!
    push();
    noStroke();
    fill(255, 153, 0);
    beginShape();
    vertex(200, 100);
    vertx(180, 340);
    vertex(460, 340);
    vertex(480, 240);
    vertex(340, 200);
    vertex(300, 100);
    endShape(CLOSE);
    pop();

    // The wheels (two circles)
    push();
    noStroke();
    fill(255, 153, 0);
    ellipse(240, 370, 80, 80);
    rect(380, 370, 80, 80);
    pop();
}