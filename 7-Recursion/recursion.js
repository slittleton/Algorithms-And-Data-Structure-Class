/**
 * RECURSION
 *
 * a process (a function in programming) that calls itself
 *  until it reaches the base case, which is the point
 *  where the function is told to stop calling itself.
 */

// Example 1 ====================================
function countDown(num) {
  if (num <= 0) {
    console.log("all done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// countDown(3);

// Example 2 ====================================

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

/**
 * steps involved in the function
 * sumRange(4)
 *
 * -> num != 1, num = 4
 * -> 4 + sumRange(3)
 *
 * --> num!=1, num =3
 * --> (4+3) + sumRange(2)
 *
 * ---> num != 1, num = 2
 * ---> (4+3+2) + sumRange(1)
 *
 * ----> sumRange = num = 1 returns 1
 *        at this point the computer can then use all the numbers to return
 *        the answer
 *        sumRange(4) = 4 + sumRange(3)
 *        sumRange(3) = 3 + sumRange(2)
 *        sumRange(2) = 2 + sumRange(1)
 *        sumRange(1) = 1
 *        ________________________________
 *        sumRange(4) = 4 + 3 + 2 + 1 = 10
 */

// console.log(sumRange(4))

// Example 3 ====================================
// factorial
// 4! = 4 * 3 * 2 * 1

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(4));


/**
 * HELPER METHOD RECURSION
 * 
 * A parent function that has a recursive function inside of it.
 * Works well to prevent using global variables to hold data 
 * when using recursion since the variable is scoped to the 
 * parent function of the helper function.
 */

 // Example 4 ====================================
 function collectOddValues(arr){
   let result = []

   function helper(helperInput){
     if(helperInput.length === 0){
       return;
     }
     if(helperInput[0] % 2 !== 0){
       result.push(helperInput[0])
     }
     helper(helperInput.slice(1))
   }

   helper(arr)
   return result;
 }
//  console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

 // Example 5 ====================================
 // Pure Recursion for collectOddValues
 // 
function collectOddValuesV2(arr){
  let newArr = [];
  if(arr.length === 0){
    return newArr
  }
  if(arr[0] % 2 !== 0){
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValuesV2(arr.slice(1)));
  return newArr;
}
console.log(collectOddValuesV2([1,2,3,4,5]))
/**
 * collectOddValuesV2([1,2,3,4,5])
 * -> [1].concat(collectOddValuesV2([2,3,4,5])
 * --> 2 % 2 ==== 0 so the number is not pushed to newArr
 * --> [1].concat([].concat(collectOddValuesV2([3,4,5])))
 * ---> [1].concat[].concat[3].concat(collectOddValuesV2([4,5]))
 * ---> [1].concat[].concat[3].concat[].concat(collectOddValuesV2([5]))
 * ----> [1].concat([]).concat([3]).concat([]).concat([5]) = [1,3,5]
 * -----> return newArr
 * 
 * collectOddValuesV2([1,2,3,4,5])
 *                   [1]
 *           .concat([])
 *           .concat([3])
 *           .concat([])
 *           .concat([5]) 
 *          ________________
 *        =     [1,3,5]
 * 
 * note: it makes more sense when looking at it to add the operations from 
 * the bottom up. start at the last one and look at them from last to first
 * because the last operation is where you finally get a result instead of another
 * function call.
 *  in other words collectOddValuesV2([1,2,3,4,5]) looks like 
 *             [1]
 *           .concat([])
 *           .concat([3])
 *           .concat([])
 *           .concat([5])
 * Then
 *             [1]
 *           .concat([])
 *           .concat([3])
 *           .concat([5])
 * Then
 *             [1]
 *           .concat([])
 *           .concat([3,5])
 * Then
 *            [1].concat([3,5])
 * Then       
 *            [1,3,5]
 * Then       
 *            return [1,3,5]
 * 
 * 
 * note: in pure recursion its usually a good idea to use 
 * slice, spread operator, and cocat to make copies of arrays 
 * to avoid mutating them
 */
