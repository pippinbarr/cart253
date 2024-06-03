/**Exercise 3: Love, Actually
 * @author Nicolas Morales-Sanabria
 * 
 * In this game, the user controls a clown emoji that moves around trying to collect money,
 *  there are also "fish" (clowns with lipstick) following him around but keeping a set distance,
 *  as the user collects more money the fish get closer to the user. The game ends if the user makes
 *  contact with a fish or if the user collects a set amount of money. */
class LoveActually {
    //represents the user
    constructor() {
        this.user = new Player(width / 2, height / 2, width * 0.04, width * 3.9025E-5, width * 0.001718);
        //array for all my fish
        this.fishInTheSea = [];
        //number of fish to create
        this.fishNumber = 1000;
        //represents the money wads
        this.money = {
            texture: moneyImage
        }
        this.state = `title`;
    }

    /** Sets the user's initial position, creates the fish array, places the money and sets the text style*/
    setup() {
        this.user.texture = clownImage;
        this.user.money = 5;
        this.money.size = this.user.size;
        this.makeFishList();
        this.spawnMoney();
        textSize(width * 0.025);
        textAlign(CENTER, CENTER);
    }

    /** Draws the correct animation depending on the state of the game */
    run() {
        background(0);
        if (this.state === `title`) {
            this.title();
        }
        else if (this.state === `simulation`) {
            this.simulation();
        }
        else if (this.state === `love`) {
            this.love();
        }
        else if (this.state === `rich`) {
            this.rich();
        }
    }

    /** Displays the title screen */
    title() {
        fill(200, 100, 100);
        text("💘Modern love simulator💘\n\nGet that money💸\nWASD/Arrow Keys to move\nClick to start", width / 2, height / 2);

        if (mouseIsPressed && !sameMouseClick) {
            this.state = `simulation`;
        }
    }

    /** executes the functions necessary for the animation. Control the user, money and display the moving fish */
    simulation() {
        keyMovementSolo(this.user, 0);
        lockCircleInWindow(this.user, 0, 1);
        this.fishCuriosity();
        this.checkOverlap();
        this.display();
        if (this.user.money >= 1310720) {
            this.state = 'rich';
        }
    }

    /** Displays the animation when the user makes contact with a fish */
    love() {
        for (let i = 0; i < 3000; i++) { //thats alot of money!
            image(moneyImage, random(-this.money.size / 2, width), random(-this.money.size / 2, height), this.money.size, this.money.size);
        }
        push();
        rectMode(CENTER);
        fill(0, 0, 0, 120)
        rect(width / 2, height / 2, width * 0.2, height * 0.2);
        fill(255, 50, 50);
        text(`You found "love"\n\nClick to restart`, width / 2, height / 2);
        pop();
        if (mouseIsPressed) {
            this.resetGame();
        }
    }

    /** Display an alternative end animation if the user has earned enough money */
    rich() {
        for (let i = 0; i < 3000; i++) { //thats alot of money!
            image(moneyImage, random(-this.money.size / 2, width), random(-this.money.size / 2, height), this.money.size, this.money.size);
        }
        push();
        rectMode(CENTER);
        fill(0, 0, 0, 120)
        rect(width / 2, height / 2, width * 0.5, height * 0.3);
        fill(255, 50, 50);
        text(`You're way too rich for these clowns\n go get a Bugatti or something\n\nClick to restart`, width / 2, height / 2);
        pop();
        if (mouseIsPressed) {
            this.resetGame();
        }
    }

    /** detect if the user has had contact with the money or the fishies */
    checkOverlap() {
        // check if the user has grabbed money and if he does, move it & make him richer
        if (checkCirclesOverlap(this.user, this.money)) {
            repositionCircleOutsideOther(this.money, this.user);
            this.user.money *= 2;
            for (let fish of this.fishInTheSea) { // draw every "fish" closer ;)
                fish.curiosity -= this.user.size * 0.2;
            }
        }
        // change the game state if the user and a fish touch
        for (let fish of this.fishInTheSea) {
            if (checkCirclesOverlap(this.user, fish)) {
                this.state = `love`;
            }
        }
    }

    /** displays the user, the fishies, the money wad & the money the user has */
    display() {
        // Display the user
        displayObjAsImage(this.user, 0);
        // Display the fishes
        fill("blue");
        for (let fish of this.fishInTheSea) {
            displayObjAsImage(fish, 2, clownetteImage);
        }
        //display the money
        displayObjAsImage(this.money, 0);
        push();
        textAlign(LEFT, TOP);
        fill(0, 0, 0, 150);
        rect(0, 0, width * 0.273, 80);
        fill('lime');
        text(`Money: ${this.user.money}`, 0, 0);
        pop();
    }

    /** generates a certain amount of fishies outside the user's personal space.
     * the fishes will each have a random position, and a random "curiosity" which
     * will affect how close they get to the user */
    makeFishList() {
        for (let i = 0; i < this.fishNumber; i++) {
            let tempPos = {
                x: random(0, width),
                y: random(0, height)
            }
            while (dist(this.user.x, this.user.y, tempPos.x, tempPos.y) < this.user.size * 2) {
                tempPos.x = random(0, width);
                tempPos.y = random(0, height);
            }
            let fish = new Player(tempPos.x, tempPos.y, this.user.size, width * 9.7656E-5, width * 2.734E-3);
            fish.curiosity = random(4 * this.user.size, 25 * this.user.size);
            this.fishInTheSea.push(fish);
        }
    }

    /** generates a movement behavior for the fishies, makes them 
     * constantly chase the user and then flee when they are too close 
     * (depending on their curiosity). Also makes them have random spasms. */
    fishCuriosity() {
        for (let fish of this.fishInTheSea) {
            if (dist(this.user.x, this.user.y, fish.x, fish.y) > (this.user.size + fish.curiosity)) {
                chaseFleeTarget(fish, this.user, 1);
            }
            else {
                chaseFleeTarget(fish, this.user, -1);
            }
            randomSpasm(fish, 0.01, 0.5);
        }
    }

    /** spawn the money ensuring it is outside the ellipse of the user*/
    spawnMoney() {
        let tempPos = {
            x: random(0 + this.money.size, width - this.money.size),
            y: random(0 + this.money.size, height - this.money.size)
        }
        while (dist(tempPos.x, tempPos.y, this.user.x, this.user.y) < (this.money.size + this.user.size)) {
            tempPos.x = random(0 + this.money.size, width - this.money.size);
            tempPos.y = random(0 + this.money.size, height - this.money.size);
        }
        this.money.x = tempPos.x;
        this.money.y = tempPos.y;
    }

    resetGame() {
        this.user.money = 5;
        this.user.x = width / 2;
        this.user.y = height / 2;
        this.fishInTheSea = [];
        this.makeFishList();
        this.state = "simulation";
    }
}