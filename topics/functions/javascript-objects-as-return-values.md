# JavaScript Objects as return values {
   
Very frequently we want to make more than one JavaScript object of the same type. One way to do that is to write a function that *returns* JavaScript objects of the right type!

## In this module

- Preparation
- JavaScript Objects as return values
- In practice: buzzy
- In practice: flies flies flies!

## Preparation

1. Download the [Buzzy the return value project](./examples/buzzy-the-return-value.zip)
2. Unzip it
3. Move the folder into your repository
4. Open the folder in VS Code
5. Commit and push the changes

## JavaScript Objects as return values

Whenever we see that we are likely to create more that one JavaScript object of the same "type" (i.e. has the same property names), we should write a function to take care of it. Consider:

```javascript
let horsey = {
    name: "Horsey",
    colour: "#7d561d",
    legs: 3
};

let horso = {
    name: "Horso",
    colour: "#7d561d",
    legs: 4
};
```

If we had this in our program we should strongly consider creating these horses via a *function* to make our program better organized and more reusable:

```javascript
let horsey = createHorse("Horsey");
let horso = createHorse("Horso");

function createHorse(name) {
    let horse = {
        // We can set the new horse's properties via PARAMETERS
        // Note that the first "name" here is the *property* name
        // and the second "name" is the *parameter* name being put into it
        name: name,
        // We can set the new horse's properties via DEFAULTS
        // All horses are brown in this world
        colour: "#7d561d",
        // We can set the new horse's properties DYNAMICALLY
        // Each horse has between 2 and 4 legs, including fractional legs...?
        legs: random(2,4)
    }
}
```

Now whenever we want to create a horse object we use `createHorse()` and provide its name, the function does the rest. 

This has serious advantages:

**It's sensible**! It means we can make sure those objects are *consistent* because we change the *function* to change *all* objects created with it. 

If we wanted to add a `maneLength` property to all horses in the program we'd just add it in `createHorse()`.

**It's flexible**! It means we can have a mix of setting default values in the function as well as values coming in through parameters.

As you can see, we set the properties of each horse differently, by parameters, by default, and dynamically.

## In practice: buzzy

As you can see in the project for this module, we've enhanced our program by having it handle *two* flies, Buzzy and Jazzy. This is made wonderfully possible by the *functions* we wrote in the previous module. Without them, we would have been writing out the moving and drawing code *twice*, once for each fly. If we had three flies it would be worse and so on.

However, we should look at this program and notice that the fly creation process looks a lot like it could be handled by a function, making our program more sensible and flexible.

So, let's write a `createFly()` function that does this - for flair we'll create the properties in the three ways we looked at above.

```javascript
/**
 * Creates a fly object with randomized position, default size, 
 * and provided buzziness
 */
function createFly(buzziness) {
    const fly = {
        // Position (random)
        x: random(0, width),
        y: random(0, height),
        // Size (default)
        size: 30,
        // How much to move per frame (parameter)
        buzziness: buzziness
    };
    return fly;
}
```

Now we can use this function to create our flies instead of doing it explicitly:

```javascript
// We start them undefined now, because we'll create them in setup()
let buzzyTheFly = undefined;
let jazzyTheFly = undefined;

function setup() {
    createCanvas(400, 400);
    // A pretty calm fly
    buzzyTheFly = createFly(2);
    // A not calm fly
    jazzyTheFly = createFly(10);
}
```

Gorgeous! It's now very easy to add a fly to our program because we only need a *variable*, a call to `createFly()` to create it, and calls to `moveFly()` and `drawFly()` to display it. Compare that to needing to write out all the code for each fly! Take that... whoever it is that makes us do extra work...!

Try adding `jacuzziTheFly` to the mix! Savour the lack of work.

## Summary

We can use functions to create JavaScript objects - this often leads to far tidier programs that are easier to understand and easier to change.
    
## }

## Complete Buzzy the Return Value code

```javascript
/**
 * Buzzy the return value
 * Pippin Barr
 * 
 * Two flies that buzz around on the canvas
 */

"use strict";

// Our flies that will buzz around
let buzzyTheFly = undefined;
let jazzyTheFly = undefined;


/**
 * Create a canvas and setup our flies
 */
function setup() {
    createCanvas(400, 400);
    
    // A pretty calm fly
    buzzyTheFly = createFly(2);
    // A not calm fly
    jazzyTheFly = createFly(10);
}

/**
 * Creates a fly object with randomized position, default size, 
 * and provided buzziness
 */
function createFly(buzziness) {
    const fly = {
        // Position (random)
        x: random(0, width),
        y: random(0, height),
        // Size (default)
        size: 30,
        // How much to move per frame (parameter)
        buzziness: buzziness
    };
    return fly;
}

/**
 * Background, move and draw buzzy
 */
function draw() {
    background("#87ceeb");

    moveFly(buzzyTheFly);
    moveFly(jazzyTheFly);

    drawFly(buzzyTheFly);
    drawFly(jazzyTheFly);
}

/**
 * Move the fly passed in by updating its position
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

/**
 * Draw the fly passed in using its properties
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}
```