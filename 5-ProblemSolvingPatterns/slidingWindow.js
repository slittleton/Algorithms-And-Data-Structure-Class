/**
 * SLIDING WINDOW
 *
 * this patter involves creating a window which can either be
 * an array or number from one position to another
 * depending on a certain condition, the window either increases
 * or closes (and a new window is created)
 *
 * very useful for keeping track of a subset of data in an
 * array/string etc.
 */

//////// Example //////////
/**
 * write a function call maxSubarraySum which accepts an array of
 * integers and a number called n. The function should calculate the
 * maximum sum of n consecutive elements in the array.
 */

// ================= Naive Solution O(n^2) =================
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;

  // loop stops before end of array since you cant add up
  // additional elements if they dont exist
  // ex arr=[1,2] cant sum arr[3] + arr[2] b/c arr[3] doesnt exist
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      // second loop uses num as number of loops
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

let x;
// x = maxSubarraySum([1,2,5,2,8,1,5],2) // 10
x = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
// x = maxSubarraySum([4,1,2,1,6],1) // 6
// x = maxSubarraySum([],4) // null
console.log(x);

// ================= Refactor Solution O(n) =================
/**
 * use the first loop to find out the initial maxSum using num as
 * the number of loops/ this creates the "window"
 *
 * next use another loop that subtracts the first number from the array
 * that was used in the window from the max sum and adds the next
 * number in the array
 *  ex -   [ 1, 2, 4, 6, 8, 5, 7, 6, 8, 1, 2, 6, 9, 3], num = 3
 * window1   |-----|           1,2,4  max = 7 (initial max)
 * window2     |-----|         2,4,6  max = max -1 + 6
 * window3         |-----|     4,6,8  max = max -4 + 8
 */
function maxSubarraySumV2(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

let y;
// y = maxSubarraySumV2([1,2,5,2,8,1,5],2) // 10
y = maxSubarraySumV2([1, 2, 5, 2, 8, 1, 5], 4); // 17
// y = maxSubarraySumV2([4,1,2,1,6],1) // 6
// y = maxSubarraySumV2([],4) // null
console.log(y);