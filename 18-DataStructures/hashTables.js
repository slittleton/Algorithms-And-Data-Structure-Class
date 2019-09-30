/**
 * Data Structures
 *
 * Hash Tables
 *  Big 0   insertion: O(1)  Deletion: O(1)  Access: O(1)   Search: O(n)
 * -  store key value pairs
 * -  keys are not ordered
 * -  fast for finding, adding, and removing values
 * -  same input yields same output
 *
 * -  Handling Collisions
 *    -  seperate chaining: when collision occurs you can storing multiple values at
 *       same hash index location
 *    -  linear probing: when a collision occurs, we search through the array to find
 *       the next empty slot
 *
 *
 */

class HashTable {
  constructor(size = 14) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0);
      -96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  /**
   * Set
   * -  accepts a key and a value
   * -  hashes the key
   * -  stores the key-value pair in the hash table array via
   *    seperate chaining
   *
   *
   */
  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }
  /**
   * Get
   * -  accepts a key
   * -  hashes the key
   * -  retreives a key value-pair in the hash table
   */
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (key === this.keyMap[index][i][0]) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return null;
  }
  /**
   * Keys
   * -  loops through the hash table array and returns an array
   *    of keys in the table
   *
   */
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // prevent duplicates
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  /**
   * Values
   * -  loops through the hash table array and returns an array
   *    of values in the table
   *
   */
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            // prevent duplicates
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}
let ht = new HashTable();
console.log(ht.set("hello world", "goodbye"));
console.log(ht.set("apple", "batman"));
console.log(ht.set("banana", "house"));
console.log(ht.set("fan", "keyboard"));
console.log(ht.set("hat", "book"));
console.log(ht.set("cat", "click"));
console.log(ht.set("cat", "fat"));
console.log(ht.set("bat", "planet"));
console.log(ht.set("paper", "clip"));
console.log(ht.set("console", "clip"));
console.log(ht.get("cat"));
console.log(ht.values());
console.log(ht.keys());

console.log(ht);
