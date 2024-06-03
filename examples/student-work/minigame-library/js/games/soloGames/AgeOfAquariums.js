
/** Age of Aquariums
 * @author Nicolas Morales-Sanabria
 * 
 * This is a fishing simulation, the user can move around and catch fish, he can win by catching enough or losing by catching a carnivore.
 * the player can click around to add fish to the simulation 
 * Note: the original version was made for exercise 4 */
class AgeOfAquariums {

    /** creates a runnable instance of the Fishing game */
    constructor() {
        this.state = `title`;
        this.school = [], this.evilSchool = [];
        this.schoolSize = 30, this.evilSchoolSize = 5;
        this.waterRatio = 0.8;
        this.waterSurface = height * (1 - this.waterRatio);
        this.fishHookSpeed = 1.5625E-3 * width;
        //represents the user on the boat
        this.user = {
            score: 0,
            x: 0,
            y: 0,
            accel: 0.1,
            vx: 0,
            vy: 0,
            maxSpeed: 20,
            boat: {
                w: 0.15625 * width,
                h: undefined,
            },
            hook: {
                xOrigin: 0,
                yOrigin: 0,
                x: 0,
                y: 0,
                size: 3.90635E-3 * width,
                vy: 0,
                busy: false
            },
            texture: fishermanImage
        }
    }

    /** Set important variables correctly, create the fish and position the boat*/
    setup() {
        this.user.boat.h = this.user.boat.w / 2;
        this.user.y = this.waterSurface - (this.user.boat.h * 0.8);
        this.user.hook.y = this.user.y + (this.user.boat.h / 2);
        textSize(0.02 * width);
        textAlign(LEFT, TOP);
        // Create the initial fish and add them to the school array
        for (let i = 0; i < this.schoolSize - 2; i++) {
            this.school.push(this.createFish(random(0, width), random(this.waterSurface, height), 0));
        }
        for (let i = 0; i < this.evilSchoolSize; i++) {
            this.school.push(this.createFish(random(0, width), random(this.waterSurface, height), 1));
        }
    }

    /** draws and generates the correct animation depending on the simulation state */
    run() {
        //draw the boat and the water
        background('lightblue');
        image(this.user.texture, this.user.x, this.user.y, this.user.boat.w, this.user.boat.h);
        fill(0, 0, 100);
        rect(0, this.waterSurface, width, height * this.waterRatio);
        //draw the animation depending on the simulation state
        if (this.state === `title`) {
            this.title();
        } else if (this.state === `simulation`) {
            this.simulation();
        } else if (this.state === `win`) {
            this.win();
        } else if (this.state === 'loss') {
            this.loss();
        }
    }

    /** displays the initial state and the instructions */
    title() {
        push();
        textAlign(CENTER, CENTER);
        fill('lightblue');
        textSize(0.04 * width);
        text(`Fisherman life simulator\n\nAD/Arrow Keys to move\nPress space to lower hook & reel fish in\nClick to start`, width / 2, height / 2);
        pop();
        if (mouseIsPressed && !sameMouseClick) {
            this.state = `simulation`;
        }
    }

    /** continues the animation after the player has won */
    win() {
        dedicated = true;
        //animate and draw fish
        for (let fish of this.school) {
            this.moveFish(fish);
            this.displayRotatingFish(fish);
        }
        push();
        textAlign(CENTER, TOP);
        textSize(0.02 * width);
        text(`You caught enough fish, now sit back and relax.\nClick to add more fishies\nPress Enter to restart, ESC to leave`, width / 2, 0.01 * height);
        pop();
        this.clickSpawnFish();
    }

    /** continues the animation after the player has lost */
    loss() {
        //animate and draw fish
        for (let fish of this.school) {
            this.moveFish(fish);
            this.displayRotatingFish(fish);
        }
        push();
        textAlign(CENTER, TOP);
        textSize(0.02 * width);
        text(`You caught a carnivore, what are you doing??? Enough fishing for today..\nClick to add fishies\nPress Enter to restart, ESC to leave`, width / 2, 0.01 * height);
        pop();
        this.clickSpawnFish();
        if (keyIsDown(13)) { // reset the game if the user pressed Enter
            this.user.score = 0;
            this.school = [];
            for (let i = 0; i < this.schoolSize - 2; i++) {
                this.school.push(this.createFish(random(0, width), random(this.waterSurface, height), 0));
            }
            for (let i = 0; i < this.evilSchoolSize; i++) {
                this.school.push(this.createFish(random(0, width), random(this.waterSurface, height), 1));
            }
            this.state = `simulation`;
        }
    }

    /** controls the simulation, the state when the user is fishing*/
    simulation() {
        //draw background
        if (this.user.score >= 20) {
            this.state = 'win';
        }
        this.keyMovement();
        //animate and draw fish
        for (let fish of this.school) {
            this.moveFish(fish);
            this.displayRotatingFish(fish);
        }
        this.controlBoatHook();
        text(`Fishies caught: ${this.user.score}`, 0, 0.01 * height);
    }

