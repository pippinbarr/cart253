# Functions with return values {
  
The other super-power of functions is that along with *receiving* information via their *parameters* they can also *send* information back by using a *return statement*. This allows us to use functions to perform calculations, create new objects, and more!

## In this module

- Preparation
- We have seen return values
- Trisolaris Returns
- Writing a function with a return value
- Calling a function with a return value

## Preparation

1. Download the [Trisolaris Returns project](./examples/trisolaris-returns.zip)
2. Unzip it
3. Move the folder into your repository
4. Open the folder in VS Code
5. Commit and push the changes

## We have seen return values

We have already used functions with return values. `random()` is a good example: when we call it it *returns* a random number to us, and we do something with that number:

```javascript
function setup() {
  createCanvas(400, 400);
  // Slowing down the frame rate to avoid any seizures
  frameRate(2);
}

function draw() {
  // Ask random() for a random number between 0 and 255
  // and assign it to a variable
  let randomBackgroundShade = random(0, 255);
  // Use the variable with the random number
  background(randomBackgroundShade);
}
```

So, `random()` is special because it doesn't just go off and *do* something, it also *gives something back*. That can be really helpful sometimes.

Specifically, when we look at our code as we work on it, we may spot places where we're clearly *calculating* a result and storing it in a variable and then using it somewhere. That *calculation* is a target for a function with a return value.

## Trisolaris returns

Consider our example code for this module. We have our Trisolarian sky again, with three suns it, each being drawn by our fancy function with parameters `drawSun()`. 

But `drawSun()` has been upgraded! It now calculates a *stroke weight* for the sun it's drawing based on its distance from the mouse cursor. As of right now that calculation takes place *inside* `drawSun()`.

When we look at it, we should think "hmm, that calculation is kind of complicated; I think I'll turn it into a *function*. So let's do that! The key thing is that the function for calculating a sun's stroke weight will have to *give something back*, it will have to *return* the stroke weight it calculates.

## Writing a function with a return value

To write our function we essentially need to:

1. Take the calculating code from inside `drawSun()`
2. Move it to a new function, we'll call it `calculateStrokeWeight()`
3. Give that function any parameters it needs (we need the sun's `x` and `y` for this calculation, so they'll have to be parameters)
4. *Return* the resulting calculation

Let's look at what we get:

```javascript
/**
 * Adds the two parameters together and returns the result
 */
function calculateStrokeWeight(x, y) {
  // Calculate the stroke weight of a sun based on
  // the distance of the mouse position
  const minWeight = 20;
  const maxWeight = 1;
  let d = dist(mouseX, mouseY, x, y);
  let result = map(d, 0, width, minWeight, maxWeight);
  // Actually return the result of our calculation to wherever this
  // function was called
  return result;
}
```

Important notes:

- This is a function with *parameters* because we need to provide the sun position so we can calculate the distance from the mouse
- We calculate the result (a mapping of distance to weight) and store it in a variable (`result`)
- On the final line of the function we *return* the value in our `result` variable by using the special `return` reserved word. That's what sends the result back out of the function (without it, nothing comes out)

## Calling a function with a return value
  
Now we can call our function, remembering that we need to *do something* with the return value. In this case we can assign the result of this function into the `weight` variable we were using.

```javascript
/**
 * Draws a Trisolarian sun with a dynamic stroke weight
 */
function drawSun(x, y, size) {
  // Get the stroke weight for this sun
  let weight = calculateStrokeWeight(x, y);

  push();
  strokeWeight(weight);
  stroke("#ffff00");
  fill("#f99736");
  ellipse(x, y, size);
  pop();
}
```

Again, this program is *the same as the original* in terms of how it executes. However, it is significantly *better organized* than it was. Creating functions with return values can reduce the complexity of reading and understanding our code, and that generally also reduces errors and terrors.

So that's it! That's how this works. If we find that we're needing to calculate a *result* in our program (usually visible when we do a bunch of stuff just to get a value) then we can (and *should*) turn that into a function that *returns* that result. It also means in cases where it's useful we can *reuse* that calculation in multiple places.

## Summary

Any time you find yourself writing some code that performs a calculation it's worth thinking to yourself whether it should be a *function* with a *return value* so that you can use that calculation in more than one place!
  
## }

## Complete Trisolaris Returns code

```javascript
/**
 * Trisolaris Returns (get it?)
 * Pippin
 * 
 * Draws the three suns of Trisolaris. Calculate their colour
 * based on their parameters.
 */

"use strict";

/**
 * Create the canvas
 */
function setup() {
    createCanvas(600, 400);
}

/**
 * Draw the three suns
 */
function draw() {
    // Sky blue
    background("#87ceeb");

    drawSun(500, 100, 80);
    drawSun(350, 180, 200);
    drawSun(120, 100, 160);
}

/**
 * Draws a Trisolarian sun
 */
function drawSun(x, y, size) {
    // Calculate the stroke weight of the sun
    let weight = calculateStrokeWeight(x, y);

    push();
    strokeWeight(weight);
    stroke("#ffff00");
    fill("#f99736");
    ellipse(x, y, size);
    pop();
}

/**
 * Adds the two parameters together and returns the result
 */
function calculateStrokeWeight(x, y) {
    // Calculate the stroke weight of a sun based on
    // the distance of the mouse position
    const minWeight = 20;
    const maxWeight = 1;
    let d = dist(mouseX, mouseY, x, y);
    let result = map(d, 0, width, minWeight, maxWeight);
    // Actually return the result of our calculation to wherever this
    // function was called
    return result;
}
```
