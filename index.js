/**
 * Data Structures
 *
 * Trees
 *
 * Tree Traversal
 * - visit every node on the tree once
 * - not specific to any particular type of tree
 *
 */
/**
 * BFS - Breadth First search
 * -  visiting all nodes on the same horizontal level before
 * going to the next level down
 *
 * Steps
 * -  Create a queue (this can be an array) and a variable to
 *    store the values of nodes visited
 * -  place the root node in the queue
 * -  loop as long as there is anything int he queue
 *    - Dequeue a node from the queue and push the value of the
 *      node into the variable that stores the nodes
 *    - if there is a left property on the node dequeued - add
 *      it to the queue
 *    - if there is a right property on the node dequeued - add
 *      it to the queue
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    if (!val) return null;
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (val === current.value) return "duplicates not allowed";
        if (val < current.value) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = node;
            return this;
          }
        }

        if (val > current.value) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = node;
            return this;
          }
        }
      }
    }
  }

  contains(val) {
    if (!val) return null;
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (val === current.value) return true;

      if (val > current.value) {
        if (!current.right) {
          return false;
        } else {
          current = current.right;
        }
      }
      if (val < current.value) {
        if (!current.left) {
          return false;
        } else {
          current = current.left;
        }
      }
    }
  }

  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;

    queue.push(node);
    while (queue.length) {

      node = queue.shift();// remove first item from queue for examination
      data.push(node);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }

    }
    return data;
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
console.log(tree.insert(5));
console.log(tree.insert(20));
console.log(tree.insert(3));
console.log(tree.insert(1));
console.log(tree.insert(16));
// console.log(tree.insert(10));
// console.log(tree.contains(20));
// console.log(tree.contains(7));

console.log(tree.BFS());
