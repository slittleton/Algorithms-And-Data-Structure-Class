/**
 * Data Structures
 *
 * Stacks
 *
 * abstract data structure. Collection of data that adheres
 * to the LIFO priciple. Last In First out.
 * the last element added tot he stack will be the first element
 * removed from the stack
 * there are many ways to implement a stack
 *
 */
//example 1
let simpleStack = [];
simpleStack.push("a");
simpleStack.push("b");
simpleStack.push("c");
console.log(simpleStack.pop()); // removes "c"

//example 2 using linked list
// use shift and unshift to add/remove to/from start of list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  unshift(val) {
    let newHead = new Node(val);

    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
      this.length++;
    }
    return this.length;
  }
  shift() {
    if (!this.head) return null;
    let tempHead = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      tempHead.next = null;
      this.length--;
    }
    return tempHead;
  }
}

let list = new Stack();
console.log(list.unshift("a"));
console.log(list.unshift("b"));
console.log(list.unshift("c"));
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list);
