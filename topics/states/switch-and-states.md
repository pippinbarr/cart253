# `switch` and states` {
    
We can make a small improvement on the readability of our states if we use a `switch` statement instead of a series of `if` statements.

## In this module

- `switch`
- States with `switch`

## `switch`

A `switch` statement is a special kind of conditional statement that is used when what you want to do is just check whether the value in a variable equals any of a set of discrete possibilities.

For instance we could set the background based on a number...

```javascript
// This is the variable with the number we'll check...
let number = 0;

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Displays a background based on the number
 */
function draw() {
    // A switch statement starts with
    // - switch <- unsurprising?
    // - (...) <- the variable to check
    // - { <- the start of what to check for
    switch (number) {
        // For each possible value we care about being in "number"
        // We write a case (the thing that will handle that situation):
        // case <- unsurprising?
        // 0 <- if it's *THIS* number, do this thing...
        // : <- here comes what to do...
        case 0:
            // After the : we write the lines of code to run when
            // number is 0 (in this case)
            background("#ff0000");
            // At the end we write "break;" to say this case is done
            break;
            
        // And we repeat for the case where number is 1
        case 1:
            background("#00ff00");
            break;
            
        // And the case where number is 2
        case 2:
            background("#0000ff");
            break;
            
        // And at the end we can include a default case
        // Which will run if none of the previous cases were applicable
        default: 
            background("#000000");
            break;
    }
}
```

## States with `switch`

Applied to our previous example, we can use `switch` statements for arguably a bit more clarity?

```javascript
// Our states
const States = {
    TITLE: "title",
    ANIMATION: "animation",
    ENDING: "ending"
};
let state = States.TITLE; // Start in the title state

const ball = {
    // Position and size
    x: 0,
    y: 200,
    size: 100,
    // Movement
    velocity: {
        x: 0,
        y: 0
    },
    speed: 5,
    fill: "#ffffff"
}

// The title to display
const titleString = "TITLE";

// The ending to display
const endingString = "ENDING";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Calls the correct state function
 */
function draw() {
    // Check which state is in the state variable
    // and call the appropriate function for this frame
    switch (state) {
        case States.TITLE:
            title();
            break;
            
        case States.ANIMATION:
            animation();
            break;
            
        case States.ENDING:
            ending();
            break;
    }
}

/**
 * Displays the title string
 */
function title() {
    background(255, 200, 200);
    
    push();
    textSize(64);
    textAlign(CENTER, CENTER);
    text(titleString, width/2, height/2);
}

/**
 * Moves the ball across the screen
 */
function animation() {
    background(0);
    
    // Move the ball
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;
    
    // Check if the ball has reached the right side
    if (ball.x >= width) {
        // It has, so switch to the ending state
        state = States.ENDING;
    }
    
    // Draw the ball
    push();
    noStroke();
    fill(ball.fill);
    ellipse(ball.x, ball.y, ball.size);
    pop();
}

/**
 * Displays the ending string
 */
function ending() {
    background(200, 200, 255);
    
    push();
    textSize(64);
    textAlign(CENTER, CENTER);
    text(endingString, width/2, height/2);
}

/**
 * Switches title to animation and ending to title.
 * Resets the ball when going back to title
 */
function mousePressed() {
    // The mouse was pressed
    switch (state) {
        case States.TITLE:
            // Ball starts moving
            ball.velocity.x = ball.speed;
        
            // Switch to the animation state
            state = States.ANIMATION;
            break;
            
        case States.ANIMATION:
            // Nothing needed here, but nice to show
            // that ANIMATION has no mouse pressed function
            break;
            
        case States.ENDING:
            // Reset the ball to its starting values
            ball.x = 0;
            ball.velocity.x = 0;
            
            // Switch to the title state
            state = States.TITLE;
            break;
    }
}
```

It's really up to you if you prefer this way of writing things out. It works identically to a series of `if` statements checking equality.

## Summary

...
    
## }