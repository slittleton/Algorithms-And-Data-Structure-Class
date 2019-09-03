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
