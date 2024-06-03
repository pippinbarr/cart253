/**
 * JumpThang
 * Sam Reinstein Wright
 * 
 * This is a faudian game, meaning it's one level with no checkpoints and the controls are pretty callous. Intended to be 
 * something of a "rage game"
 * the game uses a basic physics simulation to have the effect of gravity and many differing kinds of rectangular hitboxes to make platforms that bounce and teleport and slide and stuff.
 */
//preload once
//same image
//one variablw with image
//display image muliple times
"use strict";
//this is to charge the jump's power
let charge = 1;
//this dictates how fast the main character falls
let gravity = 0.1;
//makes sure that grav gets turned off when this thing is true
let grounded = false;
//extra variable if i need to check jumps
let jumped = false;
//low gravity setting
let lowgrav = false;
//this is the inner workings of the charge meter 
let lilBox = {
    x: 100,
    y: 100,
    size: {
        x: 100,
        y: 10

    }
}
//the player character's guts
let player = {
    x: 500,
    y: 3999,
    w: 20,
    h: 25,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0
};
let state = "start"
//SOUND EXERCISE (PART 1) --- OPEN
/* I am making an adaptive soundtrack 
using many different songs being played
at the same time at differing volumes 
to make the sound dynamically change
as one progresses through the game. 
-------------------------------------
These are the variables I use to 
keep track of the individual song 
versions' different parameters
such as: the song itself, the volume,
and where to begin a transition.
*/
//the songs
let normalSoundtrack;
let lowGravSoundtrack;
let icySoundtrack;
let bounceSoundtrack;
let teleportSoudtrack;
//the volume 
let normalVolume = 1
let lowGravVolume = 0
let icyVolume = 0
let bounceVolume = 0
let teleportVolume = 0
//the area
let bounce
let normal
let icy
let lowGravity
let teleportArea
//SOUND EXERCISE (PART 1) --- CLOSE

//my platform array
//it contains all the data for each platform like x and y and type
let platforms = [];
//this is the variable forthe amount of dots gets displayed in the indicator
let dotCount = 15
//these are all the variables for each image/gif im using
let arrow
let arrowArc
let portal
let portalIn
let bluePortal

function preload() {
    //here I load the images
    arrow = loadImage('assets/images/arrow.gif')
    arrowArc = loadImage('assets/images/Project2ArcArrowGif.gif')
    portal = loadImage('assets/images/portalOut.gif')
    portalIn = loadImage('assets/images/Portal.gif')
    bluePortal = loadImage('assets/images/portal-pixel-art.gif')
    //SOUND EXERCISE (PART 2) --- OPEN
    // Here is where I load the music
    icySoundtrack = loadSound('assets/sounds/jumpIce.wav')
    lowGravSoundtrack = loadSound('assets/sounds/jumpLowGrav.wav')
    normalSoundtrack = loadSound('assets/sounds/jump.wav')
    bounceSoundtrack = loadSound('assets/sounds/jumpBounce.wav')
    teleportSoudtrack = loadSound('assets/sounds/jumpTeleport.wav')
    //SOUND EXERCISE (PART 2) --- CLOSE
}


