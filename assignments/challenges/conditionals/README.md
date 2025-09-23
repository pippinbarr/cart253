# Conditionals Challenge

Let's make sure we understand the key ideas of using *conditionals* in JavaScript by using them in a miniature project.

As with all challenges, do this work *in pairs* and *in class*. This means you will both submit the same work and should work together on one computer to produce the project. You can take turns typing stuff in.

To start up you should:

1. Download the [template project](../../../templates/template-p5-project.zip)
2. Rename that folder, maybe to `conditionals-challenge`
3. Put that folder in your `cart253` repository
4. Commit and push that change with a message like "Started the conditionals challenge"
5. Keep committing and pushing as you go along to practice your commit message writing

### 🔥 Do not do the challenge solo. 🔥
### 🔥 Do not do the challenge at home. 🔥
### 🔥 It is okay not to finish the challenge. 🔥
### 🔥 The main thing it to try hard and ask for help. 🔥
### 🔥 The 🌶️ steps are for people wanting to be ambitious 🔥
### 🔥 Try to spend 30-45 minutes maximum to save time for your other work 🔥

## Challenge

With your partner(s):

> Make Mr. Furious Furious

### Step 1: Set up the example code
   
We're going to start with some example code for you to modify, so start paste the following code into your `script.js`:

```javascript
/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#ff0000"
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");
  
  // Move user circle
  moveUser();
  
  // Draw the user and puck
  drawUser();
  drawPuck();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}
```

### Step 2: Write a function to move the puck

Add a function called `movePuck()` to the program and call it in `draw()`.

`movePuck()` should:

- Check if the user and puck circles overlap (use `dist()` for this, check the [Overlapping Circles example](https://editor.p5js.org/pippinbarr/sketches/NLnxtLMat) if you need to see it being done)
- If the user and puck *do overlap*, calculate the distance between the user and the puck on x and y *separately* (so we will need *two* new variables here, one for the distance along x and one for the distance along y)
- Move the puck *away from the user* along the dimension the user is closest on. (e.g. if the user is closest to the puck on the x-axis, then the puck should move away from the user on the x-axis)

🌶️ If you're feeling ultra spicy you could implement the puck's movement with velocity and acceleration and cause it to accelerate away, then slow down with friction over time?

### Step 3: Add a target

Add another varible for a circle called `target` and write a `drawTarget()` function you  call in `draw()`. Display the target in the same way as the user and puck but give it a different visual appearance (say, a different colour).

🌶️ Can you work out how to make the target have a dashed outline? Feel free to ask the internet. It was surprisingly non-obvious last time I checked and involves stepping outside of p5 a little bit.

### Step 4: Change the target colour if the puck is inside it

Write another function `checkTarget()` you will call in `draw()` that checks if the puck is currently overlapping the target (remember `dist()` from earlier). If it is, change the colour of the target to indicate the overlap. If it isn't, change the colour of the target to indicate there is no overlap (say, green for an overlap and red for no overlap).
    
🌶️ This is currently very functional, is there a way to give this a more emotional arc? Could the puck be sad when not overlapping and happy when it is? How might you display the user, puck, and target to convey this idea? Faces? Little people or animals? The metaphor of "pushing" one thing onto another could go in lots of directions, no?


## References

- The course materials
- [The p5 reference](https://p5js.org/reference/)

## Evaluation

When you're finished, show the instructor or teaching assistant your work and they will confirm you've passed the challenge and can submit it on the Moodle.

This challenge is pass/fail and is worth 1% of your final grade.

## Submission

Once you're cleared to submit, go to the Moodle and both submit your work. You should **all separately submit**:

- Your names
    - The link to the repository on GitHub (e.g. https://github.com/pippinbarr/cart253/topics/conditionals/conditionals-challenge/)
    - The link to the website version on GitHub Pages (e.g. https://pippinbarr.github.io/cart253/topics/conditionals/conditionals-challenge/)
    
*Note*: It's fine if the project is only in one of your repositories, but it's not a bad idea to make sure you *both* have it for your own reference.