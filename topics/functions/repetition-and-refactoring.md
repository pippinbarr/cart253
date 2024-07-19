```javascript
let buzzyTheFly = {
    x: 200,
    y: 200,
    size: 100,
    buzziness: 4,
    fill: "#000000",
    fills: {
      default: "#000000",
      overlap: "#ff0000"
    }
};

let jazzyTheFly = {
    x: 300,
    y: 200,
    size: 50,
    buzziness: 1,
    fill: "#000000",
    fills: {
      default: "#000000",
      overlap: "#ff0000"
    }
};

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background("#87ceeb");
    
    moveBuzzy();
    moveJazzy();
  
    checkOverlap();
  
    drawBuzzy();
    drawJazzy();
}

function moveBuzzy() {
    buzzyTheFly.x += random(-buzzyTheFly.buzziness, buzzyTheFly.buzziness);
    buzzyTheFly.y += random(-buzzyTheFly.buzziness, buzzyTheFly.buzziness);
}

function moveJazzy() {
    jazzyTheFly.x += random(-jazzyTheFly.buzziness, jazzyTheFly.buzziness);
    jazzyTheFly.y += random(-jazzyTheFly.buzziness, jazzyTheFly.buzziness);
}

function checkOverlap() {
    let d = dist(jazzyTheFly.x, jazzyTheFly.y, buzzyTheFly.x, buzzyTheFly.y);
    if (d < jazzyTheFly.size/2 + buzzyTheFly.size/2) {
      buzzyTheFly.fill = buzzyTheFly.fills.overlap;
      jazzyTheFly.fill = jazzyTheFly.fills.overlap;
    }
    else {
      buzzyTheFly.fill = buzzyTheFly.fills.default;
      jazzyTheFly.fill = jazzyTheFly.fills.default;
    }
}

function drawBuzzy() {
    push();
    noStroke();
    fill(buzzyTheFly.fill);
    ellipse(buzzyTheFly.x, buzzyTheFly.y, buzzyTheFly.size);
    pop();
}

function drawJazzy() {
    push();
    noStroke();
    fill(jazzyTheFly.fill);
    ellipse(jazzyTheFly.x, jazzyTheFly.y, jazzyTheFly.size);
    pop();
}
```