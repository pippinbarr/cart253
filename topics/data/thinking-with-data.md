# Thinking with data {
    
A huge part of creating complex and interesting programs that remain *manageable* is understanding that we need to separate the *action* (all the code that runs and does cool stuff) from the *information* (the numbers, texts, and more than the code relies on). That information is better known as *data* and thinking with data will make our lives so, so much better.

## In this module

- Preparation
- Data
- Raw data!
- JavaScript Objects!
- Functions!
- Arrays of objects!
- Refining the data!
- And on and on!

## Preparation

1. Download the [Machines project](./examples/machines.zip)
2. Unzip it
3. Move the folder into your repository
4. Open the folder in VS Code
5. Commit and push the changes
    
## Data

It can be very tempting to just sit down and write our programs entirely based on what *happens*, but we really need to think about *information* that will help our program do its job more efficiently and clearly,

A big part of doing this is to make sure we separate the idea of the *data* (information) our program works with from the actual *instructions* the program performs (*using* that data).

Making this separation is a *huge* part of writing better programs that make us cry *way* less.

## Raw data!

Check out the example "Machines" project we're starting with. Here we're imagining writing a program where there are three machines of different types a user can use. Maybe they'll be dragging different items onto these machines to use them, say. Our first approximation of displaying the machines might be like this (we're going to use simple shapes of course).

Take a look at the code we have...

Well, it works and is a reasonable way to started even! We get to see the visual layout, make tweaks, etc.

*But*, it's very rigid. It's annoying to change anything. Note, for example, how all the machines have the same dimensions (for now), so if we change one we'll have to change them all.

If we want to add a new machine we'll have to write out all the same instructions. If we want to move a machine we have to find the line of code that draws it and remember which number is `x` and which is `y` and so on.

## JavaScript Objects!

Well, we know how to solve this sort of thing with JavaScript Objects! (And variables!) Each machine could be a JavaScript Object containing only the key information necessary and we could also store unchanging information like machine dimensions in constants.

```javascript
// In this program at least
const machineWidth = 100;
const machineHeight = 100;

let incinerator = {
    x: 0,
    y: 100,
    width: machineWidth,
    height: machineHeight,
    fill: "#ff4400",
};

let freezer = {
    x: 150, 
    y: 100,
    width: machineWidth,
    height: machineHeight,
    fill: "#bbbbff",
};

let crusher = {
    x: 300, 
    y: 100,
    width: machineWidth,
    height: machineHeight,
    fill: "#777777"
};

function setup() {
    createCanvas(400, 200);
}

function draw() {
    background(0);
    
    // Incinerator
    push();
    noStroke();
    fill(incinerator.fill);
    rect(incinerator.x, incinerator.y, incinerator.width, incinerator.height);
    pop();
    
    // Freezer
    push();
    noStroke();
    fill(freezer.fill);
    rect(freezer.x, freezer.y, freezer.width, freezer.height);
    pop();
    
    // Crusher
    push();
    noStroke();
    fill(crusher.fill);
    rect(crusher.x, crusher.y, crusher.width, crusher.height);
    pop();
}
```

Exactly the same output of course, but *much* more flexible.

Crucially, because we're now thinking in terms of the *data* about our machines:

- We have separated out the information about the machines (in the objects) from what we do with them (display them)
- We could change the width and height of the machines in one place
- Each aspect of a machine now has a name (the object property names like `x`, `y`, etc.) that we could change in an easy-to-find place
- And we now also name the machines themselves via the variables!

Also crucially: thinking in terms of data lets us see that our program is *repetitive*. The code to display each machine is *the same* other than the object we're doing it to. So...

## Functions!

Let's bring functions into the mix!

```javascript
const machineWidth = 100;
const machineHeight = 100;

let incinerator = {
    x: 0,
    y: 100,
    width: machineWidth,
    height: machineHeight,
    fill: "#ff4400",
};

let freezer = {
    x: 150, 
    y: 100,
    width: machineWidth,
    height: machineHeight,
    fill: "#bbbbff",
};

let crusher = {
    x: 300, 
    y: 100,
    width: machineWidth,
    height: machineHeight,
    fill: "#777777"
};

function setup() {
    createCanvas(400, 200);
}

function draw() {
    background(0);
    
    drawMachine(incinerator);
    drawMachine(freezer);
    drawMachine(crusher);
}

function drawMachine(machine) {
    push();
    noStroke();
    fill(machine.fill);
    rect(machine.x, machine.y, machine.width, machine.height);
    pop();
}
```

Again exactly the same outcome, but 

- Our code is *much* more readable
- The information (data) about the machines is up the top, easily editable 
- The code that draws the machines is now all in a *single function*, again easily editable and less likely to break

Doing this reveals *another* use of data. We're doing the *same thing* to each machine: calling `drawMachine()` with the machine as an argument.

That should immediately make us think "I can put them in an array and do this with a loop!"

## Arrays of objects!
   
So, let's create an array of machines for this reason:

```javascript
const machineWidth = 100;
const machineHeight = 100;

// An array of machines data
let machines = [
    {
        x: 0,
        y: 100,
        width: machineWidth,
        height: machineHeight,
        fill: "#ff4400",
    },
    {
        x: 150, 
        y: 100,
        width: machineWidth,
        height: machineHeight,
        fill: "#bbbbff",
    },
    {
        x: 300, 
        y: 100,
        width: machineWidth,
        height: machineHeight,
        fill: "#777777"
    }
];

function setup() {
    createCanvas(400, 200);
}

function draw() {
    background(0);
    
    // Go through the machine in the array and draw them
    for (let machine of machines) {
        drawMachine(machine);
    }
    
}

function drawMachine(machine) {
    push();
    noStroke();
    fill(machine.fill);
    rect(machine.x, machine.y, machine.width, machine.height);
    pop();
}
```

Same output!! But again simpler. It might help to visualize how much easier this makes it to *add* and *remove* machines, which could be important! 

Also, imagine using the original code to draw even 5 machines. Awful. Whereas now we just add machine data to the array and that's that!

Now, though, our data is feeling a bit too simple. In particular we have *lost* the idea of the *types* of machines we used to have in the variable names like `incinerator`. That information seems important (down the line we probably want the incinerator to burn things and the freezer platform to freeze them etc.), so let's get that idea back.

```javascript
const machineWidth = 100;
const machineHeight = 100;

// An array of machines data
let machines = [
    {
        type: "incinerator",
        x: 0,
        y: 100,
        width: machineWidth,
        height: machineHeight,
        fill: "#ff4400",
    },
    {
        type: "freezer",
        x: 150, 
        y: 100,
        width: machineWidth,
        height: machineHeight,
        fill: "#bbbbff",
    },
    {
        type: "crusher",
        x: 300, 
        y: 100,
        width: machineWidth,
        height: machineHeight,
        fill: "#777777"
    }
];
```

We don't necessarily *use* `type` yet, but it's clearly an important part of what a machine is and does, so it makes sense to include it. It will enable us to distinguish the different machines and have our program *act* differently depending on the machine in question.

## And on and on!

As we go on, we'll discover more and more ideas about machines that we can express in their data and work with in the instructions of the program. Maybe some of them can be pushed around and we should add a `pushable` property that can be `true` or `false`. Maybe they break down over time and we should add a `functionality` property that starts at `100` and gradually degrades to `0`.

If we can keep trying to *think in terms of data* our programs will always be better for it.

## Summary

Making sure that we come up with sensible and helpful ways of structuring the *data* of our program will make our programs vastly easier to work with, much less likely to break, and capable of truly great things.
    
## }