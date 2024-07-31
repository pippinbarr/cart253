# Variables challenges {
   
We're going to start with some example code for you to modify, so start a new p5 project and paste in the Mr. Furious program.
   
## Mr. Furious

```javascript
/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(160, 180, 200);
  
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();
}
```
    
## Challenges

### Challenge 1: Make Mr. Furious turn red over time

He's getting angrier and angrier, so make his fill become more and more red over time. Make sure you *constrain* any numbers you change so they stay in a reasonable range.

### Challenge 2: Make day turn to night

This is all taking time, so make the sky (the background) turn from blue to black over time. You'll need to create a new variable (probably a JavaScript Object called `sky`?) for this, then change it over time.

### Challenge 3: An annoying bird

Add a "bird" to this world that flies across the screen from left to right. Any colour, any speed, any shape you like. Mr. Furious hates birds. This is probably why he's so angry right now. 

If you're feeling spicy, make the bird move with velocity and even acceleration.

### Challenge 4: Shaking with rage

Make Mr. Furious shake with anger. To do this, when drawing him add a random number to the x and y position you draw him at - consider creating new temporary variables for x and y before drawing him and change those. (You probably don't want to *change* his x and y position because then he'll go wiggling all over the screen.)

### Challenge 5: More Shaking
    
Instead of him shaking all the time, make Mr. Furious shake more and more over time up to some limit.
    
## }