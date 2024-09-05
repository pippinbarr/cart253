# Version Control Workflow {
    
## In this module

- Always work in the repository folder
- Starting a project
- Working on a project

## Always work in the repository

Remember that `cart253` folder we *cloned* (downloaded) using GitHub Desktop? That is our *repository* for this course. To use version control, we will store *all* our work in this folder.

## Starting a project

Let's go through the process of starting a new project. You'll do this a bunch, both for tiny little test projects for a single class module and for giant works of genius for class projects and for your own personal stuff. The process is always the same and you should always follow it:

1. Download the template
2. Rename the template folder to your project name
3. Move the folder into your repository
4. Save your changes to the repository using version control

### Download the template

As you improve your programming you will probably start projects in many different ways, but for now you will always *use a template* that will give you all the files you need:

1. [Download the template p5 project](../../templates/template-p5-project.zip)
2. Unzip it

You should have a folder called `template-p5-project` which contains a bunch of files you will use to make JavaScript projects. We'll talk about the details later on.

### Rename the template folder

`template-p5-project` is not a good name, though, so:

1. Rename the folder to `version-control-workflow`

You should always give your project folder a relevant name.

### Move the project folder to your repository

Because this is a project you're working on for CART253 specifically, you need to move it into the CART253 repository. And you should get into the habit of  *organizing* that folder:

1. In `cart253` create a folder called `topics`
1. In `topics` create a folder called `version-control`
1. Copy your `version-control-workflow` folder into the `version-control` folder

The `topics` folder will allow you to create subfolders to store your work when you're following along with the modules of this course.

### Save the changes to your project using version control

Because starting a new project by copying a new template folder into our repository is an important *change*, this is the first moment we'll use version control.

The process is pretty mechanical, so the main thing is just to learn the steps and you can worry about the details as you get more confident.

### Start GitHub Desktop

1. Open the GitHub Desktop application
2. Log in if you need to

You should see that GitHub Desktop has opened your `cart253` repository (top left) of its window.

### Note the changes

Because there are now *changes* to the repository folder (the new project was added), GitHub Desktop will list the changes made in the Changes tab. This will look like a list of a bunch of files that were added in this case.

### Commit the changes

To commit (save) your changes to the repository you first *write a commit message* that is a **short, clear description of what has changed**, and then you commit (save) those changes:

1. Write "Added template project for the version control workflow module" (this is the commit message)
2. Click on "Commit to main"

Now the changes we made are saved in the repository's history on your computer. 

(You can go to the History tab to see your commit there, complete with the description you wrote.)

**Remember:** Writing a clear description of the changes you made it *very important* when using version control.

### Push the changes

To make sure your repository is the same on your computer *and* on github.com, you need to *push* the new commit:

1. Click on the "Push origin" button at the top of the window

You'll see a little bit of action as your changes are uploaded to github.com. When that's done you're all in sync with your repository on github.com. That's good because if your computer suddenly disintegrates or jumps out the window, all your work will still be on github.com (just like with DropBox or Google Drive, etc.)

**Hot tip:** It's almost always a good idea to *commit* and *push* at the same time so that you remember to do both.

## Working on a project

We're now going to pretend to work on the project so that we can get a taste of how we'll use version control most of the time. The process is pretty similar to what we've seen:

1. Open the project in VS Code
2. Do some work on the project
3. View your work in the browser
4. Commit and push the changes
5. Repeat

### Open your project in VS Code

We're ready to start work on the project itself. We're programming so we will open the *project folder* in VS Code. It's important that you open the project *folder* in VS Code rather than one of the files in it.

1. Open the project folder in VS Code
   - You can open VS Code and then choose `File > Open` and select the folder
   - You can open VS Code and then choose `File > Open Folder...` and select the folder
   - You can open VS Code and then drag the project folder into the VS Code window
   - You can open VS Code and then drag the project folder onto its icon in the Dock or Windows Taskbar
   
However you do it, you should end up seeing something like this:

<!-- INSERT SCREENSHOT -->

### "Do some work on the project"

You quite possibly don't know how to program yet, so it would be unfair to ask you to write a program. Instead, open the `script.js` file inside the `js/` folder in your project (use the left-hand pane) and replace the text inside that file with the [workflow example code](./version-control-workflow-example/js/script.js).

### View your work in the browser

It's important to constantly check your work in the browser because that's the place your code *actually runs*:

1. Click the "Go Live" button at the bottom right of VS Code
2. Look at the running code in your browser

(If the browser it opens *isn't* Google Chrome, either changes your default browser to Google Chrome *or* copy the URL from the browser and paste it into Google Chrome.)

You should see the program has drawn a top-down view of a yellow pyramid and a red circle. You should be able to move the red circle with your mouse.

### Commit and push the changes

Because this is a **significant block of work** we need to commit it to our repository to save our progress:

1. Go to GitHub Desktop
2. Note the list of changes (it should just show you that `script.js` has changes)
3. Write a short commit message in the Summary text field, "Pasted in example code of the yellow pyramid and red circle"
4. Click "Commit to main"
5. Click "Push origin"

And now your repository is all up to date again, with another chapter in the beautiful history of your work.

**Note:** you don't need to commit *every tiny change we make* but just "significant" blocks. As a rule it's better to commit too often than too rarely though. The instinct for this will come with time.

### Repeat

You go on like this forever. You make some more changes to the project, then you commit and push. Then you make some more changes, you commit and push. And so on.

For practice:

1. Play around with some of the numbers in the code
   - What if you change the three numbers inside the `background(0, 0, 0)` function?
   - What if you change the `const levels = 10` to another number?
   - What if you change the numbers in `createCanvas(640, 640)`?
   - What if you change the numbers in `(320, 320, level * 48, level * 48)`
   - etc.
2. Keep checking the effect of each change in the browser (it will automatically update when you save the `script.js` file)
3. When you're satisfied with your changes:
   1. Write a *commit message*
   2. Commit the changes (with the "Commit to main" button)
   3. Push the changes (with the "Push to origin" button)
   
And feel free to keep going with a new set of changes if you want to, making sure to write a new message and then commit and push.

That, my friend, is the version control workflow. Learn to love it. It's basically just about **saving your work along with a description of your work**.

## Summary

Whenever we start a new project you:

1. Download the template
2. Rename it
3. Move it into your repository
4. Commit and push that change

Whenever we work on your project you:

1. Make a significant set of changes (a new feature, fixing a problem, ...)
2. Check it worked in the browser
3. Write a commit message that describes your changes
4. Commit and push the changes

## }