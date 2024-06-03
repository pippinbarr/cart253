/** Dancing Alien class
 * @author Nicolas Morales-Sanabria
 * Allows the creation of animated dancing disco party animal aliens that change colors
 * and move their arms to the beat!
 * this alien is a class version of my "I like to move it" exercise */
class Alien {

    //properties shared across all aliens (animation variables, colors & size)
    static offset1 = 0;
    static offset2 = 0;
    static offset3 = 0;
    static offset4 = 0;
    static direction1 = 1;
    static direction2 = 1;
    static direction3 = 1;
    static direction4 = 1;
    static randomColorR1;
    static randomColorB1;
    static randomColorG1;
    static randomColorR2;
    static randomColorG2;
    static randomColorB2;
    static randomColorR3;
    static randomColorG3;
    static randomColorB3;
    static randomColorR4;
    static randomColorG4;
    static randomColorB4;
    static randomColorR5;
    static randomColorG5;
    static randomColorB5;
    static randomColorR6;
    static randomColorG6;
    static randomColorB6;
    static size = 250;

    /** Creates an Alien object at the desired position in X & Y
     * @param x The position in X to draw the alien
     * @param y The position in Y to draw the alien*/
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.horizontalMovement = this.verticalMovement = 0;
    }

    /**draws an alien at the object's specified location */
    drawAlien() {
        //The following code draws the alien
        strokeWeight(Alien.size * 0.04);
        textSize(Alien.size * 0.04);
        textAlign(CENTER, CENTER);
        this.horizontalMovement = Alien.offset1 + this.x;
        this.verticalMovement = Alien.offset2 + this.y;
        //top of the head
        noStroke();
        fill(Alien.randomColorR1, Alien.randomColorG1, Alien.randomColorB1);
        ellipse((Alien.size / 2) + this.horizontalMovement, (Alien.size / 2) + (Alien.size / 8) + this.verticalMovement, Alien.size / 2, Alien.size / 4);
        fill(0);
        rect(this.x, Alien.size * (5 / 8) + this.verticalMovement + 1, Alien.size, Alien.size);
        //bottom of the head
        fill(Alien.randomColorR1, Alien.randomColorG1, Alien.randomColorB1);
        triangle(Alien.size / 4 + this.horizontalMovement, Alien.size * (5 / 8) + this.verticalMovement, (Alien.size * 0.75) + this.horizontalMovement, Alien.size * (5 / 8) + this.verticalMovement, (Alien.size / 2) + this.x, Alien.size + this.verticalMovement);
        //body
        fill(Alien.randomColorR1, Alien.randomColorG1, Alien.randomColorB1);
        ellipse((Alien.size / 2) + this.horizontalMovement, Alien.size + this.verticalMovement + Alien.size * 0.36, (Alien.size / 4) + Alien.offset3, Alien.size + Alien.offset3);
        fill(0);
        rect((Alien.size / 2) + this.horizontalMovement - (Alien.size / 4), Alien.size + this.verticalMovement + Alien.size * 0.4, (Alien.size / 2));
        //CLASSIFIED
        fill(Alien.randomColorR2, Alien.randomColorG2, Alien.randomColorB2);
        text("BELIEVE", (Alien.size / 2) + this.horizontalMovement, (Alien.size / 2) + this.verticalMovement + Alien.size * 0.75);
        //mouth
        fill(Alien.randomColorR2, Alien.randomColorG2, Alien.randomColorB2);
        ellipse((Alien.size / 2) + this.horizontalMovement, (Alien.size * 3 / 4) + this.verticalMovement, Alien.size / 8, Alien.size / 4);
        fill(Alien.randomColorR1, Alien.randomColorG1, Alien.randomColorB1);
        ellipse((Alien.size / 2) + this.horizontalMovement, (Alien.size * 3 / 4) - Alien.size * 0.02 + this.verticalMovement, Alien.size / 7, Alien.size / 4);
        //eyes
        push();
        //left eye
        fill(Alien.randomColorR3, Alien.randomColorG3, Alien.randomColorB3);
        translate(Alien.size * (6 / 16) - Alien.size * 0.016 + this.horizontalMovement, Alien.size * (10.6 / 16) + this.verticalMovement);
        rotate(25.5);
        ellipse(0, 0, Alien.size * 0.24, Alien.size * 0.04 + Alien.offset4);
        pop();
        //right eye
        push();
        translate(Alien.size * (10 / 16) + Alien.size * 0.016 + this.horizontalMovement, Alien.size * (10.6 / 16) + this.verticalMovement);
        rotate(-25.5);
        fill(Alien.randomColorR4, Alien.randomColorG4, Alien.randomColorB4);
        ellipse(0, 0, Alien.size * 0.24, Alien.size * 0.04 + Alien.offset4);
        pop();
        //nostrils
        fill(Alien.randomColorR5, Alien.randomColorG5, Alien.randomColorB5);
        ellipse(Alien.size * (8 / 16) - Alien.size * 0.02 + this.horizontalMovement, (Alien.size / 1.5) + Alien.size * 0.1 + this.verticalMovement, Alien.size * 0.01, Alien.size * 0.01);
        fill(Alien.randomColorR6, Alien.randomColorG6, Alien.randomColorB6);
        ellipse(Alien.size * (8 / 16) + Alien.size * 0.02 + this.horizontalMovement, (Alien.size / 1.5) + Alien.size * 0.1 + this.verticalMovement, Alien.size * 0.01, Alien.size * 0.01);
        //arms
        stroke(Alien.randomColorR1, Alien.randomColorG1, Alien.randomColorB1);
        //left arm
        line(Alien.size / 2 + this.horizontalMovement, Alien.size + this.verticalMovement, (Alien.size / 8) + this.horizontalMovement, Alien.size - (Alien.offset2 / 5) + this.y + Alien.size * 0.1);
        line((Alien.size / 8) + this.horizontalMovement, Alien.size - (Alien.offset2 / 5) + this.y + Alien.size * 0.1, (Alien.size * 0.2) + this.horizontalMovement, Alien.size - Alien.offset2 * 5 + this.y + -Alien.size * 0.1);
        //right arm
        line(Alien.size / 2 + this.horizontalMovement, Alien.size + this.verticalMovement, (Alien.size * 0.875) + this.horizontalMovement, Alien.size - (Alien.offset2 / 5) + this.y + Alien.size * 0.1);
        line((Alien.size * 0.875) + this.horizontalMovement, Alien.size - (Alien.offset2 / 5) + this.y + Alien.size * 0.1, (Alien.size * 0.8) + this.horizontalMovement, Alien.size + Alien.offset2 * 5 + this.y + -Alien.size * 0.1);
        noStroke();

    }

    /** Animates movements for all the aliens proportionally to their size */
    static alienAnimation() {
        Alien.randomColors();
        Alien.boppingX(Alien.size * 0.02);
        Alien.boppingY(Alien.size * 0.06);
        Alien.bodyWiggle(Alien.size * 0.04);
        Alien.eyesClosing();
    }

    /**Randomizes the RGB values for the different colors used */
    static randomColors() {
        //body & head
        Alien.randomColorR1 = (Math.random() * 80);
        Alien.randomColorG1 = (Math.random() * 80);
        Alien.randomColorB1 = (Math.random() * 80);
        //mouth & "BELIEVE"
        Alien.randomColorR2 = (Math.random() * 160);
        Alien.randomColorG2 = (Math.random() * 160);
        Alien.randomColorB2 = (Math.random() * 160);
        //left eye
        Alien.randomColorR3 = (Math.random() * 255);
        Alien.randomColorG3 = (Math.random() * 255);
        Alien.randomColorB3 = (Math.random() * 255);
        //right eye
        Alien.randomColorR4 = (Math.random() * 255);
        Alien.randomColorG4 = (Math.random() * 255);
        Alien.randomColorB4 = (Math.random() * 255);
        //nostrils
        Alien.randomColorR5 = (Math.random() * 120);
        Alien.randomColorG5 = (Math.random() * 120);
        Alien.randomColorB5 = (Math.random() * 120);
        Alien.randomColorR6 = (Math.random() * 120);
        Alien.randomColorG6 = (Math.random() * 120);
        Alien.randomColorB6 = (Math.random() * 120);
    }

    /** creates a left-right movement, modifying the xOffset.
     * @param maxOffset maximum value of the offset (absolute) */
    static boppingX(maxOffset) {
        Alien.offset1 += Alien.direction1 * Alien.size * 2.1E-3;
        if (Alien.offset1 >= maxOffset || Alien.offset1 <= -maxOffset) {
            Alien.offset1 = maxOffset * Math.sign(Alien.offset1);
            Alien.direction1 *= -1;
        }
    }

    /** creates an up-down movement, modifying the offset2.
     * @param maxOffset maximum value of the offset (absolute) */
    static boppingY(maxOffset) {
        Alien.offset2 += Alien.direction2 * Alien.size * 4.2E-3;
        if (Alien.offset2 >= maxOffset || Alien.offset2 <= -maxOffset) {
            Alien.offset2 = maxOffset * Math.sign(Alien.offset2);
            Alien.direction2 *= -1;
        }
    }

    /**creates a body wiggle movement, modifying the offset3
     * @param maxOffset maximum value of the offset (absolute) */
    static bodyWiggle(maxOffset) {
        Alien.offset3 += Alien.direction3 * 2E-3;
        if (Alien.offset3 >= maxOffset || Alien.offset3 <= -maxOffset) {
            Alien.offset3 = maxOffset * Math.sign(Alien.offset3);
            Alien.direction3 *= -1;
        }
    }

    /**generates the opening/closing movement of the eyes, modifying offset4 */
    static eyesClosing() {
        let maxOffset = Alien.size * 0.04;
        Alien.offset4 += Alien.direction4 * (Alien.size * 0.04) / 30;
        if (Alien.offset4 >= maxOffset || Alien.offset4 <= -maxOffset) {
            Alien.offset4 = maxOffset * Math.sign(Alien.offset4);
            Alien.direction4 *= -1;
        }
    }
}