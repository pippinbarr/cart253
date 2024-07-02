# Introducing states {
    
One structure we very frequently want for our programs is to have separate *states* that our program can be in. Think of, for instance, the program starting with a title, shifting to the main interaction, and ending with an end screen before cycling back to the title.

## In this module

- Beginning, middle, and end
- Implementing program states
- Other kinds of states

## Beginning, middle, and end

Let's imagine we want a program that starts on a title screen, then shifts to an animation, and when the animation is done, shifts to an ending screen.

The title and ending screens will just be some text, and the animation will just be a ball moving across the screen.

We'll switch from the title to the animation when the user clicks, and from the animation to the ending when the ball reaches the edge of the screen. As a bonus, let's also switch *back* to the title if the user clicks on the ending screen.

## Implementing program states

The key things we need for this to work are:

- A state variable that contains which state we're currently in
- A list of possible states we can switch between
- Functions to deal with each separate state
- Changing states

So let's build these one by one

### A state variable that contains which state we're currently in

First off, we want to store the current state in a variable!

```javascript
let state = undefined;
```

Easy. The variable can be called `state` and now it's empty.

### A list of possible states

Now what will we put in our `state` variable to tell our program which state it's in (title, animation, or ending)?

We could use numbers...

- The title is `0`
- The animation is `1`
- The ending is `2`

```javascript
let state = 0; // Start in the title state
```

But numbers aren't very clear! They can be hard to remember.

We could use strings of text...

- The title is `"title"`
- The animation is `"animation"`
- The ending is `"ending"`

```javascript
let state = "title"; // Start in the title state
```

Much clearer! But we can do better if we create an *object* that contains the names of the states as properties:

```javascript
// Our states
const States = {
    TITLE: "title",
    ANIMATION: "animation",
    ENDING: "ending"
};
let state = States.TITLE; // Start in the title state
```

This is nice because it means we have a list of all the states *right there*. We have the state name strings as values in the properties so that we can easily check the name of the current state if we want to.

### Functions to deal with each state

To have separate states (one showing the title, one showing the animation, one showing the ending) it makes sense to put the code for each state into a separate function. We'll *call the correct function* in `draw()` based on the state!

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
    if (state === States.TITLE) {
        title();
    }
    else if (state === States.ANIMATION) {
        animation();
    }
    else if (state === States.ENDING) {
        ending();
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
```

If you change the value in `state` between `States.TITLE`, `States.ANIMATION` and `States.ENDING` you can see each of the three possible states being displayed.

But of course we want to be able to change between these states while the program is running.

### Changing states

We said we would have a mouse press to go from the title to the animation and from the ending to the title. So we'll use `mousePressed()` for this.

And we would switch from the animation to the ending when the ball reaches the edge of the canvas. We'll use an `if` statement for this.

Three key observations:

- When we switch from the title to the animation we need to *start the ball moving* by setting its velocity (we'll do this at the same time as changing the state to animation)
- To switch from the animation to the ending we need to *check* if the ball has reached the right hand side each frame of the `animation()` function
- When we switch from the ending to the title we need to *reset the ball* so that it goes back to the left and sets its velocity back to zero (we'll do this at the same time as changing the state back to title)
    
Putting this together:

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
    if (state === States.TITLE) {
        title();
    }
    else if (state === States.ANIMATION) {
        animation();
    }
    else if (state === States.ENDING) {
        ending();
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
    if (state === States.TITLE) {
        // We are in the title state, so start the ball moving and
        // switch to the animation state
        
        // Ball starts moving
        ball.velocity.x = ball.speed;
        
        // Switch to the animation state
        state = States.ANIMATION;
    }
    else if (state === States.ENDING) {
        // We are in the animation state, so reset the ball and
        // switch to the title state
        
        // Reset the ball to its starting values
        ball.x = 0;
        ball.velocity.x = 0;
        
        // Switch to the title state
        state = States.TITLE;
    }
}
```

Quite a lot going on in here, but mastering this pattern is a great way of dividing up your program into distinct states, making everything *much* easier to manage!

## Summary

...
    
## }