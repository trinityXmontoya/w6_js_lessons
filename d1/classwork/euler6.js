// The sum of the squares of the first ten natural numbers is,
//
// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var sum1 = sum2 = 0;

var index = new Number
for (index=1;index<=100;index++) {
  sum1 += (index * index)
  sum2 += index;
}

console.log((sum2*sum2) - sum1)

// var sum = total;
//
// total = (sum*total)-(total)
//
// console.log(total)
// var sum = 0;
// sum = (Math.pow(total,2)-total);
//
// console.log(sum)
