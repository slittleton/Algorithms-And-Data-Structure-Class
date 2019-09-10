/**
 * Coding Exercise 21
 * Recursion - Harder Exercises
 * captalizeWords
 *
 *
 * Write a recursive function called captalizeWords. Given an array 
 * of words, return a new array containing each word Capitalized.
 */

function capitalizeWords(arr) {
  if (arr[0] === arr[0].toUpperCase()) return arr;
  arr.push(arr[0].toUpperCase());
  return capitalizeWords(arr.slice(1));
}



let x;
x = capitalizeWords(['i', 'am', 'learning', 'recursion']); // // ['I', 'AM', 'LEARNING', 'RECURSION']
console.log(x);

//Alternate Solution
function capitalizeWordsV2(arr) {
  if (arr.length < 1){return []}else{
    return [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))]
  }

}

