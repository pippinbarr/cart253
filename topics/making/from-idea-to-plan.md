# From idea to plan {
   
So you have an idea for your project, but now you have to think about how to actually make it. This calls for starting to think both in terms of the *experience* you want to create as well as *how that translates to programming*. So let's think about how to turn an idea into something more like a plan for program.

## In this module

- An idea
- An experience
- A detailed experience
- The things and their properties
- What needs to happen?

## An idea

Here's the idea we're going to pursue:

> A frog eating flies

Clearly this is pretty basic and there are a *ton* of ways you could think about this as a program. It could be an animation, it could be a game, it could be a simulation.

So we need to go from this basic idea to a more specific experience we want to create.

## An experience

Let's specify our experience further like this:

> The user controls a frog at the bottom of their screen and can trigger the frog's tongue to shoot out. A fly flies around on the screen and if the tongue hits the fly it gets eaten.

In doing this, we've already made some decisions about what is *in our experience* and also *what happens*. For instance:

- The frog is controlled by the user (could have been the fly, right?!)
- The frog is at the bottom of the screen (could have been to the side, could have been first-person, ...)
- The user controls the frog's tongue (could have been auto-tongue???)
- The frog can catch flies (perhaps obvious, but needs to be specified)

So even expanding our idea a *little bit* has led to much more clarity about what this project is. At this point we might even have early thoughts about how to do some of these things in code, like:

- Draw a frog (green cirlces?)
- Move a frog (position based on mouse? keyboard?)
- Move the fly (weird patterns? linear?)

And more. Our aim is to keep refining our project specification until it is more and more like a total explanation of everything that will need to be in our code.

## A detailed experience

So let's get more detailed by answering some questions like

- How does the user control the frog?
- How does the fly move?
- What happens if the user doesn't catch the fly?
- What do we see on the screen?

By asking those questions we can get even more specific:

> - The main character is a frog drawn out of shapes at the bottom of the screen, facing up
> - The user can move the frog left and right with their mouse position (`mouseX`, anyone?)
> - The user can shoot out the frog's tongue by clicking the mouse
> - The fly starts on the left side at a random height and moves to the right in a straight line
> - If the end of the tongue hits the fly, it is caught and resets to the left
> - If the fly reaches the righthand side it resets to the left

This is now a pretty good specification of something we could start to plan out in code! There are still things that are underspecified, like exactly what the frog and fly look like, or how fast the tongue moves, or the speed of the fly, but these are likely things we'll want to figure out once we're working on the code itself.

The next step would be to think about this more in terms of what needs to happen in the *program* version of this. Particularly thinking in terms of the key *things* we need to represent (in variables) and the things that will *happen* both at the beginning (in setup) and each frame (in draw).

## The things and their properties

It usually makes sense to identify anything in our experience we can think of as a coherent entity (like a frog or a fly) and to think about it as an object with specific, useful, properties.

So we have

### The frog

What will we need to know about the frog at its most basic (imagine it's just a circle for now perhaps):

- The position and size of the frog's body (which we want to move with the mouse)
- The position and size and speed of the frog's tongue
- Whether the tongue is idle (not moving), going out (outbound), or coming back (inbound) 
    - This is important because the tongue *acts differently* depending on what's happening
    - These sound a lot like *states* we'll want to keep track of

### The fly

The fly is simpler than the frog, it's really just a thing moving from left to right all the time, so we need:

- The position and size of the fly's body (which we want to move automatically each frame)
- The speed of the fly

### As objects and properties

So we could imagine something like this:

```
frog
    body
        x
        y
        size
    tongue
        x
        y
        size
        speed
        state
        
fly
    x
    y
    size
    speed
```

We should be able to translate this into code when the time comes.

## What happens

Thinking in terms of a p5 program, the most important things to think about are

- What happens right at the beginning (`setup()`)
- What happens every frame (`draw()`)
- What events are there? (like mouse pressed)

### What happens at the beginning

We probably don't need to do much here. We could just create the canvas?

1. Create the canvas

### What happens every frame

There's more to think about here! We have to think about:

- Moving and displaying the fly
- Moving and displaying the frog
- Moving and displaying the tongue
- Checking if the tongue hit the fly and responding

So lets write that down as a series of steps:

1. Draw the background (we usually do this in p5 after all)
2. Move and display the fly
    1. Move the fly by adding its speed to its x-coordinate
    2. Draw the fly as a black circle at its position
3. Move and display the frog
    1. Move the frog's x-coordinate to the current mouse position
    2. Draw the frog as a green circle at its position
4. Move and display the tongue
    1. Move the tongue
        1. If the tongue isn't moving, we don't really need to draw it
        2. If the tongue is outbound, move it up based on its speed
        3. If the tongue is inbound, move it down based on its speed
        4. If the tongue hits the top of the canvas, make it come back (inbound)
        5. If the tongue gets back to the frog's body, stop it moving (idle)
    2. Display the tongue
        1. Draw a red circle at the tongue's position
        2. Draw a thick red line from the circle back to the frog's body
5. Check the tongue
    1. Check if the tongue overlaps the fly
        1. If it does
            1. Move the fly back to the left (reset it)
            2. Make the tongue go back (inbound)
    
    
### Events

The main event we need to think about is the user clicking to send the tongue out.

1. If the user clicks
    1. Check if the tongue is not already moving (idle)
        1. If it's not, start it moving up (outbound)
    
## Summary

Well, now we have a pretty detailed plan of how to make this (admittedly not super-duper complicated) little froggy experience.

The next step (before starting our program) is to try to get even more specific about how the program will work by turning it into "pseudocode".
    
## }