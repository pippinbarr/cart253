# Functions and JavaScript Objects {
   
Functions have a special relationship with JavaScript objects because they can *change* the objects passed into them, often leading to much easier programming.

## In this module

- JavaScript Objects as parameters
- JavaScript Objects as return values

## JavaScript Objects as parameters

A function's parameters can include any kind of value, including *JavaScript Objects*. JavaScript objects have an important quality when passed to functions that we can use, though: if you change them inside the function they *stay changed*.

Observe:

```javascript
// Our fly that will buzz around
let buzzyTheFly = {
    x: 200,
    y: 200,
    size: 50,
    buzziness: 4
};

/**
 * Create a canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Background, move and draw buzzy
 */
function draw() {
    background("#87ceeb");
    
    moveFly(buzzyTheFly);
    drawFly(buzzyTheFly);
}

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

So, `moveFly()` is able to *change* the properties of the fly we pass to it (`buzzyTheFly` in this case):

1. The `buzzyTheFly` objects goes into the `fly` parameter of `moveFly()`
2. The instructions in `moveFly()` *change* the properties of the `fly` passed in
3. Because that `fly` is actually `buzzyTheFly`, `buzzyTheFly` gets changed!
    
This makes it extra easy to have another fly!

```javascript
// The original buzzy!
let buzzyTheFly = {
    x: 200,
    y: 200,
    size: 50,
    buzziness: 4
};

// Another fly, jazzy
let jazzyTheFly = {
    x: 300,
    y: 200,
    size: 20,
    buzziness: 1
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

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

/**
 * Move the fly passed in as an argument by updating its position
 * Now this will be applied to both buzzyTheFly and jazzyTheFly as
 * they are passed through individually.
 * So the SAME INSTRUCTIONS are being applied to both. Reuse!
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

/**
 * Draw the fly passed in
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}
```

Now both `buzzyTheFly` and `jazzyTheFly` have their positions changed by `moveFly()` and are both displayed by `drawFly()`. The same functions handling two different flies! REUSE!

## JavaScript Objects as return values

If we want to lean into this model of programming we can also write a function for *creating* our flies with their various properties. This will both reduce the number of times we write out a fly object *and* help to keep our fly objects consistent:

```javascript
// Buzzy and Jazzy start undefined so we can create them in setup
let buzzyTheFly = undefined;
let jazzyTheFly = undefined;

/**
 * Create the canvas and our two flies
 */
function setup() {
    createCanvas(400, 400);
    
    // We call our createFly() function which *returns* a fly with
    // the properties we specify here in the parameters:
    // x, y, size, buzziness in that order
    buzzyTheFly = createFly(200, 200, 50, 4);
    jazzyTheFly = createFly(300, 200, 20, 1);
}

/**
 * Creates a fly object with the specified properties and returns it
 */
function createFly(x, y, size, buzziness) {
    let fly = {
        x: x,
        y: y,
        size: size,
        buzziness: buzziness
    };
    return fly;
    // Notice how this function basically works as a "template" for what
    // properties a fly has. If we want to redefine a fly, we come here
    // and change the properties.
}

/**
 * Background, move and draw the flies
 */
function draw() {
    background("#87ceeb");
    
    moveFly(buzzyTheFly);
    moveFly(jazzyTheFly);
    
    drawFly(buzzyTheFly);
    drawFly(jazzyTheFly);
}

/**
 * Move the fly passed in as a parameter.
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

/**
 * Draw the fly passed in as a parameter
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}
```

We can see that our program is becoming more and more concise and we don't have repeated code. If we wanted to add a third fly (`jacuziTheFly`?) it would be really easy! (Try it!)

## Summary

We can use functions to manipulate JavaScript Objects and also to create them - this often leads to far tidier programs that are easier to understand and easier to change.
    
## }