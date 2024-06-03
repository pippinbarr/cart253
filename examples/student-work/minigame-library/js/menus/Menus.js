/** Menus
 * @author Nicolas Morales-Sanabria
 * 
 * The minigame library, makes multiple minigames runnable and accessible through a main menu.
 * This instance also runs the games and allows interaction between games (for the main game) */
class Menus {
    /** Creates an instance of the minigame library */
    constructor() {
        this.state = `mainMenu`;
        this.gameToRun;
        this.clickDelay = 0;
        this.buttons = [new Buttons(`soloMenu`), new Buttons(`versusMenu`),
        new Buttons(`clong`), new Buttons(`covid`), new Buttons(`love`), new Buttons(`clownapping`),
        new Buttons(`fishing`), new Buttons(`mainGame`)];

    }

    /** runs the correct state of the game depending of  */
    run() {
        if (this.state === `test`) {
            this.test();
        } else if (this.state === `mainMenu`) {
            this.mainMenu();
        } else if (this.state === `versusMenu`) {
            this.versusMenu();
        } else if (this.state === `soloMenu`) {
            this.soloMenu();
        } else if (this.state === `gameRunning`) {
            this.gameRunning();
        } else if (this.state === `mainGameRunning`) {
            this.mainGameRunning();
        }
    }

    /** displays the main menu, draws and makes clickable its buttons */
    mainMenu() {
        background(0);
        for (let button of this.buttons) {
            button.draw(this.state);
        }
        textAlign(CENTER, CENTER);
        fill(255);
        text(`Welcome to the minigame library\nClick to start`, width / 2, height / 8);
        text(`Press ESC to return to this menu\nor exit any game at any time`, width / 2, height * 7 / 8);
        for (let button of this.buttons) {
            if (button.checkPress(this.state)) {
                break;
            }
        }

    }

    /** displays the versus menu, draws and makes clickable its buttons */
    versusMenu() {
        if (keyIsDown(27)) { //send the player back to main menus if they press ESC 
            this.clickDelay = 0;
            this.state = `mainMenu`;
        }
        background(0);
        fill(255);
        text(`versus menu\nSelect game`, width / 2, height / 8);
        text(`Press ESC to return to main menu\nor exit any game at any time`, width / 2, height * 7 / 8);
        fill(`cyan`);
        for (let button of this.buttons) {
            button.draw(this.state);
        }
        for (let button of this.buttons) {
            if (button.checkPress(this.state)) {
                break;
            }
        }

    }

    /** displays the solo menu, draws and makes clickable its buttons */
    soloMenu() {
        if (keyIsDown(27)) { //send the player back to main menus if they press ESC
            this.clickDelay = 0;
            this.state = `mainMenu`;
        }
        background(0);
        fill(255);
        text(`solo menu\nSelect game`, width / 2, height / 8);
        text(`Press ESC to return to main menu\nor exit any game at any time`, width / 2, height * 7 / 8);
        for (let button of this.buttons) {
            button.draw(this.state);
        }
        for (let button of this.buttons) {
            button.checkPress(this.state);
        }

    }

    /** Runs the main game and gives the possibility to return from
     * minigames with ESC, updates variables depending on the progress
     * of the player and/or starts songs for the minigames **/
    mainGameRunning() {
        game.run();
        if (keyIsDown(27)) {
            //check if the user pressed ESC
            if (inMainGame && !sameEsc) {
                this.state = `mainMenu`;
            } else if (inMiniGame) {
                noStroke();
                if (mainGameLevel === 1) {
                    // I won't force you to do anything
                    if (vaccinations >= 2) {
                        obedient = true;
                        // But you should listen to me
                    }
                    songCovid.pause();
                    songCovid.currentTime = 0;
                    this.returnFromGame()
                } else if (mainGameLevel === 2) {
                    if (!dedicated) {
                        // I won't feed you for free
                        // Nobody is irreplaceable
                    } else {
                        // Accumulate my tokens and
                        // I will define your worth
                    }
                    songFishing.pause();
                    songFishing.currentTime = 0;
                    this.returnFromGame()
                } else if (mainGameLevel === 3) {
                    if (!inlove) {
                        // I just want you to be happy
                        // You should find a teammate
                    }
                    if (!rich) {
                        // Keep trying, stay focused
                        // I can give you power
                    }
                    songLove.pause();
                    songLove.currentTime = 0;
                    this.returnFromGame()
                }
            }
        }
    }

    /** runs the games with the possibility of returning to menus with ESC */
    gameRunning() {
        game.run();
        if (keyIsDown(27)) {
            this.state = `mainMenu`;
        }
    }

    /** Restores the main game's state and updates the booleans
     * when the user exits the mini games */
    returnFromGame() {
        inMiniGame = false;
        inMainGame = true;
        sameEsc = true;
        game = pausedGame;
    }
}
