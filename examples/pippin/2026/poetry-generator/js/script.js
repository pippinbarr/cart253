/**
 * Poetry Something
 * Pippin Barr
 * 
 * .......something....
 */

"use strict";

let nouns;
let verbs;
let adjectives;
let adverbs;
let closed_pairs;
let titans;
let dogs;

const generators = [
    [detN],
    [n],
    [pastV],
    [adv],
    [adj],
    [adv, pastV],
    [pair],
    [fpPastV],
    [fpPresentV],
    [detNofDetN]
];

let title = "Click to generate a poem.";
let poem;
let author;

async function preload() {
    closed_pairs = await loadJSON(`./assets/data/closed_pairs.json`);
    nouns = await loadJSON(`./assets/data/nouns.json`);
    verbs = await loadJSON(`./assets/data/verbs.json`);
    adjectives = await loadJSON(`./assets/data/adjectives.json`);
    adverbs = await loadJSON(`./assets/data/adverbs.json`);
    titans = await loadJSON(`./assets/data/greek_titans.json`);
    dogs = await loadJSON(`./assets/data/dog_names.json`);
}

/**
 * Create that canvas
*/
async function setup() {
    await preload();


    createCanvas(800, 800);
}

function draw() {
    background("pink");

    if (title) {
        textSize(24);
        textStyle(BOLD);
        textAlign(LEFT, TOP);

        textFont("Courier");
        text(title.toUpperCase(), 50, 50);
    }
    if (poem) {
        textStyle(NORMAL);
        text(poem, 50, 100);
    }
    if (author) {
        text("- " + author, 50, height - 50);
    }
}

function generateTitle() {
    title = random(generators)[0]();
}

function generatePoem() {
    poem = "";

    const length = floor(random(2, 20));
    for (let i = 0; i < length; i++) {
        const generator = random(generators);
        for (let g of generator) {
            poem += g() + " ";
        }
        poem += "\n";
    }
}

function generateAuthor() {
    author = random(dogs.dog_names) + " " + random(titans.greek_titans)
}

function pair() {
    const pairing = random(closed_pairs.pairs);
    return `${pairing[0]} & ${pairing[1]}`.toLowerCase()
}

function n() {
    return `${random(nouns.nouns)}`;
}

function detN() {
    return `the ${random(nouns.nouns)}`;
}

function detNofDetN() {
    return `the ${random(nouns.nouns)} of the ${random(nouns.nouns)}`;
}

function pastV() {
    return random(verbs.verbs).past;
}

function fpPresentV() {
    return "I " + random(verbs.verbs).present;
}

function fpPastV() {
    return "I " + random(verbs.verbs).past;
}

function presentV() {
    return random(verbs.verbs).present;
}

function adv() {
    return random(adverbs.adverbs);
}

function adj() {
    return random(adjectives.adjs);
}

function mousePressed() {
    generate();
}

function generate() {
    generateTitle();
    generatePoem();
    generateAuthor();
}