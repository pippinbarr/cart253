# Functions with return values {
  
The other super-power of functions is that along with *receiving* information via their *parameters* they can also *send* information back by using a *return statement*. This allows us to use functions to perform calculations, create new objects, and more!

## In this module

- Preparation
- We have seen return values
- Writing a function with a return value
- Calling a function with a return value

## Preparation

1. Download the [template project](../../templates/template-p5-project.zip)
2. Unzip it
3. Rename the folder to `functions-with-return-values`
4. Move the folder into your repository
5. Open the folder in VS Code
6. Give the program a title in `index.html` (maybe "Functions with return values")
7. Commit and push the changes

## We have seen return values

We have already used functions with return values. `random()` is a good example: when we call it it *returns* a random number to us, and we do something with that number:

```javascript
function setup() {
  createCanvas(400, 400);
  // Slowing down the frame rate to avoid any seizures
  frameRate(2);
}

function draw() {
  // Ask random() for a random number between 0 and 255
  // and assign it to a variable
  let randomBackgroundShade = random(0, 255);
  // Use the variable with the random number
  background(randomBackgroundShade);
}
```

So, `random()` is special because it doesn't just go off and *do* something, it also *gives something back*. We might like to do that too sometimes.

## Writing a function with a return value

For simplicity, let's write a function than adds two numbers together:

```javascript
/**
 * Adds the two parameters together and returns the result
 */
function add(a, b) {
  let result = a + b;
  return result;
}
```

Important notes:

- This is a function with *parameters* because we need to provide the two numbers we want to add!
- We calculate the result (`a + b`) and store it in a variable
- On the final line of the function we *return* the value in our `result` variable by using the special `return` reserved word. That's what sends the result back out of the function (without it, nothing comes out)

## Calling a function with a return value
  
Now we can call our function, remembering that we need to *do something* with the return value. In this case let's just display the results on our additions on the canvas:

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Call add() with numbers and save the result
  let numbersSum = add(100, 90);
  // Display the result on the canvas
  // Note how we can add the variable into our text to print with +
  text("100 + 90 is " + numbersSum, 100, 100);
  
  // Define two variables to add together
  let x = 12;
  let y = 11;
  // Call add() with variables and save the result
  let variablesSum = add(x, y);
  // Display the result on the canvas
  text("x + y is " + variablesSum, 100, 200);
}

/**
 * Adds the two parameters together and returns the result
 */
function add(a, b) {
  let result = a + b;
  return result;
}
```

That's it! That's how this works. We can create functions that *calculate* or *create* a result now!

## Summary

Any time you find yourself writing some code that performs a calculation it's worth thinking to yourself whether it should be a *function* with a *return value* so that you can use that calculation in more than one place!
  
## }
