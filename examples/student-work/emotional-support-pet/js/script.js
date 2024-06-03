/**
 * Project 2 
 * Dorsa Zare
 * 
 * This program allows you to play mini games based on your emotions.
 */

"use strict";

let state = "title"; // Game state: starting with the title screen
let title; // Handles the display of the title screen
let petCustomization; // Allows the user to choose a pet image
let petImages = []; // Stores the 4 pet images
let chosenPet; // The user's selected pet for the next levels
let hello; // Displays a greeting from the chosen pet
let emotions; // Displays the emotions menu
let buttonImages = []; // Array to store button images
let buttonText = []; // Array to store button text
let titleBackgroundImage; // Background image for the title screen
let anxietyGame; // Handles the anxiety game
let bubbleImages = []; // Array to store bubble images
let bubbles = []; // Array to store bubble objects
let tilesImage; // Background image for the bubble game
let gameDuration; // Duration of the anxiety game
let bubblePopSound; // Sound effect for bubble popping
let positiveAffirmation; // State for the positive affirmation journal mini-game
let painting; // State for the painting mini-game
let happyPrompt; // Class for the Happy emotion prompt

/**
 * Preload function to load necessary assets
 */
function preload() {
    // Load button images and text into arrays
    for (let i = 0; i < 4; i++) {
        buttonImages[i] = loadImage(`assets/images/button.png`);
    }
    buttonText = ["Anxious", "Discouraged", "Angry", "Happy"];
    // Load the title screen background image  
    titleBackgroundImage = loadImage(`assets/images/titleBackground.png`)
    // Load bubble images into the array
    bubbleImages[0] = loadImage(`assets/images/bubble.png`);
    // Load tiles background image for the bubble game
    tilesImage = loadImage(`assets/images/tiles.png`)
    // Load bubble popping sound effect for the anxiety game
    bubblePopSound = loadSound('assets/sounds/bubblePop.mp3');
}

/**
 * Setup function to initialize the game
 */
function setup() {
    userStartAudio();  // Enable audio for user interaction
    createCanvas(windowWidth, windowHeight); // Create a canvas with the dimensions of the window

    // Initialize and instantiate game components
    title = new Title(titleBackgroundImage);   // Title screen
    petCustomization = new PetCustomization();  // Pet customization screen
    petCustomization.preload();
    hello = new Hello(petCustomization); // Greeting screen
    emotions = new Emotions(petCustomization); // Emotions menu screen
    gameDuration = new GameDuration();  // Game duration for anxiety game
    anxietyGame = new AnxietyGame(tilesImage, bubbleImages, bubblePopSound, gameDuration.getDuration());  // Anxiety game screen
    positiveAffirmation = new PositiveAffirmation(); // Positive affirmation journal screen
    painting = new Painting(petCustomization);  // Painting game screen
    happyPrompt = new HappyPrompt(petCustomization);  // Happy emotion prompt screen
}

/**
 * Draw function to render the game based on the current state
 */
function draw() {
    if (state === "title") {
        title.display();
    } else if (state === "customizePet") {
        petCustomization.draw();
    } else if (state === "hello") {
        hello.display();
    } else if (state === "emotions") {
        emotions.display();
    } else if (state === "anxietyGame") {
        anxietyGame.display();
    } else if (state === "promptDuration") {
        gameDuration.prompt();
    } else if (state === "positiveAffirmation") {
        positiveAffirmation.prompt();
    } else if (state === "painting") {
        painting.display();
    } else if (state === "happyPrompt") {
        happyPrompt.display();
    }
}

/**
 * MousePressed function to handle mouse click events based on the current state
 */
function mousePressed() {
    if (state === "title") {
        state = "customizePet";
    } else if (state === "customizePet") {
        petCustomization.checkChosenPet();
    } else if (state === "hello") {
        hello.handleMousePress();
    } else if (state === "emotions") {
        emotions.handleMousePress();
    } else if (state === "promptDuration") {
        gameDuration.handleSelection();
        state = "anxietyGame";
    } else if (state === "positiveAffirmation") {
        positiveAffirmation.mousePressed();
    } else if (state === "painting") {
        painting.mousePressed();
    } else if (state === "happyPrompt") {
        hello.handleMousePress();
    }
}

/**
 * MouseReleased function to handle mouse release events for specific states
 */
function mouseReleased() {
    if (state === "positiveAffirmation") {
        positiveAffirmation.mouseReleased();
    }
}
