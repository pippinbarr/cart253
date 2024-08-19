# 🎁 Variables {

✨ Variables are the lifeblood of *information* in our program and, most important of all: they can *change*! And if they can change, then our program is alive! ✨

## Learning objectives

- Understanding and using basic number variables in a program
- Using JavaScript Objects to better organize our data
- Using variables to create *life itself*

## Template

- [template-p5-project.zip](../../templates/template-p5-project.zip)

## Modules

- *Introducing variables*
    - Download the [template project](../../templates/template-p5-project.zip)
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071108&node=5700532&a=197018688)
    - Read the [text notes](./introducing-variables.md)
- *Creating variables*
    - Download the [template project](../../templates/template-p5-project.zip)
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071106&node=5700523&a=25446998)
    - Read the [text notes](./creating-variables.md)
- *Introducing JavaScript Objects*
    - Download the [Self-Esteem Project](./examples/self-esteem.zip)
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071107&node=5700524&a=96297916)
    - Read the [text notes](./introducing-javascript-objects.md)
- *Changing variables*
    - Download the [UFO on a Dark Night Project](./examples/ufo-on-a-dark-night.zip)
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071104&node=5700521&a=117175823)
    - Read the [text notes](./changing-variables.md)
- *Constraining variables*
    - Download the [Constrain that Ego! Project](./examples/constrain-that-ego.zip)
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071105&node=5700522&a=96927948)
    - Read the [text notes](./constraining-variables.md)
- *Variables in Practice: Movement*
    - Download the [template project](../../templates/template-p5-project.zip)
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071109&node=5700533&a=152878892)
    - Read the [text notes](./movement-variables.md)
- *Debugging variables*
    - Download the [Debugging Variables Project](../../debugging/debugging-variables.zip)
    - [Watch the video]()
    - Read the [Debugging Guide](../../guides/debugging-guide.md)

## Challenges

- **Try** the [variables challenges](./variables-challenges.md) (we will review them in class)

## Examples

- [PaintShop Amateur](https://editor.p5js.org/pippinbarr/sketches/qbE1XVdDg)
- [My First Cursor](https://editor.p5js.org/pippinbarr/sketches/hqyQVfOQz)
- [Moving a Stone](https://editor.p5js.org/pippinbarr/sketches/wF0Pn3Sce)
- [Random Artist](https://editor.p5js.org/pippinbarr/sketches/Jmy-sBtTS)

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