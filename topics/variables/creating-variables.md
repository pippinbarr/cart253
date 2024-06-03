# Creating variables {
    
## In this module

- Life without variables
- Declaring, assigning, and using a variable
- All variables, all the time

## Life without variables

A life without variables is hardly worth living. Let's draw a close-up of a hole in a piece of cheese...

```javascript
function setup() {
    // Create the canvas
    createCanvas(480, 480);
}

function draw() {
    // Cheese colour (yellow)
    background(255, 255, 0);
    
    // Draw a hole in the upper left
    push();
    noStroke();
    fill(0);
    // When we only provide a width argument we get a circle
    // with that diameter
    ellipse(140, 175, 180);
    pop();
}
```

There are a couple of key problems with this kind of program:

- As soon as it gets more complex it will be *harder* and *harder* to understand what the different numbers are *for* (although comments help!)
- Using numbers instead of variables means this program can *never change*

## Declaring, assigning, and using a variable

The solution is to start using variables here. But how? 

Well, if we wanted a variable for the hole's size, we would change the program to this:

```javascript
let holeSize = 180;

function setup() {
    // Create the canvas
    createCanvas(480, 480);
}

function draw() {
    // Cheese colour (yellow)
    background(255, 255, 0);
    
    // Draw a hole in the upper left
    push();
    noStroke();
    fill(0);
    ellipse(140, 175, holeSize);
    pop();
}
```

There are two parts to this. Let's look at them.

### Declaring and assigning a variable

To *create* a variable in our program we do two things:

- We *declare it* (give it a name)
- We *assign it a starting value*

```javascript
let holeSize = 180;
```

- `let` tells JavaScript we are *declaring a variable*: we are going to announce the name of a new variable
- `holeSize` is the *name* of our new variable: it will be use to store the size of the hole in pixels
- `=` tells JavaScript we are going to *assign a value* to the variable: we are going to *store a number in it* in this case
- `180` is the *value* we are telling JavaScript to store in the variable
- `;` is how we end any instruction in JavaScript (and many other languages)

### Using a variable

To *use* our new variable in our program we simply use its *name* where we want to use the *value inside it*:

```javascript
ellipse(140, 175, holeSize);
```

Here we have a standard `ellipse` function call, but we're using our variable as one of its arguments (the one for its diameter) in this case, so that:

- `ellipse` is the *name* of the function we're calling
- `(...)` tells JavaScript to *execute* or *call* the function
- `140` is the x-coordinate to draw the ellipse at
- `175` is the y-coordinate to draw the ellipse at
- `holeSize` is the size to draw the ellipse (and since `holeSize` store the value `180` this means the size will be `180`)

### That's it

That is how variables work! We declare a variable to give a *name* to a *value* and we then *use that name* wherever we want to *use that value*.

## All variables, all the time

Of course we don't want just *one* variable in our cheese-hole drawing program, we ideally want *all* the numbers to be replaced by variables because:

- The program will be more readable (if a little longer)
- The program will be able to change (more on this later)

So we can follow the same process for (almost) all the numbers!

```javascript
// Our cheese colour broken into RGB
let cheeseRed = 255;
let cheeseGreen = 255;
let cheeseBlue = 255;

// Our cheese hole
let holeShade = 0; // Greyscale value for the hole
let holeX = 140; // x-coordinate of the hole
let holeY = 175; // y-coordinate of the hole
let holeSize = 180; // Diameter of the hole

function setup() {
    // Create the canvas
    createCanvas(480, 480);
}

function draw() {
    // Cheese colour (yellow)
    background(cheeseRed, cheeseGreen, cheeseBlue);
    
    // Draw a hole in the upper left
    push();
    noStroke();
    fill(holeShade);
    ellipse(holeX, holeY, holeSize);
    pop();
}
```

Hey presto, we have a program that is

- Easier to read
- Easier to modify (if we want to adjust the hole size, for instance, we know exactly where to look)
- Capable of changing over time! (More on this later)
    
## Summary

    
## }