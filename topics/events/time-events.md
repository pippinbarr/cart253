# Time events {
   
Perhaps the most fundamental kind of event is just waiting for an amount of time before doing something, a timer!

## In this module

- A traffic light
- `setTimeout()`
- Changing the light once
- `setInterval()`
- Changing the light over and over
- Other time events

## A stoplight

Let's make a (very primitive) traffic light:

```javascript
// The traffic light
const trafficLight = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    fill: "#00ff00", // Starts green
    fills: {
        stop: "#ff0000", // Red
        slow: "#ffbb00", // Orange
        go: "#00ff00" // Green
    },
    delay: 1000 // How long between lights
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Display the traffic light
 */
function draw() {
    background(0);
    
    // Traffic light
    push();
    noStroke();
    fill(trafficLight.fill);
    ellipse(trafficLight.x, trafficLight.y, trafficLight.size);
    pop();
}
```

Now, this is a great traffic light, but perhaps a little bit redundant if it's always green! We need it to change colours after a while to regulate the traffic.

That means we need an *event* to occur after a set time, and when that event happens we want to *change the light*.

## `setTimeout()`

In JavaScript we mostly use `setTimeout()` for this. Note that this works in *JavaScript* in general, not just in p5. 

`setTimeout()` works like this:

```javascript
setTimeout(eventHandlerFunction, delayInMilliseconds);
```

That is, it's a function that takes *two arguments*:

- `eventHandlerFunction` is the name of the function that should be called *when the event happens* - that is, when the timer goes off
- `delayInMilliseconds` is how long to wait, in *milliseconds*, before calling the `eventHandlerFunction`

## Changing the light once

With `setTimeout()` we can make our light change from green to red after a while!

Where should we put our `setTimeout()`? Well we *shouldn't* put it in `draw()` because that would be like setting a new timer every frame. Like, we would be setting 30 timers every second and then they'd all go off one after the other! Not how a traffic light works.

Really we only want to start the timer *once*, and for that we should use `setup()`.

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

## Changing the light over and over

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

- [`requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame) which will trigger its event hander function ever frame of animation on the webpage (guess what? this is how `draw()` works in p5!)

It's a bit unlikely you'll want this one while working with p5, but worth knowing it exists.

## Summary

...

## }