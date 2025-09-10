# Variables Challenge

Let's make sure we understand the key ideas of using *variables* in JavaScript by messing around with some built-in p5 variables and making some of our own.

As with all challenges, do this work *in pairs*. This means you will both submit the same work and should work together on one computer to produce the project. You can take turns typing stuff in.

To start up you should:

1. Download the [template project](../../../templates/template-p5-project.zip)
2. Rename that folder, maybe to `variables-challenge`
3. Put that folder in your `cart253` repository
4. Commit and push that change with a message like "Started the variables challenge"
5. Keep committing and pushing as you go along to practice your commit message writing

Remember to ask for help as much as you like.

## Challenge

With your partner(s):

> Make Mr. Furious Furious

### Step 1: Paste the Mr. Furious code into your project

```javascript
/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(160, 180, 200);
  
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();
}
```

### Step 2: Make Mr. Furious turn red over time

He's getting angrier and angrier, so make him turn more and more red over time. Maybe you should *constrain* any numbers you change so they stay in a reasonable range?

### Step 3: Make day turn to night

Make the sky (the background) turn from blue to black over time. You'll need to create a new variable (probably a JavaScript Object called `sky`?) for this, then change it over time.

### Step 4: Add an annoying bird

Add a "bird" to this world that flies across the screen from left to right. Any colour, any speed, any shape you like. Mr. Furious hates birds. This is probably why he's so angry right now. 

🌶️ If you're feeling spicy, make the bird move with velocity and even acceleration? Make it bob up and down with a sine wave?

### Step 5: Shaking with rage

Make Mr. Furious shake with anger. Changing his position with random numbers ever frame is one way you could achieve this?

### Step 6: More Shaking
    
Instead of him shaking all the time, make Mr. Furious shake more and more over time up to some limit. Could you even have a single `rage` variable that controls his colour *and* his shaking?

## References

- The course materials
- [The p5 reference](https://p5js.org/reference/)

## Evaluation

When you're finished, show the instructor or teaching assistant your work and they will confirm you've passed the challenge and can submit it on the Moodle.

This challenge is pass/fail and is worth 1% of your final grade.

## Submission

Once you're cleared to submit, go to the Moodle and both submit your work. You should **all separately submit**:

- Your names
    - The link to the repository on GitHub (e.g. https://github.com/pippinbarr/cart253/topics/variables/variables-challenge/)
    - The link to the website version on GitHub Pages (e.g. https://pippinbarr.github.io/cart253/topics/variables/variables-challenge/)
    
*Note*: It's fine if the project is only in one of your repositories, but it's not a bad idea to make sure you *both* have it for your own reference.