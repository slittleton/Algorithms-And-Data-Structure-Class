/**
 * Coding Exercise 17
 * Recursion - Harder Exercises
 * someRecursive
 *
 *
 * Write a recursive function called someRecursive which accepts an
 * array and a callback. The function returns true if a single value
 * in the array returns true when passed to the callback. Otherwise
 * it returns false
 */

function someRecursive(arr, callback) {
  let count = 0;

  function helper(arr, callback) {
    if (callback(arr[count])) {
      return (count = true);
    }

    if (count === arr.length - 1) {
      return (count = false);
    }
    count++;

    helper(arr, callback);
  }

  helper(arr, callback);
  return count;
}

const isOdd = val => val % 2 !== 0;

let x;
x = someRecursive([1, 2, 3, 4], isOdd); // true
x = someRecursive([4, 6, 8, 9], isOdd); // true
x = someRecursive([4, 6, 8], isOdd); // false
x = someRecursive([4, 6, 8], val => val > 10); // false
console.log(x);

// Alternate Solution
function someRecursiveV2(array, callback){
  if(array.length === 0) return false;
  if(callback(array[0])) return true;
  return someRecursiveV2(array.slice(1), callback);
}