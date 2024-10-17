/**
 * Friends, Romans, Countrymen
 * Pippin Barr (via Shakespeare)
 *
 * Displays the famous speech by Marc Anthoy in dialog boxes.
 *
 * Uses:
 * https://www.poetryfoundation.org/poems/56968/speech-friends-romans-countrymen-lend-me-your-ears
 */

// The speech itself as an array of strings
const speech = [
    "Ahem...",
    "*cough* *cough* *cough*",
    "Sorry, sorry... here we go...",
    "Friends, Romans, countrymen, lend me your ears;",
    "I come to bury Caesar, not to praise him.",
    "The evil that men do lives after them;",
    "The good is oft interred with their bones;",
    "So let it be with Caesar. The noble Brutus",
    "Hath told you Caesar was ambitious:",
    "If it were so, it was a grievous fault,",
    "And grievously hath Caesar answer’d it."
    "*cough* Thank you *cough*"
];
// Which part of the speech are we displaying?
let speechIndex = undefined;
// Dialog box specification
let box = {
    x: 50,
    y: 300,
    width: 300,
    height: 80,
    padding: 20,
    fontSize: 18
};
// Marc Anthony (we will preload an image into this)
let marcImage = undefined;

/**
 * Loads the Marc Anthony image
 */
function preload() {
    marcImage = loadImage("assets/images/marc.png");
}

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Displays Marc Anthony giving a speech
 */
function draw() {
    image(marcImage, 0, 0);

    // Display Marc Anthony and his dialog
    showDialog();
}

/**
 * Display the speech in a dialog box
 */
function showDialog() {
    // The background box
    push();
    fill(0);
    stroke(255);
    strokeWeight(3);
    rect(box.x, box.y, box.width, box.height);
    pop();

    // The text
    // Note how we're using extra arguments in text() to specify
    // the dimensions we want the text to wrap inside, including
    // using the padding of the dialog box
    push();
    fill(255);
    textSize(18);
    text(speech[0, box.x + box.padding, box.y + box.padding, box.width - 2 * box.padding, box.height - 2 * box.padding);
    pop();
}

/**
 * When the user clicks, advance the speech if there's more.
 */
function mousePressed() {
    // Make sure we're not at the end of the speech aready
    if (speechIndex < speech.length) {
        // Advance the line
        speechIndex += 2;
    }
}