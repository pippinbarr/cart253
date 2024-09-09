# Functions with parameters {

We've seen functions already in the context of *organizing* our programs, and they're great for that. The next step is seeing that we can *provide information* to a function so that it can do its job even better.

## In this module

- Preparation
- Functions for modularity
- Functions for reuse
- Functions with parameters
- Function reuse in action

## Preparation

1. Download the [template project](../../templates/template-p5-project.zip)
2. Unzip it
3. Rename the folder to `functions-with-parameters`
4. Move the folder into your repository
5. Open the folder in VS Code
6. Give the program a title in `index.html` (maybe "Functions with parameters")
7. Commit and push the changes

## Functions for modularity

Here's a program that draws a sun:

```javascript
function setup() {
  createCanvas(600, 400);
}

function draw() {
  // Sky blue
  background("#87ceeb");
  
  // Draw the sun
  push();
  noStroke();
  fill("#f99736");
  ellipse(500, 100, 80);
  pop();
}
```

Perfectly fine, but we know that we can *improve* this program by create a *function* for drawing the sun, rather than having all its instructions in `draw()`:

```javascript
function setup() {
  createCanvas(600, 400);
}

function draw() {
  // Sky blue
  background("#87ceeb");
  
  drawSun();
}

/**
 * Draws the sun
 */
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

It would be better if we could *reuse* our existing `drawSun()` and simply *tell it where to draw each sun*. And we can, using *parameters*. We already see this trick in, for example, the `ellipse()` function, where we're able to specify the `x`, `y`, and `diameter` of the sun's circle. 

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

You can see it's *very similar* to the original, except:

- We write a series of *parameters* in the parentheses of the function, separated by commas
- Each of these parameters will work as a *variable* inside the function, containing the values passed when the function is called
- We *use* those parameter variables in the function to make it do its job (in this case to draw a circle at the specified position and size)

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

By using paramters in our functions we make them vastly more flexible and reusable in our program. Using parameters is often the key to writing a function that will reduce repetition your program.

## }