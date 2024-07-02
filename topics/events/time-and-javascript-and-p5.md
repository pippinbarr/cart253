# Time and JavaScript and p5 {
   
Description.

## In this module

- JavaScript time
- p5 time

## JavaScript time

The way your program is run in JavaScript is pretty simple: it starts at the *top* and it goes down from there.

So if your whole program looks like this:

```javascript
let x = 10;
let y = 11;
let z = x * y;
```

Then JavaScript will first assign `10` to `x`, then `11` to `y` and then the result of multiplying them (`110`) to `z`, and then it will be done.

Of course it gets more complicated as you define functions and call them, but this remains the most basic rule: top to bottom.

## p5 time

When using p5 we've been able to define a couple of special functions that will be called at specific *times* in the program. Those are especially `setup()` and `draw()`.

JavaScript will still run our program from the top to the bottom first, but after that it will also call our special functions at the right times.

So if our program is:

```javascript
const ball = {
    x: 0,
    y: 200,
    size: 50
};

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    
    ball.x += 1;
    
    push();
    noStroke();
    ellipse(ball.x, ball.y, ball.size);
    pop();
}
```

First JavaScript will start at the top, which means it will

- Assign the various properties to the `ball` object
- Notice the two function definitions of `setup()` and `draw()` but *not call them!*

Then, thanks to p5 magic behind the scenes, JavaScript will

- Call `setup()` immediately (which will create the canvas)
- Call `draw()` right after that (which will draw the ball on the canvas)
- Call `draw()` about 0.033 seconds later to draw the next frame (which will draw the ball on the canvas one pixel further to the right)
- Call `draw()` about 0.033 seconds later to draw the next frame (which will draw the ball on the canvas one pixel further to the right)
- Call `draw()` about 0.033 seconds later to draw the next frame (which will draw the ball on the canvas one pixel further to the right)
- Keep on calling `draw()` every 0.033 seconds until the program stops

So time in p5 for now is *mostly* in `draw()`, which is called about 30 times per second, also known as a the framerate.

## Summary

By default JavaScript literally just runs our program from the top to the bottom. p5 adds in the idea that `setup()` is called once at the start, and that `draw()` is called once every frame.
    
## }