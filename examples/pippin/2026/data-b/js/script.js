/**
 * Data B (Elements)
 * Pippin Barr
 * 
 * What can we do with data about the elements? We can draw them
 * based on their weight!
 */

"use strict";

let elementsData = undefined;

/**
 * Create canvas, load data...
*/
async function setup() {
    createCanvas(800, 800);

    elementsData = await loadJSON("./assets/data/elements.json");
}


/**
 * Something elemental...
*/
function draw() {
    background(255);

    // We're doing some randomizing, so let's fix it in place
    randomSeed(100);

    // Go through all the elements
    for (let i = 0; i < elementsData.elements.length; i++) {
        // Get the current element
        const element = elementsData.elements[i];
        // Random x
        const x = random(0, width);
        // Map the y position to the weight (heavier is lower)
        const y = map(element.atomic_weight, 1, 294, 0, height);
        // Map the color to the weight (a little less clear, but fun!)
        const hue = map(element.atomic_weight, 1, 294, 0, 360);

        // Draw the element as an ellipse labelled with its symbol
        colorMode(HSB);
        fill(hue, 100, 100);
        noStroke();
        ellipse(x, y, element.atomic_weight, element.atomic_weight);
        textAlign(CENTER, CENTER);
        textSize(18);
        fill(0);
        text(element.symbol, x, y);
    }
}