    /** Display the hook and control actions related to it */
    controlBoatHook() {
        push();
        strokeWeight(this.user.hook.size / 2);
        stroke("white");
        //detect if a fish is touching the hook and catch it if it is
        for (let fish of this.school) {
            if (!this.user.hook.busy && (dist(this.user.hook.xOrigin, this.user.hook.y, fish.x, fish.y) < (fish.size / 2 + this.user.hook.size / 2))) {
                this.user.hook.busy = fish.caught = true;
                console.log('caught');
            }
        }
        //draw the hook when it hasn't grabbed a fish
        if (!this.user.hook.busy) {
            line(this.user.hook.xOrigin, this.user.y + (this.user.boat.h * 0.15), this.user.hook.xOrigin, this.user.hook.y - this.user.hook.size / 2);
            noStroke();
            fill('red');
            ellipse(this.user.hook.xOrigin, this.user.hook.y, this.user.hook.size);
        } else {
            for (let i = this.school.length - 1; i >= 0; i--) {
                //draw the hook stuck to the fish if it's caught one and execute the correct actions 
                if (this.school[i].caught) {
                    line(this.user.hook.xOrigin, this.user.y + (this.user.boat.h * 0.15), this.school[i].x, this.school[i].y);
                    //reel the fish in if he's on the hook
                    if (keyIsDown(32)) {
                        let angle = atan2(this.user.hook.xOrigin - this.school[i].x, this.user.hook.yOrigin - this.school[i].y);
                        this.school[i].vx = this.fishHookSpeed * sin(angle);
                        this.school[i].vy = this.fishHookSpeed * cos(angle);
                    }
                    //remove the fish and free the hook if the user has reeled it in, add 1 to the score
                    if (dist(this.user.hook.xOrigin, this.user.hook.yOrigin, this.school[i].x, this.school[i].y) < this.user.hook.size) {
                        this.user.hook.y = this.user.hook.yOrigin;
                        this.user.hook.busy = false;
                        //lose if its a carnivore
                        if (this.school[i].type === 1) {
                            this.state = 'loss';
                        }
                        this.user.score++;
                        this.school.splice(i, 1);
                    }
                }
            }
        }
        pop();
    }

    /** creates a fish at the desired position with random size, speed and odds to change direction
    * @param x horizontal position for the fish to be created
    * @param y vertical position for the fish to be created
    * 
    * @returns a new fish */
    createFish(x, y, type) {
        let fish = new Player(x, y, random(9.765E-3 * width, 0.03 * width), 0, this.fishHookSpeed);
        fish.changeRate = random(0.005, 0.05);
        fish.caught = false;
        fish.type = type;
        return fish;
    }

    /** animate the fish, make them go in random directions, constrain them to the canvas and to the water */
    moveFish(fish) {
        // Choose whether to change direction
        if (fish.y > this.waterSurface) {
            randomSpasm(fish, fish.changeRate, 1);
        }
        // Move the fish
        fish.x = fish.x + fish.vx;
        fish.y = fish.y + fish.vy;
        // Constrain the fish to the canvas
        lockCircleInWindow(fish, 0, 0.5);
        // Gravitational effect if the fish get out of the water
        if (fish.y < this.waterSurface) {
            fish.vy += 3.90625E-5 * width;
        }
    }

    /** display the fish pointing in the direction of his movement */
    displayRotatingFish(fish) {
        // calculate the fish's angle and rotate it
        push();
        let angle = atan2(fish.vy, fish.vx);
        translate(fish.x, fish.y);
        angleMode(DEGREES)
        rotate(angle);
        // display the correct image depending on its direction
        if (fish.vx < 0) {
            scale(1, -1);
            if (fish.type === 0) {
                image(fishTexture, -fish.size / 2, -fish.size / 2, fish.size, fish.size);
            } else {
                image(evilTexture, -fish.size / 2, -fish.size / 2, fish.size, fish.size);
            }
        } else {
            if (fish.type === 0) {
                image(fishTexture, -fish.size / 2, -fish.size / 2, fish.size, fish.size);
            } else {
                image(evilTexture, -fish.size / 2, -fish.size / 2, fish.size, fish.size);
            }
        }
        pop();
    }

    /** spawn fish at mouse position on click */
    clickSpawnFish() {
        if ((mouseIsPressed && !sameMouseClick)) {
            this.school.push(this.createFish(mouseX, mouseY, 0));
            sameMouseClick = true;
        }
    }

    /** Allows the user to control the player's speed with accelerations,
    *  using the arrow keys or WASD
    *  adaptation of the keyMovement function in project 1 */
    keyMovement() {
        //horizontal movement
        keyMovementSolo(this.user, 1);
        //lower hook with the space bar and release to raise it
        if (keyIsDown(32) && !this.user.hook.busy) {
            this.user.hook.y += this.fishHookSpeed;
        } else if (!keyIsDown(32) && !this.user.hook.busy && this.user.hook.y > this.user.hook.yOrigin) {
            this.user.hook.y -= this.fishHookSpeed;
        }
        // constrain boat to window
        if (this.user.x < 0 || this.user.x > width - this.user.boat.w) {
            this.user.vx *= -0.5;
            this.user.x = constrain(this.user.x, 0, width - this.user.boat.w);
        }
        //move boat
        this.user.x += this.user.vx;
        this.user.hook.xOrigin = this.user.x + (this.user.boat.w * 0.83);
        this.user.hook.yOrigin = this.user.y + (this.user.boat.h / 2);
    }
}