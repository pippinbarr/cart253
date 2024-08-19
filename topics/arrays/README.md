# 🗄 Arrays {

✨ ... ✨

## Learning objectives

- ...

## Template

- [template-p5-project.zip](../../templates/template-p5-project.zip)

## Modules

- *Introducing arrays*
  - Watch the video on Moodle
  - Read the [Introducing arrays notes](./introducing-arrays.md)
- *Basic arrays in practice*
  - Watch the video on Moodle
  - Read the [Basic arrays in practice notes](./sequential-arrays-in-practice.md)
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

## }