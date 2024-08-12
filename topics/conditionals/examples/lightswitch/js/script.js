/**
 * Lightswitch
 * Pippin Barr
 * 
 * An example of storing a boolean value! In this case whether a 
 * light is on or off
*/

"use strict";

// Our lightswitch
const lightswitch = {
    // Just one property which is whether or not the lightswitch
    // is turned on. Starts out false (light is off)
    on: false
};

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Checks the lightswitch and displays the "room"
 */
function draw() {
    checkLightswitch();
    displayRoom();
}

/**
 * Handles turning the lightswitch on and off with the mouse
 */
function checkLightswitch() {
    if (mouseIsPressed) {
        lightswitch.on = true;
    }
    else {
        lightswitch.on = false;
    }
}

/**
 * Displays the room based on the lightswitch
 */
function displayRoom() {
    if (lightswitch.on) {
        background(255);
    }
    else {
        background(0);
    }
}