# Hot tip: Sounds {
    
Sound can be a huge difference-maker in an interactive (or non-interactive!) experience. Let's at learn how to load and play sounds in p5.
    
## In this hot tip

- The basics of loading and playing a sound
- Don't play sounds in `draw()`
- AudioContext permission
    
## The basics
  
Loading and playing a sound is always the same process.

### Preparing the sound

Let's say you have a sound file called `bark.wav`. First, you:

1. Check that `bark.wav` isn't like 100MB. Remember that people are experiencing your work in their browser, they don't want to download GIGANTIC FILES
2. Put `bark.wav` in the `assets/sounds` folder of your project where it belongs

### Loading and playing the sound

Now the sound is in your project you can load it. We're going to write a function called `preload()` that we'll call in `setup()`. In it we will load our sound *into a variable*. That's right, a variable can contain a sound.


```javascript
// We need a variable to store our sound in so we can use it later
// "undefined" here means that there's nothing useful in the variable YET.
let barkSFX = undefined;

/**
 * Load our bark sound
 */
async function preload() {
    // This is how you load a sound!
    // Note that loadSound() needs the PATH to your sound inside your project
    // Note that the path is CASE SENSITIVE
    // Note that the filename is CASE SENSITIVE
    // Note the QUOTE MARKS around the path
    barkSFX = await loadSound("assets/sounds/bark.wav");
    // Note the use of "await" before we call loadSound() as well,
    // we need this because we're loading a file which takes time,
    // so our program needs to (a)wait the file!
    // It means the program will *pause* here until the file is loaded.

}

/**
 * setup() is run once at the start of our program.
 * 
 * Note that because we're loading files we put "async" in front of setup()
 * to show that it involves instructions that take variable time (loading).
 */
async function setup() {
    createCanvas(640, 480);
    
    // We call preload() to load our files and include "await" in front of
    // it so our program pauses until the preloading of the files is done.
    await preload();

}

function draw() {
    background(0);
}

function mousePressed() {
    // This is how you play a sound!
    // It will play EACH TIME the user clicks
    barkSFX.play();
}
```

And now the program barks when you click. Good dog.

## Don't play sounds in `draw()`

If you try to play your `barkSFX` sound in the `draw()` function, what's going to happen? It's going to be played *every frame*, which is a *lot of barking*. Too much barking. It's also almost never what you want.

So when we play a sound we usually need to play it in a spot where it will play *once*. Most often that's in response to a user input, like a click (`mousePressed()` above) or a keypress or a timer going off, etc.

Note that we *can* actually play a sound in `draw()` but only if the way the program works means it *won't play every frame*. Always something to think about.

## AudioContext permission

If you try to play a sound *before* any user input (like a mouse click or a key press) you will probably get a warning or error in the console telling you the sound was not allowed to play, something like:

```
The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page.
```

Browsers have this as a rule to stop webpages from being obnoxious and playing sounds without the user's permission.

So, as a general rule, you should always delay playing any sounds in your program until you *know* the user has clicked or pressed a key.

The easiest way to do that is to start your program with a screen that requires the user to click before they can continue. After that you can play all the sounds you want!

## Summary

Using `loadSound()` we can load a sound into a variable (or object property). Using `.play()` we can play the sound.

We will pay attention to *sound file sizes* and *sound file formats* to make sure they are appropriate.
    
## }