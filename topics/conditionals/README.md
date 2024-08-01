# Conditionals {

✨ Conditionals are the key way we can make a program do *different things* based on the current situation! ✨

## Learning objectives

- Understanding what "conditions" are in a program and how to write them out with `if`-statements
- Increasing our expressive power with logic operators

## Modules

- *Introducing conditionals*
    - Watch the video on Moodle
    - Read the [Introducing conditionals notes](./introducing-conditionals.md)
- *Conditionals in practice: Part 1: Creature Loves Mouse*
    - Watch the video on Moodle
    - Read the [Conditionals in practice: Part 1: Creature loves mouse notes](./conditionals-in-practice-part-1.md)
- *Booleans*
    - Watch the video on Moodle
    - Read the [Booleans notes](./booleans.md)
- *Introducing logic operators*
    - Watch the video on Moodle
    - Read the [Introducing logic operators notes](./introducing-logic-operators.md)
- *Conditionals in practice: Part 1: Massage*
    - Watch the video on Moodle
    - Read the [Conditionals in practice: Part 2: Massage notes](./conditionals-in-practice-part-2.md)
- *Conditionals in practice: Part 3: Death*
    - Watch the video on Moodle
    - Read the [Conditionals in practice: Part 3: Death notes](./conditionals-in-practice-part-3.md)
- *Debugging conditionals*
    - Download the [Debugging Conditionals Project](MISSING_LINK)
    - Watch the video on Moodle
    - Read the [Debugging Guide](../../guides/debugging-guide.md)
- **Extra!** *Images*
    - Read the [Loading and displaying images notes](../extras/images.md)
    - You can also read the reference pages for [`loadImage()`](https://p5js.org/reference/p5/loadImage/) and [`image()`](https://p5js.org/reference/p5/image/)

## Challenges

- Try the [conditionals challenges](MISSING_LINK) (We will review them in class)

## Examples

- ...

## 🔥 Hot tip: Text

We can store *text* in variables (or object properties) by using quotation marks:

```javascript
let myName = "Gladiolus";
```

We can *display* text by using p5's `text()` function along with some text-styling functions:

```javascript
let myName = "Gladiolus";

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    
    push();
    // Set text colour with fill
    fill(255, 0, 0);
    // Set text size with textSize()
    textSize(64);
    // Set text align with textAlign()
    textAlign(CENTER, CENTER);
    // Set text styling with textStyle()
    textStyle(BOLD);
    // We can display text by just putting it directly in quotes
    text("Hi, my name is:", 200, 180);
    // We can display text inside a variable
    text(myName, 200, 220)
    pop();
}
```

Read the [Typography](https://p5js.org/reference/#Typography) documentation in the reference for more information.

## }