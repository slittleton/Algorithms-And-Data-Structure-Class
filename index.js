/**
 * Data Structures
 *
 * collections of values, the relationships among them,
 * and the functions or operations that can be applied to
 * the data
 */
/**
 * Singly Linked Lists
 *
 * data structure that contains a head, tail, and length property
 *
 * Linked lists consist of nodes, and each node has a value
 * and a pointer to another node or null. Does NOT have an index.
 * You have to start at the beginning and move along each node to get
 * to a number.
 * random access is not allowed.
 *
 * head ---------- length = 4 --------- tail
 *  4 next-> 6 next-> 8 next-> 2 next-> null
 *
 * singly linked lists are linked in one direction. You must start
 * at the beginning and go to the next value.
 *
 * because there is no index insertion and deletion do not affect
 * an index and so when you add or delete and element there is no need to
 * re-index all the items that come after it.
 *
 *
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// var first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('human')
// console.log(first);

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * push pseudocode
   *
   * - function should accept a value
   * - create a new node using the value passed tot he function
   *   if there is no head property on the list set the head and tail
   *   to be the newly created node
   * - otherwise set the next property on the tail to be the new node
   *   and set the tail property on the list to be the newly
   *   created node
   * - increment the length by one
   * - return the linked list
   */
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  /**
   * Pop
   *
   * remove last item of list. To set the new tail you have
   * to go through the entire list because a singly linked
   * list only allows you to go one direction
   *
   * pop pseudocode
   *
   * - if there are no nodes in the list, return undefined
   * - loop through the list until you reach the tail
   * - set the next property of the 2nd to last node to be null
   * - set the tail to be the 2nd to last node
   * - decrement the length of the list by 1
   * - return the value of the node removed
   */
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      // if list is empty
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // traverse(){ // prints values of list in sequence
  //   let current = this.head;
  //   while(current){
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }

  /**
   * Shift
   *
   * remove first item from list, make second item the new head
   *
   * shift pseudocode
   *
   * - if there are no nodes in the list, return undefined
   * - store the current head property in a variable
   * - set the head propert to be the current head's next node
   * - decrement the length by 1
   * - return the value of the node removed
   * - if length is 0 make tail = null
   */
  shift() {
    // remove first item from list
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  /**
   * Unshift
   *
   * add a new node to the beginning of the list
   *
   * shift pseudocode
   *
   * - function accepts a value
   * - create a new node using the value passed to the function
   * - if there is no head property on the list, set the head and
   *    tail to be the newly created node
   * - otherwise se tthe newly created node's next property to be
   *    the current head property on the list
   */
  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
      this.length++;
      return this;
    }
  }
  /**
   * Get
   *
   * retrieve a node by it's position in the linked list
   *
   * get pseudocode
   *
   * - function accepts a number
   * - if the index is less that zero or greater than or equa
   *    to the length of the list, retun null
   * - loop through the list until you reach the index and return the
   *    node at that specific index
   */
  get(index) {
    if (index < 0 || index > this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }
  /**
   * Set
   *
   * change value at a particular place in the list
   *
   * set pseudocode
   *
   * - function accepts a value and an index
   * - use get function to find the specific node
   * - if the node is not found, return false
   * - if the node is found, set the value of that node to be the
   *    value passed to the function and return true
   */
  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
    }
    return node;
  }
  
/**
 * Insert
 *
 * adding a node to the linked list at a spcified location
 *
 * insert pseudocode
 *
 * - function accepts a value and an index
 * - if the index is less than zero or greater than the length,
 *    return false
 * - if the index is the same as the length, push a new node to
 *    the end of the list
 * - if the index is 0, unshift a new ndoe to the start of the list
 * - else create a new node
 * - using the get method, access the node at index - 1
 * - set a temp variable to that node's .next
 * - set the next property on that node to be the new node
 * - set the new node's .next to temp
 * - increment the length
 * - return true
 */
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    else if (index === this.length) {
      this.push(val);
      return true;
    } else if (index === 0) {
      this.unshift(val);
      return true;
    } else {
      let newNode = new Node(val);

      let previous = this.get(index - 1);
      let temp = previous.next;
      previous.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }
  }
  /**
   * Remove
   * removeing a node from the linked list at a specified location
   * 
   * remove pseudocode
   * 
   * - if the index is less that zero or greater than the length,
   *    return null
   * - if the index is the same as the length - 1, pop
   * - if the index is 0, shift
   * - else using get method, access the node at the index - 1
   * - set the next property on that node to be the next of the next node
   * - decrement the length
   * - return the value of the removed node
   */
  remove(index){
    if (index < 0 || index > this.length) return false;
    else if(index === this.length - 1){
      this.pop();
      return true
    }
    else if( index === 0){
      this.shift()
    } else {
      let previous = this.get(index - 1);
      let removed = previous.next
      previous.next = removed.next;
      this.length--;
      return removed;
    }
  }
    /**
   * Reverse
   * reverse the list in place
   * 
   * reverse pseudocode
   * 
   * - swap the head and tail
   * - create variable called next
   * - create variable called previous
   * - create variable called current set to head
   * - loop through list
   * - set next to be the next property on whatever node is
   * - set the next property on the node to be whatever previous is 
   * - set previous to be the value of the node variable
   * - set the node variable to be the value of the next variable
   */
  reverse(){
    let oldHead = this.head
    let oldTail = this.tail
    this.head = oldTail;
    this.tail = oldHead

    let next;
    let previous;
    let current = this.head;
    while(current !== oldHead){
    

    }
  }

}

let list = new SinglyLinkedList();


list.push("a");
list.push("b");
list.push("c");
// console.log(list);
// console.log(list.head.next); //Node {val: "b", next: Node}
// console.log(list.tail); //Node {val: "c", next: null}
list.push("d");
list.push("e");
list.push("f");
console.log(list);
console.log("pop", list.pop());
console.log("shift", list.shift());
console.log("unshift", list.unshift("g"));
console.log("get", list.get(2));
console.log("set", list.set(3, "z"));
console.log("insert", list.insert(3, "y"));
console.log("remove", list.remove(3));
