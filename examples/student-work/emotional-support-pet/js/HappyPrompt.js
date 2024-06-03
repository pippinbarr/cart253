class HappyPrompt {
    constructor(petCustomization) {
        this.petCustomization = petCustomization;
        this.backgroundImage = loadImage("assets/images/naturecloseup.png");
        this.buttonImage = loadImage("assets/images/button.png"); // Image of the button
        this.sentences = [
            "I'm really glad to hear you are feeling happy!",
            "In that case, there is not much I can do for you.",
            "You can come back when you need my help."
        ];
        this.petY = height + 100; // Initial y-coordinate for the pet off-screen
        this.petSpeed = 8; // The speed of the pet's entrance
        this.showSentences = false; // Flag to track whether to display sentences
        this.showPressToStart = false; // Flag to track whether to display "Press mouse to start"
    }

    display() {
        // Display the background image
        background(this.backgroundImage);

        // Update the pet's y-coordinate to make it enter from the bottom
        if (this.petY > height / 2 - 100) {
            this.petY -= this.petSpeed;
        }

        // Display the chosen pet image in its current position
        image(this.petCustomization.chosenPet, width / 2 - 650, this.petY, 600, 600);

        // Display the text at the top center of the screen when the pet has reached its position
        if (this.petY <= height / 2 - 100) {
            this.showSentences = true;
        }

        if (this.showSentences) {
            textSize(24);
            textAlign(CENTER, CENTER);
            fill(0);

            for (let i = 0; i < this.sentences.length; i++) {
                text(this.sentences[i], width / 2, 100 + i * 50);
            }
            image(this.buttonImage, width / 2 + 300, height / 2 - 125, 200, 200);
            textSize(20);
            text("Exit", width / 2 + 400, height / 2 - 20);
        }
    }

    handleMousePress() {
        // Check if the mouse click is within the bounds of the "Exit" button
        if (
            mouseX > width / 2 + 200 &&
            mouseX < width / 2 + 500 &&
            mouseY > height / 2 + 100 &&
            mouseY < height / 2 - 400
        ) {
            state = "emotions";
        }
    }
}
