# JSON {

JSON is a way that we can store our program's data in a *file* instead of in the program itself. This allows us to even further separate the *action* of our program's instructions from the *data* it works with. 

## In this module

* Preparation
* What is JSON?
* The JSON format
* Obtaining JSON data
* Loading JSON files
* Accessing the data

## Preparation

1. Download the [Tarot project](./examples/tarot.zip)
2. Unzip it
3. Move the folder into your repository
4. Open the folder in VS Code
5. Commit and push the changes

## What is JSON?

JSON stands for (**J**)ava(**S**)cript (**O**)bject (**N**)otation. It's a format for for writing data files in. The way we write a JSON file is very, very similar to JavaScript's object syntax. 

We can use JSON to store and access data relevant to our program in a separate file to the program itself. We can also access data in JSON format from websites that provide an API for this (this is a bit more advanced and we won't discuss it here).

JSON is great because it allows us to work with potentially huge amounts of data and keep that data **separate** from our actual program. Modularity! Reuse!

## The JSON format

Let's think about a **file** with JSON data in it. These files have the extension `.json` and they're just **plain text files** that are written according to the rules of the JSON format. Fortunately it's not terribly complex.

### A JSON object in a file

The main (and frankly best) option for JSON data in our file is to store it all inside an **object**, which allows us to use the standard form of **properties** (officially called **names** in JSON) and **values**. If we moved our data about the *machines* we were discussing in the previous model into a JSON file it would look like this:

[`machines.json`](./examples/machines.json)
```json
{
  "description": "Data about the machines our user can interact with",
  "machines": [
    {
        "type": "incinerator",
        "x": 0,
        "y": 100,
        "width": 100,
        "height": 100,
        "fill": "#ff4400"
    },
    {
        "type": "freezer",
        "x": 150, 
        "y": 100,
        "width": 100,
        "height": 100,
        "fill": "#bbbbff"
    },
    {
        "type": "crusher",
        "x": 300, 
        "y": 100,
        "width": 100,
        "height": 100,
        "fill": "#777777"
    }   
  ]
}
```

As you can see, this looks a *lot* like a standard JavaScript Object! It's a series of properties and values. In this case we have two top level properties:

- `description` is there to describe the nature of this data file (not necessary, but a useful thing to include)
- `machines` contains the array of machine data, identical to what we had in our program in the previous module

There are a couple of specific rules in JSON to remember:

* The **property names** (`description`, `machines`, `type`, etc.) **must be  in double quotes** (e.g. `"description"`, `"machines"`, `"type"`, etc.)
* The **values** in the properties are standard JavaScript values (e.g. numbers, strings, objects, arrays)
* You **cannot** have a comma after the final value in an object or array (e.g. a comma after the `fill` property's value would be an error)

### A JSON array in a file

The other option for JSON data in a file is that it is presented as an array. Such as this JSON data giving the names of (four) muppets...

`muppets.json`
```json
[
  "Grover",
  "Kermit",
  "Miss Piggy",
  "Animal"
]
```

Generally speak: just avoid this, it's better and easier to have the file contain an *object*, notably so you can include a "description" and so on.

## Obtaining JSON data

There are essentially two key ways to obtain JSON data for a project.

### Write it yourself

You can **write it yourself** to structure data that you're generating yourself and want to store in an organized format outside your code. Our `machines.json` is an example of this. It can often make otherwise messy or bloated programming much more structured and clear. It also forces you to think about your program in terms of code/action and data/information separately, which is healthy.

### Find it somewhere

You can **find existing JSON-formatted data**, such as in [Darius Kazemi's corpora](https://github.com/dariusk/corpora), and use it. This can be a great way to have new ideas, because data often tells a story or suggests a possible use...

*[tarot_interpretations.json](https://github.com/dariusk/corpora/blob/master/data/divination/tarot_interpretations.json) makes me think of a tarot reader with a creepy voice telling you you're going to meet the love of your life tomorrow...*

*[sports.json](https://github.com/dariusk/corpora/blob/master/data/sports/sports.json) makes me think of randomly generating sports names...*

*[objects.json](https://github.com/dariusk/corpora/blob/master/data/objects/objects.json) makes me think of a spy using them as a secret weapon...*

## Loading JSON files

Let's do some practical work now. We'll work in the [Tarot project]() we downloaded at the start.

### 1. Get a file

Before we can load a JSON file we're going to need... a JSON file. Let's grab [`tarot_interpretations.json`](https://github.com/dariusk/corpora/blob/master/data/divination/tarot_interpretations.json) from Darius Kazemi's corpora project. To get hold of it, we need to

1. View the "raw" version of the file (with the "Raw" button) because we want just the plain text of the data
2. Save the file to our computer.
3. Move the file into our project in `assets/data` (create the folder if needed)

Note that the `assets/data` location is just a suggestion, not a rule. If you have a different preference feel free to use that instead.

### 2. Load the file

Many libraries (including p5) provide functions for **loading** JSON data from a file. In p5, that function is called [`loadJSON()`](https://p5js.org/reference/#/p5/loadJSON).

The easiest way to use `loadJSON()` is, as with `loadImage()` and `loadSound()`, to put it in the `preload()` function so that you don't need to worry about **how long** a file takes to load.

Just as with the other `load` functions, when used in `preload()`, `loadJSON` will return a value we can store in a variable...

```javascript
// A global variable to store our data in
let tarot;

function preload() {
  // Used in preload, loadJSON will just return the data into our variable
  tarot = loadJSON("assets/data/tarot_interpretations.json");
}

function setup() {

}

function draw() {

}
```

Now when our program starts the `tarot` variable will have the data in it!

### 3. Access the data

The beauty of loading JSON in `preload()` is that it's just ready to use once our program starts in `setup()`.

Importantly, because the JSON format mirrors JavaScript, when we load the **object** in `tarot_interpretations.json` it will be stored as an **object** structured in exactly the same way in our `tarot` variable.

Now, if we want to access some specific part of the data, we'll need to understand the structure of the `tarot_interpretations.json` file.

## Accessing the data

### A simple example

The simplest piece of data in the file we could access is its `description` property, which is just a property of the main object. Because it's a property of the main object in the file, it will have been loaded as a property of the object in our `tarot` object.

So...

```javascript
// A global variable to store our data in
let tarot;

function preload() {
  // Used in preload, loadJSON will just return the data into our variable
  tarot = loadJSON("assets/data/tarot_interpretations.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Get the description in a variable by following the correct path through the tarot object
  let description = tarot.description;

  // Display the meaning
  push();
  textSize(18);
  textAlign(CENTER);
  fill(255, 255, 0);
  text(description, width / 2, height / 2);
  pop();
}
```

### A more complex example

Let's try access to the **Fool** card's first "shadow meaning" and display it on the canvas.

Again, to do this, we need to be able to access that part of the data in our `tarot` variable. So, looking at the JSON we can see that we need to access it through...

* `tarot_interpretations` (the property all the cards are in, containing an array of objects)
* `[0]` (we want the object at position `0` in the array because that's the Fool card)
* `meanings` (within that object we want the `meanings` property which contains different kinds of meanings as properties)
* `shadow` (we want to access the shadow meaning property, which contains an array of potential shadow meanings as strings)
* `[0]` (we want the first shadow meaning, which is the first element in the array)

So to access this and display it in our code we need...

```javascript
// A global variable to store our data in
let tarot;

function preload() {
  // Used in preload, loadJSON will just return the data into our variable
  tarot = loadJSON("assets/data/tarot_interpretations.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Get the first shadow meaning into a variable by following the path through the tarot object
  let firstShadowMeaning = tarot.tarot_interpretations[0].meanings.shadow[0];

  // Display the meaning
  push();
  textSize(18);
  textAlign(CENTER);
  fill(255, 255, 0);
  text(firstShadowMeaning, width / 2, height / 2);
  pop();
}
```

All going to plan, we see "Being gullible and naive" on our canvas.

### A random fortune?

Now that we have some understanding of how the structure of the JSON corresponds to the object loaded into our variable, we can turn our mind toward doing more interesting things. Most obviously with `tarot_interpretations.json` we might want to pull out a random card from the "deck" and choose a random fortune to show to the user...

To get a **random card** we'll need to select one from the array in the `tarot_interpretations` property.

To get a **random fortune** from that specific card, we'll need to select one from its `fortune_telling` property.

```javascript
// A global variable to store our data in
let tarot;
// A global variable to store our fortune in
let fortune;

function preload() {
  // Used in preload, loadJSON will just return the data into our variable
  tarot = loadJSON("assets/data/tarot_interpretations.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Choose a random card
  let card = random(tarot.tarot_interpretations);
  // Choose a random fortune
  fortune = random(card.fortune_telling);
}

function draw() {
  background(0);

  // Display the fortune
  push();
  textSize(18);
  textAlign(CENTER, CENTER);
  fill(255, 255, 0);
  text(fortune, width / 2, height / 2);
  pop();
}
```

Hey presto, each time we load this program, we see a randomly selected fortune displayed.

## Summary

JSON is wonderful because

1. It gives us a standard format for creating data files we can use with our programs, rather than having our data cluttering up the `.js` files themselves. **Modularity! Reuse!**
2. We can find JSON-formatted data out in the wild that we can incorporate into our programs, including files like those in [Darius Kazemi's corpora project](https://github.com/dariusk/corpora/).

The key skills we need in order to be able to participate in this wonderful world are

1. The ability to read and write the JSON format itself. Not very different from understanding JavaScript objects and arrays.
2. The ability to load JSON data into our program. In p5 we use `loadJSON()` for this.
3. The ability to access the loaded data by following the paths of properties and array indexes to the correct value(s). No different to accessing any JavaScript object or array in any program.

It's a wonderful and dataful world out there. Time to play!


# }
