/**
 * Data Structures
 *
 * Heaps
 *
 * Binary Heap
 * 2 types Max and Min
 *
 * Min Binary Heap
 * -  parent nodes are always smaller than child nodes
 *
 * Max Binary Heap
 * -  parent nodes are always larger than child nodes
 * -  the value of each parent node is always greater than its
 *    child nodes
 * -  in a max binary heap the parent is greater than the children
 *    but there are no guarantees between sibling nodes
 * -  a binary heap is as compact as possible. All the children
 *    of each node are as full as they can be and left children are
 *    filled out first
 *
 * -  for an index n in an array of a binary heap
 * -  the left child is stored at 2n + 1
 * -  the right child is stored at 2n + 2
 *
 * - for any child node at index n
 * -  its parent is at index (n-1)/2 floored
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  /**
   * Insert
   * - push the value into the values property on the heap
   * - bubble the value up to its correct spot
   *   - create a variable called index which is the length
   *     of the values property - 1
   *   - create a variable called parentIndex which is the floor
   *     of (index - 1)/2 floored
   *   - keep looping as long as the values element at the parentIndex
   *     is less than the values element at the child index
   *     - swap the value of the values element at the parentIndex with the
   *       value of the element property at the child index
   *     - set the index to be the parentIndex, and start over
   */
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  /**
   * Extract Max
   *
   * remove root root element and replace it with last element
   * let new root sink down/bubble down to appropriate level
   *
   * pseudocode
   * -  swap the first value in the values property with the last one
   * -  pop from the values property, so you can return the value at the end
   * -  have the new root "sink down" to the correct spot...
   *    - your parent index starts at 0 (the root)
   *    - find the index of the left child: 2 * index + 1 (make sure its not
   *      out of bounds)
   *    - find the index of the right child: 2 * index + 2 (make sure its not
   *      out of bounds)
   *    - if the left or right child is greater than the element...swap. If
   *      both left and right children are larder, swap with the largest child.
   *    - the child index you swapped to now becomes the new parent index.
   *    - keep looping and swapping until neither child is larger than the element.
   *    - return the old root
   */
  extractMax() {
    if (this.values.length > 0) {
      const max = this.values[0];
      const end = this.values.pop();
      this.values[0] = end;

      this.sinkDown();

      return max;
    }
  }
  sinkDown() {
    let idx = 0;
    const len = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < len) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  
}

let heap = new MaxBinaryHeap();
[41, 39, 33, 18, 27, 12].forEach(x => heap.insert(x));

console.log(heap);
console.log(heap.insert(55));
console.log(heap.insert(1));
console.log(heap.insert(45));
console.log(heap.insert(199));
console.log(heap.extractMax());
console.log(heap.extractMax());


