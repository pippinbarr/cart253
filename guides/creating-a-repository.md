# May need to abandon the idea of doing it all in VS Code... GitHub Desktop may simply be a little easier for now

# Creating a Course Repository on GitHub {

This tutorial will take you through the steps needed to create a **repository** for your coursework on the website GitHub. A repository is essentially a folder that will keep track of the history of your work over time. On your computer it will just look like a normal folder you save files in, but it has special powers we will talk about later.

## Register for a GitHub Account

If you already have a GitHub account, skip this step. Otherwise, we need to register with GitHub so that we can create repositories that will be hosted by them (a bit like DropBox or Google Drive).

1. Go to <https://www.github.com/>
1. Either fill out the registration form that appears or click "Sign up" at the top right of the screen
1. Follow the steps they require to create your account, including reply to the verification email
1. Edit your profile, add an avatar image as you desire (not required)

## Create a course repository

Create a single repository to store all your coursework in called `cart253`.

1. Go to <https://www.github.com/>
1. Log in if you aren't currently logged in
1. Either click on the green "New" button or click the "+" button at the top right and select "New repository"
1. Name the repository `cart253` (or something similar)
1. Add a short description like "This is Pippin Barr's coursework repository for CART253"
1. Set your repository to **Public**
1. Select "**Initialize this repository with a README**"
1. Click "Create repository"
1. Note down the URL of your repository which will be something like

`https://github.com/yourusername/cart253/`

## Clone (download) your repository

1. Open VS Code
2. Open the Command Palette with
    - Command-Shift-P on Mac
    - Control-Shift-P on Windows
    - Or by going to View > Command Palette
3. Type "Clone" and choose "Git: Clone"
4. When asked for the "repository url" put in the URL for your new repository (e.g. "https://github.com/yourusername/cart253/)
5. When asked where to save the repository, choose somewhere on your computer than makes sense to you

You're now ready to start using GitHub Desktop and GitHub to save and synchronize all the projects you will end up creating for this course! As a simple rule, you should just keep all your work for the course in this `cart253-2023` repository folder.

## Summary

We now have a GitHub account. We also have a **repository** (like a special folder that keeps track of your work over time) that exists locally on **your computer** (as a folder called `cart253-2023` or similar) and also remotely on **GitHub.com** (as a repository homepage called `cart253-2023`). By keeping these two instances of the repository in synch, we can avoid many, many problems and also share our work much more easily. Because we enabled GitHub Pages, we can also share our work with anyone via a URL.

## }