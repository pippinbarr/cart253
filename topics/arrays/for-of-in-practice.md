# `for...of` in practice {

Inspire inspire

## In this module

- More flies
- More flies with your flies?

## More flies

We've seen that `for...of` let us draw a set of flies to the canvas pretty easily, but let's lean into it more and use `for...of` all over the place!

### Our flies

Let's have some slightly more sophisticated flies. We'll start with an *empty* array and then add the flies in `setup()` using a `createFly()` function!

```javascript
let flies = [];

function setup() {
    createCanvas(300, 300);
    
    // Create four flies - notice that we can put them into our empty
    // array using specific indexes
    // (Yes this is repetitive, yes there is a better way. Later.)
    flies[0] = createFly();
    flies[1] = createFly();
    flies[2] = createFly();
    flies[3] = createFly();
}

/**
 * Creates a fly (data) with random numbers
 */
function createFly() {
    // Generate the random fly
    let fly = {
        x: random(0, width),
        y: random(0, height),
        size: random(10, 20),
        buzziness: random(2, 8)
    };
    // Return the random fly
    return fly;
}
```

Okay. By the end of `setup()` we have four random flies loaded into our `flies` array.

### Draw the flies

We've already done this, but let's improve with a function:

```javascript
function draw() {
    background("#87ceeb");
    
    // Go through all the flies
    for (let fly of flies) {
        drawFly(fly);
    }
}

/**
 * Draws the fly parameter to canvas
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}
```

Perfection, now we have the flies displaying using a function! The `for..of` goes through each fly in the array and puts it in a `fly` variable. Then we pass that fly through to `drawFly()` which actually does the work of displaying it.

### Move the flies

We can apply the exact same idea to move the flies using their `buzziness`:

```javascript
function draw() {
    background("#87ceeb");
    
    // Go through all the flies
    for (let fly of flies) {
        moveFly(fly);
        drawFly(fly);
    }
}

/**
 * Moves the fly by changing its position randomly
 * according to its buzziness
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}
```

They move! They buzz! They are flies! And we are... the lord of the flies!

## More flies with your flies?

This program is exceptionally tidy. Crucially, the *array* lets us group all our flies together, no matter how many we have. And the `for...of` lets us go through *all* the flies, no matter how many there are. 

Try changing the program to add *no* flies to the array. It still works! (It displays no flies and does not crash because the `for...of` doesn't find any flies and so does nothing).

Try changing the program to add *ten* flies to the array. It still works! (The `for...of` carefully selects each fly and calls `moveFly()` and `drawFly()` for it.)

## Summary

So, as you can see, an array along with a `for...of` is a very powerful duo. We can have collections of "things" in our program and act on *all* of them without writing it all out explicitly.

Truly, it is beautiful.

## }