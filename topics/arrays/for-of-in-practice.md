# `for...of` in practice {

Inspire inspire

## In this module

- Preparation
- More flies
- More flies with your flies?

## Preparation

1. Download the [Flies flies Project](./examples/flies-flies.zip)
2. Unzip it
3. Move the folder into your repository
4. Open the folder in VS Code
5. Commit and push the changes

## More flies

So we've seen that `for...of` let us draw a set of flies to the canvas pretty easily, but let's lean into it this further to create a more dynamic program.

### Buzzy flies

Let's add another property to the flies that will let them move, we'll call it `buziness` and we'll use it to move them around randomly (in a fly-like way).

```javascript
let flies = [
    {
        x: 100,
        y: 125,
        size: 10,
        // NEW
        buzziness: 4
    },
    {
        x: 160,
        y: 170,
        size: 14,
        // NEW
        buzziness: 2
    },
    {
        x: 180,
        y: 50,
        size: 5,
        // NEW
        buzziness: 3
    }
];
```

### Draw the flies

We've already done this, but let's improve our draw loop with a function:

```javascript
function draw() {
    background("#87ceeb");
    
    // Go through all the flies
    for (let fly of flies) {
        drawFly(fly);
    }
}

/**
 * Draws the fly to canvas
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

We can apply the exact same idea to move the flies using their `buzziness` by writing a `moveFly()` function that will take care of that:

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

The array, specifically, is letting us act on *the whole group of flies* each with each key idea (movement, display) that we want to include. We can think at the level of "flies" instead of each individual array element.

## More flies with your flies?

This program is exceptionally tidy. Crucially, the *array* lets us group all our flies together, no matter how many we have. And the `for...of` lets us go through *all* the flies, no matter how many there are. 

Once again, try adding a new fly or two to the array. It joins its buzzing brethren seamlessly!

## Summary

So, as you can see, an array along with a `for...of` is a very powerful duo. We can have collections of "things" in our program and act on *all* of them without writing it all out explicitly.

Truly, it is beautiful.

## }