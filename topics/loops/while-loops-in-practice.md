# `while`-loops in practice {
   
`while`-loops are relatively straightforward to understand, but is there anything *special* we can do with them? Yes, we can face the unknown!

## In this module

- Preparation
- What could a `while`-loop *do*?
- The danger zone
- `while` to the rescue!
- Beware infinite loops

## Preparation

1. Download the [The Danger Zone Project](./examples/the-danger-zone.zip)
2. Unzip it
3. Move the folder into your repository
4. Open it in VS Code
5. Commit and push the changes

## What could a `while`-loop *do*? 
    
Fundamentally, a `while`-loop is the most general kind of loop in programming, so it can take care of *any* kind of repetition of instructions.

However, a *special* thing about a `while`-loop is that you can use it when you *don't know ahead of time* when the loop will end.

So, you should definitely think about using a `while`-loop when you have a situation where you need to repeat some task, but you *don't know how many times you'll need to repeat it* before you're done.

## The danger zone

Consider the project we downloaded for this module. We have a situation where we want to place a hero (circle) on the canvas in a *random* location, but *not* within a specific circular area (the danger zone).

At the moment we choose a random position for the hero, but it's not *guaranteed* that the position isn't *inside the danger zone*.

If we try it out, sometimes the hero is safe and sometimes the hero is... in the danger zone. Not what we wanted.

## `while` to the rescue!

What we need is to *keep trying to position the hero randomly* until we find a random location that *isn't in the danger zone*.

And that kind of description of a task is what a `while`-loop was born for. In essence we want:

```
Position the hero randomly
while (the hero is in the danger zone) {
    Position the hero randomly again
}
```

Which we can implement!

```javascript
/**
 * Places the hero in a random position NOT in the danger zone
 */
function placeHero() {
    // Choose a random spot for the hero
    hero.x = random(0, width);
    hero.y = random(0, height);
    
    // This COULD BE IN THE DANGER ZONE
    // So let's use a while loop to keep checking that
    // and repositioning the hero until we find a spot that
    // isn't
    
    // Get the distance between the hero and the zone
    let d = dist(hero.x, hero.y, dangerZone.x, dangerZone.y);
    // Check if there's an overlap between the hero and the zone
    while (d < hero.size/2 + dangerZone.size/2) {
        // If we get to here, then there *is* an overlap
        // So we need try a new position
        hero.x = random(0, width);
        hero.y = random(0, height);
        // And we need to recalculate the distance for out next time
        // through the while-loop's condition above
        d = dist(hero.x, hero.y, dangerZone.x, dangerZone.y);
    }
    // When we get to here (AFTER the while-loop) we know that the hero's
    // current position does NOT overlap the danger zone!
}
```

## Beware infinite loops!

By introducing loops we introduce the sort of scary spectre of *infinite loops*. If we have a *condition that cannot be met* then the loop will just keep running forever. The computer will keep trying the impossible.

As an example, try making the danger zone so big that there is *nowhere* that the hero could be placed. Watch as your browser tab crashes because of the infinite loop!

Try to avoid this, of course. But also notice the behaviour: if your program seems to be running and chugging and then crashing the browser tab, it's very likely you have an infinite loop.

## Summary

We can use a `while`-loop for any kind of repetitive code, including drawing a set number of shapes, say, or going through an array. But perhaps most important to know is that we can use `while`-loops in the special case where we want to repeat something an *unknown* number of times.

## }