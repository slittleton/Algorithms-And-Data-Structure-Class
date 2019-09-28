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
 * Pseudocode
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
/**
 * DFS - Depth First Search
 * -  visiting all nodes down a vertical path before going to the next
 *    vertical path
 * -  Multiple versions of DFS, each will result in a different output.
 * -  code for each version is only slightly different
 *
 * DFS - PreOrder - Pseudocode
 * -  create a variable to store values of nodes visited
 * -  create variable called current and store root of tree in it
 * -  write helper function which accepts a node
 *    - push the value of the node to the variable that stores
 *      the values
 *    -  if the node has a left property, call the helper function
 *       with the left property on the node
 *    - if the node has a right property, call the helper function
 *      with the right property on the code
 *
 * DFS - PostOrder -
 *  - go all the was down vertically and add visited item at bottom on left. Then
 *    go up one and check if there is a right, if yes go all the way down the and
 *    add that one. Basically it adds from the bottom vertically instead of the top
 *
 * pseudocode
 * -  create a variable to store values of nodes visited
 * -  create variable called current and store root of tree in it
 * -  write a helper function that accepts a node
 *    - if the node has a left property, call the helper function
 *      with the left property on the node
 *    - if the node has a right property, call the helper function
 *      with the right property on the node
 *    - push the value of the node to the variable that stores values
 *    - invoke the helper function with the current variable
 *
 * DFS - In Order -
 *  - traverse the entire lefts side then visit the node, then traverse the
 *    entire right side then visit the node
 * pseudocode
 * -  create a variable to store values of nodes visited
 * -  create variable called current and store root of tree in it
 * -  write a helper function that accepts a node
 *    - if the node has a left property, call the helper function
 *      with the left property on the node
 *    - if the node has a right property, call the helper function
 *      with the right property on the node
 *    - push the value of the node to the variable that stores values
 *    - invoke the helper function with the current variable
 *
 * 
 * NOTES: 
 * DFS has better space complexity for wide trees because BFS adds items to queue
 * the queue will temporarily get really long before going back down to zero at the 
 * end. If the tree is deep but now wide you might want to use BFS
 * 
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
      node = queue.shift(); // remove first item from queue for examination
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
  DFSPre() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      visited.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return visited;
  }
  DFSPost() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node);
    }

    traverse(current);
    return visited;
  }
  DFSInOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return visited;
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

console.log("BFS", tree.BFS());
console.log("DFSPre", tree.DFSPre());
console.log("DFSPost", tree.DFSPost());
console.log("DFSInOrder", tree.DFSInOrder());
