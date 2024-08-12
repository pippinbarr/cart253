# Plain JavaScript events {
   
So far we've seen some "built-in" event handlers for p5 (for the keyboard and mouse) but "secretly" they're just using the underlying JavaScript events system. It's worth seeing how this works!

## In this module

- Preparation
- A key press in plain JavaScript
- The `event` parameter
- JavaScript events

## Preparation

1. Download the [template project](../../templates/template-p5-project.zip)
2. Unzip it
3. Rename the folder to `plain-javascript-events`
4. Move the folder into your repository
5. Open the folder in VS Code
6. Give the program a title in `index.html` (maybe "Plain JavaScript Events")
7. Commit and push the changes

## A key press in plain JavaScript

What if we wanted to go behind the scenes a tiny bit and use the basic *JavaScript* version of responding to a key press event?

We would use `addEventListener()` to say "I want to be told when there is a key press!":


```javascript
window.addEventListener("keydown", keyPressHandlerFunction);
```

- `window` is the part of our page we want to pay attention to events in (you can change this, but `window` is easy for the moment, it means the whole browser window)
- `.` tells us that we're going to use something *inside* `window`
- `addEventListener()` is the special function we call when we want to *listen* for a specific event - that is, we want to be *told* when it happens
- `(...)` - as always the parentheses contain the information the function needs
- `"keydown"` is the name of the event that will be triggered, in this case when a *key* is pressed *down*, not the quotation marks
- `keyPressHandlerFunction` is the name of the function we want to call when the key pressing event happens

So for a background-changing program we could write:

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
    
    // Start listening for key down
    // It often makes sense to set up event listeners in setup()
    // But there are other possibilities too
    // Call changeBG when a keydown event happens:
    window.addEventListener("keydown", changeBG);
}

/**
 * Fill the canvas
 */
function draw() {
    background(bg.fill);
}

/**
 * The event handler: Switch the background
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
 
Notice one nice thing: instead of just having *one* `keyPressed()` function we could actually set up *different* functions that respond to a press, and those functions can have meaningful names like `changeBG()`. Could be useful.

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

Now we know how to listen for events using Plain JavaScript which opens up the possibility of some new kinds of events, and increases our knowledge of using JavaScript *without* p5.
    
## }