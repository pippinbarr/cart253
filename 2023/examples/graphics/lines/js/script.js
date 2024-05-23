"use strict";

const WAVE_RESOLUTION = 1;
let waves = [];

function setup() {
  createCanvas(500, 500);
  // Create waves
  let y = 100;
  while (y < height) {
    let wave = createWave(0, y);
    waves.push(wave);
    y += 25;
  }
}

function draw() {
  background(255, 255, 0);
  for (let i = 0; i < waves.length; i++) {
    updateWave(waves[i]);
  }
}

function createWave(x, y) {
  return {
    x: x,
    y: y,
    amplitude: 10,
    frequency: random(0.01, 0.025),
    bobAngle: random(TWO_PI),
    bobAmount: random(2, 10),
    flow: random(0, TWO_PI),
    shade: random(50, 255)
  }
}

function updateWave(wave) {
  moveWave(wave);
  displayWave(wave);
}

function moveWave(wave) {
  wave.bobAngle += 0.05;
  wave.flow += 0.09;
}

function displayWave(wave) {
  push();
  // Coloring
  noStroke();
  fill(wave.shade, 100);
  // Draw the wave with vertices
  beginShape();
  // One at the far left and the wave's height
  vertex(0, wave.y);
  let flow = wave.flow;
  // Loop through every horizontal vertex of the wave's shape (across the canvas)
  for (let x = 0; x < width; x += WAVE_RESOLUTION) {
    // Genereate a y for this vertex
    // wave.y is the base level y position of the overall wave
    // sin(wave.bobAngle) * wave.bobAmount makes the wave bob up and down over time
    // sin(flow) * wave.amplitude gives us the basic sinewave form
    let y = wave.y + sin(wave.bobAngle) * wave.bobAmount + sin(flow) * wave.amplitude;
    // Draw the vertex
    vertex(x, y);
    // Increase the flow so that we continue along the sinwave form
    flow += wave.frequency;
  }
  // Draw final vertices at the the bottom right and bottom left
  vertex(width, height);
  vertex(0, height);
  endShape();
  pop();
}