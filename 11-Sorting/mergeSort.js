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
 * Merge Sort
 *
 * Combination of spliting up, mergin and sorting.
 * Explots the fact that arrays of 0 or 1 element are always sorted.
 * Works by decomposing an array into smaller arrays of 0 or 1 elements,
 * then building up a newly sorted array.
 * Merging sorted arrays is easier than mergin unsorted arrays.
 *
 *    [2,3,4,1]
 * [2] [3] [4] [1]
 *  [2,3]   [1,4]
 *    [1,2,3,4]
 */

/**
 * mergin sorted arrays
 *
 * - create an empty array, take a look at the smallest values
 *   in each input array.
 * - while there are still values we haven't looked at..
 *   - if the value in the first array is smaller than the value
 *     in the second array, push the value in the first array into
 *     our results and move on to the next value in the first array.
 *   - if the value in the first array is larger than the value in
 *     the second array, push the value in the second array into our
 *     results and move on to the next value in the second array
 *   - Once we exhaust one array, push in all remaining values from
 *     the other array.
 */

function merge(arr1, arr2) {
  // merge sorted arrays
  let results = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] >= arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  // if one of the arrays being checked ends you
  // need to add the rest of the other array
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}
//sorted arrays
let a1 = [1, 4, 6, 8];
let a2 = [2, 5, 7, 9, 10, 11];

console.log(merge(a1, a2));

/**
 * mergeSort Pseudocode
 *
 * -  Break up the array into halves until you have arrays that
 *    are empty or have one element.
 * -  Once you have smaller sorted arrays, merge those arrays with
 *    other sorted arrays until you are back at the full
 *    length of the array.
 * -  Once the array has been merged back together, return the
 *    merged(and sorted) array.
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
console.log(mergeSort([23, 56, 11, 97, 36, 24, 93, 22, 47, 25]));
