#### [CART253](/cart253-2021/) | [Schedule](/cart253-2021/course-information/schedule/) | [Guides](https://pippinbarr.github.io/cc/1/guides/) | [Examples](https://pippinbarr.github.io/cc/1/examples/)

# Project 1: Simulation {

#### Grade
- 20% of final grade (see guidelines at bottom)  

#### Deadline

**Note**: This project has a courtesy week of extra flexibility to help you schedule it against other project from other classes. You can submit any time in between the two listed hand-in dates.

- Section B (Tuesdays): 11:59PM, 12 October 2021 **or** 19 October 2021
- Section A (Thursdays): 11:59PM, 14 October 2021 **or** 21 October 2021

## Objectives

1. Working on a larger programming project
2. Handling different forms of user input
3. Organizing code with functions
4. Making things interesting with conditionals and variables
5. Combining aesthetics, interaction and concept

## Brief

Create your own interactive simulation based on the programming knowledge you have so far around visuals, movement, images, conditionals, and more. Your simulation can be literal or metaphorical as you wish. It can be playful or very serious, funny or heartfelt, or all of them at the same time. Make something that interests **you**. Try to work from something you already know about, and do at least some research so you're informed.

Some ideas might be:
* A **mental health** simulator in which you avoid negative thoughts and try to catch positive thoughts. Could medication have a place in the simulation? A therapist? A community of care? A safer space?
* A **juggling** simulator in which you have keep a number of balls (and other things? Cats? Planets? But not too many!) in the air by bouncing them off your user-controlled hands. Different items could move differently. You'd need gravity for this, which involves constantly applying a small downwards acceleration to all your objects.
* A **football/soccer** simulator in which you can "kick" a ball along with your user-controlled player, avoiding a computer player and eventually scoring a goal.
* A **Cold War Spy** simulator in which your user-controlled agent has to move around the screen collecting information without being seen (or getting too close to) by a government agent(s).
* A **gardening** simulator in which your user-controlled agent has to move to different plants and water them (and perhaps more, like applying fertilizer) to help them grow (and not die!).
* A **planetary** simulator in which a user-controlled spaceship can fly to different planets and learn about them.

You can see the common elements here are the idea of simulations in which there is a user-controlled element (representing the user as a person, or juggling hands, or a football player, or a spy, or a gardener) that moves around a world in which there is at least one other kind of agent (thoughts, balls, opposition players, government agents, plants) that they can interact with.

Feel free to begin with the COVID-19 "simulation" or your own interpretation of it. Feel free to borrow from any of the code you've seen so far in the course or will see.

## Requirements

### At least two moving elements
Your simulation should include at least two "things", most obviously at least one thing the user controls, and one other thing. They should be represented as JavaScript objects in your code.

### Interactivity
The user should be able to interact with the simulation in some way. That is, they can **affect** what it happening in the program (and be affected by it). This might be through moving the mouse, dragging the mouse, clicking the mouse, pressing keys on the keyboard, or something inventive like resizing the window (check out [`windowResized()`](https://p5js.org/reference/#/p5/windowResized) if so).

### Aesthetic, conceptual, and procedural harmony
The elements of your simulation should make sense together (even if you're doing something more avant-garde). That is, the way the program works (the code, the interactivity) and the way the program looks and sounds (the aesthetics) should support the core ideas of the simulation concept.

### Beginning, middle, and end
Your program should have
* A title screen (check out the [Typography](https://p5js.org/reference/#group-Typography) category in the documentation for text-related things)
* A simulation itself (this would be the main part!)
* An ending screen (if it makes sense)

The program should start on the title screen, then switch to the simulation when the user has had a chance to look at the screen (they could click, hit a key, or just wait a set time). The program should switch to the ending screen when the appropriate event happens during the simulation (if the user drops all the juggling balls, all the plants die, or a timer runs out, say).

## Advice

1. **Start early**. Don't delay thinking about the project. Get your ideas together early so that you've got a good amount of time to work on them.
2. **Start small**. Think of the smallest possible version of what you want to make and make that first. Once it works, you can start adding to it. (e.g. for juggling you would start with just the user's hands and one ball that bounces in the air off the hands and make sure everything works before you add another ball/thing.)
3. **Seek help**. Ask for help early to discuss your idea and work out ways to achieve it, as well as to get specific technical help as you run into problems. If you can't think of an idea, ask for help with that.
4. **Be stylish**. Don't forget about the [style guide](https://pippinbarr.github.io/cc/1/guides/style-guide.html). Name your variables well the first time (don't leave it for later). Write your comments as you go, not right at the end. Use `atom-beautify` or `atom-prettier` to format your code nicely as you go.

## Set up

1. Create a `projects` folder in your `cc1` repository folder
1. Download the `template-p5-project` and rename the folder to `project1`
3. Move the `project1` folder to your `projects` folder
4. Open the `project1` folder in Atom
5. Commit and push with a message saying "P1: Started project 1"

## Submission

Submission will take place on **Moodle**. Go to the appropriately named **project** on the Moodle and then submit your work there.

Your submission should just be plain text that includes (substituting your GitHub username and any difference in the folder names):

1. A link to your exercise code (e.g. https://github.com/pippinbarr/cc1/tree/master/projects/project1/)
2. A link to your project on the web (e.g. https://pippinbarr.github.io/cc1/projects/project1/)

## Evaluation

Grading for projects will consider the following categories:

- **Functional** (40%)- The program runs and meets the brief in terms of functionality and code requirements, shows mastery of the course material.
- **Creative** (30%) - the project is an interesting and expressive interpretation of the brief for the user. Has a clear point of view and conveys it consistently. Uses code in surprising ways to create new experiences.
- **Style** (20%) - the code follows the [style guide](https://pippinbarr.github.io/cc/1/guides/style-guide.html).
- **Commitment** (10%) - the code follows the version control section of the [style guide](https://pippinbarr.github.io/cc/1/guides/style-guide.html).

Each category for the project will be graded as follows:

- **Excellent** (A-range) - Meets requirements with no or almost no issues
- **Good** (B-range) - Meets requirements with some minor issues
- **Adequate** (C-range) - Meets requirements but with clear issues
- **Poor** (D-range) - Barely meets requirements
- **Non-submission / Unacceptable** (F)

---

# }
