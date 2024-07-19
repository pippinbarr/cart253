# Variables

**All videos are also available on YouTube with ads or on the Moodle without ads.**

- **Watch** *Introducing variables* ([YouTube](MISSING_LINK), YuJa/Moodle) and **read** the [notes](./introducing-variables.md)
- **Watch** *Creating variables* ([YouTube](MISSING_LINK), YuJa/Moodle) and **read** the [notes](./creating-variables.md)
- **Watch** *Introducing JavaScript Objects* ([YouTube](MISSING_LINK), YuJa/Moodle) and **read** the [notes](./introducing-javascript-objects.md)
- **Watch** *Changing variables* ([YouTube](MISSING_LINK), YuJa/Moodle) and **read** the [notes](./changing-variables.md)
- **Watch** *Thinking like a computer with variables* ([YouTube](MISSING_LINK), YuJa/Moodle) and **read** the [notes](./thinking-like-a-computer-with-variables.md)
- **Watch** *Constraining variables* ([YouTube](MISSING_LINK), YuJa/Moodle) and **read** the [notes](./constraining-variables.md)
- **Watch** *Movement variables* ([YouTube](MISSING_LINK), YuJa/Moodle) and **read** the [notes](./movement-variables.md)
- **Download** the [variables debugging project](MISSING_LINK), **watch** *Debugging variables* ([YouTube](MISSING_LINK), YuJa/Moodle), and **read** the [debugging guide](../../guides/debugging-guide.md)
- **Try** the [variables challenges](MISSING_LINK)

## 🔥 Hot tip

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