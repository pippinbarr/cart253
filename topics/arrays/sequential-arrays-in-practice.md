# Sequential arrays in practice {
  
Arrays are most obviously a collection of elements *in order*. The fact they're in order can be meaningful to how we choose to use an array, such as going through them from first to last. 

## In this module

- Preparation
- Arrays are in order
- Speech! Speech!

## Preparation

1. Download the [Template p5 project](../../templates/template-p5-project.zip)
2. Unzip it
3. Rename the folder to `speech-speech`
4. Move the folder into your repository
5. Open the folder in VS Code
6. Change the title in `index.html` ("Speech! Speech!"?)
7. Commit and push the changes

## Arrays are in order

As we've noted, arrays are a series of elements *in order*. This could be useful.

What kinds of programming might use a *series* of values? Dialogue is an example - a person says a sequence of sentences. Animation is another example - a shape goes through a sequence of frames.

Let's implement both of these with arrays just to get more of a sense of how they practically work.

## Speech! Speech!

### The key variables

If we want to have some dialogue, the first thing we'll need is an array of all the lines of text we want to be "spoken". We'll use *strings* instead of numbers in this array:

```javascript
let speech = ["Veni.", "Vidi.", "Vici.", "Sensi malum."];
```

Here we have a sequence of *four* elements, each one is a string (some text inside quote marks). This will be our *speech*.

We only want to display *one* piece of text at a time though, so we need some way for our program to keep track of *which* part of the speech. And how do we refer to a specific element in an array? With its *index*. 

So we need to store the *current* index of where we're at in the speech, starting with `0` presumably, since that's the beginning:

```javascript
let speechIndex = 0;
```

### A framework for displaying the speech

Now we need a way to actually display the speech. This involves setting up a simple p5 program that can display the current part of the speech in draw. Something like:

```javascript
let speech = ["Veni.", "Vidi.", "Vici.", "Sensi malum."];
let speechIndex = 0;

function setup() {
    createCanvas(600, 100);
}

function draw() {
    background(0);
    
    // Get the current line of our speech
    let currentLine = speech[speechIndex];
    
    // Display it
    push();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER); // Centered horizontally and vertically
    text(currentLine, width/2, height/2); // Centered on the canvas
    pop();
}
```

This now works to display the *first* element in the array.

### Advancing the speech

That's great, but the final bit is having a way to move to the *next* part of the speech. Essentially we want to *increase the `speechIndex` variable by one*. Because that would point to the next one.

When should we do that? How about when the user clicks? In which case, let's do it in `mousePressed()`:

```javascript
function mousePressed() {
    speechIndex = speechIndex + 1;
    // Or: speechIndex += 1;
    // Or: speechIndex++;
}
```

Perfect. Now with each *click* our `mousePressed()` increases `speechIndex` by one, and therefore in `draw()` we get the next *element* from the array!

### Dealing with the end of the array

One last thing. If you had your console open (*which you should have*) you probably saw that if you clicked when "Sensi malum" was displayed there was an error. 

That's because "Sensi malum" is the *last* element in the array! When we click again `speechIndex` becomes `4` and when we try to get the element at index `4` in `speech`... there isn't one! Explosion!

There are a bunch of ways to deal with this, but the most straight forward is probably just to use an `if`-statement to make sure we don't do that! Maybe we could restart instead...

Remember we can use `.length` to check the length of an array.

```javascript
function mousePressed() {
    // Increase the index
    speechIndex = speechIndex + 1;
    // Check if the index is too high for the array's length!
    if (speechIndex >= speech.length) {
        // If so, reset it to 0 (go back to the beginning)
        speechIndex = 0;
    }
    
    // If you wanted to be very fancy you can use modulo instead:
    // speechIndex = (speechIndex + 1) % speech.length;
}
```

## Summary

So, we've now seen the idea of treating an array as an *ordered sequence* of data that we can use in a program. This idea will potentially come in handy *all over the place*.
    
## }