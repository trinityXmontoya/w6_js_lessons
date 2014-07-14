#JavaScript Reps

### Part 1
Provided are three objects:

```
var allObjects = [{
	name: "McKenneth Scott III",
	age: 9001,
	gender: "male",
	catchphrase: "F*** it, Break it!"
},{
	name: "Hari",
	age: 50,
	gender: "male",
	catchphrase: "Javascript is beautiful!!"
},{
	name: "Adam Bray",
	age: 50,
	gender: "male",
	catchphrase: "R.E.S.T, T.C.P, Ruby on Rails is good to me!"
}];

```

Write a function that will take a single parameter, an array of objects, and add a new property,`information`, to each object in that array. The `information` property should be a function that will return the following string when called:

```
addInfo(allObjects);

mckenneth.information();
=> McKenneth Scott III, age: 9001, catchphrase: F*** it, Break it!
```
Print the return of calling the information function on each of the three objects.

### Part 2
Do the following in `ruby` and `javascript`

**FizzBuzz** 

- Write a program that prints the numbers from 1 to 100.  
	- for multiples of three print `Fizz` instead of the number
	- for the multiples of five print `Buzz`. 
	- for numbers which are multiples of both three and five print `FizzBuzz`.
