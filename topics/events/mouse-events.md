# Mouse events {
   
The mouse (or trackpad) is a key way that people interact with the software on their computers, and our programs are no different! We *definitely* want to be able to respond to mouse events, most obviously clicks!

## In this module

- A ball
- `mousePressed()`
- `mouseReleased()`
- `mouseWheel()`
- Other mouse events

## A ball

Let's use a moving ball as a way to explore some mouse events. Here's some starting code.

```javascript
// Our ball
const ball = {
    // Position
    x: 0,
    y: 200,
    // Size
    size: 50,
    // Velocity so it can move
    velocity: {
        x: 0,
        y: 0
    },
    // Speed when it moves
    speed: 5
}

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Moves the ball and draws it
 */
function draw() {
    background(0);
  
    // Move the ball
    ball.x += ball.velocity.x
    ball.y += ball.velocity.y;
  
    // Draw the ball
    push();
    ellipse(ball.x, ball.y, ball.size);
    pop();
}
```

Right now we can make the ball move if we manually set its velocity properties, but it would be nicer if we could control that with... the mouse!

... with the mouse!

## `mousePressed()`
    
We've already seen that we can add a `mousePressed()` function definition to our program and it will be called whenever the mouse button is pressed down!

A simple idea would be that the ball should move to the right when we press down the mouse. We can add a `mousePressed()` that sets the ball's velocity:

```javascript
/**
 * Starts the ball moving
 */
function mousePressed() {
    ball.velocity.x = ball.speed;
}
```

Now if we press down with the mouse, off the ball goes! We are controlling it through the power of a mouse event!

## `mouseReleased()`

Currently we set the ball in motion and it just heads off on its own. Let's set it up so that the ball only moves *while* the mouse is down.

To accomplish that we need to set its velocity *back to zero* when the mouse button is released/let go. And we can do that with `mouseReleased()`!

```javascript
/**
 * Stops the ball moving
 */
function mouseReleased() {
    ball.velocity.x = 0;
}
```

Yes! Now the ball only moves while we're holding down the mouse! True power!

## `mouseWheel()`

Just for laughs, let's control the ball's size by using the mouse wheel (or a scroll gesture on a trackpad).

The `mouseWheel()` function is called whenever the user moves the mouse wheel (or makes a scroll gesture on a trackpad), so as a first approximation we could just make the ball bigger whenever that happens?

```javascript
/**
 * Grows the ball
 */
function mouseWheel() {
    ball.size += 0.5;
}
```

Nice! Now if we scroll with the wheel (or a gesture) the ball gets bigger! The power is coursing through our veins!

Buuuut... it would make more sense if the ball grew when we scroll one way and shrank when we scroll the other. So how do we know which way the user scrolled?

### `mouseWheel(event)`

This is a little more sophisticated, but we can define our `mouseWheel()` function as `mouseWheel(event)` instead and that will give us a *variable* called `event` (also known as a *parameter*) that will give us information about what happened. (We'll learn more about this idea of using *parameters* with our functions later.)

For now, we can use `event.delta` to find out how much and in which direction the user scrolled. It contains a *number* that is the number of pixels scrolled in the last frame. Negative if the scrolling went up, positive if the scrolling went down.

With that in mind we could *add* the amount of scrolling to the size of the ball...

```javascript
/**
 * Resizes the ball
 */
function mouseWheel(event) {
    // Add the number of pixels scrolled to the ball size
    // Positive for scrolling down, negative for scrolling up
    ball.size += event.delta;
    // Constrain the size of the ball so it doesn't get silly
    ball.size = constrain(ball.size, 10, width);
}
```

This is already so cool! Now we can move the ball and adjust its size, all using our mouse or trackpad.

But wait a second, *how did we know about `event` and `event.delta`*?

Gentle reader, we [read the documentation for `mouseWheel()` in the p5 reference](https://p5js.org/reference/#/p5/mouseWheel). It ain't magic. It's reading.
    
## Other mouse events    

There are a few other mouse events available in p5, notably:

- `mouseMoved()` is called whenever the mouse moves
- `mouseDragged()` is called whenever the mouse moves while the button is pressed down
- `mouseClicked()` is called whenever the mouse is clicked (pressed and then released)
- `mouseDblClicked()` is called whenever the mouse is clicked twice in a row quickly

You can use them all in the same kind of way as we've been looking at. You define a function with the matching name, and then inside the function you can write code that will run *when that event happens*.

## Summary

...

## }