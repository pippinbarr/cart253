class Hello {
    constructor(petCustomization) {
        this.petCustomization = petCustomization;
        this.backgroundImage = loadImage("assets/images/naturecloseup.png"); // Background image for the greeting screen
        this.buttonImage = loadImage("assets/images/button.png"); // Image of the button
        this.petX = -300; // Initial x-coordinate off-screen to the left
        this.petY = height / 2 - 100; // Initial y-coordinate
        this.petSpeed = 7; // The speed of the pet's entrance
        this.petArrived = false; // Flag to track whether the pet has arrived
        this.words = ["Hello,", "I", "will", "be", "your", "emotional", "support", "pet!", "I", "will", "be", "accompanying", "you", "in", "your", "journey", "of", "feeling", "better!"];
        this.currentWordIndex = 0;
        this.displayedText = ""; // Text displayed above the pet's head
        this.typingSpeed = 200; // Speed of typing in milliseconds
        this.typingTimer = 0; // Timer to control typing speed
        this.showPressToStart = false; // Flag to track whether to display "Press mouse to start"
    }

    //Display method to show the greeting screen
    display() {
        // Display the background image
        background(this.backgroundImage);

        // Update the pet's x-coordinate to make it enter from the left
        if (!this.petArrived) {
            this.petX += this.petSpeed;
            // Check if the pet has reached the middle of the canvas
            if (this.petX >= width / 2 - 250) {
                this.petArrived = true;
            }
        }

        // Constrain the pet's position to the specified area
        this.petX = constrain(this.petX, -300, width / 2 - 250);

        // Display the chosen pet image
        image(this.petCustomization.chosenPet, this.petX, this.petY, 370, 370);

        // Display the text above the pet's head
        textSize(24);
        textAlign(CENTER, CENTER);
        fill(0);

        // Check if it's time to type the next word after the pet has arrived
        if (this.petArrived && millis() - this.typingTimer > this.typingSpeed && this.currentWordIndex < this.words.length) {
            this.displayedText += this.words[this.currentWordIndex] + " ";
            this.currentWordIndex++;
            this.typingTimer = millis();
        }

        text(this.displayedText, width / 2, height / 2 - 200);

        // Check if both sentences have been typed to display "Press mouse to start"
        if (this.currentWordIndex === this.words.length && !this.showPressToStart) {
            this.showPressToStart = true;
            textSize(20);
            text("Press mouse to start", width / 2 + 300, height / 2);
        } else if (this.showPressToStart) {
            image(this.buttonImage, width / 2 + 150, height / 2 - 125, 300, 250);
            textSize(20);
            text("Press mouse to start", width / 2 + 300, height / 2);
        }
    }

    // Handle mouse press to transition to the emotions screen
    handleMousePress() {
        if (this.showPressToStart) {
            state = "emotions";
        }
    }
}
