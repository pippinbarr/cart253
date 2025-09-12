# 🎀 Style guide {
    
## Contents

- Formatting
- `README.md`
- Commenting
- Naming
- Version Control
    
## Formatting

Put briefly, just let VS Code *format your code for you*. If you haven't already, make sure to enable these two options in the VS Code settings:

- Format on paste
- Format on save

## `README.md`

Any *submitted* project must include a file titled `README.md` in the main project folder (it's there by default in the template). This document should explain your project and should provide any information someone interested in it might need to understand the implementation and also how to interact with it. It should clearly state the title of the project as well as your authorship.

The `README.md` is also another good place for attribution if you are using code and/or media from other sources that you need to credit.

Use the [frogfrogfrog repository](https://github.com/pippinbarr/frogfrogfrog) as an example of how to proceed when in doubt.

## Commenting

Commenting is absolutely crucial to a legible program. In this course we require three kinds of comments:

### Top-level comment

All programs should include a comment at the top of the main script that introduces the program, including its title, author, how it works, and any credits to be given (for help, code use, assets, libraries, etc.).

Example:

```javascript
/**
 * Frogfrogfrog
 * Pippin Barr
 * 
 * A game where the player controls a frog and tries to eat flies that
 * pass by launching the frog's tongue.
 * 
 * Controls: 
 * - mouse to move the frog
 * - click to launch the tongue
 * 
 * Uses:
 * p5.js
 * https://p5js.org
 */
```

Use the [frogfrogfrog repository](https://github.com/pippinbarr/frogfrogfrog) as an example of how to proceed when in doubt.

### Function-level comments

All functions should include a comment before them that explains what the function does.

Example:

```javascript
/**
 * Draws the frog
 */
function drawFrog() {
    push();
    noStroke();
    fill("#00ff00");
    ellipse(frog.x, frog.y, frog.size);
    pop();
}
```

Use the [frogfrogfrog repository](https://github.com/pippinbarr/frogfrogfrog) as an example of how to proceed when in doubt.

### Line-level comments

Where appropriate, there should be comments that explain what one or more lines of instructions in the program are for, especially when there is some level of complexity.

Example:

```javascript
function setup() {
    // Create the canvas
    createCanvas(640, 480);
    
    // Move the fly to a random position on the screen
    fly.x = random(0, width);
    fly.y = random(0, height);
    
    // Give the fly a random velocity to start with
    fly.velocity.x = random(-fly.speed, fly.speed);
    fly.velocity.y = random(-fly.speed, fly.speed);
}
```

Use the [frogfrogfrog repository](https://github.com/pippinbarr/frogfrogfrog) as an example of how to proceed when in doubt.

## Naming

There are three main things we will be naming in this course:

- variables
- object properties
- functions (and their parameters)

They all follow the same basic rules:

1. The name should tell you what the variable/property/function is *for*
2. The name should use *camel case* (lowercase first letter, then capitalize each word, e.g. `camelCase`)
3. The name cannot start with a number
4. The name cannot include symbols like `!` or `?` etc.

### Variables

No:

```javascript
let foo = 640; // Unclear name (what is foo?)
let EgoSize = 640; // Not camel case
let ego_size = 640; // Not camel case
let EGOSIZE = 640; // Not camel case
let 0egosize0 = 640; // Starts with a number
let egoSize! = 640; // Includes an illegal symbol
```

Yes:

```javascript
let egoSize = 640;
let frogJumpHeight = 100;
let planetSpeed = 10;
```

### Object properties

No:

```javascript
let frog = {
    X: 100, // Not camel case
    Y: 200, // Not camel case
    glibber: 20, // Unclear name
    Speed: 80, // Not camel case
    jump_height: 100 // Not camel case   
};
```

Yes:

```javascript
let frog = {
    x: 100,
    y: 200,
    size: 20,
    speed: 80,
    jumpHeight: 100
};
```

### Functions

No:

```javascript
function DoThatThang!() {
    
}
```

- Not camel-case
- Unclear
- Includes a symbol

Yes:

```javascript
function drawFrog() {
    
}
```

Use the [frogfrogfrog repository](https://github.com/pippinbarr/frogfrogfrog) as an example of how to proceed when in doubt.

## Version Control

Part of your programming style for this class will be based on your approach to version control. This essentially boils down to:

- Commit (and push) regularly
- Commit any time you do a significant and/or distinct block of work (ideally that runs)
- Write clear commit messages that explain what you did
- For the purposes of learning, ideally *reflect* on what your commit does in the bigger context of your project, not just technically but in terms of design and philosophy
    
Use the [frogfrogfrog repository](https://github.com/pippinbarr/frogfrogfrog) as an example of how to proceed when in doubt.
## }