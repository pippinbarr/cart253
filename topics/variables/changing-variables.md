# Changing variables {
    
Variables are called *variables* because they can change. So far we've seen that we can assign a single value to them, now we're going to change them over time to create *life itself*!
    
## In this module

- No change
- Change
- Addition
- Subtraction
- Real numbers
- Multiplication
- Division
    
## No change

Here's a program that draws a UFO on a dark night.

```javascript
// Our UFO
let ufo = {
  // Position
  x: 200,
  y: 375,
  // Dimensions
  width: 150,
  height: 50,
  // Fill colour (greyscale)
  fill: 255
};

// Shade to fill the sky (background)
let skyShade = 0;

/**
 * Creates the canvas
*/
function setup() {
  createCanvas(400, 400);
}

/**
 * Displays a UFO
*/
function draw() {
  // Display the sky
  background(skyShade);

  // Draw the UFO based on its properties
  push();
  fill(ufo.fill);
  noStroke();
  ellipse(ufo.x, ufo.y, ufo.width, ufo.height);
  pop();
}
```

We've got a variable for the background shade (`bgShade`) and a variable for all of the UFO's properties (`ufo`). But, because these variables and properties never change nothing *happens*. It's just a picture, even though it's clearly *incredible*.
    
## Change

Variables are called *variables* because they can *change*. We've already seen this with `mouseX` and `mouseY` which have the (changing) mouse coordinates stored in them each time `draw()` is called (each frame). That happens automatically, but we can change variables *ourselves*.

And when our variables are numbers, which they often are, we will change those numbers with... math! Who knew math would one day be useful!?

## Addition

Addition uses the `+` (plus) symbol.

0 + 1 = 1, am I right?

We can do exactly this kind of math in JavaScript to change variables. For instance, if we wanted the sky shade to gradually become lighter we could add this to `draw()` just before the `background()` instruction:

```javascript
// Sky shade goes up
// The sky gradually turns bright white!
skyShade = skyShade + 1;
```

Which is saying "assign the result of `skyShade + 1` back into `skyShade`". Which means that `skyShade` gets bigger by 1. And because we've written it in `draw()` this instruction "add 1 to `skyShade`" will happen *every frame*:

`skyShade` starts as 0 so after we add 1 the first time through `draw()` (the first frame) it becomes 1, the next time it becomes 2, the next time it becomes 3... it keeps going up.

And if the shade is increasing from 0 upwards it will... turn from black to white! White-out! We changed colours with *math*. Because the colours in programming are just *numbers*.

## Subtraction

Subtraction uses the `-` (dash) symbol.

We could *move* the UFO *up* by subtracting from its `y` property. The `y` property determines where the UFO will be drawn on the canvas, so if it becomes *smaller* the UFO will be drawn higher and higher on the canvas!

We can do this just before we draw the UFO, so just before the `push()` we can add:

```javascript
// The UFO goes up
// We have lift-off!
ufo.y = ufo.y - 2;
```

Same idea here, but we're doing math on a *property* of the UFO object. If you run the program... the UFO rises majestically into the air! Animation! Bye aliens!

## Real numbers

We don't have to use whole numbers (integers) in our math, we can use *real numbers* as well, with decimal points. Let's make the UFO move a bit slowly to the right by changing its `x` property. We can add this right before the `y` change:

```javascript
// The UFO goes right
// Course adjustment for Beetlegeuse
ufo.x = ufo.x + 0.5;
```

And off it goes.
    
## Multiplication

Multiplication uses the `*` (asterisk) symbol.

Multiplication changes numbers in a different way of course, and we can use that for distinctive effects (or just for plain old multiplication when we need it). Let's add this after the position changing instructions to change the UFO's fill property:

```javascript
// UFO gradually becomes darker
// I mean, activating quantum thrust transition...
ufo.fill = ufo.fill * 0.999;
```

## Division

Division uses the `/` (forward slash) symbol.

Of course division and multiplication can be expressed in terms of each other, so use what you like. Let's change the UFO's scale by dividing its width and height properties to make it smaller over time. Add this after the fill change instruction:

```javascript
// UFO's dimensions become smaller over time
// ... as it flies away into the distance! ET... gone home...
ufo.width = ufo.width / 1.005;
ufo.height = ufo.height / 1.005;
```

## UFO program

Here's a full listing of our UFO program for the record:

```javascript
// Our UFO
let ufo = {
  // Position
  x: 200,
  y: 375,
  // Dimensions
  width: 150,
  height: 50,
  // Fill colour (greyscale)
  fill: 255
};

// Shade to fill the sky (background)
let skyShade = 0;

/**
 * Creates the canvas
*/
function setup() {
  createCanvas(400, 400);
}

/**
 * Displays a UFO taking off and flying away 
*/
function draw() {
  // Sky shade goes up
  // The sky gradually turns bright white!
  skyShade = skyShade + 1;
  // Display the sky
  background(skyShade);

  // The UFO goes up
  // We have lift-off!
  ufo.y = ufo.y - 2;

  // The UFO goes right
  // Course adjustment for Beetlegeuse
  ufo.x = ufo.x + 0.5;

  // UFO gradually becomes darker
  // I mean, activating quantum thrust transition...
  ufo.fill = ufo.fill * 0.999;

  // UFO's dimensions become smaller over time
  // ... as it flies away into the distance! ET... gone home...
  ufo.width = ufo.width / 1.005;
  ufo.height = ufo.height / 1.005;

  // Draw the UFO based on its properties
  push();
  fill(ufo.fill);
  noStroke();
  ellipse(ufo.x, ufo.y, ufo.width, ufo.height);
  pop();
}
```
    
## Summary

At the heart of a huge amount of change in a program is this kind of simple *arithmetic* on numbers. We can use the standard arithmetic operators (+, -, \*, \\) to change the numbers in our variables. When we do that, the behaviour of our program changes over time.
    
## }