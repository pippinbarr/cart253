# Organizing with functions {

## Introduction

## Preparation

1. Download the [template project](../../templates/template-p5-project.zip)
2. Unzip it
3. Open the resulting folder in VS Code
4. Give the project a title (like "My House") in `index.html`
5. Paste the following (pretty big) program into `script.js` (replacing what is there)

```javascript
/**
 * My House
 * Pippin Barr
 * 
 * Draws a house with shapes.
 * 
 * Disclaimer: Not actually my house.
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
 * Draws a house
 */
function draw() {
	// The sky
	background(150, 200, 250);

	// A cloud
	push();
	noStroke();
	// Note: using a single number for a colour will be greyscale
	// (As if you used the same number for R, G, and B)
	// So this is white:
	fill(255);
	ellipse(100, 100, 100, 100);
	ellipse(180, 80, 100, 100);
	ellipse(160, 120, 60, 60);
	ellipse(190, 130, 60, 60);
	ellipse(220, 120, 60, 60);
	pop();

	// The ground
	push();
	noStroke();
	fill(200);
	rect(0, 400, 640, 480);
	pop();

	// The main body of the house
	push();
	noStroke();
	fill(250, 250, 200);
	rect(200, 240, 280, 180);
	pop();

	// The roof
	push();
	noStroke();
	// You can also write colors in hex code in quote marks
	fill("#dc143c");
	triangle(180, 240, 340, 120, 500, 240);
	pop();

	// A window
	push();
	// You can also write colour names from the CSS standard in quotes
	// https://www.w3.org/wiki/CSS/Properties/color/keywords
	stroke("deeppink");
	strokeWeight(5);
	fill("blanchedalmond");
	rect(220, 260, 80, 80);
	pop();

	// An entrace

	// The door
	push();
	noStroke();
	fill(0, 128, 0);
	rect(320, 300, 80, 120);
	pop();

	// The doorknob
	push();
	noStroke();
	fill(255, 215, 0);
	ellipse(340, 360, 10, 10);
	pop();
}
```

## That's a lot of code

Well, yeah, that's a lot of code we have in our `script.js` right now. And that's the way it goes: we *write a lot of code* when we're programming.

To avoid going kind of insane, we need to always be thinking about how to *organize* our code to make it easier to deal with.

## Commenting helps

We can already see in our example code how much it helps to have commented it. If we want to change the doorknob, we can go find the doorknob "bit" of the code and change it there.

But that's just a first step, and ideally we just don't want this much *stuff* sitting in our `draw()` function like this. 

So what else can we do?

## Defining simple functions for organization

A great thing we can do is to *break our program down into functions*. So far we've mostly been *calling* functions (like `line` and `rect` and `strokeWeight`) but we can also *define our own*. And in fact we already see that with `setup` and `draw`. Those two are a little bit special because of how p5 works (more on that later on), but we can make our own too.

In essence, we can break that gigantic code in `draw` into a series of function definitions by just copying the way `setup` and `draw` work. And we can *call* those functions in `draw` to make them all *execute* their instructions one after the next. Like this:

```javascript
/**
 * My House
 * Pippin Barr
 * 
 * Draws a house with shapes.
 * 
 * Disclaimer: Not actually my house.
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
 * Draws a house
 */
function draw() {
	drawSky();
	drawCloud();
	drawGround();
	drawHouse();
}

/**
 * Draws the sky (nice and blue)
 */
function drawSky() {
	// The sky
	background(150, 200, 250);
}

/**
 * Draws a fluffy white cloud
 */
function drawCloud() {
	// A cloud
	push();
	noStroke();
	fill(255);
	ellipse(100, 100, 100, 100);
	ellipse(180, 80, 100, 100);
	ellipse(160, 120, 60, 60);
	ellipse(190, 130, 60, 60);
	ellipse(220, 120, 60, 60);
	pop();
}

/**
 * Draws the cold, hard ground
 */
function drawGround() {
	// The ground
	push();
	noStroke();
	fill(200);
	rect(0, 400, 640, 480);
	pop();
}

/**
 * Draws a lovely, cosy house with a pointy roof
 */
function drawHouse() {
	// The main body of the house
	push();
	noStroke();
	fill(250, 250, 200);
	rect(200, 240, 280, 180);
	pop();

	// The roof
	push();
	noStroke();
	// You can also write colors in hex code in quote marks
	fill("#dc143c");
	triangle(180, 240, 340, 120, 500, 240);
	pop();

	// A window
	push();
	// You can also write colour names from the CSS standard in quotes
	// https://www.w3.org/wiki/CSS/Properties/color/keywords
	stroke("deeppink");
	strokeWeight(5);
	fill("blanchedalmond");
	rect(220, 260, 80, 80);
	pop();

	// An entrance

	// The door
	push();
	noStroke();
	fill(0, 128, 0);
	rect(320, 300, 80, 120);
	pop();

	// The doorknob
	push();
	noStroke();
	fill(255, 215, 0);
	ellipse(340, 360, 10, 10);
	pop();
}
```

You can see there are two distinct parts to this: 

