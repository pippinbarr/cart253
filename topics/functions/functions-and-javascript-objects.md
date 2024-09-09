# Functions and JavaScript Objects {
   
Functions have a special relationship with JavaScript objects because they can *change* the objects passed into them, often leading to much easier programming.

## In this module

- Preparation
- JavaScript Objects as parameters
- JavaScript Objects as return values
- Leveraging the power of functions for reuse

## Preparation

1. Download the [Buzzy the Fly project](./examples/buzzy-the-fly.zip)
2. Unzip it
3. Move the folder into your repository
4. Open the folder in VS Code
5. Commit and push the changes

## JavaScript Objects as parameters

A function's parameters can include any kind of value, including *JavaScript Objects*. JavaScript objects have an important quality when passed to functions that we can use, though: if you change them inside the function they *stay changed*.

Let's check out the *Buzzy the fly* project, where both `moveFly()` and `drawFly()` take a *fly* as a parameter and are able to move and draw *that fly*:

```javascript
/**
 * Move the fly passed in as an argument by updating its position
 * When buzzyTheFly is passed in, that means we will be changing
 * buzzyTheFly's position!
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

/**
 * Draw the fly passed in as an argument
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}
```

So, `moveFly()` is able to *change* the properties of the fly we pass to it (`buzzyTheFly` in this program):

1. The `buzzyTheFly` objects goes into the `fly` parameter of `moveFly()`
2. The instructions in `moveFly()` *change* the properties of the `fly` passed in
3. Because that `fly` is actually `buzzyTheFly`, `buzzyTheFly` gets changed!

## JavaScript Objects as return values

To really lean into this model of programming we can also write a function for *creating* flies with their various properties rather than writing them out in full at the top. That's what `createFly()` is for in this project:

```javascript
// Our fly that will buzz around
// Starts undefined because we will create it with a function
let buzzyTheFly = undefined;

/**
 * Create a canvas
 */
function setup() {
    createCanvas(400, 400);

    buzzyTheFly = createFly();
}

/**
 * Return a fly object with x, y, size and buzziness
 */
function createFly() {
    // Create the fly
    const fly = {
        x: random(0, width),
        y: random(0, height),
        size: random(20, 50),
        buzziness: random(1, 5)
    };
    // Return the fly
    return fly;
}
```

So `buzzyTheFly` starts as `undefined` when we declare it. But in `setup()` we use `createFly()` to create a new fly object that we assign to `buzzyTheFly`!

## Leveraging the power of functions fo reuse

Now that we have these functions, it makes it extra easy to have another fly!

```javascript
// Our two flies, to be created in setup
let buzzyTheFly = undefined;
let jazzyTheFly = undefined;

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
    
    buzzyTheFly = createFly();
    jazzyTheFly = createFly();
}

// Here is where we would have createFly(), but it just does
// exactly the same thing!

/**
 * Background, move and draw the two flies
 */
function draw() {
    background("#87ceeb");
    
    moveFly(buzzyTheFly);
    moveFly(jazzyTheFly);
    
    drawFly(buzzyTheFly);
    drawFly(jazzyTheFly);
}

// Down here are the function definitions we've already seen.
// We don't need to change them!
```

Now both `buzzyTheFly` and `jazzyTheFly` are created with `createFly()`, have their positions changed by `moveFly()` and are both displayed by `drawFly()`. The same functions handling two different flies! REUSE!

We can see that our program is becoming more and more concise and we don't have repeated code. If we wanted to add a third fly (`jacuziTheFly`?) it would be really easy! (Try it!)

## Summary

We can use functions to manipulate JavaScript Objects and also to create them - this often leads to far tidier programs that are easier to understand and easier to change.
    
## }