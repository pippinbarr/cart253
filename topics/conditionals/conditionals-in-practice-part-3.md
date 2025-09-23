# Conditionals in practice 3: Death by boredom {

Into each life must come... some death.

## In this module

- Preparation
- Our creature is back
- Death by boredom!
- That's life! And death!
    
## Preparation

1. Download the [Death by Boredom](./examples/death-by-boredom.zip)
2. Unzip it
3. Move the folder into your repository
4. Open the folder in VS Code
5. Commit and push the changes
    
## Our creature is back

Currently our creature responds in different ways to the mouse and keys, but we can be a bit more sophisticated now with logic operators. So let's delete the stuff in its `checkInput()` and change it up.

## Death by boredom

Let's incorporate one last cool conditional idea: death!

What if the creature hates being bored so much that at a certain point it just dies of boredom? We'd have to *count* how long it has been bored for and then make it die if that number gets too high - the death by boredom threshhold.

### Changing the creature's data

So, we need a couple of new ideas inside our creature. Specifically:

- Whether or not it's alive: we'll use a property called `alive`. It can be `true` (creature is alive) or `false` (creature is dead). It should start out `true`.
- How bored the creatre is: we'll use a property called `boredomLevel`. It will be a number that starts at `0` and goes up whenever the creature is bored!
- The creature's death-by-boredom threshold: we'll use a property called `deathByBoredomThreshhold`. It will be a number that states how many *frames* of our program the creature can be bored before it dies. We'll check this to see IF the creature has died.
- The creature's fill when it's dead, since we're using colours to show its state of being, let's use grey

```javascript
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
    angry: "#cc3333" // Red,
    dead: "#777777" // Grey
  },
  // Is the creature alive?
  alive: true,
  // How bored is the creature right now?
  boredomLevel: 0,
  // How bored can the creature get before dying (in frames)
  deathByBoredomThreshold: 500
};
```

Now the creature has new properties that will help us to express these ideas. This is often a good way to think about programming: what is the *information* (usually variables and properties) that will help us to express our ideas.

### Boredom

How do we introduce the idea of increasing boredom in our program? We want `boredomLevel` to go *up* every frame the creature is bored, that is every time we do a `draw()`, which is every time we set its fill to the `bored` fill:

```javascript
/**
 * Creature is happy if being massaged and otherwise bored
 */
function checkInput() {
    // Calculate the distance between the cursor and the creature
    // and put it into a "distance" variable (using const again since
    // we won't change this again later!)
    const distance = dist(mouseX, mouseY, creature.x, creature.y);
    // Calculate whether the mouse overlaps the creature by checking whether
    // the distance is less than its radius! (Half its diameter)
    const mouseIsOverlapping = (distance < creature.size/2);
    // Check if EITHER movedX OR movedY are NOT equal to zero
    // and store the result in our mouseIsMoving variable (another
    // const because we don't want to change it later)
    const mouseIsMoving = (movedX !== 0 || movedY !== 0);
    // Check if the mouse if over the creature and moving
    if (mouseIsOverlapping && mouseIsMoving) {
        // The cursor is overlapping the creature AND it's moving
        // So the creature is happy! Massage!
        creature.fill = creature.fills.happy;
    }
    else {
        // Otherwise the creature is bored
        creature.fill = creature.fills.bored;
        // Increase its boredom level by one
        creature.boredomLevel += 1;
    }
}
```

Now each time we check the creature's response to the world and find out it's bored (in the `else`) we increase the number of its `boredomLevel`. It gets more and more bored!

### Death

It's very important that the creature actually *dies* of boredom. 

#### Assigning death

What should at the moment *the creature dies* of boredom?

- Change its fill to the `dead` fill
- Set its `alive` property to `false`
    
That is:

```javascript
// Creature dies of boredom!
creature.alive = false;
// Creature turns dead coloured!
creature.fill = creature.fills.dead;
```

#### When to die

And what is the *condition* for this to happen? It's when its `boredomLevel` is *greater than* its `deathByBoredomThreshhold`, and that's just math!

```javascript
// Check if the creature has died of boredom
if (creature.boredomLevel > creature.deathByBoredomThresshold) {
    // Creature dies of boredom!
    creature.alive = false;
    // Creature turns dead coloured!
    creature.fill = creature.fills.dead;
}
```

#### Where to die

And *where* in our program would we check this? We should check this every time the `boredomLevel` changes which is, again, in our `else` that handles boredom.

```javascript
/**
 * Creature is happy if being massaged and otherwise bored
 */
function checkInput() {
    // Calculate the distance between the cursor and the creature
    // and put it into a "distance" variable (using const again since
    // we won't change this again later!)
    const distance = dist(mouseX, mouseY, creature.x, creature.y);
    // Calculate whether the mouse overlaps the creature by checking whether
    // the distance is less than its radius! (Half its diameter)
    const mouseIsOverlapping = (distance < creature.size/2);
    // Check if EITHER movedX OR movedY are NOT equal to zero
    // and store the result in our mouseIsMoving variable (another
    // const because we don't want to change it later)
    const mouseIsMoving = (movedX !== 0 || movedY !== 0);
    // Check if the mouse if over the creature and moving
    if (mouseIsOverlapping && mouseIsMoving) {
        // The cursor is overlapping the creature AND it's moving
        // So the creature is happy! Massage!
        creature.fill = creature.fills.happy;
    }
    else {
        // Otherwise the creature is bored
        creature.fill = creature.fills.bored;
        // Increase its boredom level by one
        creature.boredomLevel += 1;
        // Check if the creature has died of boredom
        if (creature.boredomLevel > creature.deathByBoredomThresshold) {
            // Creature dies of boredom!
            creature.alive = false;
            // Creature turns dead coloured!
            creature.fill = creature.fills.dead;
        }
    }
}
```

