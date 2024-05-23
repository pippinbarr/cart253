# Debugging guide

## Contents

- [What is debugging?](#what-is-debugging)
- [The debugging mindset](#the-debugging-mindset)
- [The console](#the-console)
- [`console.log()`](#consolelog)
- [Errors](#errors)
- [Behavioural Issues](#behavioural-issues)

## What is debugging?

A "bug" is a problem in our program. A bug is generally either:

1. An *error* in the code that leads to an error message and, most likely, the program crashing (or never running).
2. An unexpected and undesired *behaviour* when the program runs, such as things being the wrong colour, the wrong visuals displaying, a sound repeating infinitely, and much, much more.

*Errors* are relatively straightforward to debug because we get an *error message* that explains the problem and where it was found.

*Behaviours* are often harder to locate and require more sophisticated techniques.

Both require a *mindset*.

## The debugging mindset

### It's (almost) all debugging

Debugging can feel pretty frustrating because it means your program isn't working. *But*, not-so-secretly, it's *totally normal* because programs aren't working *most of the time*.

### It's not about you

It's essentially, therefore, to not take bugs *personally*. They're just there, waiting for you to fix them. They are *not* a judgement of your abilities as a programmer. The *program* is broken, not you.

### Debugging is learning

Also bugs are often great *teachers*. In debugging and encountering the many bugs we encounter, we learn how programs work, the kinds of things that often go wrong, some of our own common errors, and much more.

### Bugs are natural

So, in the end, you probably *shouldn't expect your program to work* in the first place. Then you won't be disappointed! Just be ready to jump into debugging it as a *natural part of the process*.

## The console

You need to have the JavaScript console open in your browser to debug. And since debugging is happening most of the time, you need to have the JavaScript console open *all the time*. You should never see your program running without the JavaScript console next to it. *Seriously*.

Open the JavaScript console in Chrome by:

- Mac: ⌘ + ⌥ + J (Command + Option + J)
- Windows: Control + Shift + J
- Right-click the page and choose "Inspect" then select "Console" in the window that opens
- Click the three dots on the right side of the window and choose "More Tools" then "Developer Tools" then select "Console" in the window that opens

## `console.log()`

The console is great for reading about errors in your program, but you can also *print information from your program* into the console as well. By using `console.log()`.

### Text messages

The simplest thing you can do is print out some text. A helpful thing to do can be to print a text message at the start of your functions to prove to yourself that they are being executed:

```javascript
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255, 255, 0);
}

function paintTheMonaLisa() {
    console.log("Started paintTheMoonaLisa()");
    ellipse(100, 100, 200, 200);
}
```

In this case we would notice that our function `paintTheMonaLisa()` is never called because we never see the message `Started paintTheMoonaLisa()` in the console. That might help us to understand a problem in our program.

You can use `console.log()` anywhere in your program to print out any text you like. Just make sure you write the text inside quotation marks as above.

## Errors

Errors are bugs in your program that JavaScript *actually notices and complains about*. They will bring up *error messages* in your JavaScript console (which is open, right?).

Errors come with a *line number* that tells you where JavaScript thinks the problem is. This is often literally where the problem is, but sometimes it's more of a *starting point* representing the moment JavaScript became confused. Poor JavaScript.

### `Uncaught ReferenceError: ______ is not defined`

JavaScript has found a *name* in your program that it doesn't know about. This is often a *typo* somewhere, or we have forgotten what we called something in some other part of the program, or we simply *haven't defined* something we're trying to use.

#### Typo in a function call

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  backgroun(220);
}
```

```Uncaught ReferenceError: backgroun is not defined   script:6```


- **Tactic:** Go to the line number and look at the problem function call `backgroun`, think about what's wrong with it
- **Problem:** We wrote `backgroun` when we meant to write `background`.
- **Solution:** Correct the typo.

#### Typo in a function definition

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  paintTheMonaLisa();
}

function paintTheMoonaLisa() {
    ellipse(100, 100, 200, 200);
}
```

```Uncaught ReferenceError: paintTheMonaLisa is not defined   script:6```

- **Tactic:** Go to the line number and look at the problem function call `paintTheMonaLisa`, think about what's wrong with it, if nothing is wrong with it go looking for the *definition* of that function
- **Problem:** We wrote `paintTheMoonaLisa` in the function definition when we meant to write `paintTheMonaLisa`.
- **Solution:** Correct the typo.

#### Missing function definition

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  paintTheMonaLisa();
}
```

```Uncaught ReferenceError: paintTheMonaLisa is not defined   script:6```

- **Tactic:** Go to the line number and look at the problem function call `paintTheMonaLisa`, think about what's wrong with it, if nothing is wrong with it go looking for the *definition* of that function
- **Problem:** We haven't defined our `paintTheMonaLisa` function yet.
- **Solution:** Define the function (or don't call it until it's defined).

## Behavioural Issues

Behavioural issues can be much harder to find. An image might display in the wrong place, a sound might trigger at the wrong time, a character might suddenly disappear from the world, and much more!

There's no easy fix here because we have to spend time figuring out where things are going wrong, asking for help, and building up our knowledge of the kinds of things that can happen. 