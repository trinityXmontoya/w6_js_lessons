// **Array iteration**
//
// * Define the following variables
//   * `arr` : array of some numbers
// * Iterate through an array and print for each element the message "The element at position x is y.", where x is the index and y is the value of the element
// * `arr.length` will give you the number of elements in the array
//
// **More array iteration**
//
// * Define the following variables
//   * `arr1` and `arr2` : arrays of numbers of the same length
// * Go through the elements of the arrays and print for each element the message:
//   * "Greater" if the element in `arr1` is greater than the corresponding element in `arr2`
//   * "Less" if the element in `arr1` is less than the corresponding element in `arr2`
//   * "Equal" if the element in `arr1` is equal the corresponding element in `arr2`

var arr = new Array
arr = [5,6,7]

for (index = 0; index < arr.length; index++) {
  message="The element at position " + index + " is " + arr[index] + "."
  console.log(message);
}


var arr1=new Array;
var arr2=new Array;

arr1=[7,1,8]
arr2=[3,2,8]
//
// for (index = 0; index < arr1.length; index++) {
//   if(arr1[index] > arr2[index]) {
//     ;
//   }
//   else if(arr2[index] > arr1[index]) {
//     ;
//   }
//   else() {;}
