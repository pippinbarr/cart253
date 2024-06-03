class DraggableWord {
    constructor(word, x, y, color) {
        this.word = word;
        this.x = x;
        this.y = y;
        this.color = color;
        this.dragging = false;
    }

    display() {
        // Draw background color for the word
        fill(this.color);
        rect(this.x - textWidth(this.word) / 2 - 5, this.y - 15, textWidth(this.word) + 10, 30);

        // Draw the word
        fill(0);
        text(this.word, this.x, this.y);
    }

    isOver() {
        // Check if the mouse is over the word
        return (
            mouseX > this.x - textWidth(this.word) / 2 - 5 &&
            mouseX < this.x + textWidth(this.word) / 2 + 5 &&
            mouseY > this.y - 15 &&
            mouseY < this.y + 15
        );
    }

    startDragging() {
        // Start dragging the word
        if (this.isOver()) {
            this.dragging = true;
        }
    }

    stopDragging() {
        // Stop dragging the word
        this.dragging = false;
    }

    updatePosition() {
        // Update the position of the word when dragging
        if (this.dragging) {
            this.x = mouseX;
            this.y = mouseY;
        }
    }
}