- we *define* our new functions below `draw`
- we *call* our new functions in `draw`

## The function *definition*

Here's our cloud drawing function definition:

```javascript
/**
 * Draws a fluffy white cloud
 */
function drawCloud() {
	// A cloud
	push();
	noStroke();
	fill(255);
	ellipse(100, 100, 100, 100);
	ellipse(180, 80, 100, 100);
	ellipse(160, 120, 60, 60);
	ellipse(190, 130, 60, 60);
	ellipse(220, 120, 60, 60);
	pop();
}
```

There are three main parts to it, and this kind of simple function definition is *always the same*:

### A comment 

```javascript
/**
 * Draws a fluffy white cloud
 */
```

We have a comment that describes what the function does.

### Function definition syntax

We have the function definition syntax, which is this bit:

```javascript
function drawCloud() {
	
}
```

You can see that it

1. Starts with the special word `function` which means we will be *defining* a function
2. Has the *name* of the function, `drawCloud`, so we know how to *call* it (can't call it without a name, right?)
3. Has empty *parentheses*, `()`, to show that this function doesn't need any *argumnets*
4. Has *curly brackets*, `{ ... }`, that will contain the *instructions this function will execute if you call it*. Whatever you put in here is what will *happen* when you call the function.

As you can see, *all* the other function definitions for `drawSky` and `drawGround` and `drawHouse` have this same shape.

### The function's instructions

Finally we have the stuff this function actually *does* inside the curly brackets:

```javascript
// A cloud
push();
noStroke();
fill(255);
ellipse(100, 100, 100, 100);
ellipse(180, 80, 100, 100);
ellipse(160, 120, 60, 60);
ellipse(190, 130, 60, 60);
ellipse(220, 120, 60, 60);
pop();
```

And these are literally just the same instructions we used to have in `draw`. We just *moved them* from draw into our new function.

And so if we were to *call* this function, it will *execute* the instructions that draw a cloud. That's why we called it `drawCloud`. (More on *naming things* later.)

## The function *calls*

If we want our program to draw the house now, we need to *call* all the functions we defined. And we will *call* them in `draw` because, again, that's the part of our program that runs every frame and is called `draw` for a reason. 

So our `draw` function is now:

```javascript
/**
 * Draws a house
 */
function draw() {
	drawSky();
	drawCloud();
	drawGround();
	drawHouse();
}
```

Which is *incredibly* clearer than it used to be, right? It doesn't even need comments for the different instructions because they *explain themselves* through their names.

Now each time `draw` happens (once per frame, remember) it will *call* each of our new functions and thus *execute* all the instructions inside them. And those instructions will draw the sky, the cloud, the ground, and the house.

## But, it looks the same...

Yes, it's "the same program" in the sense that the drawing hasn't changed - we have the same *output* when we look at it in the browser.

*But* our program is much more organized:

- it's much clearer *what our program does* when we read `draw` thanks to the function names
- it's much clearer *where to make changes* when we want to, by just going to the function responsible for that part of things (if I want the sky to be green, I should edit `drawSky`!)

This is a part of programming called **modularity**, where we try as much as possible to group related code together, ideally with a way to *name* it. (We could take our `drawHouse` function and use it in another program!)

## Do it even more?

Actually, we could break this program down further. `drawHouse` is pretty complicated and we could break *it* down into functions as well:

```javascript
/**
 * Draws a lovely, cosy house with a pointy roof
 */
function drawHouse() {
	drawBody();
	drawRoof();
	drawWindow();
	drawDoor();
}

/**
 * Draws the main body of our house.
 * (Is that what it's called?)
 */
function drawBody() {
	// The main body of the house
	push();
	noStroke();
	fill(250, 250, 200);
	rect(200, 240, 280, 180);
	pop();
}

/**
 * Draws the roof of our house (a triangle)
 */
function drawRoof() {
	push();
	noStroke();
	fill("#dc143c");
	triangle(180, 240, 340, 120, 500, 240);
	pop();
}

/**
 * Draws a window on our house
 */
function drawWindow() {
	push();
	stroke("deeppink");
	strokeWeight(5);
	fill("blanchedalmond");
	rect(220, 260, 80, 80);
	pop();
}

/**
 * Draws a door and a doorknob on our house
 */
function drawDoor() {
	// The door
	push();
	noStroke();
	fill(0, 128, 0);
	rect(320, 300, 80, 120);
	pop();

	// The doorknob
	push();
	noStroke();
	fill(255, 215, 0);
	ellipse(340, 360, 10, 10);
	pop();
}
```

We can keep doing this as much as we like to create functions that *do one thing really well*. So organized! I feel like I can breathe again!

## Do this from now on

So, from now on you should *never* have a `draw` full of lines and lines and lines of code. `draw` should be easy to read and for this you should rely on using *functions* to organize your code.

## Summary

We've seen how to define simple functions that help us to break down our program into smaller parts, making it easier to read and easier to work with as it becomes more and more complex.

MENTION MODULARITY.

## Next

Our program is beautifully structured at this point, but to be strong programmers we need to learn to see how the *computer* will actually read it. Next up: *thinking like a computer*.

## }
