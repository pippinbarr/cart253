# Events Challenge

Let's make sure we understand the key ideas of using *conditionals* in JavaScript by using them in a miniature project.

As with all challenges, do this work *in pairs* and *in class*. This means you will both submit the same work and should work together on one computer to produce the project. You can take turns typing stuff in.

To start up you should:

1. Download the [template project](../../../templates/template-p5-project.zip)
2. Rename that folder, maybe to `events-challenge`
3. Put that folder in your `cart253` repository
4. Commit and push that change with a message like "Started the events challenge"
5. Keep committing and pushing as you go along to practice your commit message writing

### 🔥 Do not do the challenge solo. 🔥
### 🔥 Do not do the challenge at home. 🔥
### 🔥 It is okay not to finish the challenge. 🔥
### 🔥 The main thing it to try hard and ask for help. 🔥
### 🔥 The 🌶️ steps are for people wanting to be ambitious 🔥
### 🔥 Try to spend 30-45 minutes maximum to save time for your other work 🔥

## Challenge

With your partner(s):

> Do nothing

### Step 1: Set up the example code
   
We're going to start with some example code for you to modify, so start paste the following code into your `script.js`:

```javascript
/**
 * The Only Move Is Not To Play
 * Pippin Barr
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Update the score and display the UI
 */
function draw() {
  background("#87ceeb");
  
  // Only increase the score if the game is not over
  if (!gameOver) {
    // Score increases relatively slowly
    score += 0.05;
  }
  displayUI();
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
  if (gameOver) {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("You lose!", width/2, height/3);
    pop();
  }
  displayScore();
}

/**
 * Display the score
 */
function displayScore() {
  push();
  textSize(48);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(floor(score), width/2, height/2);
  pop();
}
```

### Step 2: Write a `lose()` function

We'll want a function that handles losing. All it really needs to do is set the `gameOver` variable to `true`.

### Step 3: Make the user lose if they use the keyboard

Note that it's not enough to just have a `keyPressed()` event that loses, right? Any keyboard event should call `lose()`.

### Step 4: Make the user lose if the use the mouse

Again, think about the possibilities here. Mouse movement, clicking, mouse wheel. Call `lose()` for all of them.

### 🌶️ Step 5: Make the user lose if their internet connection changes

Good old `online` and `offline`. You might need to do a web search for something like "online offline event javascript" if you're not too sure how they work. You could also check the examples for this week. Note that p5 doesn't help you out here, you'll need to use a Plain JavaScript approach to events for this.

### 🌶️ Step 6: Make the user lose if the game loses focus

Check out the [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API#examples) for this one! Looks like `visibilitychange` is our friend here. Again, this will have to be Plain JavaScript

### 🌶️ Step 7: Convert all events to Plain JavaScript Events if you haven't

This will allow *all* your events to call the same event handler (`lose()`) that sets the game to be over. Neat and tidy.

## References

- The course materials
- [The p5 reference](https://p5js.org/reference/)

## Evaluation

When you're finished, show the instructor or teaching assistant your work and they will confirm you've passed the challenge and can submit it on the Moodle.

This challenge is pass/fail and is worth 1% of your final grade.

## Submission

Once you're cleared to submit, go to the Moodle and both submit your work. You should **all separately submit**:

- Your names
    - The link to the repository on GitHub (e.g. https://github.com/pippinbarr/cart253/topics/events/events-challenge/)
    - The link to the website version on GitHub Pages (e.g. https://pippinbarr.github.io/cart253/topics/events/events-challenge/)
    
*Note*: It's fine if the project is only in one of your repositories, but it's not a bad idea to make sure you *both* have it for your own reference.