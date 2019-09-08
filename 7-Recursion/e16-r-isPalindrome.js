/**
 * Coding Exercise 16
 * Recursion - Harder Exercises
 * isPalindrome
 *
 *
 * Write a recursive function called isPalindrome which returns true
 * if the string passed to it is a palindrome(reads the same backwards
 * and forward).Otherwise it returns false;
 */

function isPalindrome(str) {
  let result = "";
  let count = 0;

  function helper(val) {
    result = result.concat(val[val.length - 1]);
    val = val.slice(0, -1);
    if (val.length === 0) return;
    helper(val);
  }
  helper(str);

  function helper2(v) {
    if (v[count] === str[count]) {
      count++;
      if (count === v.length) {
        return (count = true);
      }
      helper2(v);
    }
    if (v[count] !== str[count]) {
      return (count = false);
    }
  }
  helper2(result);

  return count;
}

console.log(isPalindrome("cat")); // false
console.log(isPalindrome("cac")); // true
console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("amanaplanacanalpanama")); // true
