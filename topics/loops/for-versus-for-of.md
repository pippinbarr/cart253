# `for` versus `for...of` {
    
We already know you can use a `for...of` loop to go through an array, and that's usually the easiest, but a lot of the time you'll still see people using "plain" `for`-loops.

## In this module

- `for...of` and arrays
- `for` and arrays

## `for...of` and arrays

We've already seen that we can use `for...of` to easily do something with each element of an array:

```javascript
const fruits = ["Apples", "Peaches", "Strawberries", "Bananas"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

The above will print out each fruit name in the array, one by one, in order.

## `for` and arrays

`for...of` is really quite nice, but it's important to know that a lot of the time you'll see people doing this with a standard `for`-loop:

```javascript
const fruits = ["Apples", "Peaches", "Strawberries", "Bananas"];

for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    console.log(fruit);
}
```

Same thing, just a slightly different approach to writing it out.

One reason you *might* want to do it this way? If it's useful to have the `i` variable when you're processing the elements in the array. Occasionally it is.

## Summary

You can use `for...of` and `for` interchangeably to go through the elements in an array. Feel free to use either approach.
    
## }