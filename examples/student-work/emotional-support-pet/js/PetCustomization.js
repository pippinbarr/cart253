class PetCustomization {
    constructor() {
        this.backgroundImage = loadImage("assets/images/sky.png"); // The background image 
        this.petImages = []; //The images of all the pets
        this.chosenPet = null;
    }

    preload() {
        // Load pet images into the array
        for (let i = 1; i <= 4; i++) {
            this.petImages[i] = loadImage(`assets/images/pet${i}.png`);
        }
    }


    //Display the main text, images and labels
    draw() {
        //Background image which is a sky illustration
        background(this.backgroundImage);
        //Display the text
        textSize(28);
        textAlign(CENTER, CENTER);
        fill(0);
        text(` Choose your emotional support pet's look
            to make it your own! `, width / 2, height / 2 - 200);

        //Display the image of teh pets and their label
        this.displayPetImages();
        this.displayPetLabels();
    }

    //Display image of all the pets so teh user can choose
    displayPetImages() {
        image(this.petImages[1], 140, height / 2 - 130, 300, 300);
        image(this.petImages[2], 400, height / 2 - 140, 320, 320);
        image(this.petImages[3], 620, height / 2 - 130, 300, 300);
        image(this.petImages[4], 850, height / 2 - 130, 300, 300);
    }

    //Display the labels for each pet
    displayPetLabels() {
        textSize(18);
        textAlign(CENTER, CENTER);
        fill(0);
        text("Pet 1", 340, height / 2 + 170);
        text("Pet 2", 550, height / 2 + 170);
        text("Pet 3", 770, height / 2 + 170);
        text("Pet 4", 1000, height / 2 + 170);
    }

    //Check which pet the user clicked on
    checkChosenPet() {
        if (mouseX > 140 && mouseX < 440 && mouseY > height / 2 - 130 && mouseY < height / 2 + 170) {
            this.chosenPet = this.petImages[1];
            state = "hello";
        } else if (mouseX > 400 && mouseX < 720 && mouseY > height / 2 - 140 && mouseY < height / 2 + 180) {
            this.chosenPet = this.petImages[2];
            state = "hello";
        } else if (mouseX > 620 && mouseX < 920 && mouseY > height / 2 - 130 && mouseY < height / 2 + 170) {
            this.chosenPet = this.petImages[3];
            state = "hello";
        } else if (mouseX > 850 && mouseX < 1150 && mouseY > height / 2 - 130 && mouseY < height / 2 + 170) {
            this.chosenPet = this.petImages[4];
            state = "hello";
        }
    }
}
