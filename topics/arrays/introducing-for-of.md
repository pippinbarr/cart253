# Introducing `for...of` {
    
Inspiration

## In this module

- Preparation
- Arrays are collections of elements
- Flies
- `for...of`
- Flies flies flies

## Preparation

1. Download the [Flies Project](./examples/flies.zip)
2. Unzip it
3. Move the folder into your repository
4. Open the folder in VS Code
5. Commit and push the changes

## Arrays are collections of elements

So far we've mostly thought of arrays as being *in order*. That's natural because they *are numbered* with their indexes.

But, the more common use of arrays in programming is actually just to store "a bunch of elements" you want to keep together because they're related. You don't care about the order they're in, just keeping them all in one (named) place.

## Flies

Let's take a look at the project we downloaded. There's an array of flies storing data about each fly we want to display. Great.

Right now, though, you can see that we display each fly in turn by using its *index* in the array. This works, but it's kind of the same as treating each one as an individual variable.

It looks kind of awkward. And it's also *not a good idea*. If the number of flies changes it's annoying to change the program everywhere! Our program ends up being very rigid instead of dynamic.

The key insight here is that it doesn't really matter which fly is at which index in the array, they're just a bunch of flies we want to display on our canvas.

What we want is to be able to easily say "go through all the flies and draw each one". And we can.

## `for...of`

The thing we're looking for here is a *loop*. There are a few kinds, but for now we're just going to learn a nice *easy* one for doing something with every element in an array. It's called `for...of`.

Using `for...of` we can draw *every fly in our array* we would write this instead:

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

Ah, flies. And importantly, because of the loop, if you wanted to add a couple of flies to the array, the program will still work! The `for...of` will go through all the flies in the array no matter what. Try it out!

## Summary

In short, `for...of` is a great way to simple go through each element in any array! It will be your friend for a long time to come.

## }