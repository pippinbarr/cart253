class Menus {

    constructor() {
        this.state = `mainMenu`;
        this.gameToRun;
        this.clickDelay = 0;
        this.buttons = [new Buttons(`soloMenu`), new Buttons(`versusMenu`),
        new Buttons(`clong`), new Buttons(`covid`), new Buttons(`love`), new Buttons(`clownapping`),
        new Buttons(`fishing`)];
    }

    run() {
        if (this.state === `mainMenu`) {
            this.mainMenu();
        } else if (this.state === `versusMenu`) {
            this.versusMenu();
        } else if (this.state === `soloMenu`) {
            this.soloMenu();
        } else if (this.state === `gameRunning`) {
            this.gameRunning();
        }
    }

    mainMenu() {
        background(0);
        for (let button of this.buttons) {
            button.draw(this.state);
        }
        textAlign(CENTER, CENTER);
        fill(255);
        text(`Welcome to the minigame library\nClick to start`, width / 2, height / 8);
        text(`Press ESC to return to this menu\nor exit any game at any time`, width / 2, height * 7 / 8);
        if (this.clickDelay < 20) {
            this.clickDelay++;
        } else {
            for (let button of this.buttons) {
                if (button.checkPress(this.state)) {
                    break;
                }
            }
        }
    }

    versusMenu() {
        if (keyIsDown(27)) {
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
        if (this.clickDelay < 20) {
            this.clickDelay++;
        } else {
            for (let button of this.buttons) {
                if (button.checkPress(this.state)) {
                    break;
                }
            }
        }
    }

    soloMenu() {
        if (keyIsDown(27)) {
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
        if (this.clickDelay < 20) {
            this.clickDelay++;
        } else {
            for (let button of this.buttons) {
                button.checkPress(this.state);
            }
        }
    }

    gameRunning() {
        game.run();
        if (keyIsDown(27)) {
            this.clickDelay = 0;
            this.state = `mainMenu`;
        }
    }
}
