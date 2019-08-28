// Performance Test Function based on Timing
function timeElapsed(func, arg) {
  let t1 = performance.now();
  func(arg);
  let t2 = performance.now();
  console.log(`Time elapsed ${(t1 - t2) / 1000} seconds`);
  /* 
  this function can be used to measure how long it takes 
  for a function to run, but it has problems, there will be
  a slightly different result every time you run it. It may also not
  be precise enough to properly measure some algorithms.
  */
  /* Instead it is better to count the number of simple operations that 
    the computer must perform because this is constant 
   */
}

// Add all values up to but not including argument input number
// version 1
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
// timeElapsed(addUpTo, 1000000000);

// version 2
function addUpToV2(n) {
  return (n * (n + 1)) / 2;
}
// timeElapsed(addUpToV2, 1000000000);



//BIG O counts the number of operations
/*
addUpToV2
n * (n + 1)) / 2
operations -> * + /

there are 3 operations total

addUpTo(n)

for (let i = 0; i <= n; i++){ total += i }
the number of operations 
+=          n additons and
            n assignments * i
i++         n additions and 
            n assignments * i
total = 0   1 assignment
i =1        1 assignment
i <= n      n * i comparisons

approx: (5n +2) operations occur for addUpTo(n)


because the computer is doing a loop and will carry out the +
operation each for each i. 
This means addUpTo(n) will do n operations

the = is an assignment and will also take time
( but usually the operations are the focus for Big O notation)
there are different ways of counting it and its more important to 
be consistent the focus is on the trend.
For the two functions above the number of operations grows based on n
for the first but doesnt grow for the second

addUpTo     = 5n+2 operations
addUpToV2   = 3 operations

 */

