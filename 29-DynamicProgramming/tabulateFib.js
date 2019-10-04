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

/**
 * Tabulation
 *
 * - storing the result of a previous result in a "table"
 *    (usually an array)
 * - usually done using iteration
 * - better space complexity can be achieved using tabulation
 *
 *
 */

// Big O   O(n)
function fibTab(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }

  return fibNums[n];
}

console.log(fibTab(100));
