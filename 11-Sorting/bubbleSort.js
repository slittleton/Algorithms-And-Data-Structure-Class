/**
 * SORTING ALGORITMS
 *
 * rearranging items in a collection so that the items
 * are in some kind of order.
 *
 * Bubble Sort
 *
 * sorting algorithm where largest values bubble to the top
 *
 * as you loop through each item it gets compared to the next item.
 * if the if the next item is larger then swap the two.
 *
 * takes multiple loops to fully sort
 *
 * can be useful if data is mostly sorted to start with
 */

//ES5
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

//ES2015
const swapV2 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

/**
 * BubbleSort Pseudocode
 *
 * -  start looping with a variable called i from the end of the array
 *    towards the beginning
 * -  start an inner loop with a variable called j from the beginning until i-1
 * -  if arr[j] is greater than arr[j+1], swap those two values
 * -  return sorted array
 */

let a1 = [5, 3, 7, 9, 2, 4, 1, 8, 6];

//bigO O(n^2)
function naiveBubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log("naive", naiveBubbleSort(a1));
/**
 * naive solution uses more loops than necessary,
 * each pass moves biggest unsorted value to end
 * reduces the number of loops needed by 1 each time
 * an item is sorted
 *
 *
 * fix this by looping from end to beginning using i
 * the inner loop uses j. use i-1 as the number of inner loops
 * this will reduce the number of max inner loops each time an
 * outer loop is done since i increases.
 */

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, arr[j], arr[j + 1]);
      }
    }
  }
  return arr;
}
console.log(bubbleSort(a1));

/**
 * BubbleSort Optimization with noSwaps variable
 *
 * if the array starts off as being almost sorted the normal bubblesort
 * uses a lot of extra loops. Check if any swaps occured in loop and
 * if no swaps occured break the loop.
 */

//BigO O(n)
function bubbleSortV2(arr) {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, arr[j], arr[j + 1]);
        noSwaps = false;  // a swap occured so the loop will continue
      }

      if (noSwaps) break;
    }
  }
  return arr;
}
console.log(bubbleSort(a1));
