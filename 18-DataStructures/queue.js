/**
 * Data Structures
 *
 * Queues
 *
 * FIFO - First In First Out data structure. The first piece of data that
 * goes into the queue is the first piece to come out.
 *
 */
// example 1
let q = [];

q.push("a");
q.push("b");
q.push("c");

q.shift();

// example 2
let q2 = [];
q.unshift("a");
q.unshift("b");
q.unshift("c");

q.pop();

// example 3 - singly linked list queue
// add to end and remove from begining

class Node {
  constructor(value) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}
class Queue {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  // add to end
  enqueue(val) {
    let newNode = val;
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this.size++;
  }
  // remove first item
  dequeue() {
    if (!this.first) {
      return null;
    }
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}
