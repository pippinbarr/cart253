[Home](../../) / [🗓 Schedule](../../schedule) / [🛠 Examples](../../examples/) / [💫 Guides](../../guides/) / [💎 Resources](../../resources.md)

# ☎️ Functions {

✨ Functions are at the heart of how we *structure* our programs. They allow us to write programs that are more readable and less repetitive. They are the unsung heroes of great code! ✨

## Learning objectives

- Understanding how values are passed into functions
- Understanding how values are returned from functions
- Refactoring repetitive code using functions

## Template

- [template-p5-project.zip](../../templates/template-p5-project.zip)

## Modules

- *Functions with parameters* 
    - Watch the video on Moodle
    - Read the [Functions with parameters notes](./functions-with-parameters.md)
- *Functions with return values* 
    - Watch the video on Moodle
    - Read the [Functions with return values notes](./functions-with-return-values.md)
- *Functions and JavaScript Objects* 
    - Watch the video on Moodle
    - Read the [Functions and JavaScript Objects notes](./functions-and-javascript-objects.md)
- *Functions in practice: Refactoring*
    - Download the [Refectoring Project](./examples/refactoring.zip)
    - Watch the video on Moodle
- *Debugging functions*
    - Download the [Debugging functions project](./MISSING_LINK)
    - Watch the video on Moodle
    
## Examples

- [Overlapping Circles (Functions)](https://editor.p5js.org/pippinbarr/sketches/Yc4eMdFyH)
- [Overlapping Rectangles (Functions)](https://editor.p5js.org/pippinbarr/sketches/dJyJ_NV4L)
- [Moving Stones (Functions)](https://editor.p5js.org/pippinbarr/sketches/IMjU5KE_N)

## Challenges

- Try the [Functions challenges](MISSING_LINK) (We will review them in class)

## 🔥 Hot tip: Parameter objects

Here's a way to write functions when you have a lot of parameters: *use an object* as the only parameter, that way you can *name* the different arguments you're sending in as properties:

```javascript
function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);
    
    // Create an object with the settings/configuration
    // for our rectangle. Note how you can *tell what each number is for*
    // because it is labelled by the object property name
    // You're much less likely to make a mistake!
    let config = {
        x: 250,
        y: 250,
        w: 100,
        h: 100,
        rectMode: CENTER,
        fillColour: "#ff0000",
        strokeColour: "#ffffff",
        strokeWeight: 10
    };
    drawRectangle(config);
}

/**
 * Draws a rectangle using the provided options
 * x, y, w, h, rectMode, fillColour, strokeColour, strokeWeight
 * (It's a good idea to list the options so that you can remember
 * what they are easily.)
 */
function drawRectangle(options) {
    // Applies all the options specified in the object
    push();
    rectMode(options.rectMode);
    stroke(options.strokeColour);
    fill(options.fillColour);
    strokeWeight(options.strokeWeight);
    rect(options.x, options.y, options.w, options.h);
    pop();
}
```

There's one extra step you could take here using something called *destructuring*, but you can ask about that if you're interested! It's fancy!

## }