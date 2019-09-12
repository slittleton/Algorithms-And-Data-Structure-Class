/**
 * Coding Exercise 14
 * Recursion
 * fib
 *
 *
 * Write a recursive function called fib which accepts a number
 * and returns the nth number in the fibonacci sequence. Recall
 * that the Fibonacci sequence of whole numbers 1,1,2,3,5,8...
 * which starts with 1 and 1, and where every number thereafter is
 * equal to the sum of the previous two numbers.
 */

function fib(num) {
  let arr = [1, 1];
  let countDown = num;
  if (num <= 1) return 1;

  function fibgen() {
    if (countDown === 2) return;
    countDown--;
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    fibgen();
  }
  fibgen();
  return arr[arr.length - 1];
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55


// Alternate Solution
function fibV2(n){
  if(n<=2) return 1;
  return fib(n-1) + fib(n-2);
}