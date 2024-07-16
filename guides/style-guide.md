# Style guide {
    
## Contents

- Commenting
- Naming
- Committing
    
## Commenting

...

## Naming

There are three main things we will be naming in this course:

- variables
- functions (and their parameters)
- properties

They all follow the same basic rules:

1. The name should tell you what the variable/function/property is *for*
2. The name should use *camel case* (lowercase first letter, then capitalize each word, e.g. `camelCase`)
3. Cannot start with a number
4. Cannot include symbols like `!` or `?` etc.

### Variables

Not good:

```javascript
let foo = 640; // Unclear name (what is foo?)
let EgoSize = 640; // Not camel case
let ego_size = 640; // Not camel case
let EGOSIZE = 640; // Not camel case
let 0egosize0 = 640; // Starts with a number
let egoSize! = 640; // Includes an illegal symbol
```

Good:

```javascript
let egoSize = 640;
let frogJumpHeight = 100;
let planetSpeed = 10;
```

### Properties

Not good:

```javascript
let frog = {
    X: 100, // Not camel case
    Y: 200, // Not camel case
    glibber: 20, // Unclear name
    Speed: 80, // Not camel case
    jump_height: 100 // Not camel case   
};
```

Good:

```javascript
let frog = {
    x: 100,
    y: 200,
    size: 20,
    speed: 80,
    jumpHeight: 100
};
```

### Functions

## Committing

...

    
## }