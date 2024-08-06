# Basic drawing {

One of the main benefits of learning JavaScript via p5.js is that we can very easily *draw stuff* on the canvas, which generally makes the process of figuring out how programming works much more entertaining.

## In this module

- Preparation
- The canvas
- The background
- A shape
- Changing colours
- `push()` and `pop()`
- A meaning
- Commenting

## Preparation

1. Download the [template project](../../templates/template-p5-project.zip)
2. Unzip it
3. Open the resulting folder in VS Code
4. Give the program a title in `index.html`

## The canvas

### Make a canvas

Any project we work on with the p5 library will need us to create a canvas, so let's make one with `createCanvas()`, specifying the width and height we want.

Any questions about `createCanvas()`? Guess what, p5 has a whole [Reference](https://p5js.org/reference/) where you can look up *any* of the p5 functions you're using and get an explanation along with examples. Use it use it use it!

📖 Pop over to the reference and read the [`createCanvas()` documentation](https://p5js.org/reference/p5/createCanvas/) 📖

Now, let's use it (or lose it)...

```javascript
function setup() {
    // A nice square canvas to work with
    createCanvas(640, 640);
}

function draw() {

}
```

### What is the canvas?

Wait, what is the "canvas"?

In short, it's a rectangle on a webpage that you can draw in (and display text on, and animate, and make 3D shapes on, and and and). 

One of the main things p5 does is make it *easier* to draw on the canvas, but you can also draw on it in Plain JavaScript using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API). But not now please.

In terms of HTML, the canvas is an HTML *element* on the webpage. You can add one with the `<canvas>` tag, although p5 adds our one automatically.

So, tl;dr? The canvas is a rectangle we can draw in using p5's functions.

## The background

We know that `draw()` happens *every frame* so it's usually a good idea to draw a background color (or later an image) for each frame, so let's add that in `draw()` with the `background()` function call.

Before we do that, let's quickly... read the documentation for background!

📖 Go to the p5 documentation and look up the [`background()` documentation](https://p5js.org/reference/p5/background/) 📖

Now let's use it.

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

## A shape

We've seen that we can use `rect()` to draw a rectangle, so let's learn a new function call that will let us draw a circle called `ellipse()` (you might guess from the name it can also draw ellipses in general and you would be right).

For `ellipse()` we use the same idea of a function call we've been seeing: the name, parentheses with arguments, a semicolon.

📖 You guessed it, go have a look at the [`ellipse()` documentation](https://p5js.org/reference/p5/ellipse/) 📖

Let's draw an ellipse!

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

So, as we saw in the documentation, the `ellipse()` function works roughly the same as the `rect()` function. We specify a *position* (x- and y-coordinates) and *dimensions* (width and height).

Also in the documentation: by default an ellipse is drawn based on its *centre* rather than it's top left corner. Does an ellipse even *have* a top left corner??

## Changing colours

You might have noticed by now that the *default* for the shapes we're drawing is to have a white *fill* (the colour inside the shape) and a black *stroke* (the colour of the line around the shape).

We can change this using the `fill()` and `stroke()` functions, giving each one an RGB colour to set the fill and stroke to. A quick read first:

📖 Go have a look at the [`fill()`](https://p5js.org/reference/p5/fill/) and [`stroke()`](https://p5js.org/reference/p5/stroke/) documentation 📖

And now let's use 'em! RGB colours again!

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

Notice that we *set* the fill and the stroke colours *before we draw the shape*. It's like selecting the fill in Photoshop or MS Paint and *then* drawing the shape. This is a general rule with drawing with the p5 functions: you set all the colours etc. first, *then* draw the shape.

## `push()` and `pop()`

Once we start setting colours for `fill()` and `stroke()` and other things, we'll run into the potential problem that our program will *keep using those settings* even after our shape is drawn. Again, it's like in Photoshop. If you set the fill to red it *stays red* until you change it again.

It's better to avoid this because it can be *very confusing* as your program gets more complex.

To be safe, whenever we're drawing a shape with its own special settings, we surround it by two more function calls, `push()` and `pop()`, like this:

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
    // First we PUSH to remember the previous settings
    push();
    // Then we change the settings for this shape (fill and stroke here)
    fill(255, 0, 0);
    stroke(255, 255, 255);
    // Then we draw the shape
    ellipse(320, 320, 480, 480);
    // Finally we POP to restore the original settings
    pop();
}
```

Now any drawings we do *after* our red circle won't use the red fill or the white stroke, because those are *inside* the `push()` and `pop()`. And so we don't need to worry about them affecting other parts of our program.

In programming we often want to be very *explicit* about what we're doing so there's no confusion. Confusion is scary.

## A meaning

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

Two more ellipses with different fills and strokes. Note that we snuck in a new function here called `noStroke()` which tells p5 not to draw a line around a shape. It has no arguments because it doesn't need them!

📖 You could always look up [`noStroke()`](https://p5js.org/reference/p5/noStroke/) in the documentation if you're curious 📖

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

## Summary

Drawing using the p5 functions amounts to what we've just seen. It's just that there are *a lot of other functions*.

But whether you only use `rect()` or you use `rect()` and `ellipse()` and `fill()` and `stroke()` or you use every single function there is, the basic idea stays the same: you do it by *calling functions* and (when needed) passing them *arguments*.

## }
