# Introducing JavaScript Objects {
    
## In this module

- Multiple variables for one thing
- JavaScript Objects to the rescue
- JavaScript Objects forever
- Nested JavaScript Objects

## Multiple variables for one thing

Here's a program that draws my self-esteem on the canvas:

```javascript
// Colour of the sky
let skyRed = 150;
let skyGreen = 180;
let skyBlue = 250;

// The sun
// Colour
let sunRed = 255;
let sunGreen = 255;
let sunBlue = 0;
// Position and size
let sunX = 500;
let sunY = 70;
let sunSize = 100;

// My self-esteem
// Greyscale
let selfEsteemShade = 0;
// Position and size
let selfEsteemX = 320;
let selfEsteemY = 320;
let selfEsteemSize = 20;

function setup() {
  // Create the canvas
  createCanvas(640, 320);
}

function draw() {
  // A nice blue sky
  background(skyRed, skyGreen, skyBlue);
  
  // The sun
  push();
  fill(sunRed, sunGreen, sunBlue);
  noStroke();
  ellipse(sunX, sunY, sunSize);
  pop();
  
  // My self esteem
  push();
  fill(selfEsteemShade);
  noStroke();
  ellipse(selfEsteemX, selfEsteemY, selfEsteemSize);
  pop();
}
```

Good! Lots of variables!

But, one thing that is a tiny bit less good is that now that we're think about distinctive objects or ideas like "the sky", "the sun", and "my self esteem" it feels a bit wrong that they have to be made up of a bunch of *separate* variables.

It would be better if there was *one variable* for the sun, for example, that could contain *all* of the other variables.

Well now...

## JavaScript Objects to the rescue

JavaScript has exactly what we want in the form of JavaScript Objects. 

### Declaring and assigning a JavaScript Object

If we were to change our *sun* variables into a JavaScript object we could do this:

```javascript
let sun = {
  red: 255,
  green: 255,
  blue: 0,
  x: 500,
  y: 70,
  size: 100  
};
```

Now we have a *variable* called `sun` but inside it is a *JavaScript Object* with a set of named *properties* (`red`, `green`, etc.).

Another victory for readability! We don't have to keep writing the `sun` part of every single property name because it *is a property of the sun*.

A quick tour of the way we wrote this:

- `let` tells JavaScript we're going to declare a variable
- `sun` is the name of the variable
- `=` tells JavaScript we're going to assign a value to our variable
- (So far that's just the standard process for declaring *any* variable)
- `{ ... }` tells JavaScript we are creating a *JavaScript Object* and that we will put the *properties* of that object inside the curly brackets
- `red: 255,` declares one *property* of our object:
    - `red` is the *name of the property*
    - `:` tells JavaScript we're going to assign a value to our property
    - `255` is the value we are storing in the property
    - `,` tells JavaScript this property is finished
- And on we go with the other properties `green`, `blue`, `x`, `y`, and `size`
- `;` is how we end any instruction in JavaScript (and many other languages)

You can see that the way we declare the *properties* of a JavaScript Object is the same idea as declaring a *variable* except we use `:` to assign the value, and we use `,` to separate the different properties. (*Not* `;`.)

### Using a JavaScript Object

To actually use our JavaScript Object and its properties (instead of the variables we were using before) we do this:

```javascript
  // The sun
  push();
  fill(sun.red, sun.green, sun.blue);
  noStroke();
  ellipse(sun.x, sun.y, sun.size);
  pop();
```

Here you can see that we refer to the *properties* of a JavaScript objects by writing the *name of the variable* it's in, then a `.`, then the *name of the property*.

## JavaScript Objects forever

And that's it. So tidy! So organized!

From now on, any time you have a "object" (like a sun) or an "idea" (like my self-esteem) that can be thought of as having a bunch of different *properties* for you to use it in your program, you should *always use a JavaScript Object*.

So let's update our code:

```javascript
// Colour of the sky
let sky = {
  red: 150,
  green: 180,
  blue: 250
};

// The sun
let sun = {
  red: 255,
  green: 255,
  blue: 0,
  x: 500,
  y: 70,
  size: 100
};

// My self-esteem
let selfEsteem = {
  shade: 0,
  x: 320,
  y: 320,
  size: 20
};

function setup() {
  // Create the canvas
  createCanvas(640, 320);
}

function draw() {
  // A nice blue sky
  background(sky.red, sky.green, sky.blue);
  
  // The sun
  push();
  fill(sun.red, sun.green, sun.blue);
  noStroke();
  ellipse(sun.x, sun.y, sun.size);
  pop();
  
  // My self esteem
  push();
  fill(selfEsteem.shade);
  noStroke();
  ellipse(selfEsteem.x, selfEsteem.y, selfEsteem.size);
  pop();
}
```

More beautiful that ever!

## Nested JavaScript Objects

One last thing though! The properties of JavaScript objects can actually *contain another JavaScript Object*! Which sounds daunting, but really just means you can add a bit more structure to your data. For example we could separate out sun's colour out this way:

```javascript
// The sun
let sun = {
  colour: {
    red: 255,
    green: 255,
    blue: 0,        
  },
  x: 500,
  y: 70,
  size: 100
};
```

And then use the new approach to the colour like this:

```javascript
fill(sun.colour.red, sun.colour.green, sun.colour.blue);
```

Here you can see that because we have a JavaScript object in the `colour` property we use another `.` to refer to its properties.

You can keep doing this to any level of depth that is helpful! Learn to love being organized!!

## Summary
    
## }