So, now the creature dies! It gets bored and it dies! Yesss!

But, if we run this program there is something annoying... we let the creature die but then... it still responds to massage! Which is... incredibly creepy!

### Being dead

There's a difference between just "saying" the creature is dead by setting `alive` to `false` and making our program *act* like the creature is dead.

So what would need to change?

Most importantly, once the creature is dead, we shouldn't do the stuff inside `checkInput()` anymore. We should check if the creature is dead first, and if it is, we should just ignore all that stuff.

There's a neat way to do this! We can check if the creature is dead at the *start* of `checkInput()` and then use `return` to tell the program to ignore the rest of the function, like this:

```javascript
/**
 * Creature is happy if being massaged and otherwise bored
 */
function checkInput() {
    // Check if the creature is dead
    // Which is to say if it is NOT alive
    if (!creature.alive) {
        // If it's dead, just stop this function here
        // so that we don't check out massaging and so on
        return;
    }
    
    // If we get to here it means the creature IS alive (because the
    // if-statement above didn't trigger)
    
    // Calculate the distance between the cursor and the creature
    // and put it into a "distance" variable (using const again since
    // we won't change this again later!)
    const distance = dist(mouseX, mouseY, creature.x, creature.y);
    // Calculate whether the mouse overlaps the creature by checking whether
    // the distance is less than its radius! (Half its diameter)
    const mouseIsOverlapping = (distance < creature.size/2);
    // Check if EITHER movedX OR movedY are NOT equal to zero
    // and store the result in our mouseIsMoving variable (another
    // const because we don't want to change it later)
    const mouseIsMoving = (movedX !== 0 || movedY !== 0);
    // Check if the mouse if over the creature and moving
    if (mouseIsOverlapping && mouseIsMoving) {
        // The cursor is overlapping the creature AND it's moving
        // So the creature is happy! Massage!
        creature.fill = creature.fills.happy;
    }
    else {
        // Otherwise the creature is bored
        creature.fill = creature.fills.bored;
        // Increase its boredom level by one
        creature.boredomLevel += 1;
        // Check if the creature has died of boredom
        if (creature.boredomLevel > creature.deathByBoredomThresshold) {
            // Creature dies of boredom!
            creature.alive = false;
            // Creature turns dead coloured!
            creature.fill = creature.fills.dead;
        }
    }
}
```

That `if`-statement at the top is a nice pattern to use sometimes when you want to ignore a specific function based on a conditional. You just `return` from the function without executing all its instruction.

If we run our program now... dead means dead. Once it's grey and dead, the creature is unresponsive.

## That's life! And death!

What we have now is a pretty impressive simulation of a creature that likes massage but hates being bored. So much that it just dies of it.

Importantly we've been using *all* our logic operators!

- We used OR (`||`) to check if the mouse is moving based on whether it moved on the x- OR the y-axis
- We used AND (`&&`) to check if the mouse is moving AND it is over the creature (which means "massage" in our program)
- We used NOT (`!`) to check if the creature is dead (`!creature.alive`)

In doing so we can see how using conditionals lets us model fairly complex behaviours! And this is only scratching the surface! Anything you can imagine can probably be done!

## Finishing up

1. Commit and push the changes you have made in this session with an appropriate commit message

## Summary

We've used conditionals and logic operators to create a pretty expressive little creature! Who knew that something as dry as logic could be as cool as this?!
    
## }

## Complete creature code

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
    angry: "#cc3333", // Red
    dead: "#777777" // Grey
  },
  // Is the creature alive?
  alive: true,
  // How bored is the creature right now?
  boredomLevel: 0,
  // How bored can the creature get before dying (in frames)
  deathByBoredomThresshold: 500
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
 * Creature is happy if being massaged and otherwise bored... sometimes to death
 */
function checkInput() {
    // Check if the creature is dead
    // Which is to say if it is NOT alive
    if (!creature.alive) {
        // If it's dead, just stop this function here
        // so that we don't check out massaging and so on
        return;
    }
    
    // If we get to here it means the creature IS alive (because the
    // if-statement above didn't trigger)
    
    // Calculate the distance between the cursor and the creature
    // and put it into a "distance" variable (using const again since
    // we won't change this again later!)
    const distance = dist(mouseX, mouseY, creature.x, creature.y);
    // Calculate whether the mouse overlaps the creature by checking whether
    // the distance is less than its radius! (Half its diameter)
    const mouseIsOverlapping = (distance < creature.size/2);
    // Check if EITHER movedX OR movedY are NOT equal to zero
    // and store the result in our mouseIsMoving variable (another
    // const because we don't want to change it later)
    const mouseIsMoving = (movedX !== 0 || movedY !== 0);
    // Check if the mouse if over the creature and moving
    if (mouseIsOverlapping && mouseIsMoving) {
        // The cursor is overlapping the creature AND it's moving
        // So the creature is happy! Massage!
        creature.fill = creature.fills.happy;
    }
    else {
        // Otherwise the creature is bored
        creature.fill = creature.fills.bored;
        // Increase its boredom level by one
        creature.boredomLevel += 1;
        // Check if the creature has died of boredom
        if (creature.boredomLevel > creature.deathByBoredomThresshold) {
            // Creature dies of boredom!
            creature.alive = false;
            // Creature turns dead coloured!
            creature.fill = creature.fills.dead;
        }
    }
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