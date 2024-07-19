# Conditionals

Basic motivating idea.

## This week

- ...

**All videos are also available on YouTube with ads or on the Moodle without ads.**

- **Watch** *Introducing conditionals* ([YouTube](MISSING_LINK), YuJa/Moodle) and **read** the [notes](./introducing-conditionals.md)
- **Watch** *Conditionals in practice* ([YouTube](MISSING_LINK), YuJa/Moodle) and **read** the [notes](./conditionals-in-practice.md)
- **Watch** *Booleans* ([YouTube](MISSING_LINK), YuJa/Moodle) and **read** the [notes](./booleans.md)
- **Watch** *Introducing logic operators* ([YouTube](MISSING_LINK), YuJa/Moodle) and **read** the [notes](./introducing-logic-operators.md)
- **Watch** *Logic operators in practice* ([YouTube](MISSING_LINK), YuJa/Moodle) and **read** the [notes](./logic-operators-in-practice.md)
- **Download** the [conditionals debugging project](MISSING_LINK), **watch** *Debugging variables* ([YouTube](MISSING_LINK), YuJa/Moodle), and **read** the [debugging guide](../../guides/debugging-guide.md)

## Extra! Extra! 🖼 Images!

Drawing everything with shapes is pretty great, but you may also want to display images in your program. And you can!

Read about [loading and displaying images in p5](../extras/images.md) to find out how!

## Practice

- **Try** the [conditionals challenges](MISSING_LINK)

## 🔥 Hot tip: Text

We can store *text* in variables by using quotation marks:

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

