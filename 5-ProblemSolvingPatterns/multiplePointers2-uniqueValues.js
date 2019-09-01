/**
 *  MULTIPLE POINTERS
 * COUNT UNIQUE VALUES
 *
 * implement a function calle countUniqueValues,
 * which accepts a sorted array, and counts the unique
 * values in the array. There can be negative numbers in
 * the array, but it will always be sorted
 */

function countUniqueValues(arr) {
  let uniques = []
  for(let i = 0; i< arr.length; i++){
    let right = arr[i+1]
    if (arr[i] !== right){
      uniques.push(arr[i])
    }
  }
  return uniques.length
}

let x;
x = countUniqueValues([1, 1, 1, 1, 1, 2]);
// x = countUniqueValues([1, 2, 3, 4, 4, 4, 5, 7, 7, 7, 12, 12, 13]);
// x = countUniqueValues([]);
// x = countUniqueValues([-2, -1, -1, 0, 1, 2, 2]);
console.log(x);


// Aternate Solution -------------------------
function countUniqueValuesV2(arr){
  return [...new Set(arr)].length
}


// // Alternate solution -------------------------
function countUniqueValuesV3(arr) {
  if(arr.length === 0){return 0}
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j]
    }
  }
  // since i is the index in the array of the last unique
  // add 1 to i to get the count of uniques in the array
  return i+1;
}

let z;
z = countUniqueValuesV3([1, 1, 1, 1, 1, 2]);
// z = countUniqueValuesV3([1, 2, 3, 4, 4, 4, 5, 7, 7, 7, 12, 12, 13]);
// z = countUniqueValuesV3([]);
// z = countUniqueValuesV3([-2, -1, -1, 0, 1, 2, 2]);
console.log(z);