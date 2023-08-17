# Exercise: Dodge-em {

#### Grade
- 4% of final grade
- Remember that only 5 of your completed and passing exercises contribute to the final grade
- Further guidelines below

#### Deadline
- Section A (Thursdays): 11:59PM, 30 September 2021
- Section B (Tuesdays): 11:59PM, 28 September 2021

## Objectives

1. Writing your own if-statements
2. Working with loops for drawing
3. Playing with the mouse
4. Learning to display `image()`s

## Set up

1. Download the `template-p5-project` and rename the folder to `dodge-em`
3. Move the `dodge-em` folder to your `exercises` folder
4. Open the `dodge-em` folder in Atom
5. Commit and push in GitHub Desktop with a message saying "Ex: Started Dodge-em exercise"

## Brief

Improve (or just change!) the COVID-19 "simulation" activity with a new interaction style, new visuals, and even a new meaning (if you like).

Your program should:

1. **Change the way the user controls their circle**
  - Idea: make the circle **follow** the mouse instead of just teleport to its location (see [Movement lecture](../modules/04/movement.md#speed-returns), consider acceleration if you're feeling ambitious!)
  - Idea: make the user **drag** the circle (see [Mouse input lecture](../modules/04/mouse-input.md#a-draggable-circle))
  - (Optional idea: let the user control the circle with the **keyboard** (we'll talk about this next week, but you could look at the keyboard documentation in the [Events](https://p5js.org/reference/#group-Events) section of the p5 reference))
2. **Add at least one new `if`-statement** (including at least an `else`) that changes the nature of the simulation
  - Idea: make the COVID-19 circle move vertically toward the user while it moves left to right
  - Idea: make the COVID-19 circle grow if it is close to the user and shrink (back to a minimum size) when it is further away
  - Idea: make the user circle change color if it is moving by checking its `vy` and `vy` properties (maybe it could become harder to see?)
3. **Change the way the simulation looks**
  - Idea: new colors, new shapes, change the `for`-loop, etc.!
  - Idea: you could even to change what it is "about" to something else, like avoiding negative thoughts or avoiding work or even trying to _catch_ something elusive).
4. **Use at least one image**
  - Read the [`loadImage()`](https://p5js.org/reference/#/p5/loadImage) (pay attention to the new `preload()` function too!) and [`image()`](https://p5js.org/reference/#/p5/image) documentation.
  - Store your image files in `assets/images` in the project folder.

## Submission

Submission will take place on **Moodle**. Go to the appropriately named **exercise** on the Moodle and then submit your work there.

Your submission should just be plain text that includes (substituting your GitHub username and any difference in the folder names):

1. A link to your exercise code (e.g. https://github.com/pippinbarr/cc1/tree/master/exercises/dodge-em/)
2. A link to your project on the web (e.g. https://pippinbarr.github.io/cc1/exercises/dodge-em/)

## Evaluation

See the [evaluation guide for exercises](../evaluation-guide/)

---

# }
