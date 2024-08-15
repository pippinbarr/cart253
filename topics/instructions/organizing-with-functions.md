# Organizing with functions {

Our programs are going to get longer and longer as we learn the possibilities of JavaScript and p5.js and as we become more ambitious. Very quickly, we'll need to *organize* our code so we don't go mad.

## In this module

- Preparation
- Commenting helps
- Functions for organization
- Same result, better code
- Do this from now on

## Preparation

1. Download the [Starter House project](./examples/starter-house.zip)
2. Unzip it
3. Move the folder into your repository
4. Open the folder in VS Code
5. Commit and push the changes

## Commenting helps

We can already see in our example code how much it helps to have commented it. If we want to change the doorknob, we can go find the doorknob "bit" of the code and change it there.

But that's just a first step, and ideally we just don't want this much *stuff* sitting in our `draw()` function like this. 

So what else can we do?

## Functions for organization

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

### The function *definition*

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

#### A comment 

```javascript
/**
 * Draws a fluffy white cloud
 */
```

We have a comment that describes what the function does.

#### Function definition syntax

We have the function definition syntax, which is this bit:

```javascript
function drawCloud() {
	
}
```

Let's break it down:

`function`

All function definitions start with the special word `function` which means we will be *defining* a function.

`drawCloud`

Our function needs a *name* so we know how to *call* it (can't call it without a name, right?).

`()`

Our function definnition has empty *parentheses*, `()`, to show that this function doesn't need any *argumnets* (no extra information needed for it to do its job).

`{ ... }`

Finally we have the curly brackets that will contain the *instructions this function will execute if you call it*. Whatever you put in here is what will *happen* when you call the function.

As you can see, *all* the other function definitions for `drawSky` and `drawGround` and `drawHouse` have this same shape.

#### The function's instructions

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

### The function *calls*

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

## Same result, better code

Yes, it's "the same program" in the sense that the drawing hasn't changed - we have the same *output* when we look at it in the browser.

*But* our program is much more organized:

- it's much clearer *what our program does* when we read `draw` thanks to the function names
- it's much clearer *where to make changes* when we want to, by just going to the function responsible for that part of things (if I want the sky to be green, I should edit `drawSky`!)

This is a part of programming called **modularity**, where we try as much as possible to group related code together, ideally with a way to *name* it. (We could take our `drawHouse` function and use it in another program!)

### Do it even more?

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

## Finishing up

1. Commit and push the changes you have made in this session with an appropriate commit message

## Summary

We've seen how to define simple functions that help us to break down our program into smaller parts, making it easier to read and easier to work with as it becomes more and more complex. This is called *modularity* and it is so, so good.

## }
