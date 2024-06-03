# Introducing variables {
    
## In this module

- What is a variable?
- A name for a value: `width` and `height`
- A name for a *changing* value: `mouseX` and `mouseY`
    
## What is a variable?

A variable 

- lets us use a *name* for a *value* that is a part of our program. 
- lets us *change* the value stored in it, which means our programs can change too.

For right now let's just think of variables as storing *numbers* as that's probably the most common kind.

Let's meet a couple of variables to understand this.

## A name for a value: `width` and `height`

The variable `width` and `height` are *always available* when we use the p5 library with JavaScript.

- `width` always contains the *width in pixels of the canvas* (i.e. what you set it to in `createCanvas()`)
- `height` always contains the *height in pixels of the canvas* (i.e. what you set it to in `createCanvas()`)

Now, we *already know* what we set the width and height to, so why bother?

Well, the main reason is just that it *makes everything easier to read*. 

### A circle in the centre of the canvas with *numbers*

Consider this program that draws a circle in the centre of the canvas:

```javascript
function setup() {
    // Create the canvas
    createCanvas(640, 640);
}

function draw() {
    background(0);
    
    // Draw a circle in the centre of the canvas
    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(320, 320, 100, 100);
    pop();
}
```

This is fine of course. We *know* that `(320, 320)` is the centre-point of a 640x640 canvas.

But what if you change your canvas dimensions to 480x480? Now your circle is in the wrong place. That's an annoying thing to have to fix every time you change the size of your canvas!

### A circle in the centre of the canvas with *variables*

We can use `width` and `height` to set the position of the circle instead! Then it will *always* be in the centre, whatever the size of the canvas:

```javascript
function setup() {
    // Create the canvas
    createCanvas(480, 480);
}

function draw() {
    background(0);
    
    // Draw a circle in the centre of the canvas
    push();
    noStroke();
    fill(255, 255, 0);
    // If we set the ellipse's (x,y) coordinates to
    // *half* the width and *half* the height, it will
    // always end up in the centre of our canvas.
    // That's math, baby!
    ellipse(width/2, height/2, 100, 100);
    pop();
}
```

Here the variables `width` and `height` have done two great things:

- They make our program *easier to read* because instead of having to understand *numbers* we can read *words* (the variable names)
- They make our program *easier to write* because help to bind together the different *ideas* of our program, like the idea of "the centre" and the idea of "the canvas dimensions"

Win, win, win.

## A name for a *changing* value: `mouseX` and `mouseY`
    
Variables are even more excellent than just providing sensible names for useful values though. They can *change over time*!
    
As with `width` and `height`, the variables `mouseX` and `mouseY` are *always available* when we use p5, our JavaScript library.

- `mouseX` is a variable that contains the *current x-coordinate of the mouse*.
- `mouseY` is a variable that contains the *current y-coordinate of the mouse*.

So if the mouse is currently pointing a position (50, 150) on our canvas, then

- `mouseX` will contain the number `50`
- `mouseY` will contain the number `150`
    
We can *use* these variables in a program to *know where the mouse is*!

### Moving circle

```javascript
function setup() {
    // Create the canvas
    createCanvas(640, 640);
}

function draw() {
    background(0);
    
    // Draw a circle at the mouse coordinates
    push();
    noStroke();
    fill(255, 0, 0);
    // We use the variable names mouseX and mouseY instead
    // of numbers for the x and y coordinates of our circle
    // JavaScript will *use the values inside them* as the values
    // to send as the x and y arguments of ellipse()
    // And that will mean the ellipse will be drawn with its (x, y)
    // position set to the mouse (x, y) position.
    ellipse(mouseX, mouseY, 100, 100);
    pop();
}
```

This is what variables do! You can see the ellipse is being drawn *each frame* with its centre at the same location as the mouse cursor.

- We can use a *name* instead of a value, which makes our program more readable
- We can use *variables that change* (like `mouseX` and `mouseY`) to create change in our program (like drawing a circle at the mouse coordinates)

### Size-changing circle

Because we can use a variable anywhere we would use a *value* we can experiment. What if we used `mouseX` and `mouseY` as the *size* of our circle instead of its position?

```javascript
function setup() {
    // Create the canvas
    createCanvas(640, 640);
}

function draw() {
    background(0);
    
    // Draw an ellipse that grows based on the mouse position
    push();
    noStroke();
    fill(255, 0, 0);
    // We use the variable names mouseX and mouseY instead
    // of numbers for the width and height of the ellipse
    // This causes it to be bigger the further from the origin (0,0)
    ellipse(320, 320, mouseX, mouseY);
    pop();
}
```

So, a variable is *just a name for a value*. JavaScript doesn't have an opinion on *where* you use it, just that you use the right kind of value in the right place. (i.e. We need to use *numbers* for the arguments of the ellipse, and `mouseX` and `mouseY` are number, so all is good.)
    
### Colour-changing circle

Because we can use `mouseX` and `mouseY` *anywhere* we would use a number, we can literally replace any number in our program to see what happens. What if we set the fill of our circle with those variables?

```javascript
function setup() {
    // Create the canvas
    createCanvas(640, 640);
}

function draw() {
    background(0);
    
    // Draw a circle that changes colour based on the mouse position
    push();
    noStroke();
    // We use the variable names mouseX and mouseY instead
    // of numbers for the red and green of the circle's fill
    fill(mouseX, mouseY, 0);
    ellipse(320, 320, 100, 100);
    pop();
}
```

Now the circle changes colour when we move the mouse! And again that's because the `fill()` instruction gets its red and green arguments from the x- and y-coordinates of the mouse.
    
## Summary


    
## }