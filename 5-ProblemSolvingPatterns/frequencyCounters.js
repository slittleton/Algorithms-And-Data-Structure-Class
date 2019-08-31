// PROBLEM SOLVING PATTERNS

// FREQUENCY COUNTERS =====================
/* Use object or sets to collect values/frequencies of values*/

/*
///////////////////// EXAMPLE 1 /////////////////////
write a function called same. It accepts two arrays. The function
should return true if every value in the array has it's corresponding 
value squared in the second array. The frequency of values must 
be the same
[1,2,3], [4,1,9] // true
[1,2,3], [1,9] // false
[1,2,1], [4,1,4] // false (must be same frequency)
*/

// ===================== Naive solution - O(n^2) ===================== 

// uses nested loops because indexOf is also a loop
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    // remove squared value to prevent additional comparisons
    arr2.splice(correctIndex, 1);
  }
  return true;
}

let x;
x = same([1, 2, 3, 2], [9, 1, 4, 4]); //true
// x = same([1, 2, 3, 2], [9, 1, 4, 4.5]); //false
// x = same([1, 2, 3, 2], [9, 1, 4, 1]); //false
console.log(x);

// ===================== Refactor - O(n) =====================
// seperate loops that are not nested simplifies to O(n)

function sameV2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // add items as key value pairs in obj from arr1
  // if key alread exists then increment by 1
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  // add items as key value pairs in obj from arr2
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    // square each key check if it is in second obj
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // Check if obj2's squared key has same count as ob1's key
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
let y;
y = sameV2([1, 2, 3, 2], [9, 1, 4, 4]); //true
// y = sameV2([1, 2, 3, 2], [9, 1, 4, 4.5]); //false
// y = sameV2([1, 2, 3, 2], [9, 1, 4, 1]); //false
console.log(y);
