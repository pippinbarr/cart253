# Basic thinking-like-a-computer {
    
## Introduction

## Preparation

1. Download the [template project](../../templates/template-p5-project.zip)
2. Unzip it
3. Open the resulting folder in VS Code
4. Give the project a title (like "My House") in `index.html`
5. Paste the following program into `script.js` (replacing what is there)

```javascript
/**
 * Basic thinking-like-a-computer
 * Pippin Barr
 * 
 * Draws a simple graphic to explore how the computer
 * goes through a program when running it.
 * 
 * Could be your next album cover! Contact me for pricing!
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

/**
 * Creates the canvas
 */
function setup() {
	createCanvas(640, 480);
}

/**
 * Draws some abstract shapes
 */
function draw() {
	background(0)

	drawCircleShape();
	drawRectShape();
}

/**
 * Draws two nested circles to the left
 */
function drawCircleShape() {
	// Outer white circle
	push();
	noStroke();
	fill(255);
	ellipse(240, 240, 320, 320);
	pop();

	// Inner circle with thick stroke
	push();
	stroke(0);
	strokeWeight(50);
	fill(150, 0, 150);
	ellipse(240, 240, 240, 240);
}

/**
 * Draws a transparent yellow square to the right
 */
function drawRectShape() {
	// Outer yellow rectangle
	push();
	noStroke();
    // New! If you add a FOURTH argument to fill or stroke
    // it will set the alpha (transparency) of the color
    // (0 = completely transparent, 255 = completely opaque)
	fill(255, 255, 0, 150);
    // New! You can tell rectangles to draw based on their
    // centre instead of their top-left corner
	rectMode(CENTER);
	rect(400, 240, 320, 320);
	pop();
}
```

## Run it

If you run this code, you'll see the abstract image that is the result of all the instructions in the program running *once per frame*. That is, a circle-thing and a square-thing united in beautiful harmony.

## But how does this happen?

It's almost embarrassingly basic: the computer starts at the start and then executes each instruction in order.

*But!* It's worth actually thinking this through step-by-step to get in touch with our inner computer and to be better equipped to understand how programs work as they become more complex.

And so, let's check it out.

## Video only

This part will only work in the video for this unit, so go check that out.

## Summary

We've seen and practiced "thinking through" our program as if we're the computer, step by step. If we keep practicing that skill we will always be *much* more comfortable reading and writing programs.

## Next

What if something goes wrong? Because let's face it, it always does. We will need to learn about *debugging*.
    
## }