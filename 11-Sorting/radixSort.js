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
 * Radix Sort
 *
 * Special sorting algorithm that works on lists of numbers
 * It never makes comparisons between elements
 * It exploits the fact that information about the size of a number
 * is encoded in the number of digits.
 * More digits means a bigger number.
 *
 *  numbers are grouped into buckets starting at the ones column.
 *
 *   Buckets for base 10 numbers = |0|1|2|3|4|5|6|7|8|9|
 *
 *
 *   Then they are grouped into buckets again based on the next column up
 *   each time until there are no columns left. If a number does not
 *   have a digit in the column being checked then it goes into the 0 bucket
 *
 *  [13, 249, 123, 56, 16, 58, 4]
 *
 *  13,123 |4| 56,16 | 58,| 249  sort based on 1's column
 *
 *  4| 13,16, | 123 |249 | 56,58 sort based on 10's column
 *
 *  4,13,16,56,58,| 123| 249     sort based on 100's column
 *
 *  4,13,16,56,58,123,249        sort complete
 *
 */

/**
 *
 *  Radix Sort Helpers
 *
 * To implement radix sort, it's helpful to build a few helper functions
 *
 * getDigit(num, place) - returns the digit in num at the given place value
 *
 *  getdigit(12345, 0) // -> 5
 *  getdigit(12345, 3) // -> 2
 */

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/**
 * Radix Sort Helpers
 *
 * find the largest number of digits that a number has
 *
 * digitCount(23) // -> 2
 * digitCout(246267) //-> 6
 */
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Radix Sort Helpers
 *
 * mostDigits(nums)
 * Given an array of numbers, returns the number of digits
 * in the largest numbers in the list
 *
 *
 * mostDigits([23, 4, 1579]) // -> 4
 * mostDigits([15,68,79,22]) //-> 2
 */
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

/**
 * Radix Sort Pseudocode
 *
 * -  define a function that accepts a list of numbers
 * -  figure out how many digits the largest number has
 * -  loop from k =0 up to the largest number of digits
 * -  for each iteration of the  loop
 *     - create buckets for each digit (0-9)
 *     - place each number in the corresponding bucket based
 *       on its kth digit
 *     - replace our existing array with the values in our buckets
 *       starting with 0 and going up to 9
 *     - return list at the end
 */

function radixSort(arr) {
  let maxDigits = mostDigits(arr);

  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

console.log(radixSort([12, 456, 6367, 331, 16, 93, 3, 589, 15, 78]));
