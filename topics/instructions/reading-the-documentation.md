# Reading the documentation {

## Introduction

It is incredibly important to be able to read the documentation for any library we use. Learning to read documument and learning to *remember* to read documentation is a key part of developing as a programmer (get it?! "developing"??).

## Preparation

1. Download the [template project](MISSING_LINK)
2. Unzip it
3. Open the resulting folder in VS Code
4. Give the project a title in `index.html`

## Go to the reference

I could keep telling you the names of p5 functions and explaining them, but the more important thing is to tell you about the *Reference* provided on the p5 website. This is the documentation of the p5 library and contains explanations of *every function* that p5 provides us with.

You can find it via the p5 website:

[https://p5js.org/](https://p5js.org/)

Or you can go directly to it at:

[https://p5js.org/reference/](https://p5js.org/reference/)

Another name for this kind of documentation is the API or Application Programming Interface documentation.

## What's there?

Everything is there. If you look at the main Reference page you'll see a list of categories - things like 3D, Color, Environment, and Math. And below, you'll see a list of *every single function* in p5.

This could be overwhelming, but you're *not meant to just read the whole thing*. It's like a dictionary, you refer to it when you need to know what something *means* and how to *use* it.

We're going to pick *three* new functions and take a look at their documentation and then use them.

Remember that what you're trying to do is to *learn to read the documentation*. That way, the next time you need to understand something, the reference should be the *first place you look*.

## `line`

Let's learn a new "shape" called `line`. You can *probably* guess what it does from the name, but let's learn about it from the documentation.

If you navigate to the Shape section of the reference, you should find an entry called `line()`. Go to that page.

Now we can see the basic structure of p5's documentation, and it's a pretty common one, so this will help when you're looking at other documentation too.

Let's break it down.

### Description

The first thing is a description of what the function does. It *draws a line*. Shocked? Perhaps not. But it contains other helpful information too, like the default width of the line (1 pixel), the way to colour a line (use `stroke`), the way to change its width (use `strokeWidth`), and more.

Note how in the description there are references to *other functions* that are helpful to use with this one and note how you can just click on them to learn about *those ones* too.

So the description should let us understand *what this function is for*.

But we don't know how to *use it* yet. So.

### Examples

Any good documentation will include examples of the function in action and p5 is good at this. You can see a series of examples that show the function actually working in different ways.

Note that they show it working in `setup` but it *of course* works in `draw` too. And in fact you will almost always be using it there.

Although it wasn't explained in the description, it's hopefully at least somewhat intuitive that the *four arguments* that are going into the `line` function in these examples are the (x, y) coordinates of the starting and ending points of the line to draw. (When there are *six arguments* it's because it's in 3D, but let's not worry about that right now.)

The examples show a set of basic uses of a line in isolation so you can get a sense of how the arguments work, and also how other functions affect it (e.g. `stroke` and `strokeWidth`).

You could totally start using `line` in your program now, right? You could even just *copy and paste* some of these examples into your program to get started. And that would be fine.

### Syntax and parameters

Before we go, though, there's one more really important section. Kind of the least fun section, but something we need to build a relationship to. And that's the explanation of the *syntax* of the function. Instead of being an *example* it's like the *dictionary definition*.

`line` is pretty simple, so there's not a lot going on here, but you can see that the syntax shows you what the four arguments *mean* when you call the function. We'll only look at the first one (the 2D version):

```javascript
line(x1, y1, x2, y2)
```

By referring to the syntax description and the parameters list we can understand what the four arguments we send it will do.

- The first two are the (x, y) coordinates of the starting point of the line (referred to as `x1` and `y1`)
- The second two are the (x, y) coordinates of the endpoint of the line (referred to as `x2` and `y2`)

This confirms our intuitive understanding. Other functions are *not so intuitive* and so it's really helpful and important to read the actual technical definition when in doubt.

## Let's `line`

We have read the documentation for line. So, if we wanted to draw a line from the top-left corner of the canvas to the bottom-right corner, we would need the (x, y) coordinates of those two points.

The top-left is at 0,0, it's *the origin* by default.

The bottom-right is going to be the full width and full height away from the origin. (Remember that on the canvas the x-coordinates increase as you go to the *right* and the y-coordinates increase as you go *down*).

So:

```javascript
function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(255, 100, 100);
    // Draw a line from the top-left to the bottom-right
    line(0, 0, 640, 480);
}
```

### Colour it in

We know from the examples that if we wanted to change the line's colour we would use `stroke`:

```javascript
function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(255, 100, 100);
    
    // Draw a pink line from the top-left to the bottom-right
    push();
    stroke(255, 150, 150);
    line(0, 0, 640, 480);
    pop();
}
```

### Enthicken it

We know from the description of `line` that we can use `strokeWeight` to change a line's thickness, and we can probably see in the `line` examples how it works, but why not read the documentation for `strokeWeight` quickly by clicking through to it...

... ah yes. It sets the width of the stroke. But notice that it sets the width fo the stroke for *all* shapes, not just `line`, so that's worth noticing.

*How* does it set the width of the stroke? If we look at the examples it's pretty clear we call it with a single number as an argument before we draw our shape, like:

```javascript
strokeWeight(10);
line(0, 0, 640, 480);
```

But *what is that number*? We'll have to head down to the syntax to learn that...

... it is "the weight of the stroke (in pixels)"! Okay, so that number we send in as an argument is how many pixels *wide* the line will be. Good.

In that case:

```javascript
function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(255, 100, 100);
    
    // Draw a thick pink line from the top-left to the bottom-right
    push();
    stroke(255, 150, 150);
    strokeWeight(20);
    line(0, 0, 640, 480);
    pop();
}
```

And from there, we can draw all the lines we want! We know the syntax, we know the arguments to send in, we know two of the key functions `line` plays well with.

All thanks to the documentation.

## Thanks, documentation

The key message here is that, while you can of course work entirely from examples as a programmer, it is *much better* for your understanding if you learn to read the documentation whenever possible. It will help you understand why things are the way they are, and link you on to other relevant ideas that may be what you're looking for.

So, when in doubt, *read the documentation*.

## Summary

We read through the documentation for the `line` function in p5 and used it to draw a nice, thick pink line across our canvas. By reading the documentation we came to know exactly how that function works, what its arguments are, and what other functions it works with. All in one place!

## Next

If it's not already obvious, it's a very good idea to also *browse* the p5 Reference sometimes. Look at the different sections, clik through some of the functions, learn about what's in there and let that shape your imagination of what you might do!

Have a look at all the functions in the Shape section that we haven't discussed. Try some of them out by *reading their documentation* and *looking at their examples*. Gradually build your knowledge of what is possible, but feel safe in the knowledge that you can *always just read the documentation again* if you need to. (Everybody does. All the time.)

## }
