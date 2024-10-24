# JavaScript Objects as parameters {
   
Functions have a special relationship with JavaScript objects because they can *change* the objects passed into them, often leading to much easier programming.

## In this module

- Preparation
- JavaScript Objects as parameters
- In practice: Buzzy

## Preparation

1. Download the [Buzzy the parameter project](./examples/buzzy-the-parameter.zip)
2. Unzip it
3. Move the folder into your repository
4. Open the folder in VS Code
5. Commit and push the changes

## JavaScript Objects as parameters

A function's parameters can include any kind of value, including *JavaScript Objects*. JavaScript objects have an important quality when passed to functions that we can use, though: if you change them inside the function they *stay changed*.

```javascript
let horsey = {
    name: "Horsey",
    color: "#7d561d",
    legs: 4
};

// Here horsey.legs is 4
cutOffOneLeg(horsey);
// Here horsey.legs is 3!

/**
 * Removes one of the provided horse's legs
 */
function cutOffOneLeg(horse) {
    horse.legs -= 1;
}
```

This might seem totally normal to you, and if so great! But if not, sit with it for a bit: 

1. We passed `horsey` into `cutOffOneLeg()`
2. That means that JavaScript object ended up in the `horse` parameter
3. We then subtracted one from that JavaScript object's `legs` property
4. And that actually acted on the object that is *still in the `horsey` variable*

🧠 If you want to be a brainiac about it, this is because when we pass a JavaScript object into a function's parameters it is "passed by *reference*", whereas something like a number is "passed by *value*". 🧠

### In practice: Buzzy

We can leverage this feature of changing JavaScript objects inside functions to make our programs quite a bit tidier.

Check out the *Buzzy the parameter* project. We have two chunks of code here that could become functions instead: moving and drawing buzzy. Now that we know a function can *change the properties* of an object provided as a parameter, we can confidently write `moveFly()` and `drawFly()` functions that take a fly as a parameter and move and draw it!

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
```

`moveFly()` is able to *change* the properties of the fly we pass to it (the one in `buzzyTheFly` in this program):

1. The `buzzyTheFly` object goes into the `fly` parameter of `moveFly()`
2. The instructions in `moveFly()` *change* the properties of the `fly` passed in (specifically they change its `x` and `y` properties)
3. Because that `fly` is actually `buzzyTheFly`, `buzzyTheFly` gets changed!

```javascript
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

`drawFly()` doesn't change the parameter at all, so it doesnt have that effect, but it *does* use the properties of the provided object (the fly) to do its job (drawing a fly).

---

As is often the case, the program doesn't *do* anything differently, but as we'll see this organizing is going to lead to some *huge* advantages down the line.

## Summary

Like magic, we can write functions that change the JavaScript objects passed in. This can make writing organized programs *much* easier and, as we'll see, is a key part of unlocking programming with *lots* of JavaScript objects at the same time.
    
## }

## Complete Buzzy the Parameter code

```javascript
/**
 * Buzzy the parameter
 * Pippin Barr
 * 
 * A fly that buzzes around on the canvas
 */

"use strict";

// Our fly that will buzz around
let buzzyTheFly = {
    x: 200,
    y: 200,
    size: 30,
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

    // Move buzzy
    moveFly(buzzyTheFly);

    // Draw buzzy
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