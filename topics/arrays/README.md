[Home](../../) / [🗓 Schedule](../../schedule) / [🛠 Examples](../../examples/) / [💫 Guides](../../guides/) / [💎 Resources](../../resources.md)

# 🗄 Arrays {

✨ Arrays are a powerful *data structure* that allow us to keep a bunch of related data *all together in one place*. As an added bonus, they also allow us to store all that data *in order* if that matters to us. They unlock the abilitity to have *multitudes* in a program (or to get fancy with data). ✨

## Learning objectives

- Understanding the structure of an array (a series of numbered boxes?!)
- Treating arrays as ordered lists
- Treating arrays as collections of related values
- Getting comfortable with manipulating arrays dynamically

## Template

- [template-p5-project.zip](../../templates/template-p5-project.zip)

## Modules

- *Introducing arrays*
  - [Watch the video](https://concordia.yuja.com/V/Video?v=1088798&node=6032684&a=103682281)
  - Read the [Introducing arrays notes](./introducing-arrays.md)
- *Sequential arrays in practice*
  - Download the [template project](../../templates/template-p5-project.zip)
  - [Watch the video](https://concordia.yuja.com/V/Video?v=1088803&node=6032697&a=20174771)
  - Read the [Sequential arrays in practice notes](./sequential-arrays-in-practice.md)
- *Introducing `for...of`*
  - Download the [Flies project](./examples/flies.zip)
  - [Watch the video](https://concordia.yuja.com/V/Video?v=1088802&node=6032692&a=147190846)
  - Read the [Introducing `for...of` notes](./introducing-for-of.md)
- *`for...of` in practice*
  - Download the [Flies flies project](./examples/flies-flies.zip)
  - [Watch the video](https://concordia.yuja.com/V/Video?v=1088797&node=6032673&a=18377488)
  - Read the [`for...of` in practice notes](./for-of-in-practice.md)
- *Changing arrays*
  - Download the [Flies flies flies Project](./examples/flies-flies-flies.zip)
  - [Watch the video](https://concordia.yuja.com/V/Video?v=1088794&node=6032617&a=68750880)
  - Read the [Changing arrays notes](./changing-arrays.md)
- *Debugging arrays*
  - Download the [Debugging Arrays Project](../../debugging/debugging-arrays.zip)
  - [Watch the video](https://concordia.yuja.com/V/Video?v=1088796&node=6032663&a=74693267)

## Examples

- [Moving Stones (Arrays)](https://editor.p5js.org/pippinbarr/sketches/zQgkBD1Y4)
- [Bug Squasher](https://editor.p5js.org/pippinbarr/sketches/cU8ZR2yv5)
- [Friends, Romans, Countrymen](https://editor.p5js.org/pippinbarr/sketches/wfDOLrIm13)
- [A trail](https://editor.p5js.org/pippinbarr/sketches/5wgSl1Uj7)

## Challenges

- Try the [Arrays challenges](MISSING_LINK) (We will review them in class)

## 🔥 Hot tip: Choosing a random element in an array

Sometimes it could be really cool to choose a *random* element in an array, right? Like, say, a fortune! Well, it's pretty easy with `random()`!

```javascript
const fortunes = [
  "It's going to be okay.",
  "You will win $1.25 unexpectedly.",
  "Meh.",
  "You probably won't die today."  
];

// Put a random fortune (one of the four) into a variable
let randomFortune = random(fortunes);
```

Easy as that.

You can also do this a bit more *manually* using only Plain JavaScript:

```javascript
const fortunes = [
  "It's going to be okay.",
  "You will win $1.25 unexpectedly.",
  "Meh.",
  "You probably won't die today."  
];

// Get a random index in the array
let randomIndex = Math.floor(Math.random() * fortunes.length);
// Get the random element at the index
let randomFortune = fortunes[randomIndex];
```

Or if you wanted to practice writing your own helper functions:

```javascript
const fortunes = [
  "It's going to be okay.",
  "You will win $1.25 unexpectedly.",
  "Meh.",
  "You probably won't die today."  
];

// Get the random element from the array
let randomFortune = getRandomElement(fortunes);

/**
 * Returns a random element from the provided array
 */
function getRandomElement(array) {
  // Calculate a random index in the array
  const randomIndex = Math.floor(Math.random() * array.length);
  // Return the element at that index
  return array[randomIndex];
}
```

## }