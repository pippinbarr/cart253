/** Main Game
 * @author Nicolas Morale-Sanabria
 * 
 * This is the main game of the minigame library, it incorporates riddles that the player must solve
 * to launch minigames, the player must complete the requirements to pass each level. The code displayed
 * contains comments linking each game to the main story and creates a narrative open to interpretation. */
class MainGame {
    /** Allows the instatiation of the main game as an object*/
    constructor() {
        //used to always have a similar gameplay area no matter the screen ratio/dimensions
        this.heightRatio = 0.513671875;
        //represents the user
        this.user;
        //camera offsets used to follow the user
        this.cameraOffsetX = undefined, this.cameraOffsetY = undefined;
        //mouse position as an object
        this.mousePos = {
            x: width / 2,
            y: height / 2
        };
        // wall-related variables
        this.walls = []
        this.wallThicc = width / 20;
        this.wallHeight = width * 2 * this.heightRatio + 2 * this.wallThicc;
        this.wallTopY = -width * 0.5 * this.heightRatio - this.wallThicc;
        this.wallTopX = -width / 4 - this.wallThicc;
        //variables used to correctly execute specific states of the simulation
        this.state = `title`;
        this.titleFirstFrame = true, this.simulationFirstFrame = true;
    }

    /** sets up the critical variables, settings or executes the necessary actions in order to correctly launch the simulation */
    setup() {
        this.user = new Player(width / 2, height / 2, width * 0.039, width * 7.8125E-5, (width * 1.953125E-3) * 2);
        this.user.texture = clownImage;
        vaccinations = levelsPassed = 0;
        obedient = dedicated = inlove = rich = false;
        this.createWalls();
        noStroke();
        angleMode(DEGREES);
        textAlign(CENTER, CENTER);
    }

    /** sets up the critical variables in order to correctly run the gameplay state of the simulation */
    gameplaySetup() {
        //Reset the game to its initial state if restarting
        if (this.restart) {
            this.user.health = 100;
            this.user.x = width / 2;
            this.user.y = height / 2;
            this.restart = false;
        }
        this.simulationFirstFrame = false;
        this.titleFirstFrame = true;
    }

    /** sets up the critical variables in order to correctly run the title state of the simulation */
    titleSetup() {
        this.titleFirstFrame = false;
        this.simulationFirstFrame = true;
    }

    /** runs the desired state of the game */
    run() {
        if (this.state === `title`) {
            this.title();
        } else if (this.state === `gameplay`) {
            this.gameplay();
        } else if (this.state === `loss`) {
            this.loss();
        } else if (this.state === `win`) {
            this.win();
        }
    }

    /** displays the title of the game at the beginning */
    title() {
        if (this.titleFirstFrame) {
            this.titleSetup(); //adjusts variables to correctly run
        }
        //plays the animation
        background(0);
        push();
        fill(`green`);
        text(`Who am I?\nWho are you?\n192 = ~\n49 = 1\n\nWASD/Arrow keys to move\nClick to start`, width / 2, height / 2);
        pop();
        if (mouseIsPressed && !sameMouseClick) {
            this.state = `gameplay`;
        }
    }

    /** calculates and draws every frame of the gameplay state of the game */
    gameplay() {
        if (this.simulationFirstFrame) {
            this.gameplaySetup(); // adjusts key variables to run correctly 
        }
        this.recalculate();
        this.draw();
    }

    /** groups most functions that require recalculating positions or collisions to do everything at once*/
    recalculate() {
        this.updateMousePositions(this.mousePos);
        keyMovementSolo(this.user, 0);
        this.collisions();
        this.levels();
    }

    /** checks if the user is colliding with any walls */
    collisions() {
        //collisions between walls and the user
        for (let wall of this.walls) {
            this.wallBounce(wall, this.user);
        }
    }

    /** makes an object bounce off of a wall, repositionintg it so it doesn't get stuck inside &
     * changing its speed to make it 'bounce' off in the correct direction*/
    wallBounce(wall, object) {
        if (collideRectCircle(wall.x, wall.y, wall.w, wall.h, object.x, object.y, object.size)) {
            // top wall
            if ((object.x > wall.x && object.x < wall.x + wall.w) && (object.y > wall.y + wall.h)) {
                object.y = wall.y + wall.h + object.size / 2;
                object.vy *= -0.9;
            }
            //bottom wall
            if ((object.x > wall.x && object.x < wall.x + wall.w) && (object.y < wall.y)) {
                object.y = wall.y - object.size / 2;
                object.vy *= -0.9;
            }
            //left wall
            if ((object.y > wall.y && object.y < wall.y + wall.h) && (object.x > wall.x + wall.w)) {
                object.x = wall.x + wall.w + object.size / 2;
                object.vx *= -0.9;
            }
            //right wall
            if ((object.y > wall.y && object.y < wall.y + wall.h) && (object.x < wall.x)) {
                object.x = wall.x - object.size / 2;
                object.vx *= -0.9;
            }
        }
    }

    /** Displays the objects, player and images of the game */
    draw() {
        //calculates the 'camera' offset to center the player to draw everything relative to it
        this.cameraOffsetX = width / 2 - this.user.x + this.user.vx * 4;
        this.cameraOffsetY = height / 2 - this.user.y + this.user.vy * 4;
        background(0);
        //display the screenshots/hints in the game
        image(level3pic2, width * 2.25 + width * 1.25 / 2 + this.cameraOffsetX + (this.wallThicc * 2), -width * 0.5 * this.heightRatio + this.cameraOffsetY, width * 1.25 / 2, width * 2 * this.heightRatio / 2);
        image(level3pic1, width * 2.25 + this.cameraOffsetX + (this.wallThicc * 2), -width * 0.5 * this.heightRatio + this.cameraOffsetY, width * 1.25 / 2, width * 2 * this.heightRatio / 2);
        image(level2pic2, width + width * 1.25 / 2 + this.cameraOffsetX + this.wallThicc, -width * 0.5 * this.heightRatio + this.cameraOffsetY, width * 1.25 / 2, width * 2 * this.heightRatio / 2);
        image(level2pic1, width + this.cameraOffsetX + this.wallThicc, -width * 0.5 * this.heightRatio + this.cameraOffsetY, width * 1.25 / 2, width * 2 * this.heightRatio / 2);
        image(level1pic1, -width / 4 + this.cameraOffsetX, -width * 0.5 * this.heightRatio + this.cameraOffsetY, width * 1.25 / 2, width * 2 * this.heightRatio / 2);
        image(level1pic2, -width / 4 + width * 1.25 / 2 + this.cameraOffsetX, -width * 0.5 * this.heightRatio + this.cameraOffsetY, width * 1.25 / 2, width * 2 * this.heightRatio / 2);
        push();
        textAlign(CENTER, CENTER);
        fill(`green`);
        text("Thanks for playing\n-Nicolas", width * 4.125 + (this.wallThicc * 2) + this.cameraOffsetX, -width * 0.5 * this.heightRatio + this.cameraOffsetY + (this.wallHeight / 2));
        pop();
        // display the user
        this.user.displayRotatingPlayer(this.cameraOffsetX, this.cameraOffsetY);
        // draws the walls
        for (let wall of this.walls) {
            displayObjAsImage(wall, 3, undefined, this.cameraOffsetX, this.cameraOffsetY);
        }
    }

    /** creates the outside walls/game area relative to the window width and places them into their array */
    createWalls() {
        //creates the walls
        let topWall = {
            x: this.wallTopX,
            y: this.wallTopY,
            w: width * 5 + 4 * this.wallThicc,
            h: this.wallThicc,
            texture: clowniseumImage
        }, bottomWall = {
            x: this.wallTopX,
            y: width * 1.5 * this.heightRatio,
            w: width * 5 + 4 * this.wallThicc,
            h: this.wallThicc,
            texture: clowniseumImage
        }, leftWall = {
            x: this.wallTopX,
            y: this.wallTopY,
            w: this.wallThicc,
            h: this.wallHeight,
            texture: clowniseumImage
        }, level1Wall = {
            x: width,
            y: this.wallTopY,
            w: this.wallThicc,
            h: this.wallHeight,
            texture: clowniseumImage
        }, level2Wall = {
            x: width * 2.25 + this.wallThicc,
            y: this.wallTopY,
            w: this.wallThicc,
            h: this.wallHeight,
            texture: clowniseumImage
        }, level3Wall = {
            x: width * 3.5 + (this.wallThicc * 2),
            y: this.wallTopY,
            w: this.wallThicc,
            h: this.wallHeight,
            texture: clowniseumImage
        }, finalWall = {
            x: width * 4.75 + (this.wallThicc * 3),
            y: this.wallTopY,
            w: this.wallThicc,
            h: this.wallHeight,
            texture: clowniseumImage
        }
        //adds the walls to their array
        this.walls.push(topWall, bottomWall, leftWall, level1Wall, level2Wall, level3Wall, finalWall);
    }

    /** Launches the correct games under the specific conditions of each zone/level of the main game */
    levels() {
        if (collideRectCircle(-width / 4, -width * 0.5 * this.heightRatio, width * 1.25, width * 2 * this.heightRatio, this.user.x, this.user.y, this.user.size)) {
            //detects if the player is in the zone 1
            mainGameLevel = 1;
            // This is a free world
            if (keyIsDown(192) &&
                // You are free to do anything you want
                keyIsDown(49) &&
                // But you better follow my rules
                keyIsDown(50) &&
                // You can have different opinions
                keyIsDown(51) &&
                // But you better adhere to mine
                keyIsDown(52)) {
                this.launchProcess();
                songCovid.play();
                startGames(1); //launches the covid game
            }
            if (obedient && levelsPassed === 0) {
                this.positiveReinforcement();
            }
        } else if (collideRectCircle(width + this.wallThicc, -width * 0.5 * this.heightRatio, width * 1.25, width * 2 * this.heightRatio, this.user.x, this.user.y, this.user.size)) {
            //detects if the player is in the zone 2
            mainGameLevel = 2;
            // You need to prove your worth
            if (obedient && keyIsDown(192) &&
                // You better be ready to do anything
                !(!keyIsDown(50) || keyIsDown(49)) &&
                // Others would gladly replace you
                !(keyIsDown(51) || !keyIsDown(52))) {
                this.launchProcess();
                songFishing.play();
                startGames(2); // launches the fishing simulator
            }
            // Maybe someday I'll give you a chance
            if (dedicated && levelsPassed === 1) {
                this.positiveReinforcement();
            }
        } else if (collideRectCircle(width * 2.25 + (this.wallThicc * 2), -width * 0.5 * this.heightRatio, width * 1.25, width * 2 * this.heightRatio, this.user.x, this.user.y, this.user.size)) {
            //detects if the player is in the zone 3
            mainGameLevel = 3;
            if (obedient && dedicated &&
                // If you're good at playing my game
                vaccinations >= 6 && !(!keyIsDown(49) ||
                    // I don't care if you play by the book
                    keyIsDown(192) || !keyIsDown(53) ||
                    // Just don't bother those who play it better
                    !keyIsDown(55) || keyIsDown(52) ||
                    // Everyone's driven by self-interest
                    keyIsDown(50) || keyIsDown(54) ||
                    // I can give you anything you ever wanted.
                    keyIsDown(56) || !keyIsDown(51))) {
                songLove.play();
                this.launchProcess();
                startGames(3); // launches the love simulator
            }
            if (inlove && rich && levelsPassed === 2) {
                this.positiveReinforcement();
                songEnd.play();
            }
        }
    }

    /** updates the  X & Y positions of a mouse object */
    updateMousePositions(mouseObject) {
        mouseObject.x = mouseX;
        mouseObject.y = mouseY;
    }

    /** temporarily saves the state of the game and updates booleans to start a minigame */
    launchProcess() {
        pausedGame = this;
        inMainGame = false;
        inMiniGame = true;
    }

    /** removes the wall to the next level and updates the player's progression */
    positiveReinforcement() {
        this.walls.splice(3, 1);
        levelsPassed++;
    }
}
