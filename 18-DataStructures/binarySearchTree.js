/**
 * Data Structures
 *
 * Trees
 * -  data structure that consist of nodes in a parent/child
 *    relationship. Starts with one "root". Each node can have more than
 *    one reference to another node. Nodes branch away from the root.
 *    - root: top node in a tree
 *    - child: node directl connected to another node when moving away from
 *        the root
 *    - parent: converse notion of a child
 *    - siblings: a group of nodes with the same parent
 *    - leaf: node with no children
 *    - edge: the connection between one node and another
 *
 * Binary Search Trees
 *    Big O usually  insert: O(log n)    search: O(log n)
 * 
 * -  every parent nod has at most two children
 * -  every node to the left of the parent node is always less than the
 *    parent
 * -  every node to the right of the parent node is always greater than
 *    the parent
 * -
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
  /**
   * insert pseudocode
   * -  create a new node
   * -  starting at the root
   *    - check if there is a root, if not - the root now becomes that new node
   *    - if there is a root, check if the value of the new node is greater than
   *      or less than the value of the root
   *    - if it is greater
   *      - check to see if there is a node to the right
   *        - if tehre is, move tot hat node and repeat these steps
   *        - if tehre is not, add that node as the right property
   *     - if it is less
   *       - checkt o see if there is a node tot he left
   *         - if tehre is, move to that node and repeat these steps
   *         - if tehre is not, add that node as the left property
   */
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
  /**
   * contains
   *
   * -  starting at the root
   *  - check if there is a root, if not - we're done searching
   *  - if there is a root, check if the value of the new node is the
   *    value we are looking for. if it is we are done
   *  - if not, check to see if the value is greater than or less than the
   *    value of the root
   *  - if it is greater
   *    - check to see if there is a node to the right
   *    - if there is not, we are done searching
   *  - if it is less
   *    - check to see if there is a node to the left
   *    - if there is, move to that node and repeat these steps
   *    - if there is not, we're done searching
   */
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
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
console.log(tree.insert(5));
console.log(tree.insert(20));
console.log(tree.insert(5));
console.log(tree.contains(20));
console.log(tree.contains(7));
