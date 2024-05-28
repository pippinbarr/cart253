# Anatomy of a JavaScript project {

## Introduction

We're going to take a quick look at the parts of a standard JavaScript project. Mostly that's the file structure and especially the contents of `index.html` and `script.js`.

## Preparation

1. Download the [template project](../../templates/template-p5-project.zip)
2. Unzip it
3. Open the resulting folder in VS Code

## A JavaScript project is just a folder

Key idea: **a JavaScript project for the web is literally just a folder with some files in it**. When that folder is put on a *server* the files are the *website* you see.

## The folder structure

The different files and folders inside our template project have different roles. Let's take a quick look at each of them and explain what it's for:

- `index.html` is the HTML file that is displayed by the browser when you go to this website
- `README.md` is a file for information about the project, it will display by default on GitHub and you should always have something sensible in it
- `js/` is the folder containing all your JavaScript files (the code that makes the website do things)
  - `script.js` is the JavaScript file you will write your code in
  - `libraries/` is a folder containing the "libraries" (helpful code) you will be using, like p5
    - `p5.min.js` is the p5 library that lets you draw shapes, display images, etc. It's "just" more JavaScript
    - `p5.sound.min.js` is the p5 sound library that lets you play and manipulate sounds. More JavaScript.
    - **Tip:** the `min` in the filenames means "minified" which means it's basically *unreadable*.
- `css/` is the folder containing your CSS style file(s)
  - `style.css` is the default included CSS file for this project which mostly centres the p5 canvas (the rectangular area you will be drawing/doing things in)
- `assets/` is the folder where you'll put images, sounds, and other important files that aren't your JavaScript
  - `images/` is the folder where you can put your image files (`.png`, `.jpg`, etc.)
  - `sounds/` is the folder where you can put your sound files (`.mp3`, `.wav`, etc.)
  - **Tip:** Try not to use enormous files in your project. 50MB image? Bad idea. Imagine someone having to *download all your files* in order to see your work. Will they wait that long?

## `index.html`

If you look at `index.html` you'll see it's a fairly empty file. There are three important things to note here:

1. Make sure you give your project a title in the `<title></title>` tag.
2. The `<link>` tag is the thing telling your project to use your CSS file `style.css`.
3. The `<script>` tags are adding three key JavaScript files to make your project work:

- The p5 library is in `p5.min.js`
- The p5 sound library is in `p5.sound.min.js`
- Your own code will be in `script.js`

## `script.js`

You will be doing almost all your work in `script.js` - it's where you will write your JavaScript. By default there are three key things to care about:

1. The "comment" at the top of the file (surrounded by `/**` and `*/`) *must* contain the title of the project, your name, and a description of the project (including any outside help/contributions you used)
2. `function setup()` is the place where you will write the JavaScript that runs when your program starts (just once)
3. `function darw()` is the place where you will write the JavaScript that runs every *frame* of your program (over and over)

## Summary

Now we've seen the basic files involved in a JavaScript project. Most importantly we have:

1. The HTML file `index.html` that the browser checks first
2. The CSS file `style.css` that determines how the webpage will look in terms of styling
3. The `assets/` folder that will contain all your images, sounds, and more
4. The `js/` folder that contains all of your JavaScript, including the libraries you're using (p5 and p5 sound by default) and your own code in `script.js`

## Next

Now all we have to do is learn what to write in `script.js`!

## }
