/**
 * Dynamic programming
 *
 * -  a method of solving a complex problem by breaking it
 *    down into a collection of simpler subproblems, solving
 *    each of those subproblems just once, and storing their
 *    solutions
 *
 * overlapping subproblems
 * -  when a problem can be broken down into subproblems which
 *    are reused several times
 *    - example Fibonacci sequence
 *
 * optimal substructure
 * -  a problem is said to have optimal substructure
 *    if an optimal solution can be constructed from
 *    optimal solutions of its subproblems
 *    - example Fibonacci sequence
 *    - example finding shortest path
 */

/** Top Down Example
 * Fibonacci Sequence
 * - performance is not optimal
 *  Big O  O(2^N) --- really bad/slow
 *
 *  Fib(n)=Fib(n-1) + Fib(n-2)
 *  Fib(2) is 1
 *  Fib(1) is 1
 *
 */
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

/**
 * Fibonacci with Memoization
 *
 * each time a fibonacci number is calculated it is stored at that index
 * in an array. this works because calculating a fib of a higher number
 * requires calculating the fib of lower numbers. The larger the number
 * the more times the lower level calculations must be done
 *
 * notice that when doing fib(5) that fib(3) is caclulated 2 times. So if the function 
 * simply remembered what fib(3) is then it would only have to calculate it once. As the
 * numbers get larger, fib(3) would be calculated potentially hundreds or thousands of 
 * times. So remmbering it saves a lot of time. 
 * 
 * Since memoization does this for each new number it massively cuts 
 * down on the number of calculations that have to be done. If you see the tree structure
 * below you can see there are two sides. With fib(5) only the left size of the tree
 * needs to be calculated. Since those values get stored in an array, the entire right 
 * side of the tree can simply be retrieved from memory instead of requiring additional
 * recursive function calls to find the answers. 
 *
 *                        fib(5)
 *                       /      \
 *                 fib(4)        fib(3)
 *               /     \         /     \
 *         fib(3)     fib(2)   fib(2)  fib(1)
 *         /   \
 *      fib(2)  fib(1)
 * 
 */


 // Big O   O(n)
function fibMemo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];

  if (n <= 2) return 1;
  let res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo[n] = res;

  return res;
}
console.log(fibMemo(10));
