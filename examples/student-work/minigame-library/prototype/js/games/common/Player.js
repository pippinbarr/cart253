/** Player class
 * @author Nicolas Morales-Sanabria
 * Allows the creation and control of a user with a texture that can move around with keys,
 * and rotate following the mouse */
class Player {

    /** Creates a Player object at the desired position, with the desired size, acceleration & max speed
     * @param  x desired horizontal position
     * @param  y desired vertical position
     * @param  size desired size
     * @param  accel desired acceleration
     * @param  maxSpeed desired max speed */
    constructor(x, y, size, accel, maxSpeed) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.size = size;
        this.accel = accel;
        this.maxSpeed = maxSpeed;
        this.speed = 0;
        this.texture = clownImage;
        this.angle;
        this.fireDelay = 0;
        this.health = 100;
    }

    /** calculates the angle between the user and draws him rotated, taking into account any offset of the user (ie. from the middle of the screen)
     * @param cameraOffsetX any horizontal offset to take into account to draw the user
     * @param cameraOffsetY any vertical offset to take into account to draw the user */
    displayRotatingPlayer(cameraOffsetX, cameraOffsetY) {
        push();
        this.angle = atan2(mouseY - windowHeight / 2 - (this.vy * 4), mouseX - windowWidth / 2 - (this.vx * 4));
        translate(this.x + cameraOffsetX, this.y + cameraOffsetY);
        rotate(this.angle - 90);
        image(this.texture, -this.size / 2, -this.size / 2, this.size, this.size);
        pop();
        // console.log(`User angle: ${angle}`)
    }

    /** Manages the display of the user's Health bar and its regeneration*/
    userHealthManagement() {
        //display the health bar
        let healthTransparency = map(this.health, 100, 0, 255, 0);
        fill(0, 0, 0, 150);
        rect(width / 2 - width * 0.1, height * 0.8, width * 0.2, height * 0.1);
        fill(0, 255, 0, healthTransparency);
        rect(width / 2 - width * 0.1, height * 0.8, width * 0.2 * (this.health / 100), height * 0.1);
        fill(255);
        textSize(0.025 * width);
        text(`HP: ${this.health}`, width / 2, height * 0.85);
        //+2 health if hurt, every ~1 second
        if (frameCount % 60 === 0 && this.health < 100) {
            this.health += 2;
            if (this.health > 100) {
                this.health = 100;
            }
        }
    }
}