# Functions and JavaScript Objects {
   
...

## In this module

- JavaScript Objects as parameters
- JavaScript Objects as return values

## JavaScript Objects as parameters

A function's parameters can include any kind of value, including *JavaScript Objects*. JavaScript objects have an important quality when passed to functions that we can use, though.

Observe:

```javascript
let buzzyTheFly = {
    x: 200,
    y: 200,
    size: 50,
    buzziness: 4
};

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background("#87ceeb");
    
    moveFly(buzzyTheFly);
    drawFly(buzzyTheFly);
}

function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}
```

What is noteworthy about this? It's that `moveFly()` is able to *change* the properties of the fly we pass to it (`buzzyTheFly` in this case):

1. The `buzzyTheFly` objects goes into the `fly` parameter of `moveFly()`
2. The instructions in `moveFly()` *change* the properties of the fly and because that fly is `buzzyTheFly`, `buzzyTheFly` gets changed!
    
This makes it extra easy to have another fly!

```javascript
let buzzyTheFly = {
    x: 200,
    y: 200,
    size: 50,
    buzziness: 4
};

let jazzyTheFly = {
    x: 300,
    y: 200,
    size: 20,
    buzziness: 1
};

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background("#87ceeb");
    
    moveFly(buzzyTheFly);
    moveFly(jazzyTheFly);
    
    drawFly(buzzyTheFly);
    drawFly(jazzyTheFly);
}

function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}
```

Now both `buzzyTheFly` and `jazzyTheFly` have their positions changed by `moveFly()` and are displayed by `drawFly()`. The same functions handling two different flies!

## JavaScript Objects as return values

If we want to lean into this model of programming we might want to write a function for *creating* our flies with their various properties:

```javascript
// Buzzy and Jazzy start undefined so we can create them in setup
let buzzyTheFly = undefined;
let jazzyTheFly = undefined;

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
}

function draw() {
    background("#87ceeb");
    
    moveFly(buzzyTheFly);
    moveFly(jazzyTheFly);
    
    drawFly(buzzyTheFly);
    drawFly(jazzyTheFly);
}

function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}
```

## Summary

...
    
## }