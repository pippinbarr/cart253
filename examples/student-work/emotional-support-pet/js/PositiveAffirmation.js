class PositiveAffirmation {
    constructor() {
        // Initial state and assets
        this.state = "prompt";
        this.backgroundImage = loadImage("assets/images/journal.png"); // The background image of the prompt state
        this.resultbackgroundImage = loadImage("assets/images/resultbg.png"); // The background for the result state
        this.celebrationImage = loadImage("assets/images/celebration.png"); // The background for the celebration image in the result
        this.petCustomization = petCustomization; // The customized pet image
        this.buttonImage = loadImage("assets/images/button.png"); // Button image

        // Speech recognition setup (Recieved help from TA and professor to fix this function)
        this.mySpeechRec = new p5.SpeechRec();
        this.mySpeechRec.continuous = true;
        this.mySpeechRec.interimResults = true;
        this.mySpeechRec.start(); // Start listening

        // Word-related properties
        this.words = [];
        this.selectedWords = [];
        this.wordBackgroundColors = ["#FFB6C1", "#87CEEB", "#98FB98", "#FFD700", "#FFA07A", "#DDA0DD", "#87CEFA", "#FF6347", "#7CFC00"];
        this.draggedWordIndex = -1;
        this.isDraggingWord = false;

        // Create word objects
        const wordList = ["I am", "Loved", "Strong", "Rich", "Calm", "happy", "Brave"];
        for (let i = 0; i < wordList.length; i++) {
            this.words.push({
                text: wordList[i],
                x: width / 2 + 500,
                y: height / 2 - 150 + i * 50
            });
        }
    }

    // Display the current state
    display() {
        if (this.state === "prompt") {
            this.prompt();
        } else if (this.state === "result") {
            this.result();
        } else if (this.state === "celebration") {
            this.celebration();
        }
    }

    // State: Prompt
    prompt() {
        if (this.state === "prompt") {
            // Display the prompt state
            background(this.backgroundImage);
            textSize(30);
            textAlign(CENTER, CENTER);
            fill(0);
            text("Welcome to the Positive Affirmation Journals!", width / 2 - 200, height / 2 - 210);
            textSize(18);
            text('Create your own positive affirmation.', width / 2 - 350, height / 2 - 40);
            textSize(15);
            text('Once you are done, press the button below', width / 2 - 350, height / 2 + 10);

            // "See Result" button
            fill(20);
            textSize(20);
            rect(width / 2 - 425, height / 2 + 100, 150, 40);
            fill(255);
            text("See Result", width / 2 - 350, height / 2 + 120);

            // Display rectangles which the words needs to be dropped in
            noStroke();
            fill(240);
            rect(600, 200, 150, 55);
            rect(600, 310, 150, 55);
            this.displayWords();
        } else if (this.state === "result") {
            // Display the result state
            this.result();

        }
    }

    getSelectedWord(x, y) {
        // Check for selected words during dragging
        for (let i = this.words.length - 1; i >= 0; i--) {
            const word = this.words[i];
            if (
                mouseX > word.x - textWidth(word.text) / 2 &&
                mouseX < word.x + textWidth(word.text) / 2 &&
                mouseY > word.y - 15 &&
                mouseY < word.y + 15
            ) {
                if (!this.selectedWords.includes(word.text)) {
                    // Capture the selected word
                    this.selectedWords.push(word.text);
                    return word.text;
                }
            }
        }
        return '';
    }

    showResult() {
        console.log(this.mySpeechRec.resultString); //Log what user says
    }

    result() {
        // Transition to the result state
        this.state = "result";

        // Display the result state
        background(this.resultbackgroundImage);
        textSize(25);
        textAlign(CENTER, CENTER);
        fill(0);

        // Additional text specific to the result state
        text(`Read your affirmation out loud`, width / 2 - 400, height / 2 - 50);

        image(this.petCustomization.chosenPet, width / 2 - 550, height / 2 - 50, 350, 350);

        // Display the selected words in the result state
        this.displaySelectedWords();

        let lowerStr = "";
        if (this.mySpeechRec.resultString) {
            lowerStr = this.mySpeechRec.resultString.toLowerCase();    //turn what user says into lowercase 
        }

        let mostRecentWord = lowerStr.split(" ").pop();  //if the user says the affirmation then show celebration text
        this.showResult();
        if (lowerStr.includes(this.selectedWords[0].toLowerCase() + " " + this.selectedWords[1].toLowerCase())) {
            this.celebration();
        }
    }

    celebration() {
        background(this.celebrationImage); //Bacckground image 
        image(this.petCustomization.chosenPet, width / 2 - 400, height / 2 - 80, 370, 370); //Display chosen pet
        textSize(50); // Display the text
        textAlign(CENTER, CENTER);
        fill(0);
        text(`Good job!`, width / 2 + 250, height / 2 - 100);

        //Display the exit button 
        this.displayExitButton();

    }

    displayExitButton() {
        image(this.buttonImage, width / 2 - 600, height / 2 + 100, 200, 200); // The image of the exit button
        // Display the exit text
        textSize(30);
        textAlign(CENTER, CENTER);
        fill(0);
        text("Exit", width / 2 - 500, height / 2 + 200);
    }

    displaySelectedWords() {
        // Display the selected words
        textSize(50);
        textAlign(CENTER, CENTER);
        fill(0);

        const word1 = this.selectedWords[0] || "Selected Word 1";
        const word2 = this.selectedWords[1] || "Selected Word 2";
        text(word1, width / 2 + 60, height / 2 + 10);
        text(word2, width / 2 + 250, height / 2 + 10);
    }




    displayWords() {
        // Display the set of positive words on the right side
        textSize(25);
        textAlign(CENTER, CENTER);

        for (let i = 0; i < this.words.length; i++) {
            // Draw background color for each word
            fill(this.wordBackgroundColors[i]);
            rect(this.words[i].x - textWidth(this.words[i].text) / 2 - 5, this.words[i].y - 15, textWidth(this.words[i].text) + 10, 30);

            if (this.isDraggingWord && this.draggedWordIndex === i) {
                // Draw the dragged word at the current mouse position
                fill(this.wordBackgroundColors[this.draggedWordIndex]);
                rect(mouseX - textWidth(this.words[i].text) / 2 - 5, mouseY - 15, textWidth(this.words[i].text) + 10, 30);
                fill(0);
                text(this.words[i].text, mouseX, mouseY);
            } else {
                // Draw the word at its original position
                fill(0);
                text(this.words[i].text, this.words[i].x, this.words[i].y);
            }
        }
    }


    mousePressed() {
        // Check if the user clicked on a word and set the draggedWordIndex
        for (let i = 0; i < this.words.length; i++) {
            if (
                mouseX > this.words[i].x - textWidth(this.words[i].text) / 2 - 5 &&
                mouseX < this.words[i].x + textWidth(this.words[i].text) / 2 + 5 &&
                mouseY > this.words[i].y - 15 &&
                mouseY < this.words[i].y + 15
            ) {
                this.isDraggingWord = true;
                this.draggedWordIndex = i;
            }
        }
        // Check if the user clicked on the "See Result" button
        if (
            mouseX > width / 2 - 425 &&
            mouseX < width / 2 - 275 &&
            mouseY > height / 2 + 100 &&
            mouseY < height / 2 + 140
        ) {
            // Change the state to "result" if the button is clicked
            this.result();
        }
        if (
            mouseX > width / 2 - 600 &&
            mouseX < width / 2 - 400 &&
            mouseY > height / 2 + 100 &&
            mouseY < height / 2 + 300
        ) {
            // Change the state to "emotions" when the exit button is clicked 
            state = `emotions`;
        }
    }


    mouseReleased() {
        // Check if a word is being dragged and released
        if (this.isDraggingWord && this.draggedWordIndex !== -1) {
            // Update the x and y coordinates of the dragged word based on the mouse release position
            let releasedX = mouseX - textWidth(this.words[this.draggedWordIndex].text) / 2;
            let releasedY;

            // Check if the mouse is released inside the first or second rectangle
            if ((mouseX > 600 && mouseX < 750) && ((mouseY > 200 && mouseY < 255) || (mouseY > 310 && mouseY < 365))) {
                releasedY = (mouseY > 200 && mouseY < 255) ? 227 : 340;
                this.words[this.draggedWordIndex].x = 700 - textWidth(this.words[this.draggedWordIndex].text) / 2;
                this.words[this.draggedWordIndex].y = releasedY;

                // Capture the selected word in the appropriate slot
                const selectedWord = this.words[this.draggedWordIndex].text;
                if (releasedY === 227) {
                    // Top rectangle
                    this.selectedWords[0] = selectedWord;
                } else {
                    // Bottom rectangle
                    this.selectedWords[1] = selectedWord;
                }
            }

            // Reset dragging flags
            this.isDraggingWord = false;
            this.draggedWordIndex = -1;
        }
    }

}
