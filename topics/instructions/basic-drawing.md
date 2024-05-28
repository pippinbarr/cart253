# Basic drawing {

## Introduction

## Preparation

1. Download the [template project](../../templates/template-p5-project.zip)
2. Unzip it
3. Open the resulting folder in VS Code
4. Give the program a title in `index.html`

## Make a canvas

Any project we work on with the p5 library will need us to create a canvas, so let's make one with `createCanvas`, specifying the width and height we want.

```javascript
function setup() {
 // A nice square canvas to work with
    createCanvas(640, 640);
}

function draw() {

}
```

## What is the canvas?

**EXPLAIN IT**

## Draw a background

We know that `draw` happens *every frame* so it's usually a good idea to draw a background color (or later an image) for each frame, so let's add that in `draw` with the `background` function call.

```javascript
function setup() {
 // A nice square canvas to work with
    createCanvas(640, 640);
}

function draw() {
 // A grey background
 background(150, 150, 150);
}
```

Remember to look at the result in your browser by clicking on the "Go Live" button. You should see a square canvas with a grey background.

Feel free to change the numbers to see what happens.

## Draw a circle

We've seen that we can use `rect` to draw a rectangle, so let's learn a new function call that will let us draw a circle called `ellipse` (you might guess from the name it can also draw ellipses in general and you would be right).

For `ellipse` we use the same idea of a function call we've been seeing: the name, parentheses with arguments, a semicolon:

```javascript
function setup() {
 // A nice square canvas to work with
    createCanvas(640, 640);
}

function draw() {
 // A grey background
 background(150, 150, 150);
 // A circle in the centre of the canvas
 ellipse(320, 320, 480, 480);
}
```

The `ellipse` function works roughly the same as the `rect` function with an important difference. Let's break it down:

### `ellipse`

The function name is `ellipse`

### `(320, 320, 480, 480)`

Then we have parentheses to say "execute this with these arguments." Inside the parentheses we have *four* arguments:

1. The first argument (`320`) is the x-coordinate of the *centre* of the ellipse relative to the top-left of the canvas (`320` is centre of the canvas horizonally because `640 / 2` is `320`)
2. The second argument (`320`) is the y-coordinate of the centre of the ellipse relative to the top-left of the canvas
3. The third argument (`480`) is the *width* of the ellipse in pixels
4. The fourth argument (`480`) is the *height* of the ellipse in pixels

### `;`

We end on a semicolon like always.

## Look at the result in your browser

What was the difference?

It is that by *default* the `ellipse` function positions the *centre* of the ellipse at the (x,y) coordinates you specify. But the `rect` function positions the *top-left corner* of the rectangle at the (x,y) coordinates you specify. Little details like this are important and over time we remember them.

## Change the colour of the ellipse

You might have noticed by now that the *default* for the shapes we're drawing is to have a white *fill* (the colour inside the shape) and a black *stroke* (the colour of the line around the shape).

We can change this using the `fill` and `stroke` functions, giving each one an RGB colour to set the fill and stroke to:

```javascript
"use strict";

function setup() {
    // A nice square canvas to work with
    createCanvas(640, 640);
}

function draw() {
    // A grey background
    background(150, 150, 150);

    // A red circle with a white outline in the centre of the canvas
    fill(255, 0, 0);
    stroke(255, 255, 255);
    ellipse(320, 320, 480, 480);
}
```

As with the `background` function we've already seen, `fill` and `stroke` both "take" or "accept" arguments that tell them the RGB values for the colour to set. Again, the RGB values are by default in the range of 0-255.

Thus `255, 0, 0` is red because it has all of the red value, and none of the green or blue value.

And `150, 150, 150` is grey because it has equal amounts of red, green, and blue.

This is how RGB colour works.

Notice that we *set* the fill and the stroke colours *before we draw the shape*. It's like selecting the fill in Photoshop or MS Paint and *then* drawing the shape. This is a general rule with drawing with the p5 functions: you set all the colours etc. first, *then* draw the shape.

## Safety first

Once we start setting colours for `fill` and `stroke` and other things, we'll run into the potential problem that our program will *keep using those settings* even after our shape is drawn. Again, it's like in Photoshop. If you set the fill to red it *stays red* until you change it again.

It's better to avoid this because it can be *very confusing* as your program gets more complex.

To be safe, whenever we're drawing a shape with its own special settings, we surround it by two more function calls, `push` and `pop`, like this:

```javascript
"use strict";

function setup() {
    // A nice square canvas to work with
    createCanvas(640, 640);
}

function draw() {
    // A grey background
    background(150, 150, 150);

    // A red circle with a white outline in the centre of the canvas
    push();
    fill(255, 0, 0);
    stroke(255, 255, 255);
    ellipse(320, 320, 480, 480);
    pop();
}
```

Now any drawings we do *after* our red circle won't use the red fill or the white stroke, because those are *inside* the `push()` and `pop()`. And so we don't need to worry about them affecting other parts of our program.

In programming we often want to be very *explicit* about what we're doing so there's no confusion. Confusion is scary.

## A record

We might as well add a couple more shapes to turn this into a vinyl record:

```javascript
"use strict";

function setup() {
    // A nice square canvas to work with
    createCanvas(640, 640);
}

function draw() {
    // A grey background
    background(150, 150, 150);

    // The main part of the record is red
    push();
    fill(255, 0, 0);
    stroke(255, 255, 255);
    ellipse(320, 320, 480, 480);
    pop();

    // The label on the record
    push();
    fill(255, 255, 255);
    noStroke();
    ellipse(320, 320, 140, 140);
    pop();

    // The hole in the record
    push();
    fill(150, 150, 150);
    stroke(50, 50, 50);
    ellipse(320, 320, 20, 20);
    pop();
}
```

Two more ellipses with different fills and strokes. Note that we snuck in a new function here called `noStroke` which tells p5 not to draw a line around a shape. It has no arguments because it doesn't need them!

## Commenting

We should add comments to our functions and to the program as a whole. Something like:

```javascript
/**
 * Red record
 * Pippin Barr
 * 
 * Draws a bright red vinyl record on the canvas.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    // A nice square canvas to work with
    createCanvas(640, 640);
}

/**
 * Draws a bright red record
 */
function draw() {
    // A grey background
    background(150, 150, 150);

    // The main part of the record is red
    push();
    fill(255, 0, 0);
    stroke(255, 255, 255);
    ellipse(320, 320, 480, 480);
    pop();

    // The label on the record
    push();
    fill(255, 255, 255);
    noStroke();
    ellipse(320, 320, 140, 140);
    pop();

    // The hole in the record
    push();
    fill(150, 150, 150);
    stroke(50, 50, 50);
    ellipse(320, 320, 20, 20);
    pop();
}
```

Ah, that's better. A program that makes sense even if you don't know the specific function calls and arguments. If my cat could read, my cat could read this.

## Is that it?

*Kind of!*

Drawing using the p5 functions amounts to what we've just seen. It's just that there are *a lot of other functions*.

But whether you only use `rect` or you use `rect` and `ellipse` and `fill` and `stroke` or you use every single function there is, the basic idea stays the same: you do it by *calling functions* and (when needed) passing them *arguments*.

## Summary

We learned some new drawing functions, including `ellipse`, `fill`, `stroke`, and `noStroke`.

We saw that we can draw multiple shapes in one program (and maybe we even noticed that they end up one on top of the other in order?).

We learned that we should surround individual shapes and their settings (`fill` etc.) with `push` and `pop` to avoid confusion. (Confusion is scary.)

## Next

Just what *are* the other drawing functions and how can we learn about them?

## }
