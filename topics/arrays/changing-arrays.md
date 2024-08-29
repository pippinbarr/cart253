# Changing arrays {
    
Inspire

## In this module

- Why change arrays?
- Flies
- Pushing
- Splicing

## Why change arrays?

So far we've largely thought about arrays that we put data into at the beginning of the program and then don't really change.

But often we want to be able to *add elements to the array* while our program is running. What if we have an array of flies and we want to *add* flies over time?

Similarly, we may want to *remove elements from the array*. What if the flies die and we don't want them in the array anymore?

## Flies

Let's get our flies program back and then make some changes. For the purposes of this module, we'll leave the `flies` array empty when the program runs. No flies!

```javascript
let flies = [];

function setup() {
    createCanvas(300, 300);
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

Okay, here we go.

## Pushing

There are a bunch of ways to add something to an array, but the simplest is to use the array function `.push()`. This will add the new element to the *end* of the array:

```javascript
let array = [1, 2, 3, 4, 5];
array.push(6); // Now it's [1, 2, 3, 4, 5, 6]
```

### Pushing flies

How about whenever we press a key, we *add* a new fly! We can do that in a `keyPressed()`. We'll create a new fly with `createFly()` and then *push* it into our existing array!

```javascript
function keyPressed() {
    let fly = createFly();
    flies.push(fly);
}
```

Now if we press a key, a new fly appears!

Press keys as much as you want! Each time a new fly is created and the *pushed* onto the end of the array.

## Splicing

What about *removing* a specific element from an array? We can do this with the array function `.splice()`. You need to provide 

- the *index* to remove an element at, and 
- the *number* of elements to remove.

```javascript
let array = [1, 2, 3, 4, 5];
// Let's remove one element starting at index 2
array.splice(2, 1); 
// Now the array is [1, 2, 4, 5]
```

So, if we know the *index* of an element we can simply remove it from the array!

### Splicing flies

Let's change our program so we can *remove* flies with a `.splice()` if we click on them. For this, we'll *also* want to use another array function called `.indexOf()` that can tell us the index of a specific element in an array.

```javascript
function mousePressed() {
    // We have to check *every* fly in the array to see if it was clicked
    for (let fly of flies) {
        // Get the distance between the click and the fly
        let d = dist(mouseX, mouseY, fly.x, fly.y);
        // Check if the click is inside the fly
        if (d < fly.size/2) {
            // If so, get the *index* of this fly in the array
            let index = flies.indexOf(fly);
            // And now use splice to *remove* the fly at that index
            // Remember we provide the index and the *number of elements*
            // to remove. In this case just the one.
            flies.splice(index, 1);
        }
    }
}
```

And there we have it. When we click on a fly it disappears! It's no longer in the array.

## Summary

We now have the rather wonderful power to *change* our arrays while the program runs. Particularly in the case where we're using arrays to store a group of objects in our program and we might need to create new ones or delete old ones, this is pretty great.
    
## }