function setup() {
    //creates my canvas
    createCanvas(4000, 4000);
    //sets all rectangle to be drawn from the center
    rectMode(CENTER);
    //creates all platforms in array
    for (let data of platformData) {
        let platform = createPlatform(data.x, data.y, data.w, data.h, data.type);
        platforms.push(platform);
    }
    //SOUND EXERCISE (PART 3) --- OPEN
    //here I call the function that plays the songs
    backgroundMusic()

    //SOUND EXERCISE (PART 3) --- CLOSE
}
//the function that gets the data and sends to be created
function createPlatform(x, y, w, h, type) {
    return {
        x: x,
        y: y,
        w: w,
        h: h,
        type: type,
        fill: [255, 255, 0]
    }
}
//the function that happens every tick
function draw() {
    //sets background colour after each tick
    background(0);
    //this detects what state the game is in and does different things based on that
    if (state === "start") {
        intro()
    }
    if (state === "game") {
        game()
    }
    if (state === "Win") {
        win()
    }
}
//this is the intro section, it displays the tutorial as well as the end goal
function intro() {
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text('DO NOT CLICK BEFORE READING THIS', 300, 100)
    text('Welcome to JUMPTHANG! \n \n Here is a small written tutorial. \n \n make sure to remember ;]', 400, 200)
    text('Hold "W" to charge your jump. \n \n Release to jump. \n \n You jump towards the cursor. \n \n The further your cursor is, the bigger the jump. \n \n \n \n Now scroll the the bottom', 400, 500)
    text('Your goal is to make it to the blue portal!', 400, 3500)
    //this is the blue portal in the tutorial to indicate what the goal is
    image(bluePortal, 550, 3550, 250, 250)
    text('Click Me!', 400, 3800)
}
function game() {
    //colour of player
    //removing the border around each rect
    noStroke()
    fill(255)
    imageMode(CENTER)
    //this is the image for the final portal
    image(bluePortal, 2250, 2650, 250, 250)
    //checks for interaction between the player and any given platform
    for (let platform of platforms) {
        checkInteraction(player, platform);
        //movePlatform(platform);
        //calling function to display platform
        displayPlatform(platform);
    }
    //this gets the data from my arrow array and displays images using the type system
    for (let i = 0; i < arrowData.length; i++) {
        push();
        imageMode(CENTER);
        //this data indicates where an individual image will be placed
        translate(arrowData[i].x, arrowData[i].y);
        angleMode(DEGREES);
        //this dictates its rotation
        rotate(arrowData[i].rotation);
        //these actually display the indivudual images
        //this one for the pointing hand
        if (arrowData[i].type === "straight") {
            image(arrow, 0, 0, 50, 25);
        }
        //this one for the arcing arrow
        if (arrowData[i].type === "arc") {
            image(arrowArc, 0, 0, 50, 50);
        }
        //this one for the pink portal
        if (arrowData[i].type === "teleport") {
            image(portal, 0, 0, arrowData[i].w, arrowData[i].h);
        }
        //this one for the green protal
        if (arrowData[i].type === "teleportIn") {
            image(portalIn, 0, 0, arrowData[i].w, arrowData[i].h);
        }

        pop();
    }
    //this actually displays the player character
    rect(player.x, player.y, player.w, player.h);
    //calls the functions that check for the base interaction of the game
    //this calls the function for charging the jump
    checkCharging()
    //this calls the function to check whether or not the character is one the ground and its grav/vel/acc/pos
    checkGrounded()
    //this calls the fucntion to check whether or not the character has hit the side walls
    checkSides()
    //this calls the function to check if the chaarcter is inside the low grav zone and to change the gravity accordingly
    checkGrav()


    //SOUND EXERCISE (PART 4) --- OPEN 
    //here i call the function that checks where the character is and controls the sound
    checkSoundtrack()
    //SOUND EXERCISE (PART 4) --- CLOSE
}
//this fucntion describes the state when you win, a little message and a "YOU WIN"
function win() {
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text('YOU WIN \n \n I genuinely did not think anyone would make it \n \n so congrats!', 2000, 2500)

}
//the function that decides the colour of each rectangle and that actually draws it
function displayPlatform(platform) {
    push();
    noStroke()
    //they check what type is associated with each platform's data and changes the colour of each platform accordingly
    //this is for the top ones and colours them red
    if (platform.type === "top") {
        fill('red')
    }
    //this one is brown
    else if (platform.type === "left") {
        fill('brown')
    }
    //so is this one
    else if (platform.type === "right") {
        fill('brown')
    }
    else if (platform.type === "bottom") {
        fill(225, 173, 1)
    }
    else if (platform.type === "slideTop") {
        fill('blue')
    }
    else if (platform.type === "slowGrav") {
        fill(255, 0, 255, 50)
    }
    else if (platform.type === "slipperyTop") {
        fill('cyan')
    }
    else if (platform.type === "normal") {
        fill(255, 0, 0, 30)
    }
    else if (platform.type === "lowGravity") {
        fill(255, 0, 255, 30)
    }
    else if (platform.type === "icy") {
        fill(0, 255, 255, 30)
    }
    else if (platform.type === "bouncyTop") {
        fill(251, 72, 196)
    }
    else if (platform.type === "bouncyRight") {
        fill(251, 72, 196)
    }
    else if (platform.type === "bouncyLeft") {
        fill(251, 72, 196)
    }
    else if (platform.type === "bouncyBottom") {
        fill(251, 72, 196)
    }
    else if (platform.type === "bouncy") {
        fill(251, 72, 196, 30)
    }
    else if (platform.type === "teleportIn") {
        fill(255, 95, 31, 50)
    }
    else if (platform.type === "Win") {
        fill(255, 95, 31, 20)
    }
    else if (platform.type === "teleportArea") {
        fill(34, 139, 34, 30)
    }
    //this actually makes the platforms
    rect(platform.x, platform.y, platform.w, platform.h);
    pop();
}
//checks if the player is intersecting with any other box
function checkInteraction(player, platform) {
    //the way all fo these work is it checks whether the area of the player is ever overlapping the area of another rectangle. each ractangle has a type and effects to the player are dictated by that type
    //top: makes sure player stays on the top of the platform
    if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "top") {
        //here in the top platform, if you touch it it teleports you up such that you are still overlapping with it by a single pixel, this gives the effect of being able to land on the red rectangles
        if (player.vy >= 0) {
            player.y = platform.y - 24
            grounded = true
        }
    }
    //left and right stops the player's x momentum and makes sure they dont go any further
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "left" &&
        grounded === false) {
        //this one checks if you're coming from the right and if you are you are teleported to right outside the rectangle and stripped of all your x vel, this gives the effect of the player hitting a wall and sliding down
        if (player.vx > 0) {
            player.x = platform.x - 15
            player.vx = 0
            if (player.vy < 0) {
                player.vy += 2
            }
        }
    }
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "right" &&
        grounded === false) {
        //this is identical to the previous one exept it stops movement coming from the left
        if (player.vx <= 0) {
            player.x = platform.x + 15
            player.vx = 0
            if (player.vy < 0) {
                player.vy += 2
            }
        }
    }
    //bottom: stops y momentum
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "bottom") {
        //this one just stops you from going up to give the effect you've hit your head 
        if (player.vy <= 0) {
            player.vy = 0
        }
    }
    //makes sure if touched, they will teleport to the center and slide through
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "slideTop") {
        //this just teleports you to the center of the platform and stops any x movement without stopping you from falling through
        if (player.vy >= 0) {
            player.vx = 0
            player.vy = 0
            player.x = platform.x
        }
    }
    //applies low gravity 
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "slowGrav") {
        //this is an area which indicates that low gravity is true and that the low grav function should change the grav

        lowgrav = true
    }
    //makes the player slip and slide if velocity is higher than 0.1    
    if (player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        platform.type === "slipperyTop") {
        //this one checks of your momentum is greater than 0 and if it is it gradually brings it to 0 no matter what side youre comign from, this gives the effect of an icy surface
        if (player.vy >= 0) {
            if (player.vx > 0) {
                player.vx = player.vx - 0.01;
                player.vy = 0;
                player.ay = 0;
                if (player.vx < 0.1) {
                    grounded = true;
                }
            }


            if (player.vx < 0) {
                player.vx = player.vx + 0.01;
                player.vy = 0;
                player.ay = 0;
                if (player.vx > -0.1) {
                    grounded = true;
                }
            }
            if (player.vx === 0) {
                grounded = true;
            }


            player.y = platform.y - 24;
        }
    }
    //SOUND EXERCISE (PART 5) --- OPEN
    /*These are the collision detection codes 
    for the different sound zones. they check 
    whether or not the player is in said zone
    and changes the zone type in order to 
    indicate which music to swap to.
    */
    //this is for the normal zone
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "normal") {

        normal = true
        lowGravity = false
        icy = false
        bounce = false
        teleportArea = false
    }
    //this is for the low grav zone
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "lowGravity") {

        normal = false
        lowGravity = true
        icy = false
        bounce = false
        teleportArea = false
    }
    //this is for the icy zone
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "icy") {

        normal = false
        lowGravity = false
        icy = true
        bounce = false
        teleportArea = false
    }
    //this is for the bouncy zone
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "bouncy") {
        bounce = true
        normal = false
        icy = false
        lowGravity = false
        teleportArea = false
    }
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "teleportArea") {
        teleportArea = true
        bounce = false
        normal = false
        icy = false
        lowGravity = false
    }
    //SOUND EXERCISE (PART 5) --- CLOSE
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "bouncyTop") {
        //this just checks if youre going down onto it and if so, it flips your movement to give the effect of bouncing
        if (player.vy >= 0) {

            player.ay = 0
            player.vy = -player.vy
        }


    }
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "bouncyRight" &&
        //same as prev but flips x making you go from left movement to right movement
        grounded === false) {
        if (player.vx <= 0) {
            player.vx = - player.vx
            player.ay = 0
        }
    }
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "bouncyLeft" &&
        //same as prev but right to left
        grounded === false) {
        if (player.vx >= 0) {
            player.vx = - player.vx
            player.ay = 0
        }
    }
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "bouncyBottom") {
        //this flips ur y momentum
        if (player.vy <= 0) {
            player.vy = -player.vy
            player.ay = 0
        }
    }
    if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "teleportIn") {
        //this teleports you to a specific place and doubles whatever momentum you had going in
        player.x = 2200
        player.y = 2250
        player.vx = player.vx * 1.9
        player.vy = player.vy * 1.9
    }
    if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "Win") {
        //if you touch this one the state gets changes to win and you win
        state = "Win"
    }



}
//the jump
function keyReleased() {
    //this checks if youre in the low grav zone
    if (lowgrav === false) {
        //this makes sure the game knows youve jumped
        jumped = true
        grounded = false
        //this find the distance between the x and y of the player and the x and y of the mouse
        let dx = mouseX - player.x;
        let dy = mouseY - player.y;
        //this stops that number from getting too large
        dy = constrain(dy, -400, 400)
        dx = constrain(dx, -400, 400)
        //this makes the player's velocity equal to the distance mapped to different ranges and multiplied by the charge, the ranges and numbers were found by trail and error of what felt the best to me
        player.vx = map(dx, -1000, 1000, -15, 15) * (charge / 50);
        player.vy = map(dy, -500, 500, -10, 10) * (charge / 50);
    }
    //this is exactly the same thing but makes sure that everythig happend in the right order such that the jump has low gravity
    if (lowgrav === true && grounded === true) {
        jumped = true
        grounded = false
        let dx = mouseX - player.x;
        let dy = mouseY - player.y;
        dy = constrain(dy, -400, 400)
        dx = constrain(dx, -400, 400)
        player.vx = map(dx, -1000, 1000, -15, 15) * (charge / 50);
        player.vy = map(dy, -500, 500, -10, 10) * (charge / 50);
    }
}
//checks if the player is grounded and dictates player velocity and momentum
function checkGrounded() {
    //this makes it so if the player is on the ground, they arent being affected by gravity or sliding
    if (grounded === true) {

        player.vx = 0;
        player.vy = 0;
        player.ay = 0;

    }
    //this makes sure that the player slows down on the x axis while in the air in the ice zone in order to make a certain jump possible
    if (grounded === false) {
        if (icy) {
            //checks if the vx is over or under 0 and subtracts or adds accordingly
            if (player.vx >= 0) {
                player.vx -= 0.075
            }
            if (player.vx <= 0) {
                player.vx += 0.075
            }
        }
        //this is the mini physics simulator
        //player acceleration is affected by gravity
        player.ay += gravity;
        //player velocity is affected by acceleration
        player.vx += player.ax;
        player.vy += player.ay;
        //and player position is affected by player velocity
        player.x += player.vx;
        player.y += player.vy;
        //this reduces the contrains put on the x and y speed of the player in the bouncy area to make some of the jumps possible
        if (!bounce) {
            player.vx = constrain(player.vx, -20, 20)
            player.vy = constrain(player.vy, -20, 20)
        }
        if (bounce) {
            player.vx = constrain(player.vx, -30, 30)
            player.vy = constrain(player.vy, -30, 30)
        }

    }
}
//checks if player is on the side of the canvas and bounces them
function checkSides() {
    //this makes sure to keep the player within the canvas bounds
    player.x = constrain(player.x, 0, width);
    player.y = constrain(player.y, 0, height);
    //this checks if the player has hit a wall and makes them bounce in the other direction
    if (player.x === width) {
        player.vx = -player.vx;
    }
    if (player.x === 0) {
        player.vx = -player.vx;
    }
    if (player.y >= height) {
        player.vy = 0;
        player.vx = 0;
        player.ay = 0;
        player.y = height;
    }
}
//the function that allows charge to build if holding the w key
function checkCharging() {
    //checks what key is down
    if (keyIsDown(87)) {
        //checks if the charge is less that 100
        if (charge < 100) {
            //increases charge by 1
            charge += 1;
            //preforms the indication function based on the level of charge
            indication()
        }
        if (charge === 100) {
            indication()
        }
    }
    else {
        charge = 0
    }
    //this is the charge bar that happens when you hold w
    rect(player.x, player.y - 25, charge, lilBox.size.y)
}
//this just makes sure the music is always playing
function keyIsDown() {
    if (!normalSoundtrack.isPlaying()) {
        normalSoundtrack.play()
    }
}
//checks of lowgrav is true, if yes then it makes gravity lower lol
function checkGrav() {
    if (lowgrav === true) {
        //reduces gravity by x10
        gravity = 0.01
    }
    else {
        gravity = 0.1
    }
    lowgrav = false
}


//SOUND EXERCISE (PART 6) --- OPEN
/*This is for any dev to use in order 
to teleport the player to the mouse 
location on click to check specific 
jumps or to hear the sound shift without 
playing the whole game. 
----------------------------------------
If you click and the player character was
not on a red platform then the character 
will begin to fall. SO if the character is 
falling, click such that they will land on 
a red platform. To get out of this immobile0
state, just press w. 
*/
//SOUND EXERCISE (PART 6) --- CLOSE
//dev tool so i can test jumps
function mousePressed() {
    //player.x = mouseX
    //player.y = mouseY
    if (state === "start") {
        state = "game"
    }
}


//this makes it so there's an indicator where ur mouse is
function indication() {
    //this is basically a function that calculates where the player will be in the next frames based on current charge and mouse distance
    //this is giving each dot in the array the properties of the player
    let dx = mouseX - player.x;
    let dy = mouseY - player.y;
    dy = constrain(dy, -400, 400)
    dx = constrain(dx, -400, 400)
    let vx = map(dx, -1000, 1000, -15, 15) * (charge / 50);
    let vy = map(dy, -500, 500, -10, 10) * (charge / 50);
    let ay = 0
    //this makes sure that the indicator comes from the player
    let x = player.x
    let y = player.y
    //this is the array of dots
    let path = []
    //this is the variable that dictates how many times the process repeats itself
    let counter = 0
    //this changes the max number of indicator dots in the bouncy area
    if (bounce) {
        dotCount = 9 * (charge / 50)
    }
    else if (!bounce) {
        dotCount = 15
    }
    //this is where the process takes place, it calculates based on current mous position and charge waht the next frame's player position will be 
    do {
        ay += gravity
        vy += ay
        x += vx;
        y += vy;


        path.push({
            x: x,
            y: y

        });
        counter++
    } while (counter < dotCount)
    // Draw the path
    //this displays each dot
    for (let i = 0; i < path.length; i++) {
        let point = path[i];
        push();
        rectMode(CENTER);
        noStroke();
        //this makes the dots fade out as they get further in the array 
        let alpha = map(i, 0, path.length, 255, 0);
        fill(255, alpha);
        rect(point.x, point.y, 2, 2);
        pop();
    }




}
//SOUND EXERCISE (PART 7) --- OPEN
/*These two functions are used to 
set and check the songs. 
*/
//This one begins playing the music at the volume indicated by the variable
function backgroundMusic() {
    //this plays the music
    normalSoundtrack.play()
    //this loops the music
    normalSoundtrack.loop()
    //this sets the volume
    normalSoundtrack.setVolume(normalVolume)
    icySoundtrack.play()
    icySoundtrack.loop()
    icySoundtrack.setVolume(icyVolume)
    lowGravSoundtrack.play()
    lowGravSoundtrack.loop()
    lowGravSoundtrack.setVolume(lowGravVolume)
    bounceSoundtrack.play()
    bounceSoundtrack.loop()
    bounceSoundtrack.setVolume(bounceVolume)
    teleportSoudtrack.play()
    teleportSoudtrack.loop()
    teleportSoudtrack.setVolume(teleportVolume)
    userStartAudio()
}
//this function checks what area the player is in and slowly fades out all other music of other areas while fading in that areas music
function checkSoundtrack() {
    //this checks the area
    if (normal) {
        //this checks which area's music is playing and slowly reduces the volume
        //icy
        if (icyVolume > 0) {
            icyVolume -= 0.001
        }
        //low grav
        if (lowGravVolume > 0) {
            lowGravVolume -= 0.001
        }
        //this increases the normal areas volume
        if (normalVolume < 1) {
            normalVolume += 0.001
        }
        //bouncy
        if (bounceVolume > 0) {
            bounceVolume -= 0.001
        }
        if (teleportVolume > 0) {
            teleportVolume -= 0.001
        }
    }
    //the rest are th eexact same as the one above exept they check different areas
    if (lowGravity) {
        if (icyVolume > 0) {
            icyVolume -= 0.001
        }
        if (lowGravVolume < 1) {
            lowGravVolume += 0.001
        }
        if (normalVolume > 0) {
            normalVolume -= 0.001
        }
        if (bounceVolume > 0) {
            bounceVolume -= 0.001
        }
        if (teleportVolume > 0) {
            teleportVolume -= 0.001
        }
    }
    if (icy) {
        if (icyVolume < 1) {
            icyVolume += 0.001
        }
        if (lowGravVolume > 0) {
            lowGravVolume -= 0.001
        }
        if (normalVolume > 0) {
            normalVolume -= 0.001
        }
        if (bounceVolume > 0) {
            bounceVolume -= 0.001
        }
        if (teleportVolume > 0) {
            teleportVolume -= 0.001
        }
    }
    if (bounce) {
        if (bounceVolume < 1) {
            bounceVolume += 0.001
        }
        if (lowGravVolume > 0) {
            lowGravVolume -= 0.001
        }
        if (normalVolume > 0) {
            normalVolume -= 0.001
        }
        if (icyVolume > 0) {
            icyVolume -= 0.001
        }
        if (teleportVolume > 0) {
            teleportVolume -= 0.001
        }
    }
    if (teleportArea) {
        if (bounceVolume > 0) {
            bounceVolume -= 0.001
        }
        if (lowGravVolume > 0) {
            lowGravVolume -= 0.001
        }
        if (normalVolume > 0) {
            normalVolume -= 0.001
        }
        if (icyVolume > 0) {
            icyVolume -= 0.001
        }
        if (teleportVolume < 1) {
            teleportVolume += 0.001
        }
    }
    //this constantly updates the volume of each song
    normalSoundtrack.setVolume(normalVolume)
    icySoundtrack.setVolume(icyVolume)
    lowGravSoundtrack.setVolume(lowGravVolume)
    bounceSoundtrack.setVolume(bounceVolume)
    teleportSoudtrack.setVolume(teleportVolume)
}
//SOUND EXERCISE (PART 7) --- CLOSE
