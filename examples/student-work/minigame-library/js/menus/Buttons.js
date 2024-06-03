/** Buttons
* @author Nicolas Morales-Sanabria
*
*  Allows the creation &  of the buttons of the main menus of the minigame library.
*  Groups every button in an attempt to make each button easier to modify */
class Buttons {
    /** Creates a premade, clickable button specific  
     * to the type of button desired
     * @param type type of button to create */
    constructor(type) {
        this.type = type;
        if (type === `mainGame`) {
            this.w = width / 4;
            this.h = height / 4;
            this.x = width / 2 - this.w / 2;
            this.y = (height / 2) - (height / 8);
            this.rectFill = `green`;
            this.textFill = `black`;
            this.text = `Main Game`;
            this.menu = `mainMenu`;
        } else if (type === `soloMenu`) {
            this.w = width / 4;
            this.h = height / 4;
            this.x = width / 16;
            this.y = (height / 2) - (height / 8);
            this.rectFill = `cyan`;
            this.textFill = `black`;
            this.text = `Solo\nGames`;
            this.menu = `mainMenu`;
        } else if (type === `versusMenu`) {
            this.w = width / 4;
            this.h = height / 4;
            this.x = width * (15 / 16) - this.w;
            this.y = (height / 2) - (height / 8);
            this.rectFill = `red`;
            this.textFill = `black`;
            this.text = `Versus\nGames`;
            this.menu = `mainMenu`;
        } else if (type === `clong`) {
            this.w = width / 8;
            this.h = height / 8;
            this.x = width / 8;
            this.y = (height / 2) - (height / 8);
            this.rectFill = `blue`;
            this.textFill = `white`;
            this.text = `Clong`;
            this.menu = `versusMenu`;
        } else if (type === `covid`) {
            this.w = width / 8;
            this.h = height / 8;
            this.x = width / 8;
            this.y = (height / 2) - (height / 8);
            this.rectFill = `blue`;
            this.textFill = `cyan`;
            this.text = `Vaccination\nrun`;
            this.menu = `soloMenu`;
        } else if (type === `love`) {
            this.w = width / 8;
            this.h = height / 8;
            this.x = width / 8;
            this.y = (height / 2) + (height / 16);
            this.rectFill = `pink`;
            this.textFill = `green`;
            this.text = `Modern love\nsimulator`;
            this.menu = `soloMenu`;
        } else if (type === `clownapping`) {
            this.w = width / 8;
            this.h = height / 8;
            this.x = width / 3;
            this.y = (height / 2) + (height / 16);
            this.rectFill = `orange`;
            this.textFill = `red`;
            this.text = `clownapping`;
            this.menu = `soloMenu`;
        } else if (type === `fishing`) {
            this.w = width / 8;
            this.h = height / 8;
            this.x = width / 3;
            this.y = (height / 2) - (height / 8);
            this.rectFill = `cyan`;
            this.textFill = `blue`;
            this.text = `fishing`;
            this.menu = `soloMenu`;
        }
    }
    /** displays the buttons available according to the menu open 
     * @param menuToDraw menu to display */
    draw(menuToDraw) {
        if (this.menu === menuToDraw) {
            fill(this.rectFill);
            rect(this.x, this.y, this.w, this.h);
            fill(this.textFill);
            push();
            textSize(this.w * 0.15);
            text(this.text, this.x + this.w / 2, this.y + this.h / 2);
            pop();
        }
    }
    /** Checks if any button has been clicked and does the actions specific to any button pressed
     * @param menuToCheck the menu currently open in the main game
       */
    checkPress(menuToCheck) {
        // the two first ifs prevent any misclicks from happening
        if (this.menu === menuToCheck) {
            if (mouseIsPressed && !sameMouseClick && collidePointRect(mouseX, mouseY, this.x, this.y, this.w, this.h)) {
                if (this.type === `mainGame`) {
                    game = new MainGame();
                    inMainGame = true;
                    game.setup();
                    menus.state = `mainGameRunning`;
                    sameMouseClick = true;
                    return true;
                } else if (this.type === `soloMenu`) {
                    menus.state = `soloMenu`;
                    sameMouseClick = true;
                    return true;
                } else if (this.type === `versusMenu`) {
                    menus.state = `versusMenu`;
                    sameMouseClick = true;
                    return true;
                } else if (this.type === `clong`) {
                    menus.gameToRun = `clong`;
                    game = new Clong();
                    game.setup();
                    menus.state = `gameRunning`;
                    sameMouseClick = true;
                    return true;
                } else if (this.type === `covid`) {
                    game = new DodgeEm();
                    game.setup();
                    menus.state = `gameRunning`;
                    sameMouseClick = true;
                    return true;
                } else if (this.type === `love`) {
                    game = new LoveActually();
                    game.setup();
                    menus.state = `gameRunning`;
                    sameMouseClick = true;
                    return true;
                } else if (this.type === `clownapping`) {
                    game = new Clownapping();
                    game.setup();
                    menus.state = `gameRunning`;
                    sameMouseClick = true;
                    return true;
                } else if (this.type === `fishing`) {
                    game = new AgeOfAquariums();
                    game.setup();
                    menus.state = `gameRunning`;
                    sameMouseClick = true;
                    return true;
                }
            }
        }
        return false;
    }
}