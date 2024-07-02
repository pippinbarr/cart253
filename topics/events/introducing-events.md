# Introducing events {
   
Description.

## In this module

- What is an event?
- Responding to an event
- `draw()` is an event
- `mousePressed()` is an event
- There are so many events!

## What is an event?

In programming, an event is essentially any kind of thing that can *happen at a specific moment in time* during your program and that your program can *be notified about*.

The user clicking down the mouse button is an event. If, while your program is running, the user clicks the mouse, it's possible to have your program be *told* that the user clicked the mouse.

Likewise, the user pressing a key on the keyboard is an event.

So is moving the mouse.

So is a timer finishing.

So is the internet connection being disabled.

## Responding to an event

We often want our programs to *respond* to specific events like mouse clicks and keypresses and timers because these can make them far more interesting to interact with.

In the big picture, the way we respond to events in a program is by *defining a function* that should be *called* when the event happens.

We'll see later on how we can take a lot more control of this process, but for now, let us be thankful that p5 already handles some of this for us.

Specifically, p5 will automatically call certain functions we can define when certain events happen.

## `draw()` is an event

In fact, the `draw()` function we always define in our p5 programs *is* a function that responds to an event! 

What event does it respond to? The "next animation frame" event! There is a timer hidden from us that is counting out the precise amount of time per frame (around 0.033 seconds for a 30FPS program) and then *calling* `draw()` each time it elapses!

So when we define `draw()` we're defining the *event handler* for the "animation frame" event. It's the function that will be in charge of responding to that event.

And what does it do? It generally draws and animations all the stuff that should happen for that specific frame.

## `mousePressed()` is an event

We mentioned earlier that the user pressing the mouse button down is an event, and p5 will automatically call a function called `mousePressed()` each time that happens. 

So if we *define* a `mousePressed()` function in our program, p5 will *call* it every time the mouse is pressed, and thus our program can *respond to that event*:

```javascript
function setup() {
  createCanvas(400, 400);
  
  // Filling the background here so it DOESN'T
  // happen every frame
  background(0);
}

function draw() {
  // This is empty!
  // All the action happens when the mouse is pressed
  // By not refilling the background every frame we can see
  // the cumulative effect of the mouse presses!
}

/**
 * The mousePressed() function is AUTOMATICALLY CALLED BY p5
 * whenever the mouse button is pressed down! Handy!
 */
function mousePressed() {
  push();
  noStroke();
  fill(255, 255, 0);
  ellipse(mouseX, mouseY, 50);
  pop();
}
```

## There are so many events!

We won't have time to get into it, but it's possible for our programs to respond to a huge number of events, including:

- Mouse clicks, drags, presses, scrolls
- Keyboard presses, releases
- Animation frames
- File loading progress and completion
- CSS transitions
- HTML drag and drop
- Gaining and losing focus
- Switching in and out of fullscreen
- Screen touches
- Network connectivity changes
- Speech recognition and generation
- And more

It's a very exciting part of programming!

## Summary

... let's learn some specific events

    
## }