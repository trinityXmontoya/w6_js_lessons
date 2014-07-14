# Clean Comments

### Let's make the internet PG-13

Declare the following functions

* `function regularPrint(content)` - Accepts a string `content` and prints it to the screen using `console.log()` (ex. `This video sucks`)

* `function loudPrint(content)` - Accepts a string `content` and prints an upcased version of it surrounded by stars (ex. `***THIS VIDEO SUCKS***`)

* `function omissionCleanse(content, badWords)` - Accepts a string `content` and an array of strings `badWords`. Returns a string by taking `content` and removing all words that match an element of `badWords`

* `function substitutionCleanse(content, badWords)` - Accepts a string `content`, an array of strings `badWords`. Returns a string by taking `content` and **replacing** all words that match an element of `badWords` with a random element from `subs` (an array of strings defined in the function.)

* `function publishComment(comment, badWords, cleansingFunction, printingFunction)` - Accepts a string `comment`, a function to cleanse the comment `cleansingFunction`, and a function to print the comment `printingFunction`).

#### Info

Note: Don't worry about handling punctuation gracefully. For now, just use simple strings with no punctuation.

Once you write these functions, call ```publishComment``` with a string of your choosing 4 times, once with each combination of 'cleansingFunction' and 'printingFunction'.

e.g.:
```js
publishComment("wat the hell is going on", ["hell", "shit"], omissionCleanse, loudPrint)
```

### Bonus 1

* Design and implement another cleansingFunction and/or printingFunction. They can operate however you like (go nuts!)
* Use these new functions along with your publishComment function.

### Bonus 2 (This is hard!)

Write a function: `function generateCommentPublisherFunction(badWords, cleansingFunction, printingFunction)`

This function should return a new function which only takes one argument (a string), and 'publishes' it using the cleansingFunction and printingFunction specified when the original function was generated, along with the badWords array passed in when the function was generated.

Example usage:

```js
// Build two functions using our generator
var omissionLoudPublisher = generateCommentPublisherFunction(["shit", "hell"], omissionCleanse, loudPrint);

var substitutionRegularRubyHaterPublisher = generateCommentPublisherFunction(["ruby", "rails", "Matz"], substitutionCleanse, regularPrint);

// Now lets use the functions we built
omissionLoudPublisher("javascript is the shit");
// PRINTS "***JAVASCRIPT IS THE***"

substitutionRegularRubyHaterPublisher("I think that Hari and Matz and ruby on rails are the best");
// PRINTS something like:  "I think that Hari and pandas and noodles on bandsaw are the best"
```

### WAT?

This homework (and especially Bonus 2) introduces the (relatively advanced) concept of function composition. If you don't feel comfortable with this, THAT'S NORMAL!

If you want to read up more on this concept, and feel somewhat comfortable with the exercise, you may want to have a look at this chapter from the book Eloquent JavaScript:

* [Eloquent JS - Functional Programming](http://eloquentjavascript.net/chapter6.html)
