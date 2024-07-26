# Introducing `for`-loops {
    
Inspire!

## In this module

- Repetition
- The `for`-loop
- `while` or `for`?

## Repetition

Again: one of the big motivations for new ideas in programming is about *avoid repetition* in our programming. Computers are good at repetition so we should really just let *them* handle it.

Here's out program for drawing a series of circles on the canvas:

```javascript
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    
    // Set up the position and diameter of the first circle
    let x = width/2;
    let y = 0;
    let diameter = 50;
    
    // Draw it
    ellipse(x, y, diameter);
    // Move y down
    y += diameter;
    // Draw the next one
    ellipse(x, y, diameter);
    // And so on
    y += diameter;
    ellipse(x, y, diameter);
    y += diameter;
    ellipse(x, y, diameter);
    y += diameter;
    ellipse(x, y, diameter);
    y += diameter;
    ellipse(x, y, diameter);
    y += diameter;
    ellipse(x, y, diameter);
    y += diameter;
    ellipse(x, y, diameter);
    y += diameter;
    ellipse(x, y, diameter);
}
```

Again, this *works* but when we look at the code we should be very *suspicious* of how much repetition we've got going on there! We have the same two lines over and over again. We can do better.
    
## The `for`-loop

We've already solved this problem with a `while`-loop, but we can think about the problem in a different way.

What if we frame the problem as needing to draw exactly *nine* circles, vertically down the canvas.

What we need is some code that will *repeat* until all nine circles are drawn. 
    
And luckily we can express *exactly* this idea with a `for`-loop:

```javascript
for (let i = 0; i < 9; i++) {
    // Repeat this 9 times
}
```

As you can see, a `for`-loop is a bit more complex-looking than a `while` loop! It's designed *specifically for counting*, performing instructions a *set number of times*.

Here we see:

- `for`: Tells JavaScript we're writing a `for`-loop
- `(...)`: Parentheses containing the information for how this loop will work
- `let i = 0`: This is the *starting point* of our for loop. We will start out with a variable called `i` that is set to `0`
- `;`: We separate the different parts of the loop's information with semicolons
- `i < 9`: This is the *condition* our loop will check each time, it will keep going until `i` is *not* less than `9`
- `;`: Another semicolon
- `i++`: This is the increment for our loop. *After* each time through the loop, it will run this instruction, which makes `i` go up by `1`. 
- `{ ... }`: The instructions in the curly brackets will run each time the *condition* is `true`

So essentially:

1. `i` starts at `0`
2. We check if `i < 9`, and it is
3. So we run the instructions inside the curly brackets
4. Then we do `i++` to increase `i` to `1`
5. Then we check if `i < 9`, and it is
6. So we run the instructions inside the curly brackets
7. Then we do `i++` to increase `i` to `2`
8. ... and so on. Until `i` is `9` and the loop stops.

Thus, this loop will run *nine times*.

Importantly, too, we can use the current value of `i` (which will be `0`, `1`, `2`, `3`, all the way up to `8`) as a way to choose where to draw our circles.

### Drawing those circles

Now we can use the loop to draw our nine circles (note a couple of other changes):

```javascript
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    
    // Set up the position and diameter of the first circle
    let x = width/2;
    // NOTE: We now have a "starting Y" where the first
    // circle will be drawn
    let startY = 0;
    let diameter = 50;
    
    // Count with i from 0 up to 8
    for (let i = 0; i < 9; i++) {
        // The y position of each circle should be the starting y
        // PLUS i times the diameter
        // So that when i is 0, y will be startY
        // When i is 1, y will be startY + diameter
        // When i is 2, y will be startY + 2*diameter
        // etc.
        // Causing the circles to move down the canvas
        let y = startY + i*diameter;
        ellipse(x, y, diameter);
    }
}
```

Same outcome! Way less code! Try changing `diameter` to 10. You *still get nine circles*, they're just smaller. Try changing the `9` to `3`. Now you get *three circles*. Try changing `startY` to `100`, now your circles start at `100`. Lots of flexibility here!

## `while` or `for`?

You can actually write any `for`-loop as a `while`-loop:

```javascript
for (let i = 0; i < 9; i++) {
    // Repeat this 9 times
}
```

```javascript
let i = 0;
while (i < 9) {
    // Repeat this 9 times
    i++;
}
```

Generally speaking, though, if you're *specifically looking to count*, then most programmers will use a `for`-loop.

## Summary

...
    
## }