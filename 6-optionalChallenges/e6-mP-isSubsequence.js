/**
 * Coding Exercise 6
 * Multiple Pointers
 * isSubsequence
 *  
 * Write a function called isSubsequence which takes in two strings 
 * and checks whetehr the characters in the first string form a 
 * subsequence of the characters in the second string. In other words 
 * the function should check whether the characters in the first 
 * string appear somewhere in the second string, without their order 
 * changing.
 */

function isSubsequence(str1, str2) {
  let current = 0;
  let final = []

  for(let i = 0; i < str2.length; i++){
    if(str1[current] === str2[i]){
       final.push(str2[i])
       current++
      }
    if(str1.length === final.length){return true}
  }
  return false
}


let x;
x = isSubsequence('hello', 'hello world'); //true
// x = isSubsequence("sing", "sting"); //true
// x = isSubsequence('abc','abracadabra'); //true
// x = isSubsequence('abc', 'acb'); //false(order matters)
// x = isSubsequence('a', ''); //false

console.log(x);
