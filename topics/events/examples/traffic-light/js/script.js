/**
 * Traffic Light
 * Pippin Barr
 * 
 * A starting point for creating a traffic light
*/

"use strict";

// The traffic light
const trafficLight = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    fill: "#00ff00", // Starts green
    fills: {
        stop: "#ff0000", // Red
        slow: "#ffbb00", // Orange
        go: "#00ff00" // Green
    },
    delay: 1000 // How long between lights
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Display the traffic light
 */
function draw() {
    background(0);

    // Traffic light
    push();
    noStroke();
    fill(trafficLight.fill);
    ellipse(trafficLight.x, trafficLight.y, trafficLight.size);
    pop();
}
