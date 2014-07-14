// Make an array of strings and numbers.
// Define four variables:
// holder = [];
// numberOfStringCharacters;
// finalMessage "";
// sumNumbers;
// numberHolder;
// letterHolder;
// Iterate through every element of the array using a for loop:
//  if the element is undefined:
// 		console.log("This is undefined, skipping!")
//  if the element is a string:
//  	find the length of the string and add it to numberOfStringCharacters
//    add the first character of the string to an array
//  if the element is a number:
// 		perform the following actions:
// 		subtract the number / 2
// 		if it is odd, multiply it by 2
// 		if it is even, divide it by 3
// 		then
// 		add the result to some variable that will be a running total of all of the results
// Iterate through every element of the array of letters using a while loop where you remove an element from the end of the array one at a time and add it to the finalMessage string.
// Add each element of the array, downcased to the finalMessage string
// console.log the finalMessage, total number of characters, the sum of all of the numbers rounded to the nearest integer.


var stringNumberArray = ["Telescopic radiating traction padding", "solidly natural", 1909, 73369, 62998, 31, "Even Kanye poops", "tuples and duples what about scruples", 1209, 87029, 187505, 13037,,, 41784, 72916, 59256, 82367, 152573, "Aardvark", 187505, 13037, 41784, "ever met James Blake", 1209, 87029,,187505, 13037,,,41784, 72916, 59256, 82367, 152573, "restful routes make the world go round", "Goldie Locks", 187505, 13037, 41784, "|", "easter", "He saw the Jabberwock but did the Jabberwock see him", 1909,, 73369, 62998, 31, "this is a story all about how my life got flipped turned upside down", 1209, 87029,,5,, 187505, 13037, 41784, 72916, 59256, 82367, 152573, "|", "script tags everywhere", 1909, 73369,, 62998, 31, "I imagined the world to be larger", 1209, 87029, 187505,, 13037, 41784, 72916, 59256, 82367,, 152573, "|", "twitter is so 2006", 1909, 73369, 62998, 31, "pop is an array method that removes an element from the end of the array", 1209, 87029, 187505,, 13037, 41784,, 72916, 59256, 82367, 152573, "into the darkness", "Radiohead", "COLUMBIA", 187505, 13037, 41784, "suite load function", 187505, 13037, 41784, "all falls down", 1909, 73369, 62998, 31, "Very interesting", "apples", 1909, 73369, 62998, 31, "Jello is the best"];

var holder = [];
var numberOfStringCharacters = 0;
var finalMessage = "";
var sumNumbers = 0;

for (var i = 0; i < stringNumberArray.length; i++){
	if (stringNumberArray[i] === undefined){
		console.log("Undefined, skipping index: " + i);
	} else if ( typeof(stringNumberArray[i]) === 'string' ){
		numberOfStringCharacters += stringNumberArray[i].length;
		holder.push(stringNumberArray[i][0]);
	} else {
		var numberHolder = stringNumberArray[i] / 5;
		if (numberHolder % 2 === 0){
			sumNumbers += numberHolder / 3;
		} else {
			sumNumbers += numberHolder * 2;
		}
	}
}

while(holder.length > 0){
	finalMessage += holder.pop().toLowerCase();
}

console.log(finalMessage);
console.log("The number of characters is: " + numberOfStringCharacters);
console.log("Sum of Numbers after maths: " + parseInt(sumNumbers));


// Part 3
var cat = {name: "Fefe", speak: "Meowmers!", favoriteFood: "Fish"};

var doge = {name: "Shibu", speak: "Wow! Many objects. So curly braces", favoriteFood: "Memes"};

var fish = {name: "Magikarp", speak: "Blub Blub Blub", favoriteFood: "Psyduck confit"};

var newAttributes = [["Josh","I love fishes","goldfishes"],["Matt","My spoon is too big","cereal"]];

var allObjects = [];
allObjects.push(cat);
allObjects.push(doge);
allObjects.push(fish);

for(var i = 0; i < newAttributes.length; i++){
	var newObject = {};
	newObject.name = newAttributes[i][0];
	newObject.speak = newAttributes[i][1];
	newObject.favoriteFood = newAttributes[i][2];
	allObjects.push(newObject);
}

for(var i = 0; i < allObjects.length; i++){
	console.log(allObjects[i].name + " says: " + allObjects[i].speak);
	console.log("Favorite food: "+ allObjects[i].favoriteFood);
}