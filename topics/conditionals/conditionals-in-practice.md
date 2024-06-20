# Conditionals in practice {
   
We get the *idea* of conditionals, now let's look at a small example of some working code so that we can explore them in practice. 
    
## In this module

- Setting up
- `if`
- `else`
- `else if`

## Setting up

Here's a small program that draws a... creature!

```javascript
// Our creature
const creature = {
  // Position
  x: 200,
  y: 200,
  // Size
  size: 200,
  // Fill
  fill: "#000000", // Starts out bored
  // Possible fills for the creature that show its mood
  // We'll need these when we start changing its colour
  // and its nice to keep them along with all the other info
  // about the creature
  fills: {
    bored: "#000000", // Black
    happy: "#33cc33", // Green
    angry: "#cc3333" // Red
  }
};

/**
 * Creates the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Fills the background, displays the creature 
 */
function draw() {
  background(255, 200, 127);
  
  checkInput();
  drawCreature();
}

/**
 * Responds to user input
 */
function checkInput() {
    // We'll need to figure this out
}

/**
 * Draws the creature
 */
function drawCreature() {
  push();
  noStroke();
  // Use the creature's fill
  fill(creature.fill);
  // Display the creature at its position and size
  ellipse(creature.x, creature.y, creature.size);
  pop();
}
```

Right now the creature is kind of boring because it doesn't *do* anything. It doesn't care about what's going on. So, let's make it respond to us...

## `if`

Let's begin with a standard `if`. We'll change the colour of our creature based on whether the user is pressing the mouse button.

p5 provides us with a variable called `mouseIsPressed` which will be `true` if the mouse button is down and `false` if the mouse button is not down. That's convenient! `true` and `false` are the kind of thing we need for a *condition*.

So to check if the user pressed the mouse so that we can change the colour of the creature we could write this in our `checkInput()` function:

```javascript
/**
 * Responds to user input
 */
function checkInput() {
    if (mouseIsPressed) {
        // Change the colour of the creature to show it's happy
        // It likes the mouse! Squeak squeak!
        creature.fill = creature.fills.happy;
    }
}
```

Again, `mouseIsPressed` will be `true` or `false` each *frame* of our program based on whether the user is currently holding down the mouse button. So, when the mouse is down, the creature changes its fill property to the happy fill, meaning it will display in that colour in `drawCreature()`.

## `else`

Right now, the creature becomes happy if you press down the mouse button and then it *stays* happy from then on. That's because we have permanently set its fill to the `happy` colour.

That's totally fine and we might like that idea - maybe it's made happy for the rest of its life by even a tiny click?

But let's say... no, it's only happen if the mouse is pressed down and becomes bored and disillusioned again if the mouse isn't pressed down.

For this we need an `else` because that will let us tell the program what to do if `mouseIsPressed` is `false` - it's the "otherwise" bit:

```javascript
/**
 * Responds to user input
 */
function checkInput() {
    // Check if the mouse is pressed...
    if (mouseIsPressed) {
        // The mouse is pressed!
        // Change the colour of the creature to show it's happy
        // It likes the mouse! Squeak squeak!
        creature.fill = creature.fills.happy;
    }
    else {
        // The mouse isn't pressed!
        // Change the colour of the creature to show it's bored
        // Aww, no mouse. So sad.
        creature.fill = creature.fills.bored;
    }
}
```

There, now the creature is happy (green) while the mouse is pressed down, but goes back to being bored (black) when it isn't. The power of `else` makes this little world that much more interesting and dynamic.

## `else if`

One last idea, what if the keyboard makes the creature *angry*? It hates it when you press down a key, although if it's already happy about the mouse it will let it slide. 

We can describe this situation by adding an `else if` to our code and by using the `keyIsPressed` variable, which is `true` if a key (any key) is pressed down, and false if not.

```javascript
/**
 * Responds to user input
 */
function checkInput() {
    // Check if the mouse is pressed...
    if (mouseIsPressed) {
        // The mouse is pressed!
        // Change the colour of the creature to show it's happy
        // It likes the mouse! Squeak squeak!
        creature.fill = creature.fills.happy;
    }
    // Mouse if not pressed, check if a key is pressed...
    else if (keyIsPressed) {
        // A key is pressed!
        // Change the colour of the creature to show it's angry
        // It hates those keys! Ugh!
        create.fill = creature.fills.angry;
    }
    else {
        // The mouse isn't pressed and no key is pressed!
        // Change the colour of the creature to show it's bored
        creature.fill = creature.fills.bored;
    }
}
```

Whoa! Now we have our own little creature with *three ideas about the world*! It's happy when the mouse is pressed, it's angry when a key is pressed (but only if the mouse isn't pressed), and it's bored otherwise.
    
If you play around with combinations of pressing the mouse, pressing keys, and so on, you'll see that there's a good amount of behaviour in this already!

- Try pressing the mouse and releasing
- Try pressing a key and releasing
- Try pressing a key, holding it, then pressing the mouse
- Try pressing the mouse, holding it, pressing a key, releasing the mouse...

Each of your actions is triggering different bits of our beautiful `if`-statement that in turn *defines our creatures response to different situations*.

It's alllliiiiiiive!

## Summary

...

## }