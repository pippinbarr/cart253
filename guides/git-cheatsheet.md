# Git cheatsheet

Git is version control software. Here are the key things that we commonly want to be able to do with Git.

## Clone

To begin work on a repository we need to have it on our local computer. If we don't already have it, we need to __clone__ (download) it.

#### GitHub Desktop

Go `File > Clone Repository...` and either select the desired repository from the list or paste in the URL for the repository (e.g. `https://www.github.com/pippinbarr/cart263/`)

#### VS Code

Open the command palette with `Command-Shift-P` and type `clone` to bring up the `Git: Clone` command. Execute the command and follow the instructions, pasting in the URL for your repository in the "Clone from" field.

#### Command line

1. Change to the directory you want to clone into
2. Run `git clone https://www.github.com/yourusername/yourrepositoryname/`

## Pull

Before starting work with your repository you should always at least check whether you need to __pull__ first, because there might be changes online you aren't up to date with (especially if you're working on multiple machines).

#### GitHub Desktop

Check the fetch/pull button at the top of the window, it will tell you if there is anything to pull. Click it if you need to.

#### VS Code

Check the fetch/pull button at the bottom left of the window (the main icon is a circle made of two arrows), it will tell you if you can pull by showing a down arrow with a number next to it. Click it if you need to.

#### Command line

From the root folder of your repository run

`git pull`

## Commit

After doing a block of work you should __commit__ it to save it in your repository's history for safekeeping. Ideally you should only commit when your project is working, but this isn't always possible.

#### GitHub Desktop

1. Select the Changes tab on the right
2. Check that all the file you've changed are listed (and remind yourself of what has been changed by click on them if you want to)
3. Enter a sensible, explanatory commit message in the Summary field
4. Click the `Commit to master` button

#### VS Code

1. Open the Git panel from the left-hand menu - it's the one that looks like three circles joined by lines, below the magnifying glass
2. Check that all the file you've changed are listed in the Changes area (and remind yourself of what has been changed by clicking on them if you want to)
3. Enter a sensible, explanatory commit message in the Message field
4. Click the `Commit` button

#### Command line

From the root folder of your repository run

1. `git stage *` (to stage all your changes, you can also do it selectively)
2. `git commit` (you end up in an editor called vim which can be confusing!)
3. Type `i` to enter insertion mode, type your commit message, press escape to exit insertion mode, then type `:wq` to save the message and process it

## Push

In order to store our commits on the remote repository host we need to __push__ those commits. This is a more "permanent" thing and is a little harder to undo, but it is crucial for being able to keep your work safe. You can either do this after every commit, or after you're ready to finish work for the day, or something similar.

#### GitHub Desktop

Click the push button at the top right.

#### VS Code

Click the `Sync Changes` button that appears after committing.

#### Command line

1. `git push`

## Undo

Sometimes you need to go back in time. See also: [How to undo (almost) anything with Git](https://github.blog/2015-06-08-how-to-undo-almost-anything-with-git/)

### Discarding changes

If you just did some amount of work that sucks and you want to reset to where you were at the end of the previous commit, you can!

#### GitHub Desktop

Right click the file you want to discard changes from in the Changes tab and choose "Discard changes"

#### VS Code

Right click the file you want to discard changes from in the Git panel and choose "Discard Changes".

#### Command line

1. `git checkout filename`

### Undoing a commit (that you have NOT pushed)

Sometimes you want to get undo an entire commit in the history. You can only really do this if you haven't pushed the commit yet. And if you want to undo a series of commits you should always do so in __reverse chronological orer__.

#### GitHub Desktop

You can't really do this on GitHub Desktop.

#### VS Code

VS Code doesn't show your commit history by default, so it's not so useful for undoing commits by default. You can make further changes and choose `Commit (amend)` from the dropdown arrow on the `Commit` button to include the new changes in your previous commit.

#### Command line

Find the SHA of the commit you want to undo back to (you can git this via `git log` and finding the ridiculous long hash)

1. `git reset --hard SHA` to reset the repository to that commit

### Undoing (reverting) a pushed commit

When you've pushed a commit, you can no longer just undo it and pretend it didn't happen, you have to __revert__ it, which is to say create a version of your files in which it has been undone and then __commit__ those new files. You should almost always do this in __reverse chronological order__ if you're reverting multiple commits.

#### GitHub Desktop

Right click the commit you want to revert in the History pane and select `Revert this Commit`. Note how it makes a __new__ commit called `Revert` followed by the commit message of the change you're undoing. This commit still has to be pushed at some point.

#### VS Code

You can't do this in VS Code without special extra magical extensions as far as I know.

#### Command line

Find the SHA of the commit you want to revert (you can git this via `git log` and finding the ridiculous long hash)

1. `git revert SHA` to revert the commit
