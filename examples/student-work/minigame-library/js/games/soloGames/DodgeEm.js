/**Exercise 2: Dodge em!
 * @author Nicolas Morales-Sanabria
 * 
 * You are a clown! Get as many vaccinations as possible before catching covid, 
 * the game will end if you are touched by the virus and a special animation will appear.
 * Note: the original version was made for exercise 2 */
class DodgeEm {
    /** creates a runnable instance of the Dodge-em game */
    constructor() {
        //represents the user/player
        this.user = new Player(width / 2, height, height * 0.076, 0.4, 10);
        //represents the virus
        this.virus = new Player(width / 2, 0, height * 0.076, 0.3, 10);
        this.mousePos = {
            x: 0,
            y: 0,
        };

        //represents the syringe
        this.syringe = {
            x: 250,
            y: 250,
            size: 0.0456 * height,
        };

        this.staticAmount = 100;
        this.firstEndFrame = true;
        this.finalSyringesDisplayed = 0, this.finalClownsDisplayed = 0;
        this.state = "title";
    }

    /** Description of setup*/
    setup() {
        console.log(windowHeight)
        textAlign(CENTER, CENTER);
        textSize(width * 0.0234);
        this.user.vaccinations = 0;
        this.virus.texture = virusImage;
        this.syringe.x = random(this.syringe.size, width - this.syringe.size);
        this.syringe.y = random(this.syringe.size, height - this.syringe.size);
    }

    /** Description of draw() */
    run() {
        if (this.user.vaccinations >= vaccinations) {
            vaccinations = this.user.vaccinations;
        }
        if (this.state === "title") {
            this.title();
        } else if (this.state === "simulation") {
            this.simulation();
        } else if (this.state === "loss") {
            this.loss();
        }
    }

    /** displays the title of the simulation */
    title() {
        background(0);
        this.drawSyringe(width / 2, height / 4, this.syringe.size);
        fill("red");
        push();
        text("Get as many vaccinations as possible\n don't catch (or get caught by) covid!\n\nYou're the clown, guide him with the mouse\nClick to start", width / 2, height / 2)
        pop();

        if (mouseIsPressed && !sameMouseClick) {
            this.state = `simulation`;
        }
    }

    /** Display the loss state of the game, the user dies no matter the amount of vaccinations.
     * syringes, clowns & text is displayed according to the number of doses they got */
    loss() {
        if (this.firstEndFrame) {
            background(0); //clean the background if the player just died
            this.firstEndFrame = false;
            noStroke();
        }
        // Progressively display a syringe for every syringe the player had when he died
        if ((frameCount % 30 === 0) && (this.finalSyringesDisplayed < this.user.vaccinations)) {
            this.drawSyringe(random(this.syringe.size, width - this.syringe.size), this.syringe.y = random(this.syringe.size, height - this.syringe.size), this.syringe.size);
            this.finalSyringesDisplayed++;
        }
        // When all the final syringes are displayed,taunt the user with the shots he had when he died
        if ((this.finalSyringesDisplayed === this.user.vaccinations) || this.user.vaccinations === 0) {
            if (this.finalClownsDisplayed < this.user.vaccinations) {
                for (let i = 0; i < this.user.vaccinations; i++) { //clown the user for every vaccination he had
                    image(this.user.texture, random(0, width - this.user.size), random(0, height - this.user.size), this.user.size, this.user.size);
                    this.finalClownsDisplayed++;
                }
            }
            fill("red");
            if (this.user.vaccinations < 1) { // Write the correct message depending on the amount of syringes caught
                text("YOU DIED OF COVID\n UNVACCINATED\n\nPress Esc to return\nClick to restart", width / 2, height / 2);
            } else if (this.user.vaccinations === 1) {
                text("YOU HAD YOUR SHOT\n AND STILL DIED\n\nPress Esc to return\nClick to restart", width / 2, height / 2);
            } else if (this.user.vaccinations >= 1) {
                text("YOU HAD " + this.user.vaccinations + " SHOTS\n AND STILL DIED\n\nPress Esc to return\nClick to restart", width / 2, height / 2);
            }
        }
        //reset and start a new game
        if (mouseIsPressed) {
            this.finalSyringesDisplayed = this.finalClownsDisplayed = 0;
            this.syringe.x = random(this.syringe.size, width - this.syringe.size);
            this.syringe.y = random(this.syringe.size, height - this.syringe.size);
            while (checkCirclesOverlap(this.user, this.syringe)) {
                this.syringe.x = random(this.syringe.size, width - this.syringe.size);
                this.syringe.y = random(this.syringe.size, height - this.syringe.size);
            }
            this.firstEndFrame = true;
            this.user.x = width / 2;
            this.user.y = height;
            this.virus.x = width / 2;
            this.virus.y = 0;
            this.user.vaccinations = this.user.vx = this.user.vy = this.virus.vx = this.virus.vy = 0;
            this.state = "simulation";
        }
    }

    /** runs the gameplay state of the simulation */
    simulation() {
        noStroke(); //display vaccinations/syringes caught
        //normal animation
        background(0);
        //display vaccinations/syringes caught
        push();
        fill("cyan");
        textAlign(LEFT, TOP);
        text(`Vaccinations: ${this.user.vaccinations}`, 0, 0);
        pop();
        //display static background dots
        for (let i = 0; i < this.staticAmount; i++) {
            let x = random(0, width);
            let y = random(0, height);
            stroke(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
            strokeWeight(random(1, 10));
            point(x, y);
        }
        //draw the syringe with a random strokeweight from the static to have a trippy effect
        this.drawSyringe(this.syringe.x, this.syringe.y, this.syringe.size);
        //update mousePos X & Y
        this.updateMousePositions(this.mousePos);
        //make the user chase the mousePos and virus chase the user
        chaseFleeTarget(this.user, this.mousePos, 1);
        chaseFleeTarget(this.virus, this.user, 1);
        //display virus & user
        displayObjAsImage(this.virus, 0);
        displayObjRotatingToTarget(this.user, this.mousePos, clownImage, 0, 0);
        fill("red");
        //if the user touches the syringe, teleport it
        if (checkCirclesOverlap(this.user, this.syringe)) {
            //make sure the new syringe is not overlapping the user
            while (checkCirclesOverlap(this.user, this.syringe)) {
                this.syringe.x = random(this.syringe.size, width - this.syringe.size);
                this.syringe.y = random(this.syringe.size, height - this.syringe.size);
            }
            this.user.vaccinations++;
        }
        //Check user & virus superposition (game end)
        if (checkCirclesOverlap(this.virus, this.user)) {
            this.state = "loss";
        }
    }

    /** updates the  X & Y positions of a mouse object */
    updateMousePositions(mouseObject) {
        mouseObject.x = mouseX;
        mouseObject.y = mouseY;
    }

    /** draws a syringe */
    drawSyringe(x, y, size) {
        fill(0, 255, 255);
        rect(x - size / 6, y - size / 2 + size / 12, size / 3, size / 12);
        rect(x - size / 12, y - size / 2 + size / 12, size / 6, size / 4);
        rect(x - size / 4, y - size / 2 + size / 3, size / 2, size / 12);
        rect(x - size / 8, y - size / 2 + size / 2.4, size / 4, size / 2);
        strokeWeight(1);
        triangle(x - size / 24, y - size / 2 + (size / 1.09), x + size / 24, y - size / 2 + (size / 1.09), x, y - size / 2 + (size * 1.2));
        // ellipse(x, y, size); //check hitbox
    }
}