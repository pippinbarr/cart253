# `for`-loops in practice {
   
Inspire

## In this module

- Counting!
- Starfield
- Gradient

## Counting!

Essentially a `for`-loop helps us run instructions a specific number of times. It's good at *counting*. So, any time we want to do the *same thing* (or the same *kind of thing*) some specific number of times (whether it's twice or ten thousand times) we should think of a `for`-loop.

## Starfield

Consider the problem of drawing 100 stars in random positions. Doing that line by line would take way too long. 

However, a `for`-loop can count to 100 for us, and we can just draw a star each time...

```javascript
// How many stars to display?
const NUM_STARS = 100;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    
    // randomSeed() allows us to make random() more predictable
    // When we set the random seed we make it so that all the
    // random() functions we call from here will have the same
    // (random) return values in a sequence
    // (Try removing it and seeing what happens!)
    randomSeed(1);
    // A for-loop to count from 0 up to the number of stars
    for (let i = 0; i < NUM_STARS; i++) {
        drawStar();
    }
    // Once we get here (with the for-loop done) we will have
    // drawn NUM_STARS stars.
}

/**
 * Draws a star at a random position
 */
function drawStar() {
    push();
    const x = random(0, width);
    const y = random(0, height);
    const diameter = random(2, 5);
    ellipse(x, y, diameter);
    pop();
}
```

Try changing NUM_STARS to a bigger value... imagine writing the code to draw 10000 stars line by line! Gross!

Try removing the `randomSeed()` line. Now the program is drawing all the stars in new positions every frame. How many stars can it draw before it starts to slow down? 1000? 10000? 100000?

## Gradient

A lot of nice-looking generative art is based on repetition. Let's think of a simple idea: a series of lines that go across the canvas and change colour from black to white. Also known as a gradient!

A `for`-loop can easily keep drawing lines all the way across the canvas! And we can use the iterator variable (usually `i`) of a `for`-loop to figure out what colour to use per line...

```javascript
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    
    // Here's our loop that goes from 0 (the left) to width (the right)
    // of the canvas. Let's call it x because that's what it is!
    // x stars at 0 (the left) and goes up by one (x++) until it reaches
    // the width
    for (let x = 0; x <= width; x++) {
        // Each time, we will draw a line vertically on the canvas at x
        push();
        // We will choose a colour for the line by mapping the current x
        // Which is between 0 and width
        // To a valid fill value, which is between 0 and 255
        let strokeColour = map(x, 0, width, 0, 255);
        stroke(strokeColour);
        // Draw the line
        line(x, 0, x, height);
        pop();
    }
}
```

We get a gradient from black to white! The power of repetition!

Pretty normal-looking through. Try changing the increment from `x++` to `x += 2` or `x += 5`. And perhaps change the stroke weight at the same time? It starts to look more fun.

If you want to get really creative you might want to start thinking about `translate()` and `rotate()` and other more sophisticated visual transformations.
    
## Summary

...
    
## }