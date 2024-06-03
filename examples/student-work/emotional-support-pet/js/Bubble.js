class Bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move() {
        // Move each bubble upwards 
        this.y -= 1;

        // Check if the bubble has moved out of the canvas, then reset its position
        if (this.y < -100) {
            this.y = height;
        }
    }

    display() {
        // Display the single bubble image at its position
        image(bubbleImages[0], this.x, this.y, 100, 100);
    }

    isClicked() {
        // Check if the mouse is pressed on a bubble
        return (
            mouseX > this.x &&
            mouseX < this.x + 100 &&
            mouseY > this.y &&
            mouseY < this.y + 100
        );
    }
}
