/**
 * SEARCHING ALGORITHMS
 */

/**
 * Naive String Search
 *
 * search for substring in longer string
 *
 *
 * write function that takes two strings
 * loop over the longer string
 * loop over shorter string
 * if characters dont match break out of inner loop
 * if characters match keep going
 * if you complete inner loop and find a match increment count
 * return count
 */

function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch("lorie loled asdflolasloodfllasloldfl", "lol"));//3
