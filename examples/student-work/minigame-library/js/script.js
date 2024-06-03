/**
 * Project 2: Minigame library
 * @author Nicolas Morales-Sanabria
 * 
 *  This project is a minigame library, the library allows the player to access different games
 *  through menus and also runs a main game that makes multiple games interact with each other.
 *  The minigames included consist of the exercices made throughout the semester. In addition,
 *  there is a new game (the main game) that incorporates multiple games to create a new story
 *  using screenshots of code. The project also explored the creation of a p5 library,
 *  (p5.commonGameFunctions) which is used to simplify the code for the games and reduce duplicate code.
 * 
 * Attributions:
 * 
 * this project uses Ben Moren's p5.collide2D library.
 * 
 * This project uses 4 songs:
 * "The hand that feeds" by Nine Inch Nails
 * "Uprising" by Muse
 * "Bitter Sweet Symphony" by The Verve
 * "Handlebars" by Flobots
 * 
 * Please note that the inclusion of these songs is for educational & non-commercial 
 * purposes, All credits and rights belong to their respective copyright holders.
 * */

"use strict";
// variables used by the menu/ main application
let menus;
let game, pausedGame;
let sameMouseClick = false, sameEsc = false;
//variables used in the main game
let obedient, inlove, rich, dedicated;
let levelsPassed, inMainGame, inMiniGame, vaccinations, mainGameLevel;
let runningMainGame = true;
//represents the images used in the games
let clownImage, clownetteImage, evilClownImage;
let clowniseumImage, wallTexture;
let fishermanImage;
let fishTexture, evilTexture;
let moneyImage;
let virusImage;
//represents the screenshots in the main game
let level1pic1, level1pic2, level2pic1, level2pic2, level3pic1, level3pic2;
//represents the songs used in the games
let songCovid, songFishing, songLove, songEnd;

/** Loads all the assets used in the games*/
function preload() {
    clownImage = loadImage('assets/images/clown.png');
    clownetteImage = loadImage('assets/images/clownette.png');
    virusImage = loadImage('assets/images/virusTexture.png');
    moneyImage = loadImage('assets/images/money.png');
    evilClownImage = loadImage('assets/images/evilClown.png');
    clowniseumImage = loadImage('assets/images/clowniseum.png');
    fishermanImage = loadImage('assets/images/fisherman.png');
    fishTexture = loadImage('assets/images/GuppyR.png');
    evilTexture = loadImage('assets/images/CarnivoreR.png');
    wallTexture = loadImage('assets/images/brickWall.png');
    level1pic1 = loadImage('assets/images/level1-1.png');
    level1pic2 = loadImage('assets/images/level1-2.png');
    level2pic1 = loadImage('assets/images/level2-1.png');
    level2pic2 = loadImage('assets/images/level2-2.png');
    level3pic1 = loadImage('assets/images/level3-1.png');
    level3pic2 = loadImage('assets/images/level3-2.png');
    songLove = new Audio('assets/sounds/TheVerve_BitterSweetSymphony.mp3');
    songCovid = new Audio('assets/sounds/NineInchNails_TheHandThatFeeds.mp3');
    songFishing = new Audio('assets/sounds/Muse_Uprising.mp3');
    songEnd = new Audio('assets/sounds/Flobots_Handlebars.mp3');
}

/** Sets up the critical variables for the launch of the application */
function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(width * 0.03);
    inMainGame = inMiniGame = false;
    levelsPassed = 0;
    obedient = dedicated = inlove = rich = false;
    menus = new Menus();
    game = new MainGame();
    game.setup();
}

/** runs the menus (main application) and prevents accidental
 * mousclicks / ESC presses */
function draw() {
    menus.run()
    if (!mouseIsPressed) {
        sameMouseClick = false;
    }
    if (!keyIsDown(27)) {
        sameEsc = false;
    }
}

/** Sets up the desired minigame for launch*/
function startGames(number) {
    switch (number) {
        case 1:
            game = new DodgeEm();
            game.setup();
            break;
        case 2:
            game = new AgeOfAquariums();
            game.setup();
            break;
        case 3:
            game = new LoveActually();
            game.setup();
            break;
        default:
            console.log("invalid game number");
            break;
    }
}