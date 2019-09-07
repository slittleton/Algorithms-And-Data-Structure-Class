/**
 * Coding Exercise 12
 * Recursion
 * productOfArray
 *
 *
 * Write a function called productOfArray which takes in an array of 
 * numbers and returns the product of them all.
 */
function productOfArray(arr){
  let result = arr[0];
  
  function helper(val){
    if(val.length === 1){ return result}
    result *= val[val.length-1]
    val.pop()
    helper(val)
  }
  helper(arr)
  return result
}
let x;
x = productOfArray([1,2,3]); // 6
x = productOfArray([1,2,3,10]); // 60
x = productOfArray([2,3,1,2,3,10]); // 60
console.log(x);