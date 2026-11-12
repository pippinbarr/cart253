/**
 * Data A
 * Pippin Barr
 * 
 * Something with elements.json from Darius Kazemi's corpora
 * In this case a bunch of spheres in a 3D grid sized based on atomic density
 * 
 */

"use strict";

let elementsData = undefined;

async function setup() {
    createCanvas(800, 800, WEBGL);

    elementsData = await loadJSON("./assets/data/elements.json");
}

/**
 * Something with elements...?
*/
function draw() {
    orbitControl();
    lights();

    // randomSeed(100);
    background("seagreen");

    // Minimum and maximum density
    // 0.00008988 41

    // let min = 1000000;
    // let max = 0;
    let x = -width / 2;
    let y = -height / 2;
    let z = -width / 2;
    for (let element of elementsData.elements) {
        const heatCapacity = element.specific_heat_capacity || 0;
        const density = element.atomic_radius || 1;
        // if (density && density < min) {
        //     min = density;
        // }
        // if (density && density > max) {
        //     max = density;
        // }

        push();
        noStroke();
        const size = map(density, 1, 2, 5, 100);
        const vibration = map(heatCapacity, 14, 0, 50, 0);

        translate(x + random(-vibration, vibration), y + random(-vibration, vibration), z + random(-vibration, vibration));
        colorMode(HSB);
        fill(map(element.atomic_number, 1, 218, 0, 360), 100, 100);
        sphere(size);
        pop();

        x += size * 2;
        if (x > width / 2) {
            x = -width / 2;
            y += size * 2;
            if (y > height / 2) {
                x = -width / 2;
                y = -height / 2;
                z += size * 2;
            }
        }
    }
}






// ----------------------------

// Random examples of for loops

// for (let _thing of things) {
//     _thing.x = random(0, width);
// }

// things.forEach(function (_thing) {
//     _thing.x = random(0, width);
// });

// things.forEach((_thing) => {
//     _thing.x = random(0, width);
// });

// things.forEach(randomX);

// function randomX(_thing) {
//     _thing.x = random(0, width);
// }