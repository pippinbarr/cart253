# Thinking with data {
    
Inspire

## In this module

- Data
- Raw data!
- JavaScript Objects!
- Functions!
- Arrays of objects!
- Refining the data!
- And on and on!

## Data

It can be very tempting to just sit down and write our programs entirely based on what *happens*, but we really need to think about *information* that will help our program do its job more efficiently and clearly,

A big part of doing this is to make sure we separate the idea of the *data* (information) our program works with from the actual *instructions* the program performs on that data.

Making this separation is a *huge* part of writing better programs that make us cry *way* less.

## Raw data!

Let's imagine we're writing a program where there are three platforms of different types a charater can jump on. Our first approximation of displaying the platforms might be like this:

```javascript
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    
    // Rock platform
    push();
    noStroke();
    fill("#666666");
    rect(50, 300, 40, 10);
    pop();
    
    // Ice platform
    push();
    noStroke();
    fill("#bbbbff");
    rect(150, 200, 40, 10);
    pop();
    
    // Fire platform
    push();
    noStroke();
    fill("#ff4400");
    rect(250, 100, 40, 10);
    pop();
}
```

This works and is a reasonable way to start even! We get to see the visual layout, make tweaks, etc.

*But*, it's very rigid. It's annoying to change anything. Note, for example, how all the platforms have the same dimensions, so if we change one we'll have to change them all.

If we want to add a platform we'll have to just write out all the same instructions. If we want to move a platform we have to find the line of code that draws it and remember which number is `x` and which is `y`.

## JavaScript Objects!

Well, we know how to solve this sort of thing with JavaScript Objects! (And variables!) Each platform could be a JavaScript Object containing only the key information necessary and we could also store unchanging information like platform dimensions in constants.

```javascript
// In this program at least
const platformWidth = 40;
const platformHeight = 10;

let rockPlatform = {
    x: 50,
    y: 300,
    fill: "#666666"
};

let icePlatform = {
    x: 150, 
    y: 200,
    fill: "#bbbbff"
};

let firePlatform = {
    x: 250, 
    y: 100,
    fill: "#ff4400"
};

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    
    // Rock platform
    push();
    noStroke();
    fill(rockPlatform.fill);
    rect(rockPlatform.x, rockPlatform.y, platformWidth, platformHeight);
    pop();
    
    // Ice platform
    push();
    noStroke();
    fill(icePlatform.fill);
    rect(icePlatform.x, icePlatform.y, platformWidth, platformHeight);
    pop();
    
    // Fire platform
    push();
    noStroke();
    fill(firePlatform.fill);
    rect(firePlatform.x, firePlatform.y, platformWidth, platformHeight);
    pop();
}
```

Exactly the same output of course, but *much* more flexible.

Crucially, because we're now thinking in terms of the *data* about our platforms:

- We have separated out the information about the platforms (in the objects) from what we do with them (display them)
- We could change the width and height of the platforms in one place
- Each aspect of a platform now has a name (the object property names like `x`, `y`, etc.) that we could change in an easy-to-find place

Also crucially: thinking in terms of data lets us see that our program is *repetitive*. The code to display each platform is *the same* other than the object we're doing it to. So...

## Functions!

Let's bring functions into the mix!

```javascript
let platformWidth = 40;
let platformHeight = 10;

let rockPlatform = {
    x: 50,
    y: 300,
    fill: "#666666"
};

let icePlatform = {
    x: 150, 
    y: 200,
    fill: "#bbbbff"
};

let firePlatform = {
    x: 250, 
    y: 100,
    fill: "#ff4400"
};

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    
    drawPlatform(rockPlatform);
    drawPlatform(icePlatform);
    drawPlatform(firePlatform);
}

function drawPlatform(platform) {
    push();
    noStroke();
    fill(platform.fill);
    rect(platform.x, platform.y, platformWidth, platformHeight);
    pop();
}
```

Again exactly the same outcome, but 

- Our code is *much* more readable
- The information (data) about the platforms is up the top, easily editable 
- The code that draws the platforms is now all in a *single function*, again easily editable and less likely to break

Doing this reveals *another* use of data. We're doing the *same thing* to each platform: calling `drawPlatform()` with the platform as an argument.

That should immediately make us think "I can put them in an array and do this with a loop!"

## Arrays of objects!
   
So, let's create an array of platforms for this reason:

```javascript
let platformWidth = 40;
let platformHeight = 10;

// An array of platform data
let platforms = [
    {
        x: 50,
        y: 300,
        fill: "#666666"
    },
    {
        x: 150, 
        y: 200,
        fill: "#bbbbff"
    },
    {
        x: 250, 
        y: 100,
        fill: "#ff4400"
    }
];

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    
    // Go through the platforms in the array and draw them
    for (let platform of platforms) {
        drawPlatform(platform);
    }
    
}

function drawPlatform(platform) {
    push();
    noStroke();
    fill(platform.fill);
    rect(platform.x, platform.y, platformWidth, platformHeight);
    pop();
}
```

Same output!! But again simpler. It might help to visualize how much easier this makes it to *add* and *remove* platforms, which could be important! 

Also, imagine using the original code to draw even 10 platforms. Awful. Whereas now we just add platform data to the array and that's that!

Now, though, our data is feeling a bit too simple. In particular we have *lost* the idea of the *types* of platforms we used to have in the variable names like `icePlatform`. That information seems important (down the line we probably want the ice platform to be slippery and the fire platform to burn etc.), so let's get that back.

```javascript
let platforms = [
    {
        type: "rock",
        x: 50,
        y: 300,
        fill: "#666666"
    },
    {
        type: "ice",
        x: 150, 
        y: 200,
        fill: "#bbbbff"
    },
    {
        type: "fire",
        x: 250, 
        y: 100,
        fill: "#ff4400"
    }
];
```

We don't necessarily *use* `type` yet, but it's clearly an important part of what a platform is and does, so it makes sense to include it.

## And on and on!

As we go on, we'll discover more and more ideas about platforms that we can express in their data and work with in the instructions of the program. If we can keep trying to *think in terms of data* our programs will always be better for it.

## Summary

...

    
## }