# Data Challenge

Let's make sure we understand the key ideas of using *data* in JavaScript by using it in a miniature project.

As with all challenges, do this work *in pairs* and *in class*. This means you will both submit the same work and should work together on one computer to produce the project. You can take turns typing stuff in.

To start up you should:

1. Download the [template project](../../../templates/template-p5-project.zip)
2. Rename that folder, maybe to `data-challenge`
3. Put that folder in your `cart253` repository
4. Commit and push that change with a message like "Started the loops challenge"
5. Keep committing and pushing as you go along to practice your commit message writing

### 🔥 Do not do the challenge solo. 🔥
### 🔥 Do not do the challenge at home. 🔥
### 🔥 It is okay not to finish the challenge. 🔥
### 🔥 The main thing it to try hard and ask for help. 🔥
### 🔥 The 🌶️ steps are for people wanting to be ambitious 🔥
### 🔥 Try to spend 30-45 minutes maximum to save time for your other work 🔥

## Challenge

With your partner(s):

> Become a Car Designer

Our idea is going to be to choose a random car manufacturer and a random dinosaur name and join them together to generate a hypothetical new car name. We're also going to do a small bit of localization so this can be experienced in English or French.

### Step 1: Set up the example code
   
We're going to start with some example code for you to modify, so start paste the following code into your `script.js`:

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

// Starts with the instruction
let carName = "Click to generate a car name.";

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
    text(carName, width / 2, height / 2);
    pop();
}

/**
 * Generate a new car name
 */
function mousePressed() {

}
```

### Step 2: Download your data

First, we're going to need some data. If you want to follow along with the idea here then you should go and download the following from Darius Kazemi's corpora project:

- [cars.json](https://github.com/dariusk/corpora/blob/master/data/corporations/cars.json)
- [dinosaurs.json](https://github.com/dariusk/corpora/blob/master/data/animals/dinosaurs.json)

Copy your two JSON files into your project in the `assets/data` folder (create it if you haven't already).

🌶️ If you want to mash up something different, go ahead! Sport + Architecture? Cats + Books? Films + Governments? The world is your oyster.

### Step 3: Load your data

Add a `preload()` function to load the two data files into the provided data variables.

### Step 4: Use your data

In the `mousePressed()` function, change `carName` to be a random car manufacturer and a random dinosaur combined together. (You may want to load your two random elements into variables first, then construct your new string by adding them together with `+`.)

Try it out: when you click you should see a (terrible) new car name each time.

You're done! (Only do the rest of the challenge if feeling spicy!)

🌶️ Feel free to get more ambitious by combining in other words and emojis as you wish!

### 🌶️ Step 5: Create a language localization data file (optional)

Right now our program is only in English, but it would be cool if it could be in French as well. We'd only need to change the instructions, but to be clever we want to create a lanugage JSON file.

Create a new file in your data folder called `lang.json` and write JSON that allows you to specify the English and French versions of your *instructions*. Create a property called `instructions` and inside it store an object with two properties, `en` and `fr`, each of which has the correct instructions in that language.

Include a `description` property in your file too as good practice.

### 🌶️ Step 6: Load your language data (optional)

Create a new language data variable (`langData`?) and load your new file into it in `preload()`.

### 🌶️ Step 7: Use your language data (optional)

Create one more variable at the top of your script called `lang` and assign `"en"` or `"fr"` to it, depending on the language you want to see. 

In `setup()` set `carName` to the appropriate instructions using your data and the `lang` variable. You *could* use an if-statement for this, e.g.

```javascript
if (lang === "fr") {
    carName = langData.instructions.fr;
}
else if (lang === "en") {
    carName = langData.instructions.en;
}
```

But even better is to use a neat trick with JS object properties:

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

You can use this trick to access the correct version of the instructions via the `lang` variable. (That is, you can access `langData.instructions[lang]`!)

All going to plan, you will see the correct language appear when you set `lang` to `en` or `fr`. Localized!

## References

- The course materials
- [The p5 reference](https://p5js.org/reference/)

## Evaluation

When you're finished, show the instructor or teaching assistant your work and they will confirm you've passed the challenge and can submit it on the Moodle.

This challenge is pass/fail and is worth 1% of your final grade.

## Submission

Once you're cleared to submit, go to the Moodle and both submit your work. You should **all separately submit**:

- Your names
    - The link to the repository on GitHub (e.g. https://github.com/pippinbarr/cart253/topics/loops/loops-challenge/)
    - The link to the website version on GitHub Pages (e.g. https://pippinbarr.github.io/cart253/topics/loops/loops-challenge/)
    
*Note*: It's fine if the project is only in one of your repositories, but it's not a bad idea to make sure you *both* have it for your own reference.
