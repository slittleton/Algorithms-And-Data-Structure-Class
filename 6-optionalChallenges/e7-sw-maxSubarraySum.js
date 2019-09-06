/**
 * Coding Exercise 7
 * Sliding Window
 * maxSubarraySum
 *
 * Given an array of integers and a number, write a function called
 * maxSubarraySum, which finds the maximum sum of a subarray with the
 * length of the number passed to the function.
 *
 * Note that the subarray must consist of consecutive elements from the
 * original array, in the example ([100,200,300,400],3), [100,200,300]
 * is a subarray of the original array, but [100,300,400] is not.
 */

function maxSubarraySum(arr, num) {
  if(num > arr.length){return null}
  let max = 0;
  let temp = 0;

  for(let i = 0; i < num; i++){
    max += arr[i]
  }
  temp = max;
  for(let i = num; i < arr.length; i++){
    temp = temp -arr[i-num] + arr[i]
    if(temp >= max){ max = temp}
  }
return max
}

let x;
// x = maxSubarraySum([100, 200, 300, 400], 2); // 700
// x = maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
x = maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
// x = maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
x = maxSubarraySum([2, 3], 3); // null
console.log(x);