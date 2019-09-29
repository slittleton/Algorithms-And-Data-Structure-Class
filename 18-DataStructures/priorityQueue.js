/**
 * Data Structures
 * Priority Queue
 *  Big O     Olog(n) for insertion and deletion
 * -  most often used with heaps. Establishes a priority of which
 *    item comes next.
 * -  in this case we will implement a min binary heap where lower num is
 *    higher priority
 * -  each node has a val and a priority. Use the priority to build the heap
 * -  Enqueue method accepts a value and priority, makes a new node, and puts
 *    it in the right spot based off its priority
 * -  Dequeue method removes root element, returns it, and rearranged heap
 *    using priority
 */

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  /**
   * Enqueue
   */
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element.priority >= parent.priority) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  /**
   * Dequeue
   */
  dequeue() {
    if (this.values.length > 0) {
      const min = this.values[0];
      const end = this.values.pop();
      this.values[0] = end;

      this.sinkDown();

      return min;
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
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
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

let heap = new PriorityQueue();

console.log(heap);
console.log(heap.enqueue("common cold", 5));
console.log(heap.enqueue("gunshot wound", 1));
console.log(heap.enqueue("high fever", 4));
console.log(heap.enqueue("broken arm", 2));
console.log(heap.enqueue("small cut", 3));

console.log(heap.dequeue());
console.log(heap.dequeue());
