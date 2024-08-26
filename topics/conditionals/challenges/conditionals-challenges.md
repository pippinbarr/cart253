# Conditionals challenges {
   
We're going to start with some example code for you to modify, so start a new p5 project and paste in the followng program:

```javascript
/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can move a circle
 * on the canvas using their own circle to "lead" it around.
 */

const puck = {
  x: 350,
  y: 350,
  size: 100,
  fill: "#ff0000"
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");
  
  // Move user circle
  moveUser();
  
  // Draw the user and puck
  drawUser();
  drawPuck();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}
```
    
## Challenges

### Challenge 1: Write a function to move the target

Add a function called `moveTarget()` to the program and call it in `draw()`.

This function should:

- Check if the user and target circles overlap
- If so, it should calculate the distance between the user and the target on x and y separately
- Then it should move the target **1 pixel** *away from the user* along the dimension the user is closest on. (e.g. if the user is closest to the puck on the x-axis, then the puck should move away from the user on the x-axis)

### Challenge 2: Add a target

Add another circle called `target` and write a `drawTarget()` function you will call in `draw()`. Display the target in the same way as the user and puck but give it a different visual appearance.

### Challenge 3: Change the background if the puck is inside the target

Write another function `checkPuck()` that checks if the puck is currently overlapping the target. If it is, change the colour of the target to indicate it is. If it isn't, change the colour of the target to indicate it isn't.

### Challenge 4: Debugging

Here's a broken version of one of the examples. See if you can debug it!

[Download the Conditionals Debugging Challenge Project](./conditionals-debugging-challenge.zip)
    
## }