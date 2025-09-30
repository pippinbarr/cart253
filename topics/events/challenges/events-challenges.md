# Events challenges {
   
We're going to start with some example code for you to modify, so start a new p5 project and paste in the following program:

```javascript
/**
 * The Only Move Is Not To Play
 * Pippin Barr
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Update the score and display the UI
 */
function draw() {
  background("#87ceeb");
  
  // Only increase the score if the game is not over
  if (!gameOver) {
    // Score increases relatively slowly
    score += 0.05;
  }
  displayUI();
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
  if (gameOver) {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("You lose!", width/2, height/3);
    pop();
  }
  displayScore();
}

/**
 * Display the score
 */
function displayScore() {
  push();
  textSize(48);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(floor(score), width/2, height/2);
  pop();
}
```
    
## Challenges

### Challenge 1: Make the user lose if they use the keyboard

You should think about all the possibilities - keys pressed down, keys release, ...

### Challenge 2: Make the user lose if the use the mouse

Again, think about the possibilities here. Mouse movement, clicking, mouse wheel.

### Challenge 3: Make the user lose if their internet connection changes

Good old `online` and `offline`.

### Challenge 4: Make the user lose if the game loses focus

Check out the [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API#examples) for this one! Looks like `visibilitychange` is our friend here.

### Challenge 5: Convert to Plain JavaScript Events if you haven't

This should allow *all* your events to call the same event handler that sets the game to be over.

## }