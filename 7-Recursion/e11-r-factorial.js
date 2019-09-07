/**
 * Coding Exercise 11
 * Recursion
 * Factorial
 *
 *
 * Write a function called factorial which accepts a number and returns 
 * a factorial of that number. A factorial is the product of an integer 
 * and all the integers below it. eg 
 * 4! = 4*3*2*1. 
 * 0! = 1
 */
function factorial(num){
  
  if(num === 0)return 1;
  return num * factorial(--num);

}
let x;
x = factorial(1); // 1
x = factorial(2); // 2
x = factorial(4); // 24
x = factorial(7); // 5040
console.log(x);