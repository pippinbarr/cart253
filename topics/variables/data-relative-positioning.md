# Data: Relative positioning {
    
Sometimes we want to draw something moving in our program but it's made up of more than one shape (or image). We can solve that little program elegantly if we change the way we think about the information we're storing and use relative positioning (and math!)

## In this module

- Without relative positioning
- A better approach to data, and relative positioning

## Without relative positioning

Intuitively we might move an object made of multiple shapes like this:

```javascript
// The car's body
let carBody = {
  x: 0,
  y: 200,
  width: 80,
  height: 20,
  speed: 4
};

// The left wheel
let leftWheel = {
  x: -20,
  y: 210,
  size: 20,
  speed: 4
};

// The right wheel
let rightWheel = {
  x: 20,
  y: 210,
  size: 20,
  speed: 4
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(500, 300);
}

/**
 * Update the car positions and display it
 */
function draw() {
  background(0);
  
  // Move the pieces of the car
  car.x = car.x + car.speed;
  leftWheel.x = leftWheel.x + leftWheel.speed;
  rightWheel.x = rightWheel.x + rightWheel.speed;
  
  // Display the car
  // Body
  rectMode(CENTER);
  rect(car.x, car.y, car.width, car.height);
  // Left wheel
  ellipse(leftWheel.x, leftWheel.y, leftWheel.size);
  // Right wheel
  ellipse(rightWheel.x, rightWheel.y, rightWheel.size);
}
```

This does work, as you can see, but unless we really want to think about the wheels as *separate* from the car, it makes a lot of work and can go wrong pretty easily. 

## A better approach to data, and relative positioning

If we're happy with just thinking of the *car* as *one thing* then we can draw all its components based on *one* object instead, using relative positioning to put all the pieces in the right place.

Importantly, this involves thinking about the *information* or *data* we need about the car to draw in this way. We have to think about the wheels of the car *relative* to the car body, and we might end up with something like this:

```javascript
// The car
let car = {
  // Position of the body
  x: 0,
  y: 200,
  // Dimensions of the body
  width: 80,
  height: 20,
  // Speed of the car
  speed: 4,
  // Information about the wheels
  wheels: {
    // How are the wheels positioned relative to the body position?
    offset: {
      // Left wheel will be 20 pixels to the left of the body center
      // Right wheel will be 20 pixels to the right of the body center
      x: 20,
      // Both wheels will be 10 pixels below the body center
      y: 10
    },
    // Wheel size
    size: 20 
  }
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(500, 300);
}

/**
 * Update the car position and display it
 */
function draw() {
  background(0);
  
  // Move the car
  car.x = car.x + car.speed;
  
  // Display the car
  // Body
  rectMode(CENTER);
  rect(car.x, car.y, car.width, car.height);
  // Wheels
  // Use the data about the wheels to draw them at a position RELATIVE
  // to the position of the main body
  // Left wheel
  ellipse(car.x - car.wheels.offset.x, car.y + car.wheels.offset.y, car.wheels.size);
  // Right wheel
  ellipse(car.x + car.wheels.offset.x, car.y + car.wheels.offset.y, car.wheels.size);
}
```

As you can see, our *information* or *data* about the car has become significantly more *sophisticated*. We have some pretty nested information in the `car` object now!

- A `car` has `wheels` and 
- `wheels` have `offsets` and 
- `offsets` have an `x` and a `y`! 

But we've also been able to delete the *separate variables* for the two wheels and we only have to update the position of *one* object: the car. Our program *makes more sense*.

Gradually learning to think in these kinds of ways and especially organizing the information in your program can really help you out as things get more complex.

## Summary

We can improve our programming experience by spending some time thinking about how we represent the information (data) about the objects and ideas in our program. Something like *relative positioning* can help us to do this!
    
## }