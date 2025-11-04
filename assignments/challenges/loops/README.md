# Loops Challenge

Let's make sure we understand the key ideas of using *loops* in JavaScript by using them in a miniature project.

As with all challenges, do this work *in pairs* and *in class*. This means you will both submit the same work and should work together on one computer to produce the project. You can take turns typing stuff in.

To start up you should:

1. Download the [template project](../../../templates/template-p5-project.zip)
2. Rename that folder, maybe to `loops-challenge`
3. Put that folder in your `cart253` repository
4. Commit and push that change with a message like "Started the loops challenge"
5. Keep committing and pushing as you go along to practice your commit message writing

### 🔥 Do not do the challenge solo. 🔥
### 🔥 Do not do the challenge at home. 🔥
### 🔥 It is okay not to finish the challenge. 🔥
### 🔥 The main thing it to try hard and ask for help. 🔥
### 🔥 The 🌶️ steps are for people wanting to be ambitious 🔥
### 🔥 Try to spend 30-45 minutes maximum to save time for your other work 🔥

## Challenge

With your partner(s):

> Get in line

### Step 1: Set up the example code
   
We're going to start with some example code for you to modify, so start paste the following code into your `script.js`:

```javascript
/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");
    
    stroke(0);
    line(0, 0, 0, height);
    
    stroke(25);
    line(50, 0, 50, height);
    
    stroke(50);
    line(100, 0, 100, height);
    
    stroke(75);
    line(150, 0, 150, height);
    
    stroke(100);
    line(200, 0, 200, height);
    
    stroke(125);
    line(250, 0, 250, height);
    
    stroke(150);
    line(300, 0, 300, height);
    
    stroke(175);
    line(350, 0, 350, height);
    
    stroke(200);
    line(400, 0, 400, height);
    
    stroke(225);
    line(450, 0, 450, height);
    
    stroke(250);
    line(500, 0, 500, height);
}
```

### Step 2: Loop it!

Convert the challenge code by adding variables and using a `while`-loop to replace the incredibly repetitive drawing instructions.

🌶️ Consider varying some other quality of the lines like their stroke weight, length or even their rotation through the loop as well.

### Step 3: Going down!

Now that you have a lovely loop example, add another loop to draw horizontal lines from the left to the right of the canvas.

🌶️ What if you keep one end of the lines fixed while the other end changes?

### Step 4: Gradient!

Make the background more interesting by drawing a gradient across it made out of lines. Use a `for`-loop for this one. You'll probably want to draw the lines very close together (maybe just one pixel apart?) and you could consider using `map()` to set their colour relative to their position on the canvas.

🌶️ What happens if you use `colorMode(HSB)` to change the *hue* across the canvas?

🌶️ What happens if you use `sin()` to affect the colour going across the canvas?

## References

- The course materials
- [The p5 reference](https://p5js.org/reference/)

## Evaluation

When you're finished, show the instructor or teaching assistant your work and they will confirm you've passed the challenge and can submit it on the Moodle.

This challenge is pass/fail and is worth 1% of your final grade.

## Submission

Once you're cleared to submit, go to the Moodle and both submit your work. You should **all separately submit**:

- Your names
    - The link to the repository on GitHub (e.g. https://github.com/pippinbarr/cart253/topics/loops/loops-challenge/)
    - The link to the website version on GitHub Pages (e.g. https://pippinbarr.github.io/cart253/topics/loops/loops-challenge/)
    
*Note*: It's fine if the project is only in one of your repositories, but it's not a bad idea to make sure you *both* have it for your own reference.
