class AnxietyGame {
    constructor(tilesImage, bubbleImages, bubblePopSound, gameDuration) {
        this.backgroundImage = loadImage("assets/images/bathroom.png"); // Background image
        this.bubbleImages = bubbleImages; //Image of teh bubbles
        this.bubblePopSound = bubblePopSound; //The bubble popping sound
        this.bubbles = [];
        this.buttonImage = loadImage("assets/images/button.png"); // button image
        this.createBubbles();
    }

    //Starts the timer so the game will stop at the time the suer selected
    startTimer() {
        console.log(gameDuration.playDuration);
        setTimeout(() => {
            state = `emotions`;
        }, gameDuration.playDuration * 1000);
    }

    // Create individual bubble objects
    createBubbles() {
        for (let i = 0; i < 30; i++) {
            let bubble = new Bubble(random(width), height + random(20, height));
            this.bubbles.push(bubble);
        }
    }

    //Displays the anxiety game including the bubbles 
    display() {
        //use the loaded background image
        background(this.backgroundImage);
        // The image of the exit button
        image(this.buttonImage, width / 2 + 410, height / 2 - 330, 180, 180);

        // Display the title and the options text
        textSize(30);
        textAlign(CENTER, CENTER);
        fill(0);
        text("Exit", width / 2 + 500, height / 2 - 235);

        // Only check for mouse press when the mouse button is pressed
        if (mouseIsPressed) {
            this.mousePressed();
        }

        // Only create new bubbles if the game duration is not 30 seconds
        for (let bubble of this.bubbles) {
            //move teh bubbles
            bubble.move();
            //Display the bubbles
            bubble.display();

            // Check if the bubble is clicked
            if (bubble.isClicked()) {
                // Play the bubble popping sound effect
                this.bubblePopSound.play();
                // Reset the position of the clicked bubble
                bubble.x = random(width);
                bubble.y = height + random(20, height);
            }
        }

    }
    // Function to handle mouse press in the AnxietyGame state
    mousePressed() {
        // Check if the mouse is over the exit button
        if (
            mouseX > width / 2 + 410 &&
            mouseX < width / 2 + 590 &&
            mouseY > height / 2 - 330 &&
            mouseY < height / 2 - 150
        ) {
            // Handle the exit button click (transition back to emotions state)
            this.handleMousePress();
        }
    }

    handleMousePress() {
        state = "emotions"; //If mouse is pressed change state to emotions
    }
}

