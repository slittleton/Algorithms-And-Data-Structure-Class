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

/**
 * Quick Sort
 *
 * - Like merge sort, exploits the fact that arrays of 0 or 1
 *   element are always sorted.
 * - Works by selecting one element (called the "pivot") and
 *   finding the index where the pivot should end up in the
 *   sorted array.
 * - Once the pivot is positioned appropriately, quick sort can
 *   be applied on either side of the pivot.
 *
 * pivot helper
 * -  in order to implement quickSort its usefult to implement a function
 *    responsible for arranging elements in an array on either side of the
 *    pivot
 * -  given an array, this helper function should designate an element as the
 *    pivot
 * -  it should then rearrange elements in the array so that all values less
 *    than the pivot are moved to the left of the pivot, and all values
 *    greater than the pivot are moved to the right of the pivot
 */

/**
 * Quick Sort Pseudocode
 *
 * Pivot Pseudocode
 *
 * -  it will help to accept three arguments: an array, a start index,
 *    and an end index (these can default to 0 and the array length minus
 *    1, respectively)
 * -  Grab the pivot from the start of the array
 * -  Store the current pivot index in a variable (this will keep track
 *    of where the pivot should end up)
 * -  Loop through the array from the start until the end
 *      if the pivot is greater than the current element, increment the
 *      pivot index variable and then swap the current element with the
 *      element at the pivot index
 * -  Swap the starting element(i.e. the pivot) with the pivot index
 * -  return the pivot index
 *
 * quickSort pseudocode
 * -  call pivot helper on the array
 * -  when the helper returns to you the updated pivot index, recursively
 *    call the pivot helper on the subarray to the left of that index,
 *    and the subarray to the right of that index
 * -  your base case occurs when you consider a subarray with less
 *    than 2 elements
 */

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function pivot(ar, start = 0, end = ar.length - 1) {
  let swapIndex = start;
  let pivotPoint = ar[start];

  for (let i = start + 1; i <= end; i++) {
    if (pivotPoint > ar[i]) {
      swapIndex++;
      swap(ar, swapIndex, i);
    }
  }

  swap(ar, start, swapIndex);

  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  // if left = right then we have an array of 1 element and so
  // there is no reason to try and break of that array into left and right
  // and further try to sort it.
  if (left < right) {
    let pivIdx = pivot(arr, left, right);
    //left side
    quickSort(arr, left, pivIdx - 1);
    //right side
    quickSort(arr, pivIdx + 1, right);
  }

  return arr;
}

console.log(quickSort([4, 2, 1, 5, 3, 6]));
