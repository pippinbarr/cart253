let drink = "...";

function setup() {
    createCanvas(500, 500);

    let liquid = random(["espresso", "tea", "beer"]);
    let milk = random(["cow milk", "oat milk", "cat milk"]);
    let sweetener = random(["sugar", "honey", "tears"]);

    drink = `${liquid} with ${milk} and ${sweetener}!`;

    // This is the same:
    // drink = liquid + " with " + milk + " and " + sweetener + "!";
}

function draw() {
    background(255, 0, 0);

    textSize(18);
    text(drink, 100, 100);
}
