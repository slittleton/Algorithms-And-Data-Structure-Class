/**
 * Data Structures
 *
 * Doubly Linked List
 *
 * data structure that contains a head, tail, previous and length property;
 *
 *
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  /**
   * push pseudocode
   *
   * - create new node with value passed to the function
   * - if the head property is null, set the head and tail to
   *   be the newly created node
   * - if not, set the next property on the tail to be that node
   * - set the previous property on the newly created node to be
   *   the tail
   * - set the tail to be the newly created node
   * - increment the length
   * - return the doubly linked list
   */
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * pop pseudocode
   *
   * -  if no head, return undefined
   * -  store current tail in variable to return later
   * -  if length is 1, set the head and tail to be null
   * -  update the tail to be the previous node
   * -  set the newTail's next to null
   * -  decrement the length
   * -  return the value removed
   */
  pop() {
    if (!this.head) {
      return undefined;
    }
    let popped = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null; // must sever all ties of popped item from list
    }
    this.length--;

    return popped;
  }
  /**
   * shift pseudocode
   *
   * -  if length is 0, return undefined
   * -  store the current head property in a variable
   * -  if the length is 1, set the head and tail to null
   * -  update the head to be the next of the old head
   * -  set the old head's next to null
   * -  decrement the length
   * -  return old head
   */
  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  /**
   * unshift pseudocode
   *
   * -  create a new node with the value passed to the function
   * -  if the length is 0, set the head to be the new node, set
   *    the tail to be the new node
   * -  else, set previous propety on the head of the list to be
   *    the new node, set the next property on the new node to be
   *    the head property
   * -  update the head to be the new node
   * -  increment length
   * -  return list
   */
  unshift(val) {
    let newNode = new Node(val);
    if (this.lenght === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  /**
   * get pseudocode
   * note:  if searched for index is closer to head then start searching
   *        searching from head forwards, else start searching from
   *        tail backwards
   *
   * -  if the index is less than 0 or greater than or equal to the
   *    length, return null
   * -  if the index is less than or equal to half the length of the list
   *    loop through the list starting fromt he head and loop towards
   *    the middle, return the node once it is found
   * -  if the index is greater than half the length of the list
   *    loop through the list starting from the tail and loop towards
   *    the middle, return the node once it is found
   */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  /**
   * set pseudocode
   *
   * -  create a variable which is the result of the get method at the index passed
   *    to the function
   *    if the get method returns a valid node, set the value of that node to be the
   *    value passed to the function
   * -  return true
   */
  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
    }
    return node;
  }
  /**
   * insert pseudocode
   *
   * -  if the index is less that zero or greater than the length,
   *    return null
   * -  if the index is the same as the length - 1, pop
   * -  if the index is 0, shift
   * -  else using get method, access the node at the index - 1,
   *    set up connections between nodes
   * -  decrement the length
   * -  return the value of the removed node
   */
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }
  /**
   * remove pseudocode
   *
   * -  if the index is less that zero or greater than the length,
   *    return null
   * -  if index is 0, shift
   * -  if index is same as length-1, pop
   * -  use get method to retrieve the item to be removed
   * -  update the next and prev properties to remove the found node from the list
   * -  set next and prev to null on the found node
   */
  remove(index) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let foundNode = this.get(index);
    let prevNode = foundNode.prev;
    let nextNode = foundNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    foundNode.prev = null;
    foundNode.next = null;

    return foundNode;
  }
  /**
   * reverse pseudocode
   * 
   * -  assign variable to head as current
   * -  create next variable
   * -  loop through list, flip next and prev of each node using
   *    next as a placeholder for keeping track of the next value
   *      set next to next property of current
   *      set next property of current to prev property of current
   *      set prev property of current to next property of current
   *      set current to next
   * -  flip head and tail
   * -  return list
   */
  reverse() {
    let current = this.head;
    let next;
    while (current !== null) {
      next = current.next;
      current.next = current.prev;
      current.prev = current.next;
      current = next;
    }
    [this.head, this.tail] = [this.tail, this.head];
    return this;
  }
}

let list = new DoublyLinkedList();

list.push("a");
list.push("b");
list.push("c");
list.push("d");

console.log("push", list.push("e"));
console.log("pop", list.pop());
console.log("shift", list.shift());
console.log("unshift", list.unshift("f"));
console.log("get", list.get(3));
console.log("set", list.set(3, "z"));
console.log("insert", list.insert(2, "y"));
console.log("remove", list.remove(2));
console.log("reverse", list.reverse());

console.log(list);
