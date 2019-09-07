/**
 * Coding Exercise 12
 * Recursion
 * recursiveRange
 *
 *
 * Write a function called recursiveRange which accepts a number and
 * adds up all the numbers from 0 to the number passed to the function
 */
function recursiveRange(num) {
  let result = 0;

  function helper(val) {
    if (val === 0) return;
    result += val;
    helper(--val);
  }
  helper(num);
  return result;
}

let x;
x = recursiveRange(6); // 21
console.log(x);


// Alternate Solution
function recursiveRangeV2(x) {
  if(x === 0) return 0;
  return x + recursiveRangeV2(x-1)
}