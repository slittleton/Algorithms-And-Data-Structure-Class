/**
 * Coding Exercise 18
 * Recursion - Harder Exercises
 * flatten
 *
 *
 * Write a recursive function called flatten which accepts an
 * array of arrays and returns a new array with all values
 * flattened.
 */


// Alternate Solution
function flatten(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

let x;
x = flatten([[[[[[1]]]]]]);
// x = flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
// x= flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// x= flatten([[1],[2],[3]]) // [1,2,3]
// x= flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
// console.log(x);
