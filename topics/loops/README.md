[Home](../../) / [🗓 Schedule](../../schedule) / [🛠 Examples](../../examples/) / [💫 Guides](../../guides/) / [💎 Resources](../../resources.md)

# 🔁 Loops {
    
✨ Loops allow us to very simple write instructions that can happen repeatedly, whether it's drawing a series of shapes or running through an entire array of elements! They'll come in handy again and again and again and again and again and again and again... ✨

## Learning objectives

- Understanding `while` loops
- Understanding `for` loops
- Developing a feeling for when loops are useful

## Template

- [template-p5-project.zip](../../templates/template-p5-project.zip)
    
## Modules

- *Introducing `while`-loops*
    - Watch the video on Moodle
    - Read the [Introducing `while`-loops notes](./introducing-while.loops.md)
- *`while`-loops in practice*
    - Watch the video on Moodle
    - Read the [`while`-loops in practice notes](./while-loops-in-practice.md)
- *Introducing `for`-loops*
    - Watch the video on Moodle
    - Read the [Introducing `for`-loops notes](./introducing-for-loops.md)
- *`for`-loops in practice*
    - Watch the video on Moodle
    - Read the [`for`-loops in practic notes](./for-loops-in-practice.md)
- *`for` versus `for...of`*
    - Watch the video on Moodle
    - Read the [`for` versus `for...of` notes](./for-versus-for-of.md)
- *Debugging loops*
    - Download the [Debugging loops project](MISSING_LINK)
    
## Examples

- [Concentric rings](https://editor.p5js.org/pippinbarr/sketches/NFEMNYKUE)
- [Interactive concentric rings](https://editor.p5js.org/pippinbarr/sketches/7KfK3pK9i)
- [Venetian blinds](https://editor.p5js.org/pippinbarr/sketches/hAadmI3kr)
    
## Challenges

- Try the [Loops challenges](MISSING_LINK) (We will review them in class)

## 🔥 Hot tip: 3D

There's a whole extra part of p5 devoted to drawing stuff in 3D using WebGL. One weird thing that you need to remember with it is that the origin (that is, the coordinates 0,0) is in the *centre* of the canvas when you use WebGL.

It's a way of dipping your toe into programmed 3D if you're interested. Check out the [3D](https://p5js.org/reference/#3D:~:text=the%20browser%27s%20viewport.-,3D,-Camera) section of the reference as well as the [3D Models](https://p5js.org/reference/#:~:text=Draws%20a%20triangle.-,3D%20Models,-loadModel()) and [3D Primitives](https://p5js.org/reference/#:~:text=to%20the%20canvas.-,3D%20Primitives,-beginGeometry()) sections.

For example:

```javascript
/**
 * Rotating cube
 * Pippin Barr
 *
 * Displays a rotating cube using WebGL
 */

// Data about our cube
const cube = {
  // How long are its sides?
  size: 100,
  // How is it currently rotated on x and z (radians)
  rotation: {
    x: 0,
    z: 0
  },
  // How much does it rotate each frame on x and z (radians)
  rotationSpeed: {
    x: 0.1,
    z: 0.01
  }
};

/**
 * Create the WEBGL canvas
 */
function setup() {
  // Note we include WEBGL as the third argument for createCanvas()
  createCanvas(400, 400, WEBGL);
}

/**
 * Displays a rotating cube
 */
function draw() {
  // The void
  background(0);
  
  // Still makes sense to protect these transformations (the rotations)
  // by using push() and pop()
  push();
  // Rotates everything we're about to draw on the x-axis
  rotateX(cube.rotation.x);
  // Rotates everything we're about to draw on the z-axis
  rotateZ(cube.rotation.z);
  // Draw a "box" (a cube), specifying the length of its sides
  box(cube.size);
  pop();
  
  // Update the cube's rotation so it rotates
  cube.rotation.x += cube.rotationSpeed.x;
  cube.rotation.z += cube.rotationSpeed.z;
}
```
    
## }