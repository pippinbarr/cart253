
## Dot notation and bracket notation

One last note. So far we're been accessing the properties of out JavaScript Objects using "dot notation" - we write the variable with the object, then a dot, then the property name (and maybe another dot and the next property name etc.). This is the most *common* way.

```javascript
let colours = {
  red: "#ff0000",
  skyBlue: "#87eeb",
  beige: "#f5f5dc"
};

let myFavouriteFill = colours.beige;
```

But we can actually also use a different notation, using brackets and the name of the property in *quotes*:

```javascript
let myFavouriteFill = colours["beige"];
```

This does the same thing, it's just another way to write it.

Why is that useful? Well it could come in handy if the name of the property you're looking for is in a *variables*:

```javascript
let myFavouriteColour = "beige";
let myFavouriteFill = colours[myFavouriteColour];
```

We'll see examples of this as we get to it.
