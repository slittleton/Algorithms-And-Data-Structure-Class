/**
 * SORTING ALGORITMS
 *
 * rearranging items in a collection so that the items
 * are in some kind of order.
 *
 * Selection Sort
 * Big O - O(n^2)
 *
 * similar to bubble sort but instead of placing large values into
 * sorted position, it places small values into sorted position.
 * Does a loop that finds the smallest value, at the end of the loop it
 * puts the smallest value at the beginning of the array
 */

function swap(arr, idx1, idx2) {
  //you can use this function to swap items
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

/**
 * Selection Sort Pseudocode
 * -  store the index of first element as the smallest value
 *    you have seen so far in a variable.
 * -  compare to next item and if it is smaller then update
 *    the smallest value index as the new minimum
 * -  at the end of the loop if the new minimum is not the same
 *    as the old minimum then swap the two values.
 * -  in the next loop start at the next index up.
 */

const a1 = [0, 2, 6, 4, 7, 1, 9, 3, 8, 5];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
      if (i !== lowest) {
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
      }
    }
  }
  return arr;
}

console.log(selectionSort(a1));
