class Buttons {

    constructor(type) {
        this.type = type;
        if (type === `soloMenu`) {
            this.w = width / 4;
            this.h = height / 4;
            this.x = width / 8;
            this.y = (height / 2) - (height / 8);
            this.rectFill = `cyan`;
            this.textFill = `black`;
            this.text = `Solo\nGames`;
            this.menu = `mainMenu`;
        } else if (type === `versusMenu`) {
            this.w = width / 4;
            this.h = height / 4;
            this.x = width * 5 / 8;
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
            this.textFill = `lime`;
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

    checkPress(menuToCheck) {
        if (this.menu === menuToCheck) {
            if (mouseIsPressed && !sameMouseClick && collidePointRect(mouseX, mouseY, this.x, this.y, this.w, this.h)) {
                if (this.type === `soloMenu`) {
                    menus.state = `soloMenu`;
                    menus.clickDelay = 0;
                    sameMouseClick = true;
                    return true;
                } else if (this.type === `versusMenu`) {
                    menus.state = `versusMenu`;
                    menus.clickDelay = 0;
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