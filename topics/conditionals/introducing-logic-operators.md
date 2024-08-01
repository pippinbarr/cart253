# Introducing logic operators {

Okay okay hear me out! Even though "logic operators" is not the most exciting pair of words you've ever heard, they are *super useful* for simplifying your code in nice ways.
    
## In this module

- Logic
- More than one thing! (AND)
- Either! (OR)
- Not that! (NOT)

## Logic

When we say something like "if there is freezing rain, then I will stay home" we're essentially already doing *logic* in the sense that we draw a conclusion based on whether the proposition "there is freezing rain" is true or false. (The conclusion being: staying home or not.)

If we think about things this way (and computers *do*), then we can use some other parts of logic to make our code simpler.

## More than one thing! (AND)

One thing we might want to be able to say is:

> **If there is freezing rain and it's dark, then I'm going to stay at home.**
    
Now we care about whether *two* things are true. In order for us to stay home there needs to be freezing rain *and* darkness.

Now, we *could* express this just with standard `if`-statements, like this:

```javascript
// Check if there is freezing rain
// ("If there is freezing rain", the condition)
if (thereIsFreezingRain) {
    // There is freezing rain!
    // Check if there is also darkness...
    // ("and it's dark")
    if (lightLevels < 10) {
        // There is freezing rain and it's also dark!
        // So we stay at home
        // ("then I'm going to stay at home", the consequence)
        stayAtHome();      
    }  
}
```

That is, we can put our darkness `if`-statement *inside* our freezing rain `if`-statement in order to check that they're *both* true.
    
But, we could *also* use the logical AND operator (and we usually do)

### AND

When we wrote out our plan we just used the word *and* to combine the ideas of freezing rain and darkness:

> **If there is freezing rain *and* it's dark, then I'm going to stay at home.**

In programming we can do exactly that using the logical AND operator, which is

`&&`

That's right, two ampersands in a row. We would use it like this:

```javascript
// Check if there is freezing rain and darkness
// ("If there is freezing rain and it's dark", the condition)
if (thereIsFreezingRain && lightLevels < 10) {
    // There is freezing rain and it's also dark!
    // So we stay at home
    // ("then I'm going to stay at home", the consequence)
    stayAtHome();      
}
```

Same result, but arguably easier to read?

## Either! (OR)

Sometimes our plan involves doing something if *either* of two things (or maybe more) are true. Something like:

> **If there is freezing rain or deep snow, then I'm going to stay at home**
    
Very reasonable. But actually a bit annoying to write in the code we know right now because we'd have to write something like this:

```javascript
// Check if there is freezing rain
// ("If there is freezing rain", the first part of condition)
if (thereIsFreezingRain) {
    // There is freezing rain
    // So we stay at home
    // ("then I'm going to stay at home", the consequence)
    stayAtHome();      
}
// Check if there is deep snow
// ("or there is deep snow", the second part of the condition)
if (snowLevel > 5) {
    // The snow is deep!
    // So we stay at home
    // ("then I'm going to stay at home", the consequence, again)
    stayAtHome();
}
```

This is *especially suspicious* because we have exactly the same consequence (`stayAtHome()`) inside *both* `if`-statements. Repetition like this is no good.

We can fix it!

### OR

When we wrote out our plan we just used the word *or* to combine the ideas of freezing rain and deep snow:

> **If there is freezing rain *or* there is deep snow, then I'm going to stay at home.**

In programming we can do exactly that using the logical OR operator, which is

`||`

That's right, two... well they're called "pipes"... in a row. We would use it like this:

```javascript
// Check if there is freezing rain or deep snow
// ("If there is freezing rain OR deep snow", the first part of condition)
if (thereIsFreezingRain || snowLevel > 5) {
    // There is freezing rain or deep snow (or both!)
    // So we stay at home
    // ("then I'm going to stay at home", the consequence)
    stayAtHome();      
}
```

This is inarguably much better. We respond the same way to both these conditions, so we use *or* to put them together.
  
As in the comment in the code an OR operator (that is `||`) will end up `true` if *either or both* of the two conditions are `true`. It's only `false` if they're *both* `false`.

## Not that! (NOT)

One last idea - sometimes it makes more sense to us to express our plans in terms of *negation*. So that we might say:

> **If there's no freezing rain, then I'll go for a walk.**

This can be a subtle idea, but really it comes down to the way you prefer to express an idea. In this case we're thinking going out based on there *not* being any freezing rain, suggesting that freezing rain is the important thing, rather than good weather or something else.

We could try to awkwardly write it like this:

```javascript
// Check if there is freezing rain
// ("If there is freezing rain", the first part of condition)
if (thereIsfreezingRain) {
    // There is freezing rain... uh, don't do anything...
}
else {
    // There is NOT freezing rain! Go for a walk!
    // ("I'll go for a walk")
    goForWalk();
}
```

But that just looks totally bizarre with an empty consequence for the first condition. Let's not do it that way.

### NOT

In logic we use the idea of NOT or NEGATION to express this situation, so we'd actually say something like:

> **If NOT (there is freezing rain), then I'll go for a walk.**

Which is not how people talk, but c'est la vie.

In programming we can use the NOT operator, which is `!` to do this. It goes *in front* of the thing we want to negate, so for our freezing rain saga we would write:

```javascript
// Check if there is NOT freezing rain
// ("If there is no freezing rain", the first part of condition)
// (Or "If NOT freezing rain")
if (!thereIsFreezingRain) {
    // There is no freezing rain
    // So we go for a walk
    // ("then I'll go for a walk", the consequence)
    goForWalk();      
}
```

Hey, that's nice and tidy! Again, note how this program is *saying something* about preferences and decision-making. We go for a walk based on the freezing rain, rather than other possible conditions. We really hate freezing rain.

## Summary

Using the logic operators `&&` (AND), `||` (OR), and `!` (NOT) is a great way to make our programs more and more specific. Crucially, it often allows us to express really *reasonable* ideas in a concise way.
  
## }