// Barking sound
let bark = undefined;
// Whether or not the dog should keep barking
let barking = false;

/**(
 * Create canvas, load barking sound.
*/
async function setup() {
    createCanvas(600, 600);

    // Load the barking sound
    bark = await loadSound("assets/sounds/bark.wav");
}

/**
 * Plays the bark over and over if the dog is meant to be barking
 */
function draw() {
    background("pink");

    // .isPlaying() seems to be working now!
    if (!bark.isPlaying() && barking) {
        bark.play();
    }
}

/**
 * Tell the dog to start barking (or stop barking)
 */
function mousePressed() {
    barking = !barking;
}

