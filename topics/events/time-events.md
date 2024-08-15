# Time events {
   
Perhaps the most fundamental kind of event is just waiting for an amount of time before doing something, a timer!

## In this module

- Preparation
- A traffic light
- `setTimeout()`
- `setInterval()`
- Other time events

## Preparation

1. Download the [Traffic Light Project](./examples/traffic-light.zip)
2. Unzip it
3. Move the folder into your repository
4. Open the folder in VS Code
5. Commit and push the changes

## A traffic light

Let's start by looking at our template code.

Now, this is a great traffic light, but perhaps a little bit redundant if it's always green! Hmm, maybe it's quite dangerous... we need it to change colours after a while to regulate the traffic.

That means we need an *event* to occur after a set time, and when that event happens we want to *change the light*.

## `setTimeout()`

In JavaScript we mostly use `setTimeout()` for this. Note that this works in *JavaScript* in general, not just in p5. 

`setTimeout()` is called like this:

```javascript
setTimeout(eventHandlerFunction, delayInMilliseconds);
```

That is, it's a function that takes *two arguments*:

- `eventHandlerFunction` is the name of the function that should be called *when the event happens* - that is, when the timer goes off (notice we do *not* include the parentheses after this function name - we don't want to call it *immediately*)
- `delayInMilliseconds` is how long to wait, in *milliseconds*, before calling the `eventHandlerFunction`

### Changing the light once

With `setTimeout()` we can make our light change from green to red after a while!

Where should we put our `setTimeout()`? Well we *shouldn't* put it in `draw()` because that would be like setting a new timer every frame. Like, we would be setting 30 timers every second and then they'd all go off one after the other! Not how a traffic light works.

Really we only want to start the timer *once*, and for that we should call it in `setup()` (or plausibly in a `mousePressed()` or just somewhere else we can start it one time only).

```javascript
/**
 * Create the canvas and start the timer
 */
function setup() {
    createCanvas(400, 400);
    
    // Start the timer after the traffic light's delay
    setTimeout(changeLight, trafficLight.delay);
}
```

This will call the function `changeLight()` after the number of milliseconds in the traffic light's delay property, which is `1000` or *one second*.

But wait! We don't *have* a `changeLight()` function, so we need to define it and add it to the end of our program. It just needs to change the light's fill:

```javascript
/**
 * Changes the traffic light to red
 */
function changeLight() {
    trafficLight.fill = trafficLight.fills.stop;
}
```

Hey presto! The cars get one second to go and then they have to stop.

FOREVER!

Which is not how traffic lights work. Rather, they change repeatedly over time. So `setTimeout()` is really helpful (for all kinds of stuff!) but here we can improve things with...

## `setInterval()`

`setInterval()` is the same as `setTimeout()` except that the *timer* resets each time it goes off.

```javascript
setsetInterval(eventHandlerFunction, delayInMilliseconds);
```

So, again, it's a function that takes *two arguments*:

- `eventHandlerFunction` is the name of the function that should be called *each time the event happens* - that is, when the timer goes off (over and over)
- `delayInMilliseconds` is how long to wait, in *milliseconds*, before calling the `eventHandlerFunction` each time

### Changing the light over and over

Now we can replace our `setTimeout()` with a `setInterval()` to make the light change forever! Let's make it go from green to orange to red and back again, once every second. In `setup()` we can do pretty much the same thing:

```javascript
/**
 * Create the canvas and start the light cycle
 */
function setup() {
    createCanvas(400, 400);
    
    // Start the traffic light cycle
    setInterval(changeLight, trafficLight.delay);
}
```

And in `changeLight()` we need to be a bit more sophisticated and check what the light is currently each time we change it (to make the cycle):

```javascript
/**
 * Change the light through the cycle
 */
function changeLight() {
    // Green goes to orange
    if (trafficLight.fill === trafficLight.fills.go) {
        trafficLight.fill = trafficLight.fills.slow;
    }
    // Orange goes to red
    else if (trafficLight.fill === trafficLight.fills.slow) {
        trafficLight.fill = trafficLight.fills.stop;
    }
    // Red goes to green
    else if (trafficLight.fill === trafficLight.fills.stop) {
        trafficLight.fill = trafficLight.fills.go;
    }
}
```

And there we have it - a (still-pretty-bad) traffic light that cycles once every second between the three colours!

## Other time events

There's one other key time event you can use:

- [`requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame) which will trigger its event hander function on the next frame of animation on the webpage (guess what? this is how `draw()` works in p5!)

It's a bit unlikely you'll want this one while working with p5, but worth knowing it exists.

## Finishing up

1. Commit and push the changes you have made in this session with an appropriate commit message

## Summary

With `setTimeout()` and `setInterval()` we now have the power to call a function after an *arbitrary amount of time* which is *very often something we want to do*!

## }