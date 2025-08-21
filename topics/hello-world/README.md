[Home](../../) / [🗓 Schedule](../../schedule) / [🛠 Examples](../../examples/) / [💫 Guides](../../guides/) / [💎 Resources](../../resources.md)

# 👋 Hello, World! {

✨ Here we are, together at last in the warm embrace of CART253 - Creative Computation I! ✨

## Learning Objectives

- Understand the nature and structure of the course
- Get the basic software up and running
- Understand and set up version control

## Template

- [template-p5-project.zip](../../templates/template-p5-project.zip)

## Modules

[Vimeo playlist for Hello, World!](https://vimeo.com/showcase/11842892)

(Inline links below are for YuJa)

- *Welcome to Creative Computation!*
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071095&node=5700483&a=114219777)
    - Read the [Welcome to Creative Computation notes](./welcome-to-creative-computation.md)
- *Software Setup*
    - Follow the [Course Software Installation Guide](../../guides/course-software.md)
- *What is version control?*
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071096&node=5700485&a=54573756)
    - Read the [What is version control? notes](./what-is-version-control.md)
- *Creating a Repository*
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071092&node=5700478&a=168654397)
    - Read the [Creating a Repository notes](./creating-a-repository.md)
- *Version Control Workflow*
    - Download the [workflow example code](./version-control-workflow-example/js/script.js)
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071094&node=5700482&a=168399266)
    - Read the [Version Control Workflow notes](./version-control-workflow.md)
- *GitHub Pages*
    - [Watch the video](https://concordia.yuja.com/V/Video?v=1071093&node=5700481&a=87247591)
    - Read the [*GitHub Pages notes*](./github-pages.md)

## Examples

### Projects from CART253 in 2023

- [Emotional Support Pet](https://pippinbarr.com/cart253/examples/student-work/emotional-support-pet/) by Dorsa Zare
- [JumpThang](https://pippinbarr.com/cart253/examples/student-work/jumpthang/) by Samuel Reinstein Wright
- [Mantis Anatomy](https://pippinbarr.com/cart253/examples/student-work/mantis-anatomy/) by Scarlett Perez-Hernandez
- [Minigame Library](https://pippinbarr.com/cart253/examples/student-work/minigame-library/) by Nicolas Morales-Sanabria

## 🔥 Hot tip: Some better user settings

By default VS Code can be a bit overaggressive with its autocomplete suggestions. If you'd like a relatively simple setup for your VS Code (assuming you haven't customized it a bunch already), then you could copy the following (including the curly brackets):

```json
{
    "security.workspace.trust.untrustedFiles": "open",
    "workbench.startupEditor": "none",
    "liveServer.settings.donotShowInfoMsg": true,
    "editor.formatOnSave": true,
    "editor.formatOnType": true,
    "[json]": {
        "editor.quickSuggestions": {
            "other": "off",
            "strings": "off"
        },
        "editor.inlineSuggest.suppressSuggestions": true,
        "editor.inlineSuggest.enabled": false
    },
    "editor.acceptSuggestionOnCommitCharacter": false,
    "editor.trimAutoWhitespace": false,
    "editor.formatOnPaste": true,
    "update.showReleaseNotes": false,
    "javascript.suggest.enabled": false,
    "typescript.suggest.enabled": false
}
```

Then go to VS Code and:

1. Hit Command-Shift-P (Mac) or Control-Shift-P (Windows to open the "Command Palette)
2. Type "User Settings" to bring up the user settings option
3. Choose "Preferences: Open User Settings (JSON)
4. Select everything in the resulting file and replace it by pasting in the above JSON

Or, if you have a bunch of settings in there, feel free to add the stuff above at the end.

## 🔥 Hot tip: One repository per project

Out in the "real world" developers start a repository for *each project* they work on. 

So if you were going to make a project for this class called *Eggmageddon* you'd go through the same steps you used to create your `cart253` repository, but instead create an `eggmageddon` repository.

Then, if you were starting a new project called *Judge, Jury and Eggsecutioner* you would create *another* repository called `judge-jury-and-eggsecutioner` to keep that one in. 

And so on and so on for *Eggscommunicated By the Pope*, *Egg You Very Much*, and *Sunny Side Up*.

## }