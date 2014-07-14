
// **Air conditioning**
//
// * Define the following variables
//   * `threshold` : number, 70
//   * `temperature` : number
//   * `acWorking` : boolean
// * Use `if` statements to implement the following behavior
//   * If the temperature is greater than the threshold and the AC is working, print "Turn on the AC!"
//   * If the temperature is greater than the threshold and the AC is not working, print "Fix the AC! It's hot!"
//   * If the temperature is less than the threshold and the AC is working, print "Ah, maxin' relaxin'."
//   * If the temperature is less than the threshold and the AC is not working, print "When you get the chance, fix the AC."
//

var threshold = 70;
var temperature = new Number;
var acWorking = new Boolean;

if (acWorking){
  if (temperature > threshold) {
  console.log("Turn on the AC!");
  }
  else (temperature < threshold) {
  console.log("Ah, maxin' relaxin");
  }
}
else {
  if (temperature > threshold) {
    console.log("Fix the AC! It's hot!");
  }
  else (temperature < threshold){
    console.log("When you get the chance, fix the AC.");
  }

}

// ++i (return incrementend value)
// i++ (return previous value)
// both still result in an increased i, they just return different things initially
