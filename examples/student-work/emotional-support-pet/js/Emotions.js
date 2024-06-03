class Emotions {
    constructor(petCustomization) {
        this.petCustomization = petCustomization; //The customized pet
        this.backgroundImage = loadImage("assets/images/nature.png"); //Load the background image
    }


    display() {
        //Background image for the emotions menu
        background(this.backgroundImage);
        //Display the chosen pet
        image(this.petCustomization.chosenPet, width / 2 - 400, height / 2 - 150, 400, 400);
        //Display the question
        textSize(28);
        textAlign(CENTER, CENTER);
        fill(0);
        text(`Which one of these best reflects how you're feeling right now? `, width / 2 + 50, height / 2 - 220);


        // Display button images and text using arrays
        for (let i = 0; i < 4; i++) {
            image(buttonImages[i], width / 2 + 100, height / 2 - 220 + i * 80, 270, 250);
            text(buttonText[i], width / 2 + 240, height / 2 - 90 + i * 80);
        }
    }

    handleMousePress() {
        if (this.isAnxiousOptionClicked()) {
            // Set the state to "promptDuration"
            state = "promptDuration";
        } else if (this.isDiscouragedOptionClicked()) {
            // Set the state to "positiveAffirmation"
            state = "positiveAffirmation";
        } else if (this.isAngryOptionClicked()) {
            // Set the state to "painting"
            state = "painting";
        } else if (this.isHappyOptionClicked()) {
            // Set the state to "happyPrompt"
            state = "happyPrompt";
        }
    }


    //Checks if Anxious is clicked on
    isAnxiousOptionClicked() {
        return (
            mouseX > width / 2 + 50 &&
            mouseX < width / 2 + 300 &&
            mouseY > height / 2 - 200 &&
            mouseY < height / 2 - 75
        );
    }
    //Checks if Discouraged is clicked on
    isDiscouragedOptionClicked() {
        return (
            mouseX > width / 2 + 50 &&
            mouseX < width / 2 + 300 &&
            mouseY > height / 2 - 65 &&
            mouseY < height / 2 + 20
        );
    }
    //Checks if Angry is clicked on
    isAngryOptionClicked() {
        return (
            mouseX > width / 2 + 50 &&
            mouseX < width / 2 + 300 &&
            mouseY > height / 2 + 60 &&
            mouseY < height / 2 + 130
        );
    }
    //Checks if happy is clicked on
    isHappyOptionClicked() {
        return (
            mouseX > width / 2 + 50 &&
            mouseX < width / 2 + 300 &&
            mouseY > height / 2 + 150 &&
            mouseY < height / 2 + 250
        );
    }

}

