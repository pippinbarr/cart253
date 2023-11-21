// Animation
// Handles the actual animation sequence of the program. A circle
// moves from left to right across the screen. When it reaches the right
// side the program will switch to the Ending state.

class Simulation {

  // Acts as the setup() of the state, called when the
  // state is created. Creates a circle object and sets its
  // velocity.
  constructor() {
    this.fish = {
      x: 50,
      y: 250,
      w: 20,
      h: 20,
      headSizeK: 70,
      eyes: {
        size: 15,
        xOffset: 25,
        yOffset: 10,
      },
      tail: {
        size: 100,
        xOffset: 0,
        yOffset: -20,
        w: 15,
        h: 5,
      },
      arms: {
        xOffset: 40,
        yOffset: -50,
        w: 80,
        h: 70,
      },

      size: 100,
      vx: 0,
      vy: 0,
      speed: 3,
    };
    this.waterMaze = {
      wall1: {
        x: 120,
        y: 0,
        w: 100,
        h: 460,
      },
      wall2: {
        x: 220,
        y: 360,
        w: 260,
        h: 100,
      },
      wall3: {
        x: 340,
        y: 130,
        w: 260,
        h: 110,
      },
      wall4: {
        x: 500,
        y: 0,
        w: 100,
        h: 200,
      },
      wall5: {
        x: 590,
        y: 360,
        w: 400,
        h: 100,
      },
      wall6: {
        x: 590,
        y: 360,
        w: 110,
        h: 500,
      },
      wall7: {
        x: 900,
        y: 360,
        w: 110,
        h: 300,
      },
    };
    this.sand = {
      bank1: {
        x: 1150,
        y: 400,
        size: 35,
      },
      bank2: {
        x: 1100,
        y: 600,
        size: 60,
      },
      bank3: {
        x: 1400,
        y: 700,
        size: 20,
      },
      bank4: {
        x: 1300,
        y: 500,
        size: 20,
      },
      bank5: {
        x: 1250,
        y: 800,
        size: 20,
      },
      bank6: {
        x: 1400,
        y: 300,
        size: 20,
      },
    };
    this.shark = {
      b1: {
        x: 700,
        y: 100,
        w: 20,
        h: 60,
        size: 20,
        vx: 0,
        vy: 4,
        speed: 4,
        angle: 0,
        distance: 100,
      },
      b2: {
        x: 850,
        y: 100,
        w: 20,
        h: 60,
        size: 20,
        vx: 0,
        vy: 3,
        speed: 3,
        angle: 0,
        distance: 100,
      },
      b3: {
        x: 1000,
        y: 100,
        w: 20,
        h: 60,
        size: 20,
        vx: 0,
        vy: 5,
        speed: 5,
        angle: 0,
        distance: 100,
      },
    };
    this.home = {
      x: undefined,
      y: 450,
      size: 150,
    };

    this.shell = {
      x: undefined,
      y: 0,
      size: 150,
      active: true,
    };

    this.octopus = {
      x: undefined,
      y: 0,
      size: 150,
      active: true,
    };

    this.mine = {
      x: undefined,
      y: 0,
      size: 150,
    };


  }

  // draw()
  // Called every frame in the main script. Handles what the title
  // state needs to do each frame. It moves and displays the circle
  // and checks if it has reached the right hand side.
  draw() {

    image(imgHouse, 1450 / 2, 450, 150, 150);
    image(imgseaShell, imgseaShell.x, imgseaShell.y, 250, 250);
    image(imgOctopus);
    image(imgCoral, 0, 400, 500, 500);
    image(imgBubbles, 1100, 50, 300, 300);
    image(imgsoup);

    this.checkOffscreen();
    this.checkOverlap();
    this.display();
    this.movement();
    this.controlUser();
    this.checkOverlapshark();
    this.house();
  }


  keyPressed() {

  }
}