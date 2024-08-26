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

Example:

```md
# Aquarium Simulation
Pippin Barr

## [View the project online](URL_TO_THE_PROJECT)

## Description
This is an aquarium simulation in which fish of different kinds swim around on the canvas. The user can interact with the fish by clicking on them to make them grow (as if feeding them). Over time the fish shrink, so the you will need to keep busy clicking to keep them alive!

## Credits
This project uses [p5.js](https://p5js.org).

## Attribution
The fish images were sourced from the [Creative Commons image "Georgia Aquarium Fish"](https://search.creativecommons.org/photos/96f6f770-eac1-488c-8abb-16bee7bcc874) by Mike Johnston which is licensed with CC BY 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by/2.0/.
```

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

## Version Control

Part of your programming style for this class will be based on your approach to version control. This essentially boils down to:

- Commit (and push) regularly
- Commit any time you do a significant and/or distinct block of work (ideally that runs)
- Write clear commit messages that explain what you did

    
## }