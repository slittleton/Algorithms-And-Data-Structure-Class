/**
 * Coding Exercise 5
 * Multiple Pointer
 * Average Pair
 *
 * Write a function called averagePair. Given a sorted array,
 * determine if there is a pair of values in the array where the
 * average of the pair equals the target average. There may be
 * more than one pair that matches the average target.
 */

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[left] + arr[right] / 2;
    if (sum === target) {
      return true;
    }
    if (sum < target) {
      left++;
    }
    if (sum > target) {
      right--;
    }
  }
  return false;
}
let x;
// x = averagePair([1,2,3], 2.5); true
x = averagePair([1, 3, 3, 6, 7, 8, 10, 12, 19], 8); //true
// x = averagePair([-1,0,3,4,5,6],4.1); //false
// x = averagePair([],4); //false

console.log(x);
