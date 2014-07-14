// **Calculator**
//
// * Define the following variables
//   * `operand1` : number
//   * `operand2` : number
//   * `operator` : string, ["add", "subtract", "multiply", "divide"]
// * Use a `switch` statement to print the output of the mathematical operation of combining the two operands through the specified operator
// * Write a default case to handle invalid operators


var operand1 = new Number;
var operand2 = new Number;
var operators = ["add", "subtract", "multiply", "divide"]
var operator = new Array;

operand1=10
operand2=5
operator = operators[Math.floor(Math.random()*operators.length)];


switch (operator) {
case operators[0]:
  console.log(operand1 + operand2);
  break;
case operators[1]:
  console.log(operand1 - operand2);
  break;
case operators[2]:
  console.log(operand1 * operand2);
  break;
case operators[3]:
  console.log(operand1 % operand2);
  break;
}
