#The Ballmer Peak
![image](https://farm8.staticflickr.com/7170/13805278225_ca22434c8c.jpg)

##### Disclaimer: 
### DO NOT TRY THIS AT HOME.
###### This is purely for learning purposes.

#### Objectives:
- Practice with writing functions in JavaScript
- Practice using numbers and strings in JavaScript
- Practice using conditional statements in JavaScript
- Practice using node as a JavaScript REPL

To get some practice with JavaScript you're going to write a program that will determine the number of drinks you need to have to reach the all-powerful Ballmer Peak.

Look at the Wikipedia article on calculating [Estimate blood ethanol concentration](http://en.wikipedia.org/wiki/Blood_alcohol_content#Estimated_blood_ethanol_concentration_.28EBAC.29). Use that formula to help you calculate the Ballmer Peak. The formula gives you a BAC for a certain number of drinks in a period of time. We'll use the formula to calculate a the number of drinks required to hit a BAC in a certain period of time.

The Ballmer Peak is achieved between `0.129% BAC and 0.138% BAC`. I used the average of the two as my optimal peak BAC.

Your assignment is to write a function `ballmerPeak()` that when called will return the following string:

```
ballmerPeak("male", 4, 145);
=> 'Total drinks to hit the Ballmer Peak in 4 hours: X [male, 145 lbs]'

ballmerPeak("female", 3, 130);
=> 'Total drinks to hit the Ballmer Peak in 3 hours: Y [female, 130 lbs]'

```
Where `X` and `Y` will be the number of drinks calculated by your function.

Use functions to keep your code as DRY as possible.

# Before you begin this assignment, 
### add/commit and push all of your files to origin master. 
### THEN checkout a new branch and begin working on the assignment. 
### ONLY push the files from the current hw assignment. 
### You should not have 100s of files in your pull request.
