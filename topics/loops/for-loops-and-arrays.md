# `for`-loops and arrays {
    
Inspire

## In this module

- `for...of`
- `for`-loop
- Which one?

## `for...of`

To go through the elements in array we learned to use a `for...of` loop:

```javascript
let array = [3, 1, 4, 1, 5, 9];
for (let value of array) {
    console.log(value); // Prints 3 1 4 1 5 9
}
```

## `for`-loop

We can do exactly the same thing with a "standard" for loop too:

```javascript
let array = [3, 1, 4, 1, 5, 9];
for (let i = 0; i < array.length; i++) {
    let value = array[i];
    console.log(value); // Prints 3 1 4 1 5 9
}
```

## Which one?

It doesn't matter *all that much*. Use which one you like.

There may be times when it is *useful* to know the current value in `i`, which you don't get in a `for...of` loop.

It's also the case that you'll probably see the `for`-loop version *more often* when you look at example code using arrays online (so you *definitely* want to be able to *read* this style).

But most of the time the `for...of` loop is probably slightly more elegant and easy to read and less likely to lead to mistakes.
    
## Summary

...
    
## }