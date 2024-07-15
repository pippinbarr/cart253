# Writing pseudocode {
    
We've made a pretty solid plan, but we can go further by writing out our plan as a "sort of" code. Here we try to express all the ideas in the plan using the ideas we know from programming, without worrying too much about the exact syntax stuff. Pseudocode.

## In this module

- Not an exact science
- The pseudocode

## Not an exact science

Writing pseudocode is by no means something you can do exactly right. The key, though, is that it should help you bridge from your *plan*, which is pretty a pretty specific explanation of how the program works, to your *program*, which is written in actual code. Pseudocode is a chance to think about the details.

## The pseudocode

Here's an example of how we might write a pseudocode version of the plan we've made. We can add in comments to help explain things too.

### Frog

```
frog
    body
        x: 320 // Halfway across a 640x480 canvas
        y: 480 // Bottom of a 640x480 canvas
        size: 100 // Diameter of the frog circle
    tongue
        x: undefined // This will always match the body
        y: 480 // Bottom of the canvas (inside the frog)
        size: 20 // Diameter of the tongue-tip circle (a guess)
        speed: 20 // How fast the tongue moves up and down
        state: idle // At the beginning the tongue isn't moving
```
 
You can see this is kind of "close" to a JavaScript Object, but not *exactly*. We didn't worry about the syntax with all the curly brackets and commas, we just tried to express what the frog is made up of in terms of properties and what would be in those properties. We also haven't specified how the state property really works, but it will probably be a string to begin with.

### Fly

```
fly
    x: 0 // Left side
    y: 200? // This needs to be random at some point
    size: 10 // Diameter of the fly's body (a guess)
    speed: 3 // How fast the fly moves to the right
```

Same thing. As you can see, too, some of these numbers are just total guesses. We'll know more when we actually write the program itself and we can change them then to figure out what really works.
    
### Setup

```
setup()
    Create a 640x480 canvas
```

Pretty basic! In reality we know we'll use `createCanvas()` for this, but in pseudocode we don't need to fixate on that detail.

### Draw

Looking at our plan it's pretty obvious we should break it down into smaller pieces, so let's do that now by writing some pseudocode function calls into this so it doesn't get so out of control

```
draw()
    Draw the background
    moveFly()
    drawFly()
    moveFrog() // including the tongue
    drawFrog() // including the tongue
    checkTongueFlyOverlap()
```

That's actually all our draw needs to do, but we'll need to further specify all most of those steps further as separate functions

### Move the fly

```
moveFly()
    add fly speed to fly x
    if (fly x is past the right side of the canvas)
        move fly to left side with a random y
```

You can see that this is *almost* real code, but with a bit of humanity left in it!

### Draw the fly

```
drawFly()
    draw a black circle at the fly's coordinates using its size
```

If only it were so easy.

### Move the frog

Moving the frog secretly involves moving *two* things, the frog and its tongue:

```
moveFrog()
    moveFrogBody()
    moveFrogTongue()
```

It's worth using this pseudocode moment to plan out a nicely structured program! So now we need those pseudo functions as well...

#### Move the frog's body

```
moveFrogBody()
    Set the frog body's x coordinate to the mouse's x position
```

That was nice and simple! We could use this moment to think about what happens when the mouse moves outside the canvas, but let's not worry about it!

#### Move the frog's tongue

```
moveFrogTongue()
    Set the tongue's x position to the body's x position
    if (the tongue's state is idle)
        Do nothing
    else if (the tongue's state is outbound)
        Move the tongue up by its speed
        if (the tongue has reached the top of the canvas)
            Set the tongue's state to inbound
    else if (the tongue's state is inbound)
        Move the tongue down by its speed
        if (the tongue has reached the bottom of the canvas)
            Set the tongue's state to idle
```

That's probably the most complicated part of our program because we need to think about the different *states* of the tongue

### Draw the frog

Drawing the frog isn't too complex because we're not being too ambitious with our representation...

```
drawFrog()
    Draw a green circle using the frog body's position and size
    Draw a red circle using the frog tongue's body and size
    Draw a red line between the tongue circle and the frog body
```

### Check for overlap

This is a really key moment in the program, where we figure out whether the tongue hit a fly

```
checkTongueFlyOverlap()
    if (the tongue and fly are overlapping)
        Move the fly back to the left with a random y
        Set the tongue's state to inbound
```

How would we figure out that condition "the tongue and fly are overlapping"? Looking ahead, we'd most likely calculate the *distance* between those two circles and check if it's small enough for them to overlap (something we've seen before).

### Events

We only have one kind of event, which is a mouse press:

```
mousePressed()
    if (the tongue's state is idle)
        Set the tongue's state to outbound
```

Surprisingly basic!

## Summary

That's our pseudocode - the bridge between our planning of how the program works, and the actual code we'll write. A lot of the time, and especially when we're tackling something difficult (which is everything when we're learning), this can be a great way to really think through how our program works.

See below for the full listing of the pseudocode.

## Full pseudocode

```
frog
    body
        x: 320 // Halfway across a 640x480 canvas
        y: 480 // Bottom of a 640x480 canvas
        size: 100 // Diameter of the frog circle
    tongue
        x: undefined // This will always match the body
        y: 480 // Bottom of the canvas (inside the frog)
        size: 20 // Diameter of the tongue-tip circle (a guess)
        speed: 20 // How fast the tongue moves up and down
        state: idle // At the beginning the tongue isn't moving
        
fly
    x: 0 // Left side
    y: 200? // This needs to be random at some point
    size: 10 // Diameter of the fly's body (a guess)
    speed: 3 // How fast the fly moves to the right
    
setup()
    Create a 640x480 canvas
    
draw()
    Draw the background
    moveFly()
    drawFly()
    moveFrog() // including the tongue
    drawFrog() // including the tongue
    checkTongueFlyOverlap()
    
moveFly()
    add fly speed to fly x
    if (fly x is past the right side of the canvas)
        move fly to left side with a random y
        
drawFly()
    draw a black circle at the fly's coordinates using its size

moveFrog()
    moveFrogBody()
    moveFrogTongue()
    
moveFrogBody()
    Set the frog body's x coordinate to the mouse's x position

moveFrogTongue()
    Set the tongue's x position to the body's x position
    if (the tongue's state is idle)
        Do nothing
    else if (the tongue's state is outbound)
        Move the tongue up by its speed
        if (the tongue has reached the top of the canvas)
            Set the tongue's state to inbound
    else if (the tongue's state is inbound)
        Move the tongue down by its speed
        if (the tongue has reached the bottom of the canvas)
            Set the tongue's state to idle
            
drawFrog()
    Draw a green circle using the frog body's position and size
    Draw a red circle using the frog tongue's body and size
    Draw a red line between the tongue circle and the frog body

checkTongueFlyOverlap()
    if (the tongue and fly are overlapping)
        Move the fly back to the left with a random y
        Set the tongue's state to inbound
        
mousePressed()
    if (the tongue's state is idle)
        Set the tongue's state to outbound
```

## }