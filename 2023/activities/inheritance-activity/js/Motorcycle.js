class Motorcycle extends Vehicle {
  constructor(x,y) {
    super(x,y);
    this.width = 30;
    this.height = 10;
    this.speed = 15;
  }

  display() {
    super.display();

    push();
    rectMode(CENTER);
    fill(255,255,0);
    noStroke();
    rect(this.x,this.y,this.width,this.height);
    pop();
  }
}
