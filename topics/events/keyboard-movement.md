```javascript
const ball = {
    // Position
    x: 200,
    y: 200,
    // Size
    size: 50,
    // Velocity so it can move
    velocity: {
        x: 0,
        y: 0
    },
    // Speed when it moves
    speed: 5
}

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Moves the ball and draws it
 */
function draw() {
    background(0);
  
    // Move the ball
    ball.x += ball.velocity.x
    ball.y += ball.velocity.y;
  
    // Draw the ball
    push();
    ellipse(ball.x, ball.y, ball.size);
    pop();
}

/**
 * Move the ball
 */
function keyPressed(event) {
    // Check the right arrow
    if (event.keyCode === 39) {
        // Go right
        ball.velocity.x = ball.speed;
    }
    // Check the left arrow
    else if (event.keyCode === 37) {
        // Go left (negative velocity)
        ball.velocity.x = -ball.speed;
    }
    
    // Check the up arrow
    if (event.keyCode === 38) {
        // Go up (negative velocity)
        ball.velocity.y = -ball.speed;
    }
    // Check the down arrow
    else if (event.keyCode === 40) {
        // Go down
        ball.velocity.y = ball.speed;
    }
}

function keyReleased(event) {
  console.log(event.key);
    // Check the right arrow
    if (event.keyCode === 39) {
        // Stop going right
        ball.velocity.x = 0;
    }
    // Check the left arrow
    else if (event.keyCode === 37) {
        // Stop going left
        ball.velocity.x = 0;
    }
    
    // Check the up arrow
    if (event.keyCode === 38) {
        // Stop going up
        ball.velocity.y = 0;
    }
    // Check the down arrow
    else if (event.keyCode === 40) {
        // Stop going down
        ball.velocity.y = 0;
    }
}
```