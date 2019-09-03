/**
 * Coding Exercise 4
 * Frequency Counter/Multiple Pointers
 * Are There Duplicates
 *
 *
 * Implement a function called areThereDuplicates which accepts a
 * variable number of arguments, and checks whether there are any
 * duplicates among the arguments passed in. You can solve this using
 * the frequency counter pattern OR the multiple pointers pattern
 * must be at least as good as O(n) for time and O(n) for space
 */

function areThereDuplicates() {
  let obj = {};
  for (let val in arguments) {
    let arg = arguments[val];
    if (obj[arg]) {
      return true;
    } else {
      obj[arg] = true;
    }
  }
  return false;
}
let x;
// x = areThereDuplicates(1,2,3); false
x = areThereDuplicates(1, 2, 2); //true
x = areThereDuplicates("a", "b", "c"); //false
x = areThereDuplicates("a", "b", "c", "a"); //true

console.log(x);
