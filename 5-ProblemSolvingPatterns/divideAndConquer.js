/**
 * DIVIDE AND CONQUER
 *
 * this patter involves dividing a data set into smaller chunks
 * and then repeating a process with a subset of data.
 *
 * this pattern can tremendously decrease time complexity
 *
 * divide a large piece of data into smaller pieces then do something
 * with each smaller piece and determine where to go next
 *
 * used in search algorithms, see that section for more examples
 * such as binary search
 */

/////////////// Example - binary search ///////////////

/**
 * Given a sorted array of integers, write a function called search
 * that accepts a value and returns the index where the value passed
 * to the function is located. if the value is not found, return -1
 */

// ================ Naive Solution O(n) ================
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

let x;
x = search([1, 2, 3, 4, 5, 6], 4); //3
x = search([1, 3, 7, 4, 9, 2, 6], 2); //5

console.log(x);

// ================ Refactor O(Log(N)) Binary Search ================
// will only work if array is sorted
function searchV2(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

let y;
// y = searchV2([1, 2, 3, 4, 5, 6], 4); //3
y = searchV2([1, 3, 4, 6, 7, 9], 6); //5

console.log(y);


//============== ADDITONAL EXAMPLES ==============

/**
 * Count Zeros 
 * 
 * Given an array of 1s and 0s which has all 1s first followed by all 0s,
 * write a function called count zeros, which returns the number of zeros
 * in the array
 */

function countZeros(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    let current = arr[middle];

    if (current === 1) {
      start = middle + 1;
    }
    if (current === 0) {
      end = middle - 1;
    }

  }
  return arr.length - (end + 1);
}
console.log(countZeros([1, 1, 1, 1, 0, 0])); //2
console.log(countZeros([1, 1, 1, 0])); //1
console.log(countZeros([1, 0, 0, 0, 0, 0, 0])); //6
console.log(countZeros([1, 1, 1, 1, 1, 0, 0, 0, 0, 0])); //5



/**
 *  Sorted Frequency
 *
 * Given a sorted array and a number, write a function called
 * sortedFrequency that counts the occurences of the number in
 * the array
 */

function sortedFrequency(arr, val) {
  let first = findFirstOccurance(arr, val);
  let last = findLastOccurance(arr, val) + 1;

  return last - first;
}
console.log(sortedFrequency([1, 1, 1, 1, 1, 2, 2, 2, 3, 3], 2));

function findFirstOccurance(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (start < end - 1) {
    if (arr[middle] < val) {
      start = middle;
    } else {
      end = middle;
    }

    middle = Math.floor((start + end) / 2);
  }
  return end;
}

// console.log(findFirstOccurance([1, 1, 1, 1, 1, 2, 2, 3, 3], 2)); //index of 5

function findLastOccurance(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (start < end - 1) {
    if (arr[middle] > val) {
      end = middle;
    } else {
      start = middle;
    }
    middle = Math.floor((start + end) / 2);
  }
  return start;
}
// console.log(findLastOccurance([1, 1, 1, 1, 1, 2, 2, 3, 3], 2)); //index of 6
