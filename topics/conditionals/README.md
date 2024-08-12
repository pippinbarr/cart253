# Conditionals {

✨ Conditionals are the key way we can make a program do *different things* based on the current situation! ✨

## Learning objectives

- Understanding what "conditions" are in a program and how to write them out with `if`-statements
- Increasing our expressive power with logic operators

## Template

- [template-p5-project.zip](../../templates/template-p5-project.zip)

## Modules

- *Introducing conditionals*
    - Watch the video on Moodle
    - Read the [Introducing conditionals notes](./introducing-conditionals.md)
- *Conditionals in practice 1: Creature loves mouse*
    - Download the [Creature Loves Mouse Project](./examples/creature-loves-mouse.zip)
    - Watch the video on Moodle
    - Read the [Conditionals in practice 1: Creature loves mouse notes](./conditionals-in-practice-part-1.md)
- *Booleans*
    - Download the [Lightswitch](./examples/lightswitch.zip) and [Growhole](./examples/growhole.zip) projects
    - Watch the video on Moodle
    - Read the [Booleans notes](./booleans.md)
- *Introducing logic operators*
    - Watch the video on Moodle
    - Read the [Introducing logic operators notes](./introducing-logic-operators.md)
- *Conditionals in practice 2: Creature loves massage*
    - Download the [Creature Loves Massage Project](./examples/creature-loves-massage.zip)
    - Watch the video on Moodle
    - Read the [Conditionals in practice 2: Creature loves massage notes](./conditionals-in-practice-part-2.md)
- *Conditionals in practice 3: Death by boredom*
    - Download the [Death By Boredom Project](./examples/death-by-boredom.zip)
    - Watch the video on Moodle
    - Read the [Conditionals in practice 3: Death by boredom notes](./conditionals-in-practice-part-3.md)
- *Debugging conditionals*
    - Download the [Debugging Conditionals Project](../../debugging/debugging-conditionals.zip)
    - Watch the video on Moodle
    - Read the [Debugging Guide](../../guides/debugging-guide.md)

## Extra! Extra!

- *Images*
    - Read the [Loading and displaying images notes](../extras/images.md)
    - 📖 You can also read the documentation for [`loadImage()`](https://p5js.org/reference/p5/loadImage/) and [`image()`](https://p5js.org/reference/p5/image/) 📖

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