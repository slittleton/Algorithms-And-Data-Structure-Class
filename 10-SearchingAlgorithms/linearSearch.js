/**
 * SEARCHING ALGORITHMS
 */

/**
 * Linear Search
 * 
 *
 * search through each element in an array one at a time
 * from start until the item is found or you get to the
 * end of the array
 *
 * Some JS methods that use Linear search:
 * indexOf, includes, find, findIndex
 *
 *
 * Linear Search Pseudocode
 * -write function that accepts an array and a value
 * -loop through array and check if the current element
 *  is equal tot he value.
 * -if it is, return the index at which the element is found
 * - else return -1
 */
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
a1 = ["a", "b", "c", "d"];
v1 = "c";

console.log(linearSearch(a1, v1));
