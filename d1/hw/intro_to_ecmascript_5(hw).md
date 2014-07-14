#Intro to ECMAScript 5

####Objectives
* Practice using JavaScript Primitives
* Practice using control flow in JavaScript
* Practice using loops in Javascript

###Part 1

Provided below is an array of strings and numbers:

```
["Telescopic radiating traction padding", "solidly natural", 1909, 73369, 62998, 31, "Even Kanye poops", "tuples and duples what about scruples", 1209, 87029, 187505, 13037,,, 41784, 72916, 59256, 82367, 152573, "Aardvark", 187505, 13037, 41784, "ever met James Blake", 1209, 87029,,187505, 13037,,,41784, 72916, 59256, 82367, 152573, "restful routes make the world go round", "Goldie Locks", 187505, 13037, 41784, "|", "easter", "He saw the Jabberwock but did the Jabberwock see him", 1909,, 73369, 62998, 31, "this is a story all about how my life got flipped turned upside down", 1209, 87029,,5,, 187505, 13037, 41784, 72916, 59256, 82367, 152573, "|", "script tags everywhere", 1909, 73369,, 62998, 31, "I imagined the world to be larger", 1209, 87029, 187505,, 13037, 41784, 72916, 59256, 82367,, 152573, "|", "twitter is so 2006", 1909, 73369, 62998, 31, "pop is an array method that removes an element from the end of the array", 1209, 87029, 187505,, 13037, 41784,, 72916, 59256, 82367, 152573, "into the darkness", "Radiohead", "COLUMBIA", 187505, 13037, 41784, "suite load function", 187505, 13037, 41784, "all falls down", 1909, 73369, 62998, 31, "Very interesting", "apples", 1909, 73369, 62998, 31, "Jello is the best"]
```

Copy this array and store it in a variable. Using a for loop, iterate through every element of the array.

- If the element is undefined, print the following statement to the console: `This value at index (some index) is undefined, moving on.`
- If the element is a string, find the length of that string, and add it to a variable holding the total number of string characters. Then add the first character of the string to a holder array for only the first letters of each string.
- If the element is a number:
	- Divide the number by 5
	- If the resulting number is odd, multiply it by 2
	- If the resulting number is even, divide it by 3
	- Add that number to some variable that will keep track of the running total of the results of all math operations performed on a number.

###Part 2
Define a variable `finalMessage`

Iterate through every element of the letter array using a while loop where you remove an element from the end of the array, and add it to the `finalMessage string`. Each letter should be downcased before being added to the finalMessage string.

Log the finalMessage variable, the total number of string characters, and the sum of all numbers rounded to the nearest integer.

```
The final message is : _____
The number of characters is: ____
The sum of all numbers after maths is: ___
```

###Part 3 - In a new file

Given the following objects:

```
var cat = {name: "Fefe", speak: "Meowmers!", favoriteFood: "Fish"};

var doge = {name: "Shibu", speak: "Wow! Many objects. So curly braces", favoriteFood: "Memes"};

var fish = {name: "Magikarp", speak: "Blub Blub Blub", favoriteFood: "Psyduck confit"}

```

and the following array:

```
var newAttributes = [["Josh","I love fishes","goldfishes"],["Matt","My spoon is too big","cereal"]]
```

Define a new array `allObjects`. Add each object to the `allObjects` array one at a time.

Iterate through the array `newProperties`, for each array element, create a new object with a name, speak, and favoriteFood property, then add that new object to the array of `allObjects`.

Iterate through the allObjects array, print to the console each object's  name, speak, and favoriteFood properties.

```
Fefe says: Meowmers!
Favorite food: Fish
```
	  