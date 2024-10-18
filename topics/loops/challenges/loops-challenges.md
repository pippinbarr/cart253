# Loops challenges {
   
We're going to start with some example code for you to modify, so start a new p5 project and paste in the following program:

```javascript
/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");
    
    stroke(0);
    strokeWeight(1);
    line(0, 0, 0, height);
    
    stroke(25);
    strokeWeight(2);
    line(50, 0, 50, height);
    
    stroke(50);
    strokeWeight(3);
    line(100, 0, 100, height);
    
    stroke(75);
    strokeWeight(4);
    line(150, 0, 150, height);
    
    stroke(100);
    strokeWeight(5);
    line(200, 0, 200, height);
    
    stroke(125);
    strokeWeight(6);
    line(250, 0, 250, height);
    
    stroke(150);
    strokeWeight(7);
    line(300, 0, 300, height);
    
    stroke(175);
    strokeWeight(8);
    line(350, 0, 350, height);
    
    stroke(200);
    strokeWeight(9);
    line(400, 0, 400, height);
    
    stroke(225);
    strokeWeight(10);
    line(450, 0, 450, height);
    
    stroke(250);
    strokeWeight(11);
    line(500, 0, 500, height);
}
```
    
## Challenges

### Challenge 1: Loop it!

Convert the challenge code by adding variables and using a `while`-loop for the drawing instructions.

What if you change the length of the lines over the loop as well?

### Challenge 2: Going down!

Now that you have a lovely loop example, add another loop to draw horizontal lines from the top to the bottom of the canvas.

What if you keep one end of the lines fixed?

### Challenge 3: Background

Make the background more interesting by drawing a gradient across it made out of lines. Use a `for`-loop for this one. 

What if you use `colorMode(HSB)` to change the *hue* across the canvas?

### Challenge 4: Debugging

Here's a broken version of one of the examples. See if you can debug it!

[Download the Loops Debugging Challenge Project](./loops-debugging-challenge.zip)
    
## }