// Ending
// Displays the ending message of the program.
class Ending {

  // constructor()
  // Acts as the setup() of the state, called when the
  // state is created. Sets the ending message of the program.
  constructor() {
    // Set our property determining the ending message of the simulation
    this.endingString = "Ah, mortality.";
  }

  // draw()
  // Called every frame in the main script. Handles what the ending
  // state needs to do each frame, which is display the ending message.
  draw() {
    background(0);

    push();
    fill(255, 0, 0);
    text(this.endingString, width / 2, height / 2)
    pop();
  }

  keyPressed() {
    currentState = new Title();
  }

  mousePressed() {

  }
}