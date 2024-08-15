# Keyboard events {
   
Along with the mouse, the keyboard is the other most common way that people tend to interact with their computers. It is a *whole lot of buttons*! Pressing buttons is fun! Let's learn how to make our programs respond to the keyboard using events.

## In this module

- Preparation
- Another ball
- `keyPressed()`
- `keyCode`
- `keyReleased()`
- Special p5 variables
- Other keyboard events

## Preparation

1. Download the [Keyboard Events Project](./examples/keyboard-events.zip)
2. Unzip it
3. Move the folder into your repository
4. Open the folder in VS Code
5. Commit and push the changes

## Another ball

Take a quick look at the starting code for this module.

Let's control the ball's colour with the keyboard.

## `keyPressed()` and `keyReleased()`

As a first attempt, we could do exactly the same thing as before, just change colour of the ball when a key is pressed, and then back to the default when it's released:

```javascript
/**
 * Change the colour of the ball
 */
function keyPressed() {
    ball.fill = ball.fills.red;
}

/**
 * Reset the colour of the ball
 */
function keyReleased() {
    ball.fill = ball.fills.white;
}
```

So, that works and is magical and all that!

But it feels a lot like we should be able to do better because we have *specific buttons*. Right now it doesn't matter *which* key we press!

## `event`

Well, we can use the same trick as before. If we define our `keyPressed()` and `keyReleased()` functions to include an `event` parameter in their parentheses then that `event` variable will information about the key that was pressed or released!

📖 Read the [`keyPressed()`](https://p5js.org/reference/p5/keyPressed/) and [`keyReleased()`](https://p5js.org/reference/p5/keyReleased/) documentation 📖

There are two ways we can see which key was pressed.

- If we look in `event.key` we'll get the actual label of the key, so if we press `c` then `event.key` will contain `"c"`
- If we look in `event.keyCode` we'll get a *number* version of the key from the ASCII key codes, so if we press `c` then `event.keyCode` will contain `67`.

Both of these can work and you can pretty much pick which one you like. Let's try out both.

### `event.key`

This one is maybe more intuitive. Let's replace our `keyPressed()` and `keyReleased()`:

```javascript
/**
 * Handle keypress:
 * - r = make the ball red
 */
function keyPressed(event) {
    if (event.key === "r") {
        ball.fill = ball.fills.red;
    }
}

/**
 * Handle keyreleased:
 * - r = Set the ball back to default
 */
function keyReleased(event) {
    if (event.key === "r") {
        ball.fill = ball.fills.white;
    }
}
```

This is good because now we've got a *specific key* you have to press to make the ball red. It makes the key you press *meaningful*.

And it means we could add another key for another colour, like `b` for "blue"...

```javascript
/**
 * Handle keypress:
 * - r = make the ball red
 * - b = make the ball blue
 */
function keyPressed(event) {
    if (event.key === "r") {
        ball.fill = ball.fills.red;
    }
    else if (event.key === "b") {
        ball.fill = ball.fills.blue;
    }
}

/**
 * Handle keyreleased:
 * - r or b = Set the ball back to default
 */
function keyReleased(event) {
    if (event.key === "r" || event.key === "b") {
        ball.fill = ball.fills.white;
    }
}
```

Powerful stuff!

## `event.keyCode`

One slightly annoying thing about the `event.key` version above is that if you press `R` instead of `r` (like if you have capslock on) then it won't work! Because `"R"` is not the same as `"r"`!

In that situation it *can* be better to use `event.keyCode` because it doesn't care about capitalization.

So we could get the key code for `R` (and `r`) which is `82` and the key code for `B` (and `b`) which is `66` and use those with `event.keyCode`...

```javascript
/**
 * Handle keypress:
 * - R = make the ball red
 * - B = make the ball blue
 */
function keyPressed(event) {
    if (event.keyCode === 82) {
        ball.fill = ball.fills.red;
    }
    else if (event.keyCode === 66) {
        ball.fill = ball.fills.blue;
    }
}

/**
 * Handle keyreleased:
 * - R or B = Set the ball back to default
 */
function keyReleased(event) {
    if (event.keyCode === 82 || event.key === 66) {
        ball.fill = ball.fills.white;
    }
}
```

This is more robust for the user because they don't have to worry about whether they have capslock on. But it's *harder to read* for you, because you probably don't have the entire ASCII key code table memorized. The comments help, but maybe not enough.

Where would you get those keycodes? Well the internet. This is a good option: <https://www.toptal.com/developers/keycode>.

## More data: store key codes in a variable or property

If we think of our program in terms of the *data* or information about the ball we can instead use a variable (or a property) to store the keys that control the ball's colour so we don't have to remember the numbers all.

```javascript
// Our ball
const ball = {
    // Position
    x: 200,
    y: 200,
    // Size
    size: 50,
    // fill
    fill: "#ffffff",
    // fills
    fills: {
        white: "#ffffff",
        red: "#ff0000",
        blue: "#0000ff"
    },
    // Keys that control the ball's colour
    keys: {
        redKey: 82, // R
        blueKey: 66 // B
    }
}

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draws the ball
 */
function draw() {
    background(0);
  
    // Draw the ball
    push();
    noStroke();
    fill(ball.fill);
    ellipse(ball.x, ball.y, ball.size);
    pop();
}

/**
 * Handle keypress:
 * - R = make the ball red
 * - B = make the ball blue
 */
function keyPressed(event) {
    if (event.keyCode === ball.keys.redKey) {
        ball.fill = ball.fills.red;
    }
    else if (event.keyCode === ball.keys.blueKey) {
        ball.fill = ball.fills.blue;
    }
}

/**
 * Handle keyreleased:
 * - R or B = Set the ball back to default
 */
function keyReleased(event) {
    if (event.keyCode === ball.keys.redKey || event.keyCode === ball.keys.blueKey) {
        ball.fill = ball.fills.white;
    }
}
```

This is *really* powerful because now if we ever want to change the controls of our program we just change the key codes in our `ball` object!
    
## Special p5 variables

It's a bit less "proper programming" than using the `event` parameter, but p5 also stores the most recent key pressed in [`key`](https://p5js.org/reference/p5/key/) and [`keyCode`](https://p5js.org/reference/p5/keyCode/). You can use that too if you want (and various p5 examples do so), but it's probably better to go with the `event.key` and `event.keyCode` approach.
    
## Other keyboard events

There is one other keyboard event available in p5:
    
- [`keyTyped()`](https://p5js.org/reference/p5/keyTyped/) is called when a key that can be displayed as text is pressed (so, like a typewriter)

Again, you can use this with `event` to find out which key was typed. This one is mostly useful if you're interested in what the user is *typing* as you might expect.
    
📖 Want to know more? Read the section of the documentation called [Keyboard](https://p5js.org/reference/#:~:text=the%20turnAxis%20variable.-,Keyboard,-key). 📖
    
## Finishing up

1. Commit and push the changes you have made in this session with an appropriate commit message

## Summary

Now we've added the *entire keyboard* to our arsenal of potential input devices. The possibilities are expanding rapidly.
    
## }