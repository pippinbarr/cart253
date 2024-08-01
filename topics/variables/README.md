# Variables {

✨ Variables are the lifeblood of *information* in our program and, most important of all: they can *change*! And if they can change, then our program is alive! ✨

## Learning objectives

- Understanding and using basic number variables in a program
- Using JavaScript Objects to better organize our data
- Using variables to create *life itself*

## Modules

- *Introducing variables*
    - Watch the video on Moodle
    - Read the [text notes](./introducing-variables.md)
- *Creating variables*
    - Watch the video on Moodle
    - Read the [text notes](./creating-variables.md)
- *Introducing JavaScript Objects*
    - Watch the video on Moodle
    - Read the [text notes](./introducing-javascript-objects.md)
- *Changing variables*
    - Watch the video on Moodle
    - Read the [text notes](./changing-variables.md)
- *Constraining variables*
    - Watch the video on Moodle
    - Read the [text notes](./constraining-variables.md)
- *Variables in Practice: Movement*
    - Watch the video on Moodle
    - Read the [text notes](./movement-variables.md)
- *Debugging variables*
    - Download the [Debugging Variables Project](MISSING_LINK)
    - Watch the video on Moodle
    - Read the [Debugging Guide](../../guides/debugging-guide.md)

## Challenges

- **Try** the [variables challenges](./variables-challenges.md) (we will review them in class)

## 🔥 Hot tip: `random()`

There aren't many things more fun than *random numbers*. p5 has a function we can call to get a random number any time we want, and it's called `random()`. Importantly this function *returns* (gives back) a *number* that we can use in our program.

With no arguments we get a random number between `0` and `1`, or we can give it two arguments to get a random number between those numbers. Usually we'll then *store* the returned number in a variable or use it directly somewhere else in our program.

A random greyscale fill:
```javascript
let randomFill = random(0, 255);
fill(randomFill);
```

A random colour fill:
```javascript
let r = random(0, 255);
let g = random(0, 255);
let b = random(0, 255);
fill(r, g, b);
```

A random position:
```javascript
let x = random(0, width); // x is anywhere horizontally
let y = random(0, height); // y is anywhere vertically
ellipse(x, y, 100);
```

A bug (random movement):
```javascript
let bug = {
    x: 0,
    y: 200,
    size: 10
};

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    // Add a random number between 1 and 5 to the big's position
    // to make it move jerkily
    bug.x += random(1, 5);
    ellipse(bug.x, bug.y, bug.size);
}
```

## }