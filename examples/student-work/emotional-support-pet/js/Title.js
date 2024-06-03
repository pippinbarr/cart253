class Title {
    constructor(titleBackgroundImage) {
        this.titleBackgroundImage = titleBackgroundImage; //Background image for the title page
    }

    display() {
        // The title page
        background(this.titleBackgroundImage);
        this.displayTitleText();
    }

    displayTitleText() {
        // Display the title and "Press here to start" message
        textSize(30);
        textAlign(CENTER, CENTER);
        text("Press mouse to start", width / 2  , height / 2 - 50);
    }
}
