[Home](../../) / [🗓 Schedule](../../schedule) / [🛠 Examples](../../examples/) / [💫 Guides](../../guides/) / [💎 Resources](../../resources.md)

# 🤔 Conditionals {

✨ Conditionals are the key way we can make a program do *different things* based on the current situation! ✨

## Learning objectives

- Understanding what "conditions" are in a program and how to write them out with `if`-statements
- Increasing our expressive power with logic operators

## Template

- [template-p5-project.zip](../../templates/template-p5-project.zip)

## Modules

- *Introducing conditionals*
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071114&node=5700547&a=136607647)
    - Read the [Introducing conditionals notes](./introducing-conditionals.md)
- *Conditionals in practice 1: Creature loves mouse*
    - Download the [Creature Loves Mouse Project](./examples/creature-loves-mouse.zip)
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071111&node=5700535&a=137851353)
    - Read the [Conditionals in practice 1: Creature loves mouse notes](./conditionals-in-practice-part-1.md)
- *Booleans*
    - Download the [Lightswitch](./examples/lightswitch.zip) and [Growhole](./examples/growhole.zip) projects
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071110&node=5700534&a=7980543)
    - Read the [Booleans notes](./booleans.md)
- *Introducing logic operators*
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071115&node=5700548&a=89057691)
    - Read the [Introducing logic operators notes](./introducing-logic-operators.md)
- *Conditionals in practice 2: Creature loves massage*
    - Download the [Creature Loves Massage Project](./examples/creature-loves-massage.zip)
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071112&node=5700536&a=77952213)
    - Read the [Conditionals in practice 2: Creature loves massage notes](./conditionals-in-practice-part-2.md)
- *Conditionals in practice 3: Death by boredom*
    - Download the [Death By Boredom Project](./examples/death-by-boredom.zip)
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071113&node=5700546&a=198193017)
    - Read the [Conditionals in practice 3: Death by boredom notes](./conditionals-in-practice-part-3.md)
- *Debugging conditionals*
    - Download the [Debugging Conditionals Project](../../debugging/debugging-conditionals.zip)
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1075226&node=5841570&a=189628872)
    - Read the [Debugging Guide](../../guides/debugging-guide.md)

## Extra! Extra!

- *Images*
    - Read the [Loading and displaying images notes](../extras/images.md)
    - 📖 You can also read the documentation for [`loadImage()`](https://p5js.org/reference/p5/loadImage/) and [`image()`](https://p5js.org/reference/p5/image/) 📖

## Challenges

- Try the [conditionals challenges](./challenges/conditionals-challenges.md) (We will review them in class)

## Examples

- [Overlapping Circles](https://editor.p5js.org/pippinbarr/sketches/NLnxtLMat)
- [Overlapping Rectangles](https://editor.p5js.org/pippinbarr/sketches/5hnVN-_C0)
- [`random()` and probability](https://editor.p5js.org/pippinbarr/sketches/8NkxcrJsi) (Loot drops!)
- [Screen Wrap](https://editor.p5js.org/pippinbarr/sketches/exJrLtvvU)
- [Basic States](https://editor.p5js.org/pippinbarr/sketches/cpmo2ac1V)

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

📖 Read the [Typography](https://p5js.org/reference/#Typography) documentation in the reference for more information. 📖

## }