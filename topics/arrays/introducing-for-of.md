# Introducing `for...of` {
    
Inspiration

## In this module

- Arrays are collections of elements
- `for...of`
- Flies flies flies

## Arrays are collections of elements

So far we've mostly thought of arrays as being *in order*. That's natural because they *are numbered* with their indexes.

But, the more common use of arrays in programming is actually just to store "a bunch of elements" you want to keep together because they're related. You don't care about the order they're in, just keeping them all in one (named) place.

For instance here is an array of flies...

```javascript
let flies = [
    {
        x: 100,
        y: 125,
        size: 10
    },
    {
        x: 160,
        y: 170,
        size: 14
    },
    {
        x: 180,
        y: 50,
        size: 5
    }
];
```

It doesn't matter *which fly goes where*, they're just a bunch of flies we want to display on our canvas.

One way to do that would be to *know* there are three flies and so to do stuff using those indexes. That is, to do stuff with `flies[0]`, `flies[1]` and `flies[2]`.

But that's *not a good idea*. If the number of flies changes it's annoying to change the program everywhere!

Instead what we want is to be able to easily say "go through all the flies". And we can.

## `for...of`

The thing we're looking for here is a *loop*. There are a few kinds, but for now we're just going to learn a nice *easy* one for doing something with every element in an array. It's called `for...of`.

To draw *every fly in our array* we would write this:

```javascript
for (let fly of flies) {
    push();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}
```

The first line is the key new idea, we write:

- `for`: tells JavaScript we're going to *loop* in some way
- `( ... )`: the parentheses tell JavaScript the information about the looping
- `let fly of flies`: tells JavaScript to get each element in the `flies` array in order and to put it in `fly`, then do the stuff in the `{ ... }` with it

That is, this loop will execute its instructions (in the `{ ... }`) for *each element of the `flies` array*, and each time it will put the element into a variable called `fly` so we can access it.

Handy!

## Flies flies flies

So a working program would look like this:

```javascript
let flies = [
    {
        x: 100,
        y: 125,
        size: 10
    },
    {
        x: 160,
        y: 170,
        size: 14
    },
    {
        x: 180,
        y: 50,
        size: 5
    }
];

function setup() {
    createCanvas(200, 200);
}

function draw() {
    background("#87ceed");
    
    // Go through all the flies and display them
    for (let fly of flies) {
        push();
        fill(0);
        ellipse(fly.x, fly.y, fly.size);
        pop();
    }
}
```

Ah, flies. And importantly, because of the loop, if you wanted to add a couple of flies to the array, the program will still work! The `for...of` will go through all the flies in the array no matter what.

## Summary

`for...of` is a great way to simple go through each element in any array! It will be your friend for a long time to come.

## }