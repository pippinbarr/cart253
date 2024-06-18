# Introducing conditionals {
    
One of the most interesting things a program can do is *change its behaviour* depending on what's happening. A key way to tell a program what to do in different situations is to use *conditionals* also popularly known as "if-statements."

## In this module

- Decisions, decisions
- `if`-statements
- Math and comparisons
- `else`
- `else if`
- In practice: Bullseye!

## Decisions, decisions

We all make decisions about what *do* based on *information* we have about the world. Something like this:

> **If there is freezing rain, then I'm going to stay at home.**

This is made up of two key parts.

- The **condition** is "freezing rain". Whether or not there is freezing rain is what we are going to base our *decision* on.
- The **action** is "staying at home". This is what we're going to *do* if there *is* freezing rain.

In the end, this is a pretty good way of framing most of what we do (assuming you don't believe in determinism!):

> **If** A, then I'm going to do **B**

## `if`-statements

There is a pretty elegant way of expressing these kinds of decisions in our programs called an `if`-statement. An `if`-statement expressing the above decision about freezing rain in program might look something like this:

```javascript
// Check if there is freezing rain
if (freezingRain === true) {
  // There is freezing rain, so stay at home
  stayAtHome();
}
```

Or more, generally

```javascript
// Check if the condition is true
if (condition) {
  // If we're in here, it's true, so respond!
  // Do something!
}
```

## Math and comparisons

In a program a *lot* of the time our *conditions* are going to be based on *numbers*, so we'll be checking things like:

- Is the mouse's x-coordinate greater than 100? `(mouseX > 100)`
- Is the mouse's y-coordinate less than the height of the canvas? `(mouseY < height)`
- Is the variable `age` equal to `33`? `(age === 33)`?
- Is the variable `confidence` greater than or equal to `90`? `(confidence >= 90)`
- Is the variable `sadness` less than or equal to `10`? `(sadness <= 10)`

As you can see, we use standard mathematical comparison operators (the fancy name for equals, less than, greater than, etc.) so compare numbers.

As you can also see, we will essentially *always* write comparisons that involve at least one *variable* because if there's no variable involved then the *condition cannot change* and it's pointless.

## `else`

When we make decisions in this life we often aren't *only* thinking about what to do if something *does* happen (that is, if the condition is *true*), we're also thinking about what we'll do if it *doesn't* happen (that is, if the condition is *false*).

> **If there is freezing rain, then I'm going to stay at home. Otherwise, I'm going to the café.**

Or, more generally:

> **If A, then I'm going to do **B**. Otherwise, I'm doing to do C**.

Extending our program version, we would write this:

```javascript
// Check if there is freezing rain
if (freezingRain === true) {
  // There is freezing rain, so stay at home
  stayAtHome();
}
else {
  // There is no freezing rain, so go to the café
  goToCafe();
}
```

So the `else` part allows us to tell the program what to do if the condition is *false*, which can be very useful!

## `else if`

One last thing! Sometimes we have more complicated decisions to make where there isn't just *one condition* but several. Such as:


> **If there is freezing rain, then I'm going to stay at home. If it's 24 degrees or warmer, I'm going to the beach. Otherwise, I'm going to the café.**

Or, more generally:

> **If** A, then I'm going to do **B**. Otherwise, if **C**, I'm doing to do **D**. Otherwise, I'm going to do **E**.

Extending our program version, we would write this:

```javascript
// Check if there is freezing rain
if (freezingRain === true) {
  // There is freezing rain, so stay at home
  stayAtHome();
}
else if (temperature > 24) {
  // It's warm! Let's go to the beach!
  goToBeach();
}
else {
  // There is no freezing rain, and it's not warm enough
  // for the beach, so go to the café
  goToCafe();
}
```

So the `else if` part allows us to tell the program further conditions we want to react to, like warm weather!

## In practice: Bullseye!

### A starting point

Let's put together a program that actually does this stuff to see it working in practice. Here's a starting point, a program that draws a target on the canvas.

```javascript
// Our target
const target = {
  // Position
  x: 200,
  y: 200,
  // Size (diameter)
  size: 100,
  // Fill
  fill: "#000000",
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw the target
 */
function draw() {
  background(220);
  
  drawTarget();
}

/**
 * Draws the target as circle
 */
function drawTarget() {
  // Draw the target as a circle with appropriate fill
  push();
  noStroke();
  fill(target.fill);
  ellipse(target.x, target.y, target.size);
  pop();
}
```

Well, we can indeed see a target now, but it doesn't respond to anything. It's just a black circle after all.

### Overlapping the target

A starting idea would be to make the target change colour when we put the mouse cursor inside it! How would we do such an incredible thing? 

With an `if`-statement? Yup! And what would it look like? Something like

```javascript
if (the cursor is inside the target) {
  // Change the colour of the target to show it was hit
}
```

To check if a pair of (x,y) coordinates are inside a circle we can rely on a neat trick:

*The coordinates (x,y) are *inside* a specific circle if their *distance* from the centre of the circle* is *less than its radius*. As in this wonderful diagram!

![Diagram of how the distance from the centre of a circle tells us whether a point is inside or outside a circle](./images/distance-and-circles.png)

And wonderfully there is a *function* in p5 called `dist()` that we can use to get the distance between two (x,y) coordinates! With that we can actually express our condition in math!

```javascript
function checkTarget() {
  // Get the distance from the mouse to the centre of the target (in pixels)
  let distance = dist(mouseX, mouseY, target.x, target.y);
  // Check if the distance is less than the target's radius (half its diameter/size)
  if (distance < target.size/2) {
    // Change the colour of the target to show it was hit!
    target.fill = target.fills.hit;
  }
}
```

Let's fold that into our full code, including a new part of our target object that contains the different fills it can have:

```javascript
// Our target
const target = {
  // Position
  x: 200,
  y: 200,
  // Size (diameter)
  size: 100,
  // Fill
  fill: "#000000",
  // NEW! Possible fills so we can change colours nicely
  fills: {
    // The default colour of the target
    default: "#000000",
    // The hit colour of the target
    hit: "#ffcc00"
  }
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Check and draw the target
 */
function draw() {
  background(220);
  
  checkTarget();
  drawTarget();
}

/**
 * Checks if the target was hit and changes its fill if so
 */
function checkTarget() {
  // Get the distance between the mouse and the centre of the target
  let distance = dist(mouseX, mouseY, target.x, target.y);
  // Check if it is less than the radius of the target
  if (distance < target.size / 2) {
    // If it is, then the mouse is *inside* the target
    // So change the fill of the target so that when we draw it
    // it will be the hit colour
    target.fill = target.fills.hit;
  }
}

/**
 * Draws the target as circle
 */
function drawTarget() {
  // Draw the target as a circle with appropriate fill
  push();
  noStroke();
  fill(target.fill);
  ellipse(target.x, target.y, target.size);
  pop();
}
```

Now if our cursor goes into the circle it changes to our `hit` colour property! The program is *paying attention* to what happens, it's no longer always the same. It is *interactive* in quite a special way.

### Not overlapping the target

An issue with the program as it stands is that if we move our cursor back out of the target it stays "hit." It would be nice if it went back to its default colour.

How do we handle the "other" situation based on a conditional? With `else`. So our conditional becomes:

```javascript
function checkTarget() {
  // Get the distance from the mouse to the centre of the target (in pixels)
  let distance = dist(mouseX, mouseY, target.x, target.y);
  // Check if the distance is less than the target's radius (half its diameter/size)
  if (distance < target.size/2) {
    // Change the colour of the target to show it was hit!
    target.fill = target.fills.hit;
  }
  else {
    // The mouse was not inside the target so set the colour to show it
    // wasn't hit!
    target.fill = target.fills.default;
  }
}
```

Let's add it in.


```javascript
// Our target
const target = {
  // Position
  x: 200,
  y: 200,
  // Size (diameter)
  size: 100,
  // Fill
  fill: "#000000",
  // NEW! Possible fills so we can change colours nicely
  fills: {
    // The default colour of the target
    default: "#000000",
    // The hit colour of the target
    hit: "#ffcc00"
  }
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Check and draw the target
 */
function draw() {
  background(220);
  
  checkTarget();
  drawTarget();
}

/**
 * Checks if the target was hit and changes its fill if so
 */
function checkTarget() {
  // Get the distance from the mouse to the centre of the target (in pixels)
  let distance = dist(mouseX, mouseY, target.x, target.y);
  // Check if the distance is less than the target's radius (half its diameter/size)
  if (distance < target.size/2) {
    // Change the colour of the target to show it was hit!
    target.fill = target.fills.hit;
  }
  else {
    // The mouse was not inside the target so set the colour to show it
    // wasn't hit!
    target.fill = target.fills.default;
  }
}

/**
 * Draws the target as a circle
 */
function drawTarget() {
  // Draw the target as a circle with appropriate fill
  push();
  noStroke();
  fill(target.fill);
  ellipse(target.x, target.y, target.size);
  pop();
}
```

Now our program only changes the colour of our target if the mouse is inside it, otherwise it goes back to its default colour! Yessss!

## Bullseye!

It would be cool if there were an *inner* circle of target that would change it to a different (even better) colour - a bullseye. But to do that we need to decide between *three things*. Is the cursor:

- Inside the bullseye?
- Inside the rest of the target?
- Not in the target at all

And for that we need the `else if` part of conditionals, something like this:

```javascript
function checkTarget() {
  // Get the distance from the mouse to the centre of the target (in pixels)
  let distance = dist(mouseX, mouseY, target.x, target.y);
  // Check if the distance is less than the bullseye's radius (half its
  // diameter)
  if (distance < target.bullseyeSize/2) {
    // Change the colour of the target to show it's a bullseye!
    target.fill = target.fills.bullseye;
  }
  // If it's not in the bullseye, check if the distance is less than the target's radius (half its diameter/size)
  else if (distance < target.size/2) {
    // Change the colour of the target to show it was hit!
    target.fill = target.fills.hit;
  }
  else {
    // The mouse was not inside the target so set the colour to show it
    // wasn't hit!
    target.fill = target.fills.default;
  }
}
```

Notice that we check the bullseye *first* because it's the *most restrictive* condition.

Putting it all together (including adding the fill for a bullseye to our target object and drawing the bullseye area) we get this:

```javascript
// Our target
const target = {
  // Position
  x: 200,
  y: 200,
  // Size (diameter)
  size: 100,
  // Fill
  fill: "#000000",
  // NEW! Possible fills so we can change colours nicely
  fills: {
    // The default colour of the target
    default: "#000000",
    // The hit colour of the target
    hit: "#ffcc00",
    // The bullseye colour of the taret
    bullseye: "#ff0000"
  }
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw the target
 */
function draw() {
  background(220);
  
  checkTarget();
  drawTarget();
}

/**
 * Checks if the target was hit (or bullseyed) and changes its fill if so
 */
function checkTarget() {
  // Get the distance from the mouse to the centre of the target (in pixels)
  let distance = dist(mouseX, mouseY, target.x, target.y);
  // Check if the distance is less than the bullseye's radius (half its
  // diameter)
  if (distance < target.bullseyeSize/2) {
    // Change the colour of the target to show it's a bullseye!
    target.fill = target.fills.bullseye;
  }
  // If it's not in the bullseye, check if the distance is less than the target's radius (half its diameter/size)
  else if (distance < target.size/2) {
    // Change the colour of the target to show it was hit!
    target.fill = target.fills.hit;
  }
  else {
    // The mouse was not inside the target so set the colour to show it
    // wasn't hit!
    target.fill = target.fills.default;
  }
}

/**
 * Draws the target as a circle
 */
function drawTarget() {
    
  // Draw the target as a circle with appropriate fill
  push();
  noStroke();
  fill(target.fill);
  ellipse(target.x, target.y, target.size);
  
  // Draw the bullseye area as a circle so we can see it
  stroke("#ffffff");
  ellipse(target.x, target.y, target.bullsEyeSize);
  pop();
}
```

**An aside:** Notice how nice it is to use functions? We can just work on the `checkTarget()` function most of the time because that's the bit where we're handling our conditions.
    
## Summary  
  
## }