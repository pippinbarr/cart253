# Git Guide {

Git is version control software. Here are the key things that we commonly want to be able to do with Git.

## Install GitLens in VS Code

GitLens is an extension that will give you a couple of nice extra Git features, so do install it.

1. Go to the Extensions section (via the View menu or in the left-hand menu)
2. Search for "GitLens"
3. Click the "Install" button

## Clone a repository

To begin work on a repository we need to have it on our local computer. If we don't already have it, we need to **clone** (download) it.

### VS Code

Open the command palette with `Command-Shift-P` and type `clone` to bring up the `GitHub: Clone` command. Execute the command and follow the instructions, pasting in the URL for your repository in the input field.

### Command line

1. Change to the directory you want to clone into
2. Run `git clone https://www.github.com/yourusername/yourrepositoryname/

## Pull

Before starting work with your repository you should always at least check whether you need to **pull** first, because there might be changes online you aren't up to date with (especially if you're working on multiple machines).

### VS Code

Check the fetch/pull button at the bottom left of the window, it will tell you if you can pull. Click it if you need to.

### Command line

From the root folder of your repository run

`git pull`

## Commit

After doing a block of work you should **commit** it to save it in your repository's history for safekeeping. Ideally you should only commit when your project is working, but this isn't always possible.

### VS Code

1. Open the version control pane using `View > Source Control` if it isn't already open or click the icon on the left of a little flowchart
2. Check that all the file you've changed are listed in the changes area (and remind yourself of what has been changed by click on them if you want to)
3. Enter a sensible, explanatory commit message in the Commit Message field
4. Click the `Commit` button

### Command line

From the root folder of your repository run

1. `git stage *` (to stage all your changes, you can also do it selectively)
2. `git commit` (you end up in an editor called vim which can be confusing!)
3. Type `i` to enter insertion mode, type your commit message, press escape to exit insertion mode, then type `:wq` to save the message and process it

## Push

In order to store our commits on the remote repository host we need to **push** those commits. This is a more "permanent" thing and is a little harder to undo, but it is crucial for being able to keep your work safe. You can either do this after every commit, or after you're ready to finish work for the day, or something similar.

### VS Code

Click the push button at the bottom left.

### Command line

1. `git push`

## Revert

Sometimes you need to go back in time. See also: [How to undo (almost) anything with Git](https://github.blog/2015-06-08-how-to-undo-almost-anything-with-git/)

### Discarding changes

If you just did some amount of work that sucks and you want to reset to where you were at the end of the previous commit, you can!

#### VS Code

Right-click the file you want to discard changes from "changes" list and choose "Discard changes".

#### Command line

1. `git checkout filename`

### Undoing a commit (that you have NOT pushed)

Sometimes you want to get undo an entire commit in the history. You can only really do this if you haven't pushed the commit yet. And if you want to undo a series of commits you should always do so in **reverse chronological orer**.

#### VS Code

Click the "three dots" at the top right of the Source Control pane then go to `Commit > Undo Last Commit`.

#### Command line

Find the SHA of the commit you want to undo back to (you can git this via `git log` and finding the ridiculous long hash)

1. `git reset --hard SHA` to reset the repository to that commit

### Undoing (reverting) a pushed commit

When you've pushed a commit, you can no longer just undo it and pretend it didn't happen, you have to **revert** it, which is to say create a version of your files in which it has been undone and then **commit** those new files. You should almost always do this in **reverse chronological order** if you're reverting multiple commits.

#### VS Code

Find the commit in the history, right click it, and choose "Revert Commit..."

#### Command line

Find the SHA of the commit you want to revert (you can git this via `git log` and finding the ridiculous long hash)

1. `git revert SHA` to revert the commit

## }