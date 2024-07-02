# Plain JavaScript events {
   
So far we've seen some "built-in" events for p5 (for the keyboard and mouse) but "secretly" they're just using the underlying JavaScript events system. It's worth seeing how this works!

## In this module

- A key press in p5
- A key press in plain JavaScript
- The `event` parameter
- JavaScript events

## A mouse press in p5

As we saw previously, we can magically react to a key press in p5 by just defining a `keyPressed()` function:

```javascript
// The background colour
const bg = {
    fill: "#000000",
    fills: {
        black: "#000000",
        white: "#ffffff"
    }
}

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Fill the canvas
 */
function draw() {
    background(bg.fill);
}

/**
 * Switch the background on key press
 */
function keyPressed() {
    if (bg.fill === bg.fills.black) {
        bg.fill = bg.fills.white;
    }
    else {
        bg.fill = bg.fills.black;
    }
}
```

That works! Thanks for the magical `keyPressed()` function p5!

## A key press in plain JavaScript

But what if we wanted to go behind the scenes a tiny bit and use the basic *JavaScript* version of listening for a key press event?

We would use `addEventListener()` to set up the event in our program:

```javascript
window.addEventListener("eventName", eventHandlerFunction);
```

- `window` is the part of our page we want to care about events in (you can change this, but `window` is easy for the moment, it means the whole browser window)
- `.` tells us that we're going to use something *inside* `window`
- `addEventListener()` is the special function we call when we want to *listen* for a specific event - that is, we want to be *told* when it happens
- `(...)` - as always the parentheses contain the information the function needs
- `"eventName"` is the name of the event we care about, inside quote marks
- `eventHandlerFunction` is the name of the function we want to call when the event happens

So for a key press we could write:

```javascript
window.addEventListener("keydown", changeBG);
```

Here `"keydown"` is the official JavaScript name of the event triggered when the user presses a key. And `changeBG` is the name we'll use for our event handler, called when the key is pressed down!

```javascript
// The background colour
const bg = {
    fill: "#000000",
    fills: {
        black: "#000000",
        white: "#ffffff"
    }
}

/**
 * Create the canvas and set up event listener
 */
function setup() {
    createCanvas(400, 400);
    
    // Listen for key down
    window.addEventListener("keydown", changeBG);
}

/**
 * Fill the canvas
 */
function draw() {
    background(bg.fill);
}

/**
 * Switch the background
 */
function changeBG() {
    if (bg.fill === bg.fills.black) {
        bg.fill = bg.fills.white;
    }
    else {
        bg.fill = bg.fills.black;
    }
}
```
 
This does the same thing, but in plain JavaScript. Notice one nice thing: instead of just having *one* `mousePressed()` function we can actually set up *different* functions that respond to the mouse press, and those functions can have meaningful names like `changeBG()`.

## The `event` parameter

As with the p5 events, we often want to check the `event` parameters to see what specifically happens. Works the same way (because p5 is really just using the JavaScript event handlers itself). 

So for instance here's a plain JavaScript version of checking which key was pressed before changing the background:

```javascript
// The background colour
const bg = {
    fill: "#000000",
    fills: {
        black: "#000000",
        white: "#ffffff"
    },
    switchKey: 32 // Space bar
}

/**
 * Create the canvas and set up event listener
 */
function setup() {
    createCanvas(400, 400);
    
    // Listen for key down
    window.addEventListener("keydown", changeBG);
}

/**
 * Fill the canvas
 */
function draw() {
    background(bg.fill);
}

/**
 * Switch the background
 */
function changeBG(event) { // NOTE the event parameter
    // Use event.keyCode to check if they pressed the switching key...
    if (event.keyCode === bg.switchKey) {
        if (bg.fill === bg.fills.black) {
            bg.fill = bg.fills.white;
        }
        else {
            bg.fill = bg.fills.black;
        }
    }
}
```

Perfect. Now the background only changes colour if you press the *spacebar*.
    
## JavaScript events

There are a *looooot* of different events you can use this way! You can read about them in the [Mozilla Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) and the [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events).

Pay special attention to the "Documentation" colomn of the table which tells you which parts of the webpage actually use those events.

Some nice ones to check out that will play well with p5:

- Mouse: `mousedown`, `mouseup`, `mousemove`, `mouseenter`, `mouseleave`, `dblclick`
- Keyboard: `keydown`, `keyup`
- Internet connection: `online`, `offline`
- Page: `scroll`

But there are a ton of others. Get as deep or shallow as you want!

## Summary

...
    
## }