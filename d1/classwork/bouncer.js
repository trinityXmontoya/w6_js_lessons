// * If your age is greater than 21, print "Welcome."
// * If your age is less than 21 but greater than 18, print "Come in, but here's a wristband."
// * If your age is less than 18, print "Nice try, you've still got x years to go.", where x is how many years you have till you become 18.
//

var age;

age = 16;

if (age >= 21) {
  console.log("Welcome");
}
else if (age > 18) {
  console.log("Come in, but there's a wristband.");
}
else {
  var yearsLeft = (18-age);
  var message = "Nice try, you've still got " + yearsLeft + " years to go"
  console.log(message);
}
