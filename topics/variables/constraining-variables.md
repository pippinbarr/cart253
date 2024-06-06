# Constraining variables {
    
Much of the time we want the values in our variables to stay within specific limits. For this we can use the `constrain()` function.

## In this module

- Motivating constraints
- An unconstrained ego
- Introducing `constrain()`
- A constrained ego

## Motivating constraints

As we've seen, the numbers we change in our variables can easy reach values that don't make sense. A colour value might go below 0 or above 255, or a size value might grow to be bigger than the canvas for example.

## An unconstrained ego

Look, it's my ego!

```javascript
// My ego
let ego = {
    x: 200,
    y: 200,
    size: 1,
    fill: 200    
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Updates (expands and darkens) and displays the ego
 */
function draw() {
    // Pink background
    background(255, 200, 200);
    
    // Update the ego
    // Fill gets darker, symbolizing the negative energy
    ego.fill = ego.fill - 0.5;
    // Size gets bigger, symbolizing taking up emotional space
    ego.size = ego.size + 1;
    
    // Draw the ego
    push();
    noStroke();
    fill(ego.fill);
    ellipse(ego.x, ego.y, ego.size);
    pop();
}
```

In this program the ego just keeps getting bigger! It knows no limits! Likewise, although we can't tell, its `fill` property goes down to `0` (black) but then keeps going down to *negative* values like `-50` etc. Even though that's not visible, we probably want to *control* it.

## Introducing `constrain()`
    
In p5 we can *constrain* a number to stay within a specific minimum and maximum:

```javascript
// Make the ego bigger
ego.size = ego.size + 1;
// Constrain the ego between 0 and the width of the canvas
ego.size = constrain(ego.size, 0, width);
```

As you can see `constrain()` takes three arguments:

- The number to constrain (this is often in a variable!)
- The minimum the number is allowed to be
- The maximum the number is allowed to be

`constrain()` will take that information and give back a version of the first number that is constrained to be within the minimum and maximum.

So 

- `constrain(10, 0, 20)` would give back `10` since it's already within the range
- But `constrain(50, 0, 20)` would give back `20` since `50` is above the maximum of the range
- And `constrain(-100, 0, 20)` would give back `0` since `-100` is below the minimum of the range

## A constrained ego

We can apply this in our ego program to control it at least a bit:

```javascript
// My ego
let ego = {
    x: 200,
    y: 200,
    size: 1,
    minSize: 0,
    maxSize: 400,
    fill: 200    
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Updates (expands and darkens) and displays the ego
 */
function draw() {
    // Pink background
    background(255, 200, 200);
    
    // Update the ego
    // Fill gets darker, symbolizing the negative energy
    ego.fill = ego.fill - 0.5;
    // Constrain the fill to be within the normal range of colours, 0-255
    ego.fill = constrain(ego.fill, 0, 255);
    // Size gets bigger, symbolizing taking up emotional space
    ego.size = ego.size + 1;
    // Constrain the ego to be within its defined minimum and maximum
    ego.size = constrain(ego.size, ego.minSize, ego.maxSize);
    
    // Draw the ego
    push();
    noStroke();
    fill(ego.fill);
    ellipse(ego.x, ego.y, ego.size);
    pop();
}
```

It fits! And of course you could change the `minSize` and `maxSize` depending on what you *mean* with your program.

## Summary

We can and should use `constrain()` whenever we want to make sure our variables stay within specific bounds. It's one less thing to worry about when we're debugging for example.

## TMI?

You can accomplish this in JavaScript with a bit of extra work using `Math.min()` (which returns the smaller of two values) an `Math.max()` which returns the larger of two values:

```javascript
// Size gets bigger, symbolizing taking up emotional space
ego.size = ego.size + 1;
// Constrain the ego to be within its defined minimum and maximum
ego.size = Math.min(Math.max(ego.size, ego.minSize), ego.maxSize);
```

Less pretty though, so you could also write your own `constrain()` function if you wanted to:

```javascript
function constrain(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
```

Buuuut, using p5's `constrain` is just fine.
    
## }