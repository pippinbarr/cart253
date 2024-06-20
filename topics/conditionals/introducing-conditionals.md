# Introducing conditionals {
    
One of the most interesting things a program can do is *change how it works* depending on what is happening. Maybe it could respond to mouse movement, or to the current time, or to the weather? A key way to tell a program what to do in different situations is to use *conditionals*, expressed in code as `if`-statements.

## In this module

- Decisions, decisions
- `if`-statements
- Math and comparisons
- `else`
- `else if`

## Decisions, decisions

We all make decisions about what *do* based on *information* we have about the world. Something like this:

> **If there is freezing rain, then I'm going to stay at home.**

This is made up of two key parts we can call the *condition* and the *consequence*:

- The **condition** is "freezing rain". Whether or not there is freezing rain is what we are going to base our *decision* on.
- The **consequence** is "I'm going to stay at home". This is what we're going to *do* if the condition is true and there *is* freezing rain.

## `if`-statements

There is a nice way of expressing conditionals in *code* called an `if`-statement. These `if`-statements let us tell the program what to do *if* a certain condition is true. 

An `if`-statement expressing the above decision about freezing rain in program might look something like this:

```javascript
// Check if there is freezing rain
// ("If there is freezing rain", the condition)
if (freezingRain) {
  // There is freezing rain, so stay at home
  // ("then I'm going to stay at home", the consequence)
  stayAtHome();
}
```

That is, we write:

- `if` - the special word that starts a conditional
- `(...)` - parentheses that go around the *condition*
- `freezingRain` - the condition itself, inside the parentheses, needs to be something that will be either `true` or `false`
- `{ ... }` - curly brackets around the *consequence*
- `stayAtHome()` - our consequence is to call the `stayAtHome()` function

So, in general:

```javascript
// Check if the condition is true
if (condition) {
  // If it's true, the things inside these curcle brackets
  // will be executed
}
```

## Math and comparisons

In a program a lot of the time our *conditions* are going to be based on *numbers*, so we'll be checking things like:

- Is the mouse's x-coordinate greater than 100? `(mouseX > 100)`
- Is the mouse's y-coordinate less than the height of the canvas? `(mouseY < height)`
- Is the variable `age` equal to `33`? `(age === 33)`?
- Is the variable `confidence` greater than or equal to `90`? `(confidence >= 90)`
- Is the variable `sadness` less than or equal to `10`? `(sadness <= 10)`

As you can see, we use standard mathematical comparison operators (the fancy name for equals, less than, greater than, etc.) to compare numbers.

We will essentially *always* write comparisons that involve at least one *variable* because if there's no variable involved then the *condition cannot change* and it's pointless. You can check `(5 > 2)` as many times as you want, but it will always be `true`.

## `else`

When we make decisions in life we often aren't *only* thinking about what to do if something *does* happen (if the condition is `true`), we're also thinking about what we'll do if it *doesn't* happen (that is, if the condition is `false`):

> **If there is freezing rain, then I'm going to stay at home. Otherwise, I'm going to the café.**

Extending our program version, we would write this:

```javascript
// Check if there is freezing rain
// ("If there is freezing rain", the condition)
if (freezingRain) {
  // There is freezing rain, so stay at home
  // ("then I'm going to stay at home", the consequence)
  stayAtHome();
}
else {
  // There is no freezing rain, so go to the café
  // ("Otherwise, I'm going to the café)
  goToCafe();
}
```

So the `else` part allows us to tell the program what to do if the condition is *false*, which can be very useful! Notice there are *no parentheses* after the `else` because we don't need to check anything. The `else` just *happens* if the *condition* is `false`.

## `else if`

One last thing! Sometimes we have more complicated decisions to make where there isn't just *one condition* but several. Such as:

> **If there is freezing rain, then I'm going to stay at home. Otherwise, if it's 12 degrees or warmer, I'll go for a walk. Otherwise, I'll go to the café.**

Extending our program version, we would write this:

```javascript
// Check if there is freezing rain
// ("If there is freezing rain", the condition)
if (freezingRain) {
  // There is freezing rain, so stay at home
  // ("then I'm going to stay at home", the consequence)
  stayAtHome();
}
// There's no freezing rain, so check the temperature
// ("Otherwise, if it's 12 degrees or warmer")
else if (temperature >= 12) {
  // There is no freezing rain, and the temperature is 12
  // degrees or more, so go for a walk
  // ("I'll go for a walk")
  goForAWalk();
}
// Neither of the previous conditions were true
// ("Otherwise")
else {
  // There is no freezing rain and the temperature is below
  // 12, so go to the café
  // ("I'm going to the café)
  goToCafe();
}
```

So the `else if` part allows us to tell the program further conditions we want to react to, like the temperature.

## Situations

Essentially we're able to *describe situations* using our conditions and *respond to them* using our consequences. Based on the above code:

- On a 2 degree day with freezing rain, I'll stay at home
- On a 13 degree day with freezing rain, I'll stay at home
- On a 13 degree day with no freezing rain, I'll go for a walk
- On a 2 degree day with no freezing rain, I'll go to the café

## Summary

## }