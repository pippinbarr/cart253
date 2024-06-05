# Thinking like a computer with variables {
    
With the introduction of changing variables, our programs have suddenly become much more dynamic and, in a weird way, more intuitive (things move, change shape, change colour). Let's make sure we understand what's happening from the *computer* perspective because we're *programmers*.
    
## In this module

- A race
- Step by step

## A race

Here's a small program depicting a race:

```javascript
// Our first runner, Pippin, not very fast
let pippin = {
  x: 0,
  y: 180,
  size: 40,
  speed = 2
};

// Our second runner, Usain, very fast
let usain = {
  x: 0,
  y: 175,
  size: 50,
  speed: 3
};

/**
 * Creates the canvas
 */
function setup() {
  createCanvas(600, 200);
}

/**
 * Updates the runners and displays the race
 */
function draw() {
  // A yellow background
  background(255, 255, 0);
  
  // Move Pippin by adding his speed to his x coordinate
  pippin.x = pippin.x + pippin.speed;
  // Move Usain by adding his speed to his x coordinate
  usain.x = usain.x + usain.speed;
  
  // Display Pippin and Usain
  ellipse(pippin.x, pippin.y, pippin.size);
  ellipse(usain.x, usain.y, usain.size);
}
```

If you run this you'll see the race play out, with Usain getting to the finish line (the right side of the canvas) much faster. You can probably even read it intuitively, but let's take a look at it step by step (get it?) anyway.

## Step by step

*Refer to the video for this part of the module*

## Summary

We can think our way through our program *instruction by instruction* and *frame by frame* in order to prove to ourselves that we *really understand* what it going on at a deep level. This kind of thinking is incredibly valuable when we need to debug!
    
## }