/**
 * MULTIPLE POINTERS
 * 
 * creating pointers or values that correspond to an index or position
 * and move towards the beginning, end, or middle based on a certain
 * condition.
 * 
 * very efficient for solving problems with minimal space complexity
 */

 // EXAMPLE
 /**
  * Write a funciton called sumZero which accepts a sorted array of
  * integers. The function should find the first pair where the
  * sum is 0. Return an array that includes both values that sum
  * to zero or undefined if a pair does not exist
  */

  // ============= Naive Solution O(n^2) ===============


function sumZero (arr){

  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return[ arr[i], arr[j]]
      }
    }
  }
}

// let x;
// x = sumZero([-3,-2,-1,0,1,2,3]) //[-3,3]
// // x = sumZero([-2,-1,0,3]) //undefined
// // x = sumZero([1,2,3]) //undefined

// console.log(x);

// =================== Refactor O(n) ===================
function sumZeroV2 (arr){
let left = 0;
let right = arr.length-1;

  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum===0){
      return[arr[left], arr[right]]
    }else if(sum > 0){
      right--;
    }else{
      left++
    }
  }
}
let y;
y = sumZero([-3,-2,-1,0,1,2,3]) //[-3,3]
// y = sumZero([-2,-1,0,3]) //undefined
// y = sumZero([1,2,3]) //undefined

console.log(y);