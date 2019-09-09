/**
 * Coding Exercise 15
 * Recursion - Harder Exercises
 * reverse
 *
 *
 * Write a recursive function called reverse which accepts a string
 * and returns a new string in reverse
 */

function reverse(str) {
  let arr = [];
  let count = str.length - 1;

  function helper(val) {
    if (count < 0) return;
    arr.push(val[count]);
    count--;
    helper(val);
  }
  helper(str);
  return arr.join("");
}

// console.log(reverse("cat")); // 3
// console.log(reverse("awesome")); // 55


function reverseV2(str) {
  let result = "";

  function helper(val) {
    result = result.concat(val[val.length - 1]);
    val = val.slice(0, -1);
    if (val.length === 0) return;
    helper(val);
  }
  helper(str);
  return result;
}

console.log(reverseV2("cat")); // 3
console.log(reverseV2("awesome")); // 55




// Alternate Solution ================================
function reverseV3(str){
  if(str.length <= 1) return str;
  return reverseV3(str.slice(1)) + str[0]
}