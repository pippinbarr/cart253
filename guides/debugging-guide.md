# Debugging guide

## Contents

- [What is debugging?](#what-is-debugging)
- [The debugging mindset](#the-debugging-mindset)
- [The console](#the-console)
- [`console.log()`](#consolelog)
- [Errors](#errors)
- [Undesired behaviour](#behavioural-issues)
- [Ask for help and take breaks](#ask-for-help-and-take-breaks)

## What is debugging?

A "bug" is a problem in our program:

1. An *error* with an *error message* in the Console that probably *crashes* the program.
2. *Undesired behaviour* when the program runs

## The debugging mindset

### Programming is mostly debugging

Debugging can feel pretty frustrating because it means your program isn't working. *But*, it's *totally normal* because programs aren't working *most of the time*.

### It's not personal

It's essentially, therefore, to not take bugs *personally*. They are *not* a judgement of your abilities as a programmer. The *program* is broken, not you.

### Debugging is learning

Bugs are great *teachers*. In exploring and fixing them we learn how programs work and build up our database of common issues and mistakes to avoid.

## The console

When coding, **you should always have the JavaScript console open in your browser**. Open the JavaScript console in Chrome by:

- Mac: ⌘ + ⌥ + J (Command + Option + J)
- Windows: Control + Shift + J
- Right-click the page and choose "Inspect" then select "Console" in the window that opens
- Click the three dots on the right side of the window and choose "More Tools" then "Developer Tools" then select "Console" in the window that opens

## `console.log()`

You can also *print information from your program* into the console as well. By using `console.log()`. The key examples are...

### Checking some code is running

```javascript
function myBuggyFunction() {
  // Checking if a function is actually being called by having it print
  // a message to the console
  console.log("myBuggyFunction() called");
  // Output in console: myBuggyFunction() called
}
```

### Checking the value in variables at a certain time

```javascript
function mySuspiciousFunction() {
  // Printing out the values in variables to see if there's something wrong
  // like they are "undefined" or "NaN" (not a number) or just the wrong
  // kind of thing
  console.log(bird.x, bird.y);
  // Possible output in Console: undefined 250 
}
```

```javascript
function mySuspiciousFunction() {
  // The same thing, but including some extra text to make it more readable
  // in the console window
  console.log("bird.x: " + bird.x, "bird.y: " + bird.y);
  // Possible output in Console: bird.x: undefined bird.y: 250
}
```

## Errors

Errors are bugs in your program that bring up an *error message* in your JavaScript Console.

### Reading an error message

A typical error might read like this:

```
script.js:47 Uncaught (in promise) ReferenceError: setTime is not defined
    at setup (script.js:47:5)
    at _setup (p5.min.js:3:423972)
    at _runIfPreloadsAreDone (p5.min.js:3:423132)
    at _._decrementPreload (p5.min.js:3:423304)
    at _.<anonymous> (p5.sound.min.js:2:98292)
```

Here we see:

- The type of error (e.g. `Uncaught ReferenceError`)
- The specific cause of the error (e.g. `setTime is not defined`)
- The file the error was found in (e.g. `script.js`)
- The line number the error was found on (e.g. `47`)
- A whole list of function calls that led to the error

Generally speaking, you only care about finding the line number in a JavaScript file that *you wrote*. There should not be any errors in p5.js itself.

### Typical errors

#### `Uncaught ReferenceError: ______ is not defined`

JavaScript has found a *name* in your program that it doesn't know about. This is generally:

- A variable name that has never been declared
- A property of a JavaScript Object that has never been defined
- A function name that has never been defined

Very often these are caused by typos and you will recognize the mistake quickly if you go to the line in question.

### `Uncaught SyntaxError: Unexpected end of input`

JavaScript reached the end of your program without all the curly brackets matching up. 

Automatic formatting is your friend here as you should be able to spot a place where the indentation isn't quite right (e.g. function definitions not aligned to the left).

### `Uncaught SyntaxError: Unexpected  ____`

JavaScript ran into something it wasn't expecting. 

This is usually caused by something just *before* the actual "token" it tells you about so keep your eyes open and don't only look at the line it suggests. 

A classic cause is non-matching parentheses. Also not following naming conventions. Or typos on important JavaScript words like `let` or `const` or `function`.

## Undesired behaviour

Behavioural issues can be much harder to find. An image might display in the wrong place, a sound might trigger at the wrong time, a character might suddenly disappear from the world, a shape might refuse to move, and much more!

There's no easy fix here because we have to spend time figuring out where things are going wrong, asking for help, and building up our knowledge of the kinds of things that can happen. 

Key starting points are to:

- Try to understand which *part* of your program is the likely culprit 
  - This is where dividing a program up into functions is helpful! Find the function responsible for the thing that isn't working.
- Make sure the code you think *should* be running *is* running
  - Put a `console.log()` immediately before it (this will help to catch functions not being called or conditions not being met)
- Make sure your variables and properties have the right kinds of values
  - Use `console.log()` to track what values are in your variables and properties 
  - If you see anything suspicious, start to work out *where* and *when* things go wrong

## Ask for help and take breaks

Whatever you do, **do not become obsessed and debug the same thing for hour after hour**.

At the very least **take a break** to refresh your brain. Even if you just go for a five minute walk before getting back to it, that's something.

Remember you're learning and **ask for help** if it's taking a bit too long to find the problem. It's crucial to try yourself, but you also don't want to lose all your time to something someone else can easily help with.