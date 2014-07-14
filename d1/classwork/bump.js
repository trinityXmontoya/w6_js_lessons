// **Birthday bumps!**
//
// In my undergrad college, there existed a tradition where on your birthday, you would be held up by your arms and legs and kicked in the butt. The number of kicks you received would be equal to the age that you just turned. These butt kicks are called birthday bumps.
//
// * Define the following variables
//   * `age` : number
// * Use a `while` loop to implement the following behavior
//   * Print a message exclaiming how old the person just became
//   * Print the string "BUMP!" a number of times equal to the person's age
// * Example
// ```
// You turned 6!
// BUMP!
// BUMP!
// BUMP!
// BUMP!
// BUMP!
// BUMP!
// ```

// var age = new Number ;
//
// var i = 0;
//
// age = 5;
// var message="You turned " + age + "!"
// console.log(message);
//
// while (i < age){
//   console.log("BUMP "+ (i+1) +"!");
//   i++
// }
//
//
// var bumpNumber - 1;
// while (bumpNumber <= age) {
//   console.log("BUMP " + bumpNumber + "!" );
//   bumpNumber++;
// }
//
// for(var bumpNumber = 1; bumpNumber <= age; bumpNumber ++) {
//   console.log("BUMP" + bumpNumber + "!");
// }


var age = 50;
var bumpNumber;
for (bumpNumber = 1; bumpNumber <= age; bumpNumber++) {
  console.log("BUMP" + bumpNumber + "!");
}

console.log("BUMPNUMBER: " + bumpNumber)
