// A variable to store the currently active state object (starts empty)
let currentState;

// setup()
// Create the canvas, start our program in the title state, set default text style
function setup() {
  createCanvas(500, 500);

  // We can set the current state by creating a NEW object from the class
  // representing that state! This will call its constructor() which will work
  // like the `setup()` for that state.
  currentState = new Title();

  // Text settings
  textSize(32);
  textAlign(CENTER, CENTER);
}

// draw()
// Simply call the draw method of the current state
function draw() {
  // If the current state is Title this will call the Title class draw()
  // If the current state is Animation this will call the Animation class draw()
  // if the current state is Ending this will call the Ending class draw()
  currentState.draw();
}

// keyPressed()
// Call the keyPressed method of the current state
function keyPressed() {
  // If the current state is Title this will call the Title class keyPressed()
  // If the current state is Animation this will call the Animation class keyPressed()
  // if the current state is Ending this will call the Ending class keyPressed()
  currentState.keyPressed();
}

function mousePressed() {
  currentState.mousePressed();
}