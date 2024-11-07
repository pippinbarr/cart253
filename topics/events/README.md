[Home](../../) / [🗓 Schedule](../../schedule) / [🛠 Examples](../../examples/) / [💫 Guides](../../guides/) / [💎 Resources](../../resources.md)

# ⏱ Events {

✨ Events allow our programs to directly *react* to what a user does. This is at the heart of interactivity and thus one of the most powerful ways our programs can be engaging! ✨

## Learning objectives

- Getting comfortable with how time flows in a program
- Building mastery of different types of events for user input or timing

## Template

- [template-p5-project.zip](../../templates/template-p5-project.zip)

## Modules

- *Time and JavaScript and p5*
    - Download the [template project](../../templates/template-p5-project.zip)
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071121&node=5700565&a=197642688)
    - Read the [Time and JavaScript and p5 notes](./time-and-javascript-and-p5.md)
- *Introducing events*
    - Download the [template project](../../templates/template-p5-project.zip)
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071117&node=5700550&a=11861735)
    - Read the [Introducing events notes](./introducing-events.md)
- *Mouse events*
    - Download the [Mouse Events Project](./examples/mouse-events.zip)
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071119&node=5700554&a=114735432)
    - Read the [Mouse events notes](./mouse-events.md)
- *Keyboard events*
    - Download the [Keyboard Events Project](./examples/keyboard-events.zip)
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071118&node=5700552&a=161007432)
    - Read the [Keyboard events notes](./keyboard-events.md)
- *Time events*
    - Download the [Traffic Light Project](./examples/traffic-light.zip)
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071123&node=5700567&a=211128434)
    - Read the [Time events notes](./time-events.md)
- *Plain JavaScript events*
    - Download the [template project](../../templates/template-p5-project.zip)
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071120&node=5700557&a=109886092)
    - Read the [Plain JavaScript events notes](./plain-javascript-events.md)
- *Debugging events*
    - Download the [Debugging Events Project](../../debugging/debugging-events.zip)
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1075227&node=5841571&a=29567587)
    - Read the [Debugging Guide](../../guides/debugging-guide.md)

## Extra! Extra!

- *Sounds*
    - Read the [Loading and playing sounds in p5 notes](../extras/sounds.md)
    - 📖 You can also read the reference page for [`loadSound()`](https://p5js.org/reference/p5.sound/loadSound/) to get an overview 📖

## Examples

- [Better Off Line](https://editor.p5js.org/pippinbarr/sketches/J3Zms443G)
- [Sound Effect Button](https://editor.p5js.org/pippinbarr/sketches/UmfzbWYRt)
- [Tile Based Movement](https://editor.p5js.org/pippinbarr/sketches/fD7Ha1Yva)
- [Coin Collector](https://editor.p5js.org/pippinbarr/sketches/qOdVBY1nQ)

## Challenges

- Try the [events challenges](./challenges/events-challenges.md) (We will review them in class)

## 🔥 Hot tip: Trigonometry

Trigonometry functions like sine, cosine, and tangent are neat ways to make your programs *oscillate*. That's because they return oscillating values based on the angle you put in:

```javascript
// Data about our shape that will "breathe"
let breathe = {
  x: 200,
  y: 200,
  size: 10,
  minSize: 10,
  maxSize: 200,
  angle: 0
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  // Calculate the breathe shape's size based on a sine wave
  // Note how we use map() to convert from sine's range of -1..1
  // to the breathing shape's size range
  const sine = sin(breathe.angle);
  breathe.size = map(sine, -1, 1, breathe.minSize, breathe.maxSize);
  
  // Draw the breathing shape
  push();
  noStroke();
  fill("#ff0000");
  ellipse(breathe.x, breathe.y, breathe.size);
  pop();
  
  // Increase the angle to make sine return a different result
  // Angles are in RADIANS by default
  // But you can use degreeMode(DEGREES) to switch if you want
  breathe.angle += 0.01; 
}
```

```javascript
// Data about our shape that will undulate
let undulator = {
  x: 0,
  y: 200,
  minY: 0,
  maxY: 400,
  size: 25,
  angle: 0
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  // Calculate the undulating shape's y offset based on a cosine wave
  // Note how we use map() to convert from cosine's range of -1..1
  // to the undulating shape's movement range
  const cosine = cos(undulator.angle);
  undulator.y = map(cosine, -1, 1, undulator.minY, undulator.maxY);
  
  // Draw the undulating shape
  push();
  noStroke();
  fill("#ff0000");
  ellipse(undulator.x, undulator.y, undulator.size);
  pop();
  
  // Increase the angle to make cosine return a different result
  // Angles are in RADIANS by default
  // But you can use degreeMode(DEGREES) to switch if you want
  undulator.angle += 0.1; 
  
  // Move the undulator on x so we see it
  undulator.x += 1;
}
```

## }