# Hot tip: Images {
    
Sometimes you don't want to draw everything using elementary shape functions, sometimes you just want to display a cool image. `image()` has you covered.
    
## In this hot tip

- The basics of loading and displaying an image
- Using an image to display an object
    
## The basics
  
Loading and displaying an image is always the same process.

### Preparing the image

Let's say you have an image file called `bird.png`. First, you:

1. Check that `bird.png` isn't like 100MB. Remember that people are viewing your work in their browser, they don't want to download GIGANTIC FILES
2. Check that `bird.png` has appropriate dimensions for your canvas. No point loading a 1920x1080 image to display on a 640x480 canvas.
3. Put `bird.png` in the `assets/images` folder of your project

### Loading the image

Now the image is in your project you can load it. The simplest approach here is to include a function called `preload()` in your project. In it you will load the image *into a variable*. That's right, a variable can contain an image.

```javascript
// We need a variable to store our image in so we can use it later
// "undefined" here means that there's nothing useful in the variable YET.
let birdImage = undefined;

/**
 * Load our bird image
 */
function preload() {
    // This is how you load an image!
    // Note that loadImage() needs the PATH to your image inside your project
    // Note that the path is CASE SENSITIVE
    // Note that the filename is CASE SENSITIVE
    // Note the QUOTE MARKS around the path
    birdImage = loadImage("assets/images/bird.png");
}

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(0);
    
    // This is how you display an image!
    // The image will be drawn from its TOP LEFT CORNER like a rectangle
    // The arguments here are:
    // - birdImage <- The variable with the image in it
    // - 100 <- the x coordinate for the top left corner
    // - 50 <- the y coordinate for the top left corner
    // So the TOP LEFT CORNER of the bird image will be at (100, 50)
    image(birdImage, 100, 50);
}
```

And now there's a bird image on the canvas.

### Displaying from the centre

If you want to, you can display images based on the centrepoint of the image, too:

```javascript
push();
imageMode(CENTER);
// Now the CENTER of the bird image will be at (100, 50)
image(birdImage, 100, 50);
pop();
```

## Using an image to display an object

We're most often trying to keep all the properties of something like a bird together in one place, so we will probably want our bird image to be a property of an object:

```javascript
let bird = {
    // Position of the bird (where we will place the image)
    x: 100,
    y: 50,
    // The bird is going to move so it has velocity
    velocity: {
        x: 2,
        y: 1
    },
    // The image of the bird, which we will load in preload()
    image: undefined
};

function preload() {
    // Load the bird image into our bird object's image property
    bird.image = loadImage("assets/images/bird.png");
}

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(0);
    
    // Move the bird
    bird.x += bird.velocity.x;
    bird.y += bird.velocity.y;
    
    // Display the bird
    push();
    imageMode(CENTER);
    image(bird.image, bird.x, bird.y);
    pop();
}
```

The birdie! It's flying, mom!

## Summary

Using `loadImage()` in `preload()` we can load an image into a variable (or property). Using `image()` in `draw()` we can display the image. Using `imageMode(CENTER)` we can display images from their centrepoint.

We will pay attention to *image file sizes* and *image dimensions* to make sure they are appropriate.
    
## }