/**
 * Coding Exercise 8
 * Sliding Window
 * minSubArrayLen
 *
 * Write a function called minSubArrayLen which accepts two
 * parameters - an array of positive integers and a positive
 * integer.
 *
 * This function should return the minimal length of a contiguous
 * subarray of which the sum is greater than or equal to the
 * integer passed to the function. If there isn't one, return 0 instead
 */

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
    // move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
      total -= nums[start];
      start++;
    } 
    // current total less than required total but we reach the end, 
    // need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

let x;
// x = minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
// x = minSubArrayLen([2,1,6,5,4], 9); // 2 -> because [4,3] is the smallest subarray
// x = minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52); // 1 b/c [62] is greater than 52
// x = minSubArrayLen([1,4,16,22,5,7,8,9,10], 39); // 3
x = minSubArrayLen([1,4,16,22,5,7,8,9,10], 55); // 5
// x = minSubArrayLen([4,3,3,8,1,2,3], 11); // 2
// x = minSubArrayLen([1,4,16,22,5,7,8,9,10], 95); // 0
console.log(x);
