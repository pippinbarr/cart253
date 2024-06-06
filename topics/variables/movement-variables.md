# Movement variables {
   
One neat thing you can do with variables now is create some pretty good *movement* with your shapes. At the very least it's worth practising working with *velocity*, even if *acceleration* feels a bit much.

## In this module

- Basic movement
- Velocity
- Acceleration
- Constraints
- Some shorthand

## Basic movement

We've already seen that we can write code to move a shape across the canvas:

```javascript
let bird = {
    x: 120,
    y: 480,
    size: 50
}

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(0);
    
    // Move the bird
    bird.x = bird.x + 1;
    bird.y = bird.y - 2;
    
    // Draw the bird
    ellipse(bird.x, bird.y, bird.size);
}
```

Totally okay! But what we're really talking about here when we're adding `1` and `2` respectively to the bird's position is that we're applying its *velocity*.

## Velocity

Let's rewrite the bird to include velocity properly

```javascript
let bird = {
    x: 120,
    y: 480,
    size: 50,
    // NEW! We've added a velocity property to track the bird's velocity
    velocity: {
        // It has x and y properties so we can move the bird in both directions
        x: 1,
        // The y is negative because we want the bird to go UP
        y: -2
    }
}

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(0);
    
    // Move the bird by adding its velocity in x and y
    // Note that we always ADD velocity, so we use positive and negative
    // velocities to control direction
    bird.x = bird.x + bird.velocity.x;
    bird.y = bird.y + bird.velocity.y;
    
    // Draw the bird
    ellipse(bird.x, bird.y, bird.size);
}
```

Lovely. This means we will be able to control how the bird moves based on its velocity properties (more on this next later).

## Acceleration

Things don't usually move by just instantly starting at a specific speed, usually they *accelerate* to that speed. We can add this idea of *acceleration* as something that *changes the velocity* over time...

```javascript
let bird = {
    x: 120,
    y: 480,
    size: 50,
    // NEW! We'll set the velocity to start at 0, the bird is not moving
    velocity: {
        x: 0,
        y: 0
    },
    // NEW! We now have acceleration properties, these will be ADDED to the
    // velocity every frame
    acceleration: {
        x: 0.025,
        // The y acceleration is negative so the bird will go UP
        y: -0.05
    }
}

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(0);
    
    // NEW Change the bird's velocity by adding its acceleration to its
    // velocity
    // You can see it's the same idea as with changing the position using
    // the velocity. We change the velocity using the acceleration.
    bird.velocity.x = bird.velocity.x + bird.acceleration.x;
    bird.velocity.y = bird.velocity.y + bird.acceleration.y;
    
    // Move the bird by adding its velocity in x and y
    bird.x = bird.x + bird.velocity.x;
    bird.y = bird.y + bird.velocity.y;
    
    // Draw the bird
    ellipse(bird.x, bird.y, bird.size);
}
```

You can already see how the movement looks more naturalistic right? The bird starts motionless (with a velocity of 0 in x and y) and then begins to accelerate upwards as its acceleration is repeatedly added to its velocity which is added to its position!

## Constraints
    
We probably don't want the bird to be able to reach infinite velocity so we should really constrain it to a maximum and minimum velocity. This will come in handy later on when we're able to actually *control* the bird's movement.

Let's add the idea of minimum and maximum velocity to our program.

```javascript
let bird = {
    x: 120,
    y: 480,
    size: 50,
    velocity: {
        x: 0,
        y: 0,
    },
    // NEW! The minimum velocity for x and y movement. Note that it's NOT ZERO
    // because we use negative x velocity to move left and negative y
    // velocity to move up
    minVelocity: {
      // Sort of assuming that birds move faster horizontally than vertically...
      // But maybe that's not true...
      x: -3,
      y: -2  
    },
    // NEW! Same again with the maximum velocity
    maxVelocity: {
        x: 3,
        y: 2
    },
    acceleration: {
        x: 0.025,
        y: -0.05
    }
}

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(0);
    
    bird.velocity.x = bird.velocity.x + bird.acceleration.x;
    bird.velocity.y = bird.velocity.y + bird.acceleration.y;
    
    // NEW! Constrain the bird's velocity
    bird.velocity.x = constrain(bird.velocity.x, bird.minVelocity.x, bird.maxVelocity.x);
    bird.velocity.y = constrain(bird.velocity.y, bird.minVelocity.y, bird.maxVelocity.y);
    
    // Move the bird by adding its velocity in x and y
    bird.x = bird.x + bird.velocity.x;
    bird.y = bird.y + bird.velocity.y;
    
    // Draw the bird
    ellipse(bird.x, bird.y, bird.size);
}
```

This is looking kind of legitimately elegant, right? The majesty of flight!

We could (and probably will!) play around with changing the acceleration over time as well, and we could add constraints to the acceleration for the same reasons.

## Some shorthand

One last thing. You'll have noticed that we're often writing code that adds a number to a variable and updates it, like this:

```javascript
// Add bird.velocity.x to bird.x and store it back in bird.x
// Or more simply: Increase bird.x by bird.velocity.x
bird.x = bird.x + bird.velocity.x;
```

We can abbreviate this a little bit by using `+=` which does this addition a bit faster:

```javascript
// Add bird.velocity.x to bird.x and store it back in bird.x
// Or more simply: Increase bird.x by bird.velocity.x
bird.x += bird.velocity.x;
```

You can use that shorthand or not as you which. It achieves *exactly* the same thing, it's just a little shorter.

And yes there is also `-=` and `*=` and `/=` which do the same thing with subtraction, multiplication, and division.

## Summary
    
Using variables we can simulate pretty nice physical movement! A circle becomes a bird flying off to seek its fortune!

You will very likely reuse these ideas a *lot* in your life, so it's well worth beginning to internalize and understand them from now.
    
## }