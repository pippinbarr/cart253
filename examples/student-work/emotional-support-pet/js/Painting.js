class Painting {
    constructor(petCustomization) {
        // Initialize the state and set up necessary assets
        this.state = "prompt"; // Initial state of the painting
        this.petCustomization = petCustomization; // The class that handles pet customization
        this.backgroundImagePrompt = loadImage("assets/images/room.png"); // Background image for the prompt state
        this.backgroundImagePainting = loadImage("assets/images/paintingbg.png"); // Background image for painting
        this.buttonImage = loadImage("assets/images/button.png"); // Image of the button
        this.rollerImage = loadImage("assets/images/roller.png"); // Image of roller to use as the mouse 
        this.wallImage = loadImage("assets/images/wall.png"); // Image of the wall which will be painted on
        this.nextButtonText = "Next"; // Text to be displayed on the button
        this.paintedSquares = []; // The squares that are used for the painting effect
    }

    display() {
        // Display different screens based on the current state
        if (this.state === "prompt") {
            this.displayPrompt();
        } else if (this.state === "painting") {
            this.displayPainting();
        }
    }

    displayPrompt() {
        // Display the initial prompt for the painting mini-game
        background(this.backgroundImagePrompt);
        image(this.petCustomization.chosenPet, width / 2 - 400, height / 2, 300, 300);
        image(this.buttonImage, width / 2 + 80, height / 2 + 80, 330, 220);
        textSize(25);
        textAlign(CENTER, CENTER);
        fill(0);

        // Display text based on the button state
        if (this.nextButtonText === "Next") {
            text('Painting is proven to release tension', width / 2, height / 2 - 90);
            text('and reduce feelings of anger.', width / 2, height / 2 - 60);
        } else {
            text("So why don't we try painting this wall to a new color?", width / 2, height / 2 - 75);
        }

        text(this.nextButtonText, width / 2 + 250, height / 2 + 190);
    }

    displayPainting() {
        // Display the new screen for the painting mini-game
        background(this.backgroundImagePainting);

        // Display the image of the wall which will be painted on
        image(this.wallImage, width / 2 - 550, height / 2 - 220, 1080, 410);

        // Draw previously painted squares
        fill(255, 186, 240); // Pink color
        noStroke();
        for (let i = 0; i < this.paintedSquares.length; i++) {
            let square = this.paintedSquares[i];
            rect(square.x, square.y, 70, 10); // The size of the square 
        }

        // Check if the mouse is inside the wall image area
        if (
            mouseX > width / 2 - 550 &&
            mouseX < width / 2 + 530 &&
            mouseY > height / 2 - 220 &&
            mouseY < height / 2 + 185
        ) {
            // Draw a new pink square at the current mouse position with an offset of 35 to the left and 5 to the top
            let newSquare = createVector(constrain(mouseX - 35, width / 2 - 550, width / 2 + 460), constrain(mouseY - 5, height / 2 - 220, height / 2 + 185));
            rect(newSquare.x, newSquare.y, 70, 10);
            this.paintedSquares.push(newSquare);

            // Draw additional squares between the current and previous mouse positions
            let numAdditionalSquares = 10; // number of additional squares
            let previousPoint = createVector(pmouseX - 10, pmouseY - 5);
            let currentPoint = createVector(constrain(mouseX - 10, width / 2 - 550, width / 2 + 460), constrain(mouseY - 5, height / 2 - 220, height / 2 + 185));

            for (let i = 0; i < numAdditionalSquares; i++) {
                let t = map(i, 0, numAdditionalSquares - 1, 0, 1);
                let inBetweenX = lerp(previousPoint.x, currentPoint.x, t) - 20;
                let inBetweenY = lerp(previousPoint.y, currentPoint.y, t) - 20; 
                rect(inBetweenX, inBetweenY, 70, 10);
                this.paintedSquares.push(createVector(constrain(inBetweenX, width / 2 - 550, width / 2 + 460), constrain(inBetweenY, height / 2 - 220, height / 2 + 185)));
            }
        }
        // Use the user's mouse position to display the roller image
        image(this.rollerImage, mouseX - 70, mouseY - 40, 150, 150);
        // Done button
        image(this.buttonImage, width / 2 + 300, height / 2 + 150, 200, 200);
        fill(0)
        text('Done', width / 2 + 400, height / 2 + 250);

        // Only check for mouse press when the mouse button is pressed
        if (mouseIsPressed) {
            this.mousePressed();
        }
    }

    mousePressed() {
        // Check if the mouse is pressed on the "Next" button
        if (
            mouseX > width / 2 + 220 &&
            mouseX < width / 2 + 370 &&
            mouseY > height / 2 + 150 &&
            mouseY < height / 2 + 240
        ) {
            // Toggle the state and update the button text 
            if (this.nextButtonText === "Next") {
                this.nextButtonText = "Click here to start";
            } else {
                // Handle the logic for changing the state to "painting"
                this.state = "painting";
            }
        }

        // Check if the mouse is pressed on the "Done" button
        if (
            mouseX > width / 2 + 300 &&
            mouseX < width / 2 + 500 &&
            mouseY > height / 2 + 150 &&
            mouseY < height / 2 + 350
        ) {
            // Handle the exit button click (transition back to emotions state)
            this.handleMousePress();

            // Reset any other necessary variables or states
            this.paintedSquares = []; // Reset the painted squares
            this.nextButtonText = "Next"; // Reset the button text
        }
    }
    handleMousePress() {
        state = "emotions"; // Transition back to emotions state if user clicked on exit
    }
}
