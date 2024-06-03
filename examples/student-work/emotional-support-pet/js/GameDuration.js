class GameDuration {
    constructor() {
        this.playDuration = null;
        this.state = "prompt";
        this.backgroundImage = loadImage("assets/images/tiles.png"); // Background image
        this.bubbleImage = loadImage("assets/images/bubble.png"); // bubble image
        this.buttonImage = loadImage("assets/images/button.png"); // button image

    }

    //Displays the question and the two options 
    prompt() {
        // Use the loaded background image
        background(this.backgroundImage);
        // Display the two bubble images for the background of the text
        image(this.bubbleImage, width / 2 - 250, height / 2, 200, 200);
        image(this.bubbleImage, width / 2 + 50, height / 2, 200, 200);
        // Display the buttun image behind teh text
        image(this.buttonImage, width / 2 - 500, height / 2 - 320, 1000, 370);

        //Display the title and the options text
        textSize(30);
        textAlign(CENTER, CENTER);
        fill(0);
        text("How long do you want to play the anxiety game?", width / 2, height / 2 - 130);
        textSize(25);
        text("30 seconds", width / 2 - 150, height / 2 + 90);
        text("Unlimited", width / 2 + 150, height / 2 + 90);
    }

    //Check what the user selects in this state
    handleSelection() {
        if (
            mouseX > width / 2 - 250 &&
            mouseX < width / 2 - 50 &&
            mouseY > height / 2 &&
            mouseY < height / 2 + 200

        ) {
            this.playDuration = 30;
            console.log("Starting timer")
            anxietyGame.startTimer();
            state = "anxietyGame"; // Set the state to "anxietyGame" after handling the selection

        }
    }


    getDuration() {
        return this.playDuration;
    }

}
