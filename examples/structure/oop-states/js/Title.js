// Title
// A state representing the Title of our program
// Displays the title on the screen and switches to
// Animation on a key press.

// NOTE: We extend the State class to guarantee this class will have
// the key methods that we call in the main program,
// draw() and keyPressed() in this case.
class Title {

  // constructor()
  // Acts as the setup() of the state, called when the
  // state is created. Sets the title of the program.
  constructor() {
    // Set our property determining the title of the simulation
    this.titleString = "Life: A Metaphor";
  }

  // draw()
  // Called every frame in the main script. Handles what the title
  // state needs to do each frame, which is display the title.
  draw() {
    push();
    textSize(45);
    fill(33, 16, 97);
    textAlign(CENTER, CENTER);
    text(
      "Touch the Magical SeaShell To Make The Evil Octopus Dissapear!!!",
      width / 2,
      height / 2
    );
    image(imgseaShell, 600, 100, 250, 250);
    image(imgOctopus, 600, 500, 250, 250);
    pop();
  }



  // keyPressed()
  // Called by the main script when a key is pressed! Switches to the Animation state
  keyPressed() {
    // Switch to the animation state

    // NOTE how we do not need to check if the state is title,
    // because this class IS the title state

    // NOTE that we switch states by changing what kind of state object is in
    // the currentState variable from the main script. By putting a new Animation
    // state object into it, the program will start using the Animation class to
    // determine how to handle draw() and keyPressed()

    // NOTE that creating a new Animation object like this automatically calls its
    // constructor(), which therefore acts like setup(), called once when the state
    // starts.
    currentState = new Animation();
  }

  mousePressed() {

  }
}