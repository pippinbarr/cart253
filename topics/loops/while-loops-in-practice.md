# `while`-loops in practice {
   
Inspire

## In this module

- What does a `while`-loop *do*?
- The danger zone

## What does a `while`-loop *do*? 
    
Fundamentally, a `while`-loop is the most general kind of loop in programming, so it can take care of any kind of *repetition* of instructions. 

However, the *special* thing about a `while`-loop is that you can use it when you *don't know* when the loop will end.

So, you should think about using a `while`-loop when you have a situation where you need to repeat some task, but you *don't know* how many times you'll need to repeat it before you're done.

## The danger zone

Consider a situation where you want to draw a circle on the canvas in a *random* location, but *not* within a specific circular area (the danger zone).

You can choose a random position for the shape, but you can't *guarantee* that the position isn't *inside the danger zone*.

What you need to do is to *keep trying to position the shape randomly* until you find a space that *isn't in the danger zone*.

And that kind of description of a task is what a `while`-loop was born for...

```javascript
// The danger zone - cannot put the shape in here
const dangerZone = {
    x: 200,
    y: 200,
    size: 100
};

// Our hero! We want to place them on the canvas, but
// NOT in the danger zone
const hero = {
    x: undefined, // We don't know their x yet
    y: undefined, // We don't know their y yet
    size: 50
};

function setup() {
    createCanvas(400, 400);
    
    // Place the hero in a starting position
    // We'll also move them on mouse pressed
    placeHero();
}

/**
 * Display the zone and the hero
 */
function draw() {
    background(0);
    
    // Draw the danger zone
    push();
    fill(255, 0, 0);
    ellipse(dangerZone.x, dangerZone.y, dangerZone.size);
    pop();
    
    // Draw the hero
    push();
    fill(255, 255, 0);
    ellipse(hero.x, hero.y, hero.size);
    pop();
}

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

/**
 * Move the hero to a new position on mouse click
 */
function mousePressed() {
    placeHero();
}
```

## Summary

...


## }