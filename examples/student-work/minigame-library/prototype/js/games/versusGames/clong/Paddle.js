/** Clong class
 * @author Nicolas Morales-Sanabria
 * Allows the creation, display and control of paddles to make the ball bounce in the clong game */
class Paddle {
    /** Creates a user-controlled paddle for the players to play the clong game
     * @param w width of the paddle
     * @param h height of the paddle
     * @param player which player will control the paddle (1 or 2) */
    constructor(w, h, player) {
        this.width = w;
        this.height = h;
        this.accel = height * 2.278E-4;
        this.vy = 0;
        this.player = player;
        if (player === 1) {
            this.x = 0;
        } else if (player === 2) {
            this.x = width - w;
        }
        this.y = height / 2 - this.height / 2;
    }

    /** control the paddles with keys and constrain them to the window */
    move() {
        //player 1 paddle movement (W/S)
        if (this.player === 1) {
            if (keyIsDown(87) && !keyIsDown(83)) {
                this.vy -= this.accel;
            } else if (keyIsDown(83) && !keyIsDown(87)) {
                this.vy += this.accel;
            } else if ((!keyIsDown(87) && !keyIsDown(83)) || (keyIsDown(87) && keyIsDown(83))) {
                this.vy /= 1.03;
            }
        } else if (this.player === 2) {
            //player 2 paddle movement (Up/Down arrow keys)
            if (keyIsDown(38) && !keyIsDown(40)) {
                this.vy -= this.accel;
            } else if (keyIsDown(40) && !keyIsDown(38)) {
                this.vy += this.accel;
            } else if (!keyIsDown(40) && !keyIsDown(38) || (keyIsDown(40) && keyIsDown(38))) {
                this.vy /= 1.03;
            }
        }
        //constrain the paddles to the window
        if (this.y < 0) {
            this.y = 0;
            this.vy *= -1;

        } else if (this.y + this.height > height) {
            this.y = height - this.height;
            this.vy *= -1;
        } //move the paddles
        this.y += this.vy;
    }

    /** display paddles according to the right player, positions and dimensions */
    display() {
        push();
        if (this.player === 1) {
            fill(`CYAN`);
        } else if (this.player === 2) {
            fill(`RED`);
        }
        noStroke();
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}