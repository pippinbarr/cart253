# Data challenges {
   
We're going to start with some example code for you to modify, so start a new p5 project and paste in the following program:

```javascript
/**
 * Terrible New Car
 * Pippin Barr
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let carData = undefined;
let dinosaurData = undefined;
let langData = undefined;
let lang = "fr";

let mainText = "Click to generate a car name.";

/**
 * Load the car and dinosaur data
 */
function preload() {

}

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 400);
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);

    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(32);
    text(mainText, width / 2, height / 2);
    pop();
}

/**
 * Generate a new car name
 */
function mousePressed() {

}
```
    
## Challenges

Our idea is going to be to choose a random car manufacturer and a random dinosaur name and join them together to generate a hypothetical new car name. We're also going to do a small bit of localization so this can be experienced in English or French.

### Challenge 1: Download your data

First, we're going to need some data. If you want to follow along with the idea here then you should go and download the following from Darius Kazemi's corpora project:

- [cars.json](https://github.com/dariusk/corpora/blob/master/data/corporations/cars.json)
- [dinosaurs.json](https://github.com/dariusk/corpora/blob/master/data/animals/dinosaurs.json)

If you want to mash up something different, go ahead! Sport + Architecture? Cats + Books? Films + Governments? The world is your oyster.

Copy your two JSON files into your project in the `assets/data` folder (create it if you haven't already).

### Challenge 2: Load your data

Add a `preload()` function to load the two data files into the provided data variables.

### Challenge 3: Use your data

In the `mousePressed()` function, change `mainText` to be a random car manufacturer and a random dinosaur added together. (You may want to load your two random elements into variables first, then construct your new string by adding them together.)

Try it out: when you click you should see a (terrible) new car name each time.

### Challenge 4: Create a language data file

Right now our program is only in English, but it would be cool if it could be in French as well. We'd only need to change the instructions, but to be clever we want to create a lanugage JSON file.

Create a new file in your data folder called `lang.json` and write JSON that allows you to specify the English and French versions of your instructions. Create a property called `instructions` and inside it store an object with two properties, `en` and `fr`, each of which has the correct instructions in that language.

Include a `description` property in your file too as good practice.

### Challenge 5: Load your language data

Create a new language data variable (`langData`?) and load your new file into it in `preload()`.

### Challenge 6: Use your language data

Create one more variable at the top of your script called `lang` and assign `"en"` or `"fr"` to it, depending on the language you want to see. 

In `setup()` set `mainText` to the appropriate instructions using your data and the `lang` variable. You *could* use an if-statement for this, but even better is to use a neat trick with JS object properties:

```javascript
const cat = {
    name: "Paws",
    legs: 3
};

// The usual way of accessing a property
let name = cat.name; // "Paws" will be in name

// A different way of accessing a property using square brackets
let name2 = cat["name"]; // "Paws" will be in name2

// An even cooler way of accessing a property using square brackets and a variable
let propertyName = "name";
let name3 = cat[propertyName]; // "Paws" will be in name3
```

You can use this trick to access the correct version of the instructions via the `lang` variable.

All going to plan, you will see the correct language appear when you set `lang` to `en` or `fr`. Localized!

## }