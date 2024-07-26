# Arrays

## Modules

- *Introducing arrays*
- *Basic arrays in practice*
- *Introducing `for...of`*
- *`for...of` in practice*
- *Changing arrays*

## Challenges

## 🔥 Hot tip: Choosing random elements in arrays

Sometimes it could be really cool to choose a *random* element in an array, right? Like, say, a fortune! Well, it's pretty easy with `random()`!

```javascript
let fortunes = [
  "It's going to be okay.",
  "You will win $1.25 unexpectedly.",
  "Meh.",
  "You probably won't die today."  
];

// Put a random fortune (one of the four) into a variable
let randomFortune = random(fortunes);
```

Easy as that.

You can also do this a bit more *manually* using only JavaScript:

```javascript
// Get a random index in the array
let randomIndex = Math.floor(Math.random() * fortunes.length);
// Get the random element at the index
let randomFortune = fortunes[randomIndex];
```