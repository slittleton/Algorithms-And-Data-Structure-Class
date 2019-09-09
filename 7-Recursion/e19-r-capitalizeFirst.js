/**
 * Coding Exercise 19
 * Recursion - Harder Exercises
 * capitalizeFirst
 *
 *
 * Write a recursive function called capitalizeFirst. given an array
 * of strings, capitalize the first letter of each string in the array.
 */

function capitalizeFirst(arr) {
  if (arr[0][0] === arr[0][0].toUpperCase()) return arr;
  arr.push(arr[0].charAt(0).toUpperCase() + arr[0].substring(1));
  return capitalizeFirst(arr.slice(1));
}

let x;
x = capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']
console.log(x);