/**
 * SORTING ALGORITMS
 *
 * rearranging items in a collection so that the items
 * are in some kind of order.
 *
 *
 * Javascript sort method
 * default sort method
 * array items are converted to strings and given unicode designation
 * then sorted ascending. Works ok for strings but not for numbers.
 *
 * accepts optional comparator function to determine how to sort items
 * the comparator function looks at pairs of elements (a and b) and
 * returns sort order based on return value
 * if returns negative number, a should come before b
 * if returns positive number, a should come after b
 * if returns 0, a and b are the same as far as sort is concerned
 */

let arr1 = ["d", "a", "z", "b", "c", "x", "y"];
let arr2 = [10, 6, 5, 2, 8, 3, 7, 4];
let arr3 = ["car", "calculator", "river", "summer", "tree"];

function numberCompare(num1, num2) {
  return num1 - num2;
}

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

console.log(arr1.sort()); //["a", "b", "c", "d", "x", "y", "z"]
console.log(arr2.sort()); // [10, 2, 3, 4, 5, 6, 7, 8]
console.log(arr2.sort(numberCompare)); //[2, 3, 4, 5, 6, 7, 8, 10]
console.log(arr3.sort(compareByLen)); //["car", "tree", "river", "summer", "calculator"]
