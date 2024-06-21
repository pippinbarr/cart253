# Booleans {
    
...

## In this module

- Boolean values
- Storing conditions

## Boolean values

As we've seen, conditional in a program work based on whether something is `true` or `false`. Importantly, we can store `true` or `false` in a variable or properties just like we can a number:

```javascript
let javaScriptIsCool = true;
const cigarettesAreHealthy = false;
let owl = {
    numEyes: 2,
    nocturnal: true,
    quadruped: false
};
```

This can be handy when we're usng conditionals in our program because our variables or properties can be designed to work with them.

### A lightswitch

Here's a simple lightswitch that makes the canvas white when it's switched on and black when it's switched off.

```javascript
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
```

This lightswitch works through the power of being able to *store* boolean values in properties and then to *check* those properties as conditions in our conditionals!

## Storing conditions

If we want to we can actually store the *result* of a condition in a variable. 

```javascript
const carIsMovingRight = (car.velocity.x > 0);
const eggIsWhite = (egg.fill === 255);
```

Sometimes this can make our programs easier to read.

### Stopping a hole from growing...

Here's a program to grow a hole up to a limit. Note how we store the result of a conditional to make it that little bit more readable.

```javascript
// The hole itself
const hole = {
  // Position
  x: 200,
  y: 200,
  // Size
  size: 10,
  // Maximum size
  maxSize: 200,
  // How much it grows per frame
  growthRate: 1
};

/**
 * Creates the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Updates and displays the hole
 */
function draw() {
  background(225);
  
  growHole();
  checkHoleSize();
  drawHole();
}

/**
 * Increases the hole's size by its growth rate
 */
function growHole() {
  hole.size += hole.growthRate;
}

/**
 * Checks if the hole has reached its maximum size
 */
function checkHoleSize() {
  // We can *store* the condition we care about in a variable
  const holeAtMaximum = (hole.size >= hole.maxSize);
  // This makes the conditional even easier to read!
  if (holeAtMaximum) {
    // Stop the hole's growth! It's big enough!
    hole.growthRate = 0;
  }
}

/**
 * Draws the hole on the canvas
 */
function drawHole() {
  push();
  noStroke();
  fill(0);
  ellipse(hole.x, hole.y, hole.size);
  pop();
}
```

It's a little thing, but it can also be a great way to make sure you understand your program because it makes you give a *name* to the condition you're checking.

## Summary


    
## }