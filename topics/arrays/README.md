[Home](../../) / [🗓 Schedule](../../schedule) / [🛠 Examples](../../examples/) / [💫 Guides](../../guides/) / [💎 Resources](../../resources.md)

# 🗄 Arrays {

✨ Arrays are an incredibly powerful *data structure* that allow us to keep a bunch of related data *all together in one place*. As an added bonus, they also allow us to store all that data *in order* if that matters to us. They unlock the abilitity to have *much more going on* in a program. ✨

## Learning objectives

- Understanding the structure of an array

## Template

- [template-p5-project.zip](../../templates/template-p5-project.zip)

## Modules

- *Introducing arrays*
  - Watch the video on Moodle
  - Read the [Introducing arrays notes](./introducing-arrays.md)
- *Basic arrays in practice*
  - Watch the video on Moodle
  - Read the [Sequential arrays in practice notes](./sequential-arrays-in-practice.md)
- *Introducing `for...of`*
  - Watch the video on Moodle
  - Read the [Introducing `for...of` notes](./introducing-for-of.md)
- *`for...of` in practice*
  - Watch the video on Moodle
  - Read the [`for...of` in practic notes](./for-of-in-practice.md)
- *Changing arrays*
  - Watch the video on Moodle
  - Read the [Changing arrays notes](./changing-arrays.md)

## Examples

- ...

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