/**
 * Coding Exercise 10
 * Recursion
 * Power
 *
 *
 * Write a function called power which accepts a base and and 
 * an exponent. The function should return the power of the base 
 * to the exponent. This function should mimic the functionality 
 * of Math.pow()
 * 
 * do not worry about negative bases and exponents.
 */
function power(base, exp){
  
  if(exp === 0)return 1;
  return base * power(base, --exp);

}
let x;
x = power(2,0); // 1
x = power(2,1); // 4
x = power(2,4); // 16
console.log(x);