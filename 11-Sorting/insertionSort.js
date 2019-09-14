/**
 * SORTING ALGORITMS
 *
 * rearranging items in a collection so that the items
 * are in some kind of order.
 *
 * Insertion Sort
 *
 * Builds up the sort by gradually creating a larger left half
 * which is always sorted
 */

/**
 * Insertion Sort Pseudocode
 *
 * - start by picking the second element in the array
 * - now compare the second element with the one before it and
 *   swap if necessary.
 * - continue to the next element and if it is in the incorrect
 *   order, iterate through the sorted portion (i.e. the left
 *   side) to place the element in the correct place
 * - repeat untilt the array is sorted
 */

let a1 = [3, 6, 5, 1, 7, 2, 9, 0, 4, 8];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j]> currentVal; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = currentVal
  }
  return arr;
}

console.log(insertionSort(a1));
