/** Ball class
 * @author Nicolas Morales-Sanabria
 * Allows the creation, display and control of balls (displayed as clowns) that move around
 * and can bounce on paddles */
class Ball {
    /** creates a new ball object, at the desired position
     * @param x the position in x for the ball
     * @param y the position in y for the ball */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = Math.sign(random(-1, 1)) * (width * 2.3474E-3);
        this.vy = 0;
        this.ax = width * 7.82473E-4;
        this.maxspeed = width * 0.0352;
        this.size = width * 0.03123;
    }

    /** move the ball, constrain it to the window and check if it scores */
    move() {
        //move and constrain to window if out of bounds
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        lockCircleInWindow(this, 2, 1);
        // check if a player lost the round
        if (this.x > width) {
            //increase score & setup for inbetween rounds
            game.score1++;
            game.lastRoundWinner = 1;
            game.roundEnded = true;
            game.state = `waiting`;
            if (game.score1 === 3) {
                game.score1 = game.score2 = 0;
                game.wins1++;
                game.state = `endGame`;
            }
        } else if (this.x < 0) {
            //increase score & setup for inbetween rounds
            game.score2++;
            game.lastRoundWinner = 2;
            game.roundEnded = true;
            game.state = `waiting`;
            if (game.score2 === 3) {
                game.score1 = game.score2 = 0;
                game.wins2++;
                game.state = `endGame`;
            }
        }
    }

    /** make the ball bounce on the paddles */
    bounce(paddle) {
        let dx = this.y - paddle.y - paddle.height / 2;
        if (paddle.player === 1) { //left (cyan paddle)
            if (collideRectCircle(paddle.x, paddle.y, paddle.width, paddle.height, this.x, this.y, this.size)) {
                //make it bounce and accelerate the ball
                this.x = paddle.x + paddle.width + this.size / 2;
                this.vx *= -1;
                if (abs(this.vx) < this.maxspeed) {
                    this.vx += this.ax;
                }
                // give it a vertical speed according to the angle of the ball & center of the paddle
                this.vy = (paddle.vy / 2) + this.vy + map(dx, -paddle.height / 2, paddle.height / 2, -2, 2);
            }
        } else if (paddle.player === 2) { //right (red paddle)
            if (collideRectCircle(paddle.x, paddle.y, paddle.width, paddle.height, this.x, this.y, this.size)) {
                //make it bounce and accelerate the ball
                this.x = width - paddle.width - this.size / 2;
                this.vx *= -1;
                if (abs(this.vx) < this.maxspeed) {
                    this.vx -= this.ax;
                }
                // give it a vertical speed according to the angle of the ball & center of the paddle
                this.vy = (paddle.vy / 2) + this.vy + map(dx, -paddle.height / 2, paddle.height / 2, -2, 2);
            }
        }
    }
}