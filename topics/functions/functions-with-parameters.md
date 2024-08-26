# Functions with parameters {

Modularity and reuse

## In this module

- Functions for modularity
- Functions for reuse
- Functions with parameters
- Function reuse in action

## Functions for modularity

We have written a program that draws a sun, and we've been nice and organized and broken out the sun into a function:

```javascript
function setup() {
  createCanvas(600, 400);
}

function draw() {
  // Sky blue
  background("#87ceeb");
  
  drawSun();
}

function drawSun() {
  push();
  noStroke();
  fill("#f99736");
  ellipse(500, 100, 80);
  pop();
}
```

`drawSun()` is a *useful* function. It's useful because it creates *modularity* in our program, helping to break it down into *meaningful parts*. 

But what if we want to draw more than one sun? Right now we would have to write a sun-drawing function for each. `drawSun1()` and `drawSun2()`, say. 

## Functions for reuse

It would be better if we could *reuse* our existing `drawSun()` and simply *tell it where to draw each sun*. And we can, using *parameters*. We already see this trick in the `ellipse()` function, where we're able to specify the `x`, `y`, and `diameter` of the sun's circle. 

## Function with parameters

Let's define and use our *own* function with parameters.

### Function definition

Here's our `drawSun()` improved with parameters:

```javascript
function drawSun(x, y, size) {
  push();
  noStroke();
  fill("#f99736");
  ellipse(x, y, size);
  pop();
}
```

You can see it's *very similar* to the original, but now:

- Inside the parentheses of the function definition line we see a list of *parameters* separated by commas - these will become *variables* we can use inside our function
- In the function's instructions we can see we *use* those parameters (`x`, `y`, and `size`) to specify the position and size of the circle.

### Function call

We *call* our new function by providing the arguments (values) that should go into each parameter *in order*. So to draw the same sun we already had we'd write:

```javascript
drawSun(500, 100, 80);
```

- The `400` will go into the `x` parameter of the function (and eventually will be used for the `x`-coordinate of the circle)
- The `100` will go into the `y` parameter of the function (and eventually will be used for the `y`-coordinate of the circle)
- The `80` will go into the `size` parameter of the function (and eventually will be used for the size/diameter of the circle)

### Recap

That's the whole trick! To write and use a function with parameters you:

1. Include variable names in the function definition's parentheses
2. Use those variables in the function's instructions
3. Call the function and provide arguments (values) for each of the parameters in the definition (in order)

## Function reuse in action

Now that we have a function with parameters we can use it more than once! What if we're on Trisolaris (from the novel *The Three-Body Problem* by Liu Cixin), where there are three suns? No problem!

```javascript
function setup() {
  createCanvas(600, 400);
}

function draw() {
  // Sky blue
  background("#87ceeb");
  
  // Draw the three suns of Trisolaris
  drawSun(500, 100, 80);
  drawSun(350, 180, 200);
  drawSun(120, 100, 160);
}

/**
 * Draws a sun at the specified position and diameter
 */
function drawSun(x, y, size) {
  push();
  noStroke();
  fill("#f99736"); // Sun orange
  ellipse(x, y, size);
  pop();
}
```

Each time we call our `drawSun()` function we're providing *different* values that go into the corresponding `x`, `y`, and `size` parameters and so end up drawing a *different* sun. 

But it's still the *same* function each time.

And that's *reuse*! 

Consider:

- How much *shorter* this makes your program. Shorter and easier to read!
- How much easier it is to *change* how the suns are drawn. You can just edit `drawSun()` once and affect all three suns!

## Summary

## }