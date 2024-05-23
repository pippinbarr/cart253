# Basic commenting {

## Introduction

Programs are complicated animals and it can really help if we add *explanations* of how they work alongside the code itself. This process is called *commenting* our code and here we're going to look at *three* kinds of comments we should be including when we write a program.

## Preparation

If it's not already open, re-open your program from the *Function calls* unit in VS Code.

## Reading a program

One of the big things we have to be able to do when we're programming is *read our programs*. We also end up needing to *read other people's programs*. And that means that, inevitably, somebody else, who is not us, will also need to *read our program*.

Make a program *readable* or *legible* is a really important job for a programmer and one that is perilously easy to forget or to skip over. We will not be like that!

## Our program right now

So, we're working with this program (your version in the template might look a bit different, but this is the essence of the information we are working with):

```javascript
"use strict";

function setup() {
 createCanvas(640, 480);
}

function draw() {
    background(255, 100, 100);
    rect(200, 80, 240, 320);
}
```

## Good enough?

This program is small enough that right now we could *probably* read it without any help, but there's a bunch of stuff that is hard to understand just from the code. Things like:

1. What is this program actually *for* or *about*?
2. Is there any reason the canvas is set to be 640x480?
3. What colour is that in the `background` function?
4. What does that `rect` actually look like?
5. What is the `draw` function trying to accomplish?

We can guess. We can run the program. We can painstakingly figure out the RGB values.

But it would be better if there were words that *told us* what is going on.

In programming, those kinds of explanatory words are called *comments*, and we need to put some in.

## The top-level comment

Any program should have a comment at the top of its main file (`script.js` for us) that introduces it clearly. There are no hard rules for this, but it's a good idea to provide

1. The title
2. The author (you!)
3. An explanation of what the program does and how it does it
4. Credit given to any external (not by you) code involved in the project

We can write stuff one inside `/**` and `*/` to turn it into a *comment* that JavaScript won't try to treat like it's part of the program. So we might write something like:

```javascript
/**
 * The Blank Page
 * Pippin Barr
 * 
 * An exploration of the existential angst of a novelist confronting
 * the blank page while under huge pressure from their publisher. The
 * program is non-interactive intentionally in order to simulate the
 * writer's inability to get started on the project.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(255, 100, 100);
    rect(200, 80, 240, 320);
}
```

Now someone encountering our program will have a solid overview of what it's all about and how it works as well as who we are and what external code our program includes.

**Rule:** *Every program should have a top-level comment that explains it.*

## Function definition-level comments

It's best practice to write a similar kind of explanation, but more technically focused, for each individual *function definition* in the program. In our case that's `setup` and `draw`. So something like this:

```javascript
/**
 * The Blank Page
 * Pippin Barr
 * 
 * An exploration of the existential angst of a novelist confronting
 * the blank page while under huge pressure from their publisher. The
 * program is non-interactive intentionally in order to simulate the
 * writer's inability to get started on the project.
 * 
 * Uses:
 * p5.js and p5.sound
 * https://p5js.org/
 */

"use strict";

/**
 * Creates a 640x480 canvas for our masterpiece
 */
function setup() {
    createCanvas(640, 480);
}

/**
 * Draws a blank piece of paper on a pink background
 */
function draw() {
    background(255, 100, 100);
    rect(200, 80, 240, 320);
}
```

Now a reader would now the main objectives of our two key functions.

As you might imagine, our `setup` and `draw` and other function definitions will get *way more complicated* than this, but our comment will always just be a "summary" of what they do in plain language.

**Rule:** *Every function definition should have a comment.*

## Instruction-level comments

We can extend this idea of *explaining* all the way down to individual lines of code, or sometimes collections of lines. Specifically, if any line or lines aren't *totally easy* to read as they are, you should have a comment that helps give them some context.

For these kinds of comments we write our words after first writing `//`. So something like this:

```javascript
/**
 * The Blank Page
 * Pippin Barr
 * 
 * An exploration of the existential angst of a novelist confronting
 * the blank page while under huge pressure from their publisher. The
 * program is non-interactive intentionally in order to simulate the
 * writer's inability to get started on the project.
 * 
 * Uses:
 * p5.js and p5.sound
 * https://p5js.org/
 */

"use strict";

/**
 * Creates a 640x480 canvas for our masterpiece
 */
function setup() {
    // Create the canvas at a standard resolution
    createCanvas(640, 480);
}

/**
 * Draws a blank piece of paper on a pink background
 */
function draw() {
    // A pink background
    background(255, 100, 100);
    // The blank piece of paper
    rect(200, 80, 240, 320);
}
```

Now we have explanations at all levels of our program and pretty much *anyone* could read this now, programmer or not. Now the reader knows that the background is *pink*, that the rectangle represents a *piece of paper* and so on.

Good.

**Rule:** *Any time a comment would clarify how one or more lines of code work or what they are for, write the comment.*

## Tip: Commenting out code

In VS Code if you select some of your program and then press:

- Mac: ⌘-/
- Windows: Ctrl-/

It will "comment out" the selected code, meaning it will put `//` in front of each line and thus remove it from the program temporarily. Or, if the lines you select are commented out, it will reinstate them.

## Summary

We looked at three different kinds of comments we should be writing in our programs from now on:

1. *A top-level comment* should explain the broad strokes of the program, give it a title and author, and credit any other code you're using. Traditionally this goes inside `/** ... */` style comments
2. *Function definition-level comments* should explain what individual functions in your program do. Traditionally these also use the `/** ... */` style of comment
3. *Instruction-level comments* help to explain specific lines of code that may otherwise be hard to explain. Traditionally these use the `//` style of comment

## Next

Let's expand our drawing knowledge a bit further.

## }
