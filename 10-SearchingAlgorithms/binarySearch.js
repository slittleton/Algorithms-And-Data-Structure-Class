/**
 * SEARCHING ALGORITHMS
 */

/**
 * Binary Search
 * O(log n)
 *
 * faster than linear search. Eliminates half of elements at a time,
 * Only works on sorted arrays.
 *
 *
 * function accepts a sorted array and a value
 * create two variables that act as pointers left and right
 * left starts at the beginning of the array and right at the end
 * loop while left comes before right
 * check middle item to see if it is value
 * check if middle item is less or more than value
 * if too small move left pointer to middle value
 * if right is too big move right pointer to middle
 * if value never found return -1
 */

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== val && left <= right) {
    if (val < arr[middle]) right = middle - 1

    else left = middle + 1;

    middle = Math.floor((left + right) / 2);
  }

  return arr[middle] === val ? middle: -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
