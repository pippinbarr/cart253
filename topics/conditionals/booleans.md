# Booleans {
    
When we're using conditionals we have conditions, and conditions are either *true* or *false*. In programming there are two values, `true` and `false`, we can store in variables and that can be useful when dealing with conditionals.

## In this module

- Preparation
- Boolean values
- Storing conditions

## Preparation

## Preparation

1. Download the [Lightswitch](./examples/lightswitch.zip) and [Grow Hole](./examples/growhole.zip) projects
2. Unzip them
3. Move the folders into your repository

## Boolean values

As we've seen, conditional in a program work based on whether something is `true` or `false`. Importantly, we can store `true` or `false` in a variable or properties just like we can a number:

```javascript
let javaScriptIsCool = true;
const cigarettesAreHealthy = false;
let owl = {
    numEyes: 2,
    nocturnal: true,
    quadruped: false
};
```

This can be handy when we're using conditionals in our program because our variables or properties can be designed to work with them.

### A lightswitch

Take a look at the *Lightswitch* project you downloaded by opening it up in VS Code. It's a simple lightswitch that makes the canvas white when it's switched on and black when it's switched off.

This lightswitch works through the power of being able to *store* boolean values in properties and then to *check* those properties as conditions in our conditionals!

## Storing conditions

If we want to we can actually store the *result* of a condition in a variable. 

```javascript
const carIsMovingRight = (car.velocity.x > 0);
const eggIsWhite = (egg.fill === 255);
```

Sometimes this can make our programs easier to read.

### Stopping a hole from growing...

Take a look at the *Lightswitch* project you downloaded by opening it up in VS Code. Note how we store the result of a conditional to make it that little bit more readable.

It's a little thing, but it can also be a great way to make sure you understand your program because it makes you give a *name* to the condition you're checking.

## Finishing up

1. Commit and push the changes you have made in this session with an appropriate commit message

## Summary

In JavaScript the values `true` and `false` are available for storing *conditions*. This often lets us make our programs even more clear.
    
## }