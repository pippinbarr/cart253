/** Project 1: The clownapping
 * @author Nicolas Morales-Sanabria
 * 
 * This is a simulation where clown & clownette get kidnapped by aliens, they are sent to the "clowniseum"
 * and the clown (the user) must survive 20 rounds to save clownette. It begins with an animation and then
 * jumps into a playable survival game where the user must shoot and protect himself from evil clowns. The player
 * controls the clown with keys and mouse. If the clown dies the user is prompted to restart, otherwise they
 * are congratulated for saving clownette. 
 * this project uses Ben Moren's p5.collide2D library. */
class Clownapping {

    constructor(x, y) {
        //used to always have a similar gameplay area no matter the screen ratio/dimensions
        this.heightRatio = 0.513671875;
        //represents the user
        this.user;
        //projectile arrays and fire rates
        this.userProjectiles = [], this.enemyProjectiles = [], this.userFireRate = 0, this.enemyFireRate = 60;
        //camera offsets used to follow the user
        this.cameraOffsetX = undefined, this.cameraOffsetY = undefined;
        //represent various simlulation elements
        this.restart = false;
        this.clowniseumTexture = clowniseumImage;
        this.evilClowns = [], this.wave = 1;
        this.walls = [], this.wallWidth;
        this.titleAliens = [], this.topAliens = [], this.bottomAliens = [], this.leftAliens = [], this.rightAliens = [];
        //variables used to correctly execute different states of the simulation
        this.state = `title`;
        this.titleFirstFrame = true, this.simulationFirstFrame = true;
        //variables used for the beginning animation
        this.titleClownMovement = 0, this.titleFinalMovement = 0, this.titleAliensMovement = 0, this.titleAliensTimer = 0, this.titleBeginningSpeed, this.titleFinalSpeed, this.titleAlienSpeed, this.gameplayDialogue;
        //represents the animation Clown & Clownette
        this.titleClown = {
            x: 0,
            y: 0,
            size: 250,
            texture: clownImage
        }, this.titleClownette = {
            x: 0,
            y: 0,
            size: 250,
            texture: clownetteImage
        };
    }

    /** sets up the critical variables, settings or executes the necessary actions in order to correctly launch the simulation */
    setup() {
        this.user = new Player(width / 2, height / 2, width * 0.039, width * 7.8125E-5, (width * 1.953125E-3) * 2);
        this.user.texture = clownImage;
        Alien.size = width / 3;
        this.createAliens();
        this.wallWidth = width / 20;
        this.createWalls();
        noStroke();
        angleMode(DEGREES);
        textAlign(CENTER, CENTER);
    }

    /** sets up the critical variables in order to correctly run the title state of the simulation */
    titleSetup() {
        this.titleBeginningSpeed = width * 7.824726E-4;
        this.titleFinalSpeed = height * 1.801801802E-3;
        this.titleAlienSpeed = height * 1.171875E-3 / 2.8;
        this.titleClownette.size = this.titleClown.size = height / 4;
        this.titleClownette.y = this.titleClown.y = height - this.titleClown.size / 2;
        this.titleFirstFrame = false;
        this.simulationFirstFrame = true;
    }

    /** sets up the critical variables in order to correctly run the gameplay state of the simulation */
    gameplaySetup() {
        //Reset the game to its initial state if restarting
        if (this.restart) {
            this.user.health = 100;
            this.user.x = width / 2;
            this.user.y = height / 2;
            this.wave = 1;
            this.evilClowns = [];
            this.userProjectiles = [];
            this.enemyProjectiles = [];
            this.restart = false;
        }
        //Start the first wave and variables
        this.generateEvilClowns(1);
        this.gameplayDialogue = 0;
        Alien.size = 0.09765625 * width;
        this.simulationFirstFrame = false;
        this.titleFirstFrame = true;
    }

    /** Ensures the aliens are always being animated and draws/runs the correct state of the simulation accoding the application's state */
    run() {
        Alien.alienAnimation();
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

    /** runs the 'title' of the simulation, where the beginning animation is set up and automatically plays, can be skipped by clicking */
    title() {
        if (this.titleFirstFrame) {
            this.titleSetup(); //adjusts variables to correctly run
        }
        //plays the animation
        background(0);
        this.beginningAnimation();
        if (mouseIsPressed && !sameMouseClick) {
            this.state = `gameplay`;
        }
    }

    /** runs the 'gameplay' part of the simulation, where the user can interact, move, shoot, etc. inside the game area*/
    gameplay() {
        if (this.simulationFirstFrame) {
            this.gameplaySetup(); //adjusts variables to correctly run
        }
        //runs the gameplay
        if (this.evilClowns.length === 0) {
            this.generateEvilClowns(this.wave + 1);
            this.wave++;
            if (this.wave >= 21) {
                this.state = 'win';
            }
        }
        //runs the necessary functions for the gameplay
        background(0);
        keyMovementSolo(this.user, 0);
        this.collisions();
        this.displayObjects();
        for (let evilClown of this.evilClowns) {
            chaseFleeTarget(evilClown, this.user, 1);
        }
        this.projectileManagement();
        this.user.userHealthManagement();
    }

    /** displays the loss state/text of the simulation, opting to restart it */
    loss() {
        this.restart = true;
        this.simulationFirstFrame = true;
        background(0);
        textSize(0.025 * width);
        fill('red');
        text(`You died at wave ${this.wave}\n You couldn't save Clownette\npress "Enter" to restart`, width / 2, height / 2);
        if (keyIsDown(13)) {
            this.state = `gameplay`;
        }
    }

    /** displays the win state of the simulation and stops it */
    win() {
        //displays Clown & Clownette thanking you for playing
        background(0);
        fill('orange');
        text(`You survived the clownapping &\n saved Clownette!\n Thanks for playing`, width / 2, height / 2);
        this.titleClown.x = width / 3;
        this.titleClownette.x = (width / 3) * 2;
        this.titleClown.y = this.titleClownette.y = height - this.titleClown.size / 2;
        displayObjAsImage(this.titleClown, 0);
        displayObjAsImage(this.titleClownette, 0);
    }

    /** creates projectiles at the request of the user (Space/LeftClick) or evil clowns in accordance to their angles, 
     * positions, fire rates and delays, also recalculates the projectile positions and draws them */
    projectileManagement() {
        //creates user projectiles with his position & angle if his fireRate delay has passed
        if (this.user.fireDelay > this.userFireRate && (keyIsDown(32) || (mouseIsPressed && mouseButton === LEFT))) {
            this.userProjectiles.push(new Projectile(this.user.x, this.user.y, width * 3.90625E-3, width * 7.8125E-3, this.user.angle));
            this.user.fireDelay = 0;
        }
        this.user.fireDelay++;
        //creates the projectiles of the evil clowns if they are close enough and their fireRate delay has passed 
        for (let evilClown of this.evilClowns) {
            if (evilClown.fireDelay > this.enemyFireRate && dist(evilClown.x, evilClown.y, this.user.x, this.user.y) < width / 2) {
                this.enemyProjectiles.push(new Projectile(evilClown.x, evilClown.y, width * 3.90625E-3, width * 7.8125E-3, evilClown.angle));
                evilClown.fireDelay = 0;
            }
            evilClown.fireDelay++;
        }
        //recalculates the positions and draws the projectiles
        fill('green');
        Projectile.moveDrawProjectiles(this.cameraOffsetX, this.cameraOffsetY, this.userProjectiles);
        fill('orange');
        Projectile.moveDrawProjectiles(this.cameraOffsetX, this.cameraOffsetY, this.enemyProjectiles);
    }

    /** displays all the objects of the simulation (user, walls, wall aliens & background)
     *  relative to the user, the image is centered on the user, with a speed effect (cameraOffsets) */
    displayObjects() {
        //calculates the 'camera' offset to center the player and draw everything relative to it
        this.cameraOffsetX = width / 2 - this.user.x + this.user.vx * 4;
        this.cameraOffsetY = height / 2 - this.user.y + this.user.vy * 4;
        //draw the outside wall aliens & game area texture
        this.drawWallAliens();
        image(clowniseumImage, -width + this.cameraOffsetX, -width * this.heightRatio - this.wallWidth + this.cameraOffsetY, width * 3, width * this.heightRatio * 3 + (this.wallWidth * 2));
        //draws the user
        this.user.displayRotatingPlayer(this.cameraOffsetX, this.cameraOffsetY);
        for (let evilClown of this.evilClowns) {
            displayObjRotatingToTarget(evilClown, this.user, evilClownImage, this.cameraOffsetX, this.cameraOffsetY);
        }
        //draws the walls
        for (let wall of this.walls) {
            fill('lime');
            displayObjAsImage(wall, 3, undefined, this.cameraOffsetX, this.cameraOffsetY);
        }
        //displays the current wave
        push();
        textAlign(LEFT, TOP);
        textSize(0.025 * width);
        fill(255, 0, 255);
        text(`Wave: ${this.wave}`, 0, 0);
        pop();
        //displays the intro text
        this.gameplayIntro();
    }

    /** draws the aliens along the walls/game area */
    drawWallAliens() {
        //draws the top wall aliens
        for (let i = 0; i < this.topAliens.length; i++) {
            this.topAliens[i].x = -0.0125 * width - width / 20 - width + Alien.size * i + this.cameraOffsetX;
            this.topAliens[i].y = -width * this.heightRatio - Alien.size * 1.8 + this.cameraOffsetY;
            this.topAliens[i].drawAlien();
        }
        push();
        //draws the bottom wall aliens
        rotate(180);
        for (let i = 0; i < this.bottomAliens.length; i++) {
            this.bottomAliens[i].x = -0.0125 * width - width / 20 - width * 2 + Alien.size * i - this.cameraOffsetX;
            this.bottomAliens[i].y = -width * this.heightRatio * 2 - (this.wallWidth / 20) * 2 - Alien.size * 1.8 - this.cameraOffsetY;
            this.bottomAliens[i].drawAlien();
        }
        pop();
        //draws the right wall aliens
        push();
        rotate(90);
        for (let i = 0; i < this.rightAliens.length; i++) {
            this.rightAliens[i].x = -width * 9.765625E-3 - width * this.heightRatio + Alien.size * i + this.cameraOffsetY;
            this.rightAliens[i].y = -0.0125 * width * 2 - width / 20 - width * 2 - Alien.size - this.cameraOffsetX;
            this.rightAliens[i].drawAlien();
        }
        pop();
        //draws the left wall aliens
        push();
        rotate(-90);
        for (let i = 0; i < this.leftAliens.length; i++) {
            this.leftAliens[i].x = width * 9.765625E-3 + width * this.heightRatio - Alien.size - Alien.size * i - this.cameraOffsetY;
            this.leftAliens[i].y = -0.0125 * width * 2 - width / 20 - width - Alien.size + this.cameraOffsetX;
            this.leftAliens[i].drawAlien();
        }
        pop();
    }

    /** creates the outside walls/game area relative to the window width and places them into their array */
    createWalls() {
        //creates the walls
        let topWall = {
            x: -width,
            y: -width * this.heightRatio - this.wallWidth,
            w: width * 3,
            h: this.wallWidth,
            texture: clowniseumImage
        }, bottomWall = {
            x: -width,
            y: width * this.heightRatio * 2,
            w: width * 3,
            h: this.wallWidth,
            texture: clowniseumImage
        }, leftWall = {
            x: -width - this.wallWidth,
            y: -width * this.heightRatio - this.wallWidth,
            w: this.wallWidth,
            h: width * this.heightRatio * 3 + (this.wallWidth * 2),
            texture: clowniseumImage
        }, rightWall = {
            x: width * 2,
            y: -width * this.heightRatio - this.wallWidth,
            w: this.wallWidth,
            h: width * this.heightRatio * 3 + (this.wallWidth * 2),
            texture: clowniseumImage
        };
        //adds the walls to their array
        this.walls.push(topWall, bottomWall, leftWall, rightWall);
    }

    /** creates aliens of the beginning animation,
     *  also creates the aliens to place along the outside walls */
    createAliens() {
        //creates the aliens for the title animation
        for (let i = 0; i < 3; i++) {
            this.titleAliens.push(new Alien(Alien.size * i, height));
        }
        //creates the aliens for the top/bottom game area walls
        for (let i = 0; i < 32; i++) {
            this.topAliens.push(new Alien(0, 0));
            this.bottomAliens.push(new Alien(0, 0));
        }
        //creates the aliens for the left/right game area walls
        for (let i = 0; i < 16; i++) {
            this.leftAliens.push(new Alien(0, 0));
            this.rightAliens.push(new Alien(0, 0));
        }
        console.log(`aliens created`);
    }

    /** detects collisions between walls and clowns to bring/bounce him back into the game area,
     * also detects collisions with the projectiles and removes them if they hit a wall or a clown */
    collisions() {
        for (let wall of this.walls) {
            //collisions between walls and the user
            this.wallBounce(wall, this.user);
            //collisions between walls and any evil clown
            for (let evilClown of this.evilClowns) {
                this.wallBounce(wall, evilClown);
            }
        }
        //detects any user projectile hitting a clown
        for (let i = this.userProjectiles.length - 1; i >= 0; i--) {
            for (let j = this.evilClowns.length - 1; j >= 0; j--) {
                if (collideCircleCircle(this.evilClowns[j].x, this.evilClowns[j].y, this.evilClowns[j].size, this.userProjectiles[i].x, this.userProjectiles[i].y, this.userProjectiles[i].size)) {
                    this.evilClowns[j].health -= 25;
                    if (this.evilClowns[j].health <= 0) {
                        this.evilClowns.splice(j, 1);
                    }
                    this.userProjectiles.splice(i, 1)
                    break;
                }
            }
        }
        //detects any enemy projectile hitting the user
        for (let i = this.enemyProjectiles.length - 1; i >= 0; i--) {
            if (collideCircleCircle(this.user.x, this.user.y, this.user.size, this.enemyProjectiles[i].x, this.enemyProjectiles[i].y, this.enemyProjectiles[i].size)) {
                this.user.health -= 5;
                if (this.user.health <= 0) {
                    this.state = 'loss';
                }
                this.enemyProjectiles.splice(i, 1);
            }
        }
        //detects any user projectile hitting a wall
        for (let i = this.userProjectiles.length - 1; i >= 0; i--) {
            for (let wall of this.walls) {
                if (collideRectCircle(wall.x, wall.y, wall.w, wall.h, this.userProjectiles[i].x, this.userProjectiles[i].y, this.userProjectiles[i].size)) {
                    this.userProjectiles.splice(i, 1);
                    break;
                }
            }
        }
        //detects any enemy projectile hitting a wall
        for (let i = this.enemyProjectiles.length - 1; i >= 0; i--) {
            for (let wall of this.walls) {
                if (collideRectCircle(wall.x, wall.y, wall.w, wall.h, this.enemyProjectiles[i].x, this.enemyProjectiles[i].y, this.enemyProjectiles[i].size)) {
                    this.enemyProjectiles.splice(i, 1);
                    break;
                }
            }
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

    /** generates a set amount of evil clowns outside the user's personal space.
     * the clowns will each have a random position outside the user's view */
    generateEvilClowns(wave) {
        for (let i = 0; i < ((wave) * 2); i++) {
            let tempPos = {
                x: random(0, width),
                y: random(0, height)
            } //ensure the clowns spawn inside the game area but outside the user's screen
            while (dist(this.user.x, this.user.y, tempPos.x, tempPos.y) < width / 2 + this.user.size) {
                tempPos.x = random(-width + this.user.size / 2, width * 2 - this.user.size / 2);
                tempPos.y = random(-width * this.heightRatio + this.user.size / 2, width * this.heightRatio * 2 - this.user.size / 2);
            }
            this.evilClowns.push(new Player(tempPos.x, tempPos.y, this.user.size, this.user.accel / 2, this.user.maxSpeed));
        }
    }

    /** displays the controls & the initial simulation dialogue */
    gameplayIntro() {
        if (this.gameplayDialogue < 255 * 5) {
            textSize(0.025 * width);
            let reversedGameplayDialogue;
            if (this.gameplayDialogue < 255) {
                reversedGameplayDialogue = map(this.gameplayDialogue, 0, 255, 255, 0);
                fill(255, 255, 255, reversedGameplayDialogue);
                text("WASD/Arrow Keys to move\nSpace/Left click to shoot mucus", width / 2, height / 4);
            } else if (this.gameplayDialogue > 255 && this.gameplayDialogue < 255 * 2) {
                reversedGameplayDialogue = map(this.gameplayDialogue, 255, 255 * 2, 255, 0);
                fill(255, 165, 0, reversedGameplayDialogue);
                text("What have you done to these poor clowns..\n and why are they so HD?", width / 2, height / 4);
            } else if (this.gameplayDialogue > 255 * 2 && this.gameplayDialogue < 255 * 3) {
                reversedGameplayDialogue = map(this.gameplayDialogue, 255 * 2, 255 * 3, 255, 0);
                fill(255, 150, 255, reversedGameplayDialogue);
                text("Allie:\n I forgot to feed them this week...\nOopsie!", width / 2, height / 4);
            } else if (this.gameplayDialogue > 255 * 3 && this.gameplayDialogue < 255 * 4) {
                reversedGameplayDialogue = map(this.gameplayDialogue, 255 * 3, 255 * 4, 255, 0);
                fill(0, 255, 255, reversedGameplayDialogue);
                text("Alionso:\nWe'll free you & clownette if you entertain us enough", width / 2, height / 4);
            } else if (this.gameplayDialogue > 255 * 4 && this.gameplayDialogue < 255 * 5) {
                reversedGameplayDialogue = map(this.gameplayDialogue, 255 * 4, 255 * 5, 255, 0);
                fill(105, 255, 105, reversedGameplayDialogue);
                text("Allen:\nK, Beat 20 waves and we'll let you go", width / 2, height / 4);
            }
            this.gameplayDialogue++;
        }
    }

    /** generates the beginning animation where Clown & Clownette are interrupted and then kidnapped by Allie, Allen & Alionso */
    beginningAnimation() {
        //displays Allie, Allen & Alionso
        for (let alien of this.titleAliens) {
            alien.drawAlien();
        }
        //Displays the project title at the beginning
        let gameTitleColor = map(this.titleClownMovement, 0, 255, 255, 0);
        if (gameTitleColor > 0) {
            fill(255, gameTitleColor, gameTitleColor, gameTitleColor);
            textSize(0.025 * width);
            text(`Project 1: \n The clownapping`, width / 2, height / 2);
        }
        // Displays clown & clownette moving to the center & talking to eachother
        textSize(0.0125 * width);
        if (this.titleClownMovement < width / 3) {
            fill(255, 0, 255);
            if (this.titleClownMovement < (width / 3) / 3) {
                text("Why did the clown go to the doctor?\n he was feeling a bit funny!", this.titleClownMovement + width / 3, height * (11 / 16));
            } else if ((this.titleClownMovement > (width / 3) / 3) && this.titleClownMovement < width / 3 - (width / 3) / 3) {
                text("You really bring out the circus in me!\nUwU", this.titleClownMovement + width / 3, height * (11 / 16));
            } else if ((this.titleClownMovement > width / 3 - (width / 3) / 3) && this.titleClownMovement < width / 3) {
                fill('orange');
                text("haha babe you're so funny..\n you're like a joke!", this.titleClownMovement, height * (11 / 16));
            }
            this.titleClown.x = this.titleClownMovement;
            this.titleClownette.x = this.titleClownMovement + width / 3;
            this.titleClownMovement += this.titleBeginningSpeed;
        } else if (this.titleAliensMovement < Alien.size * 0.8) {
            //Animates the aliens to move up and say their initial lines 
            for (let alien of this.titleAliens) {
                alien.y = height - Alien.size / 2 - this.titleAliensMovement;
                this.titleAliensMovement += this.titleAlienSpeed;
            }
            if (this.titleAliensMovement < Alien.size * 0.8 / 3) {
                textSize(0.015625 * width);
                fill(255, 150, 255);
                text("Allie:\nAlors on danse!", (width / 3) / 2, height - this.titleAliensMovement - Alien.size * 0.1);
            } else if ((this.titleAliensMovement > Alien.size * 0.8 / 3) && this.titleAliensMovement < 2 * Alien.size * 0.8 / 3) {
                fill(105, 255, 105);
                text("Allen:\nWhy didn't you tell me they had\nsuch good music here earlier!", 2 * width / 3 - Alien.size / 2, height - this.titleAliensMovement - Alien.size * 0.1);
            } else if ((this.titleAliensMovement > 2 * Alien.size * 0.8 / 3)) {
                fill(0, 255, 255);
                text("Alionso:\nWhat do we have here,\n a couple of clowns?", width - Alien.size / 2, height - this.titleAliensMovement - Alien.size * 0.1);
            }
        } else {
            // Animates the final exchange between the aliens & the clowns
            if (this.titleAliensTimer < 255 * 2.5) {
                this.titleAliensTimer++;
            }
            if (this.titleAliensTimer < 255 * 2) {
                if (this.titleAliensTimer < 255 / 4) {
                    fill('orange');
                    text("A couple of clowns\nlol", this.titleClownMovement, height * (11 / 16));
                    fill(255, 0, 255);
                    text("A couple of clowns\nlol", this.titleClownMovement + width / 3, height * (11 / 16));
                }
                fill(255, 150, 255, this.titleAliensTimer);
                text("They're so cute!", (width / 3) / 2, height - this.titleAliensMovement - Alien.size * 0.1);
                fill(105, 255, 105, this.titleAliensTimer - (255 / 2));
                text("Bro she looks drawn on MS paint", 2 * width / 3 - Alien.size / 2, height - this.titleAliensMovement - Alien.size * 0.1);
                fill(0, 255, 255, this.titleAliensTimer - (255));
                text("Let's take them to the clowniseum", width - Alien.size / 2, height - this.titleAliensMovement - Alien.size * 0.1);
            }
            if (this.titleAliensTimer > 255 * 2 && this.titleAliensTimer < 255 * 2.5) {
                fill('orange');
                text("the clowniseum???", this.titleClownMovement, height * (11 / 16));
                fill(255, 0, 255);
                text("the clowniseum???", this.titleClownMovement + width / 3, height * (11 / 16));
            } else if (this.titleAliensTimer > 255 * 2.5) {
                // Animates the horrible kidnapping of the clowns by aliens
                if (this.titleFinalMovement < height / 2 + Alien.size / 3) {
                    fill(255, 150, 255);
                    text("Muahahahaha", (width / 3) / 2, this.titleFinalMovement + height - this.titleAliensMovement - Alien.size * 0.1);
                    fill(105, 255, 105);
                    text("Muahahahaha", 2 * width / 3 - Alien.size / 2, this.titleFinalMovement + height - this.titleAliensMovement - Alien.size * 0.1);
                    fill(0, 255, 255);
                    text("Muahahahaha", width - Alien.size / 2, this.titleFinalMovement + height - this.titleAliensMovement - Alien.size * 0.1);
                    fill('orange');
                    text("Noooooo", this.titleClownMovement, this.titleFinalMovement + height * (11 / 16));
                    fill(255, 0, 255);
                    text("Noooooo", this.titleClownMovement + width / 3, this.titleFinalMovement + height * (11 / 16));
                    this.titleFinalMovement += this.titleFinalSpeed;
                    this.titleClownette.y = this.titleClown.y += this.titleFinalSpeed;
                    for (let alien of this.titleAliens) {
                        alien.y += this.titleFinalSpeed;
                    }
                } else {
                    // runs the gameplay part of the simulation after the final animation is over
                    this.state = `gameplay`;
                }
            }
        }
        //displays Clown & Clownette
        displayObjAsImage(this.titleClown, 0);
        displayObjAsImage(this.titleClownette, 0);
    }
}