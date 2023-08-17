# Exercise: The Age of Aquariums {

#### Grade
- 4% of final grade
- Remember that only 5 of your completed and passing exercises contribute to the final grade
- Further guidelines below

#### Deadline
- Section A (Thursdays): 11:59PM, 21 October 2021.
- Section B (Tuesdays): 11:59PM, 19 October 2021.

## Objectives

1. Working with arrays and `for`-loops
2. Working with arrays and random selection

## Set up

1. Download the `template-p5-project` and rename the folder to `age-of-aquariums`
3. Move the `age-of-aquariums` folder to your `exercises` folder
4. Open the `age-of-aquariums` folder in Atom
5. Commit and push in GitHub Desktop with a message saying "Ex: Started Age of Aquariums exercise"

## Brief

Begin with the "Aquarium" simulation activity in its final form with the ability to add a fish.

Once again, think about how you want to change the meaning/nature of the simulation (instead of fish it might be chickens, or viruses, or feelings). Make it **yours**. (If you want to keep it about fish, that's okay too so long as you follow the requirements.)

Make your changes to the simulation with the following requirements:

1. **Add a user-controlled shape (or image)**
  - This can be controlled with the mouse or keyboard or whatever you like
2. **Make the user interact with the fish (or whatever they are in your simulation)**
  - It could make them disappear (eating fish? counting chickens? destroying viruses? feeling feelings?)
  - It could make them run away (scaring fish or chickens? Immunity to the virus? Pushing away bad feelings?)
  - It could attract them (fishing lure? very popular with chickens? not wearing a mask? easily overwhelmed?)
  - It could disappear/end the simulation if the user is touched (pecked or nibbled to death? caught COVID-19? felt too many feelings?)
  - Or some combination of the above, or anything else!
  - Remember you'll need to use a `for`-loop to call a function that makes the user and each element in the array interact
3. **Change the fish (or whatever) creation**
  - Include more parameters so that the fish (or whatever) can be more varied (color? speed? size?)
  - Add at least one new property to the fish (or whatever) that changes their behaviour  
4. **Add at least two endings**
  - Currently the simulation never ends, so make it end in at least two ways
  - You'll need states to do this (at least for the simulation and the two endings, you can add a title and instructions too if you like)
  - Maybe you either eat all the fish or you run out of time? (A simple timer could check the `frameCount` variable built into p5 and when it is greater than a specific amount, the ending is triggered)
  - Maybe there is a special fish (or whatever) that triggers a special ending?

## Submission

Submission will take place on **Moodle**. Go to the appropriately named **exercise** on the Moodle and then submit your work there.

Your submission should just be plain text that includes (substituting your GitHub username and any difference in the folder names):

1. A link to your exercise code (e.g. https://github.com/pippinbarr/cc1/tree/master/exercises/age-of-aquariums/)
2. A link to your project on the web (e.g. https://pippinbarr.github.io/cc1/exercises/age-of-aquariums/)

## Evaluation

See the [evaluation guide for exercises](../evaluation-guide/)
---

# }
