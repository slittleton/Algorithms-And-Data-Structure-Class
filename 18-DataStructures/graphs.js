/**
 * Data Structures
 *
 * Graphs
 *
 * -  consists of a finite(and possibly mutable) set of
 *    vertices or nodes or points, together with a set of
 *    unordered pairs of these vertices for an undirected graph
 *    or set of ordered pairs for a directed graph
 * -  a bunch of connected nodes
 *    A---N---C   P
 *    |   |       |
 *    K   J ------X --- Y
 *
 * ex - social media network showing connections between
 *      people and their friends
 *
 * ------Terms------
 * vertex               - a node
 * edge                 - connection between nodes
 * weighted/unweighted  - values assigned to distances between vertices
 * directed/undirected  - directions assigned to distances between vertices
 *
 *
 * two primary ways to store data
 * 1) adjacency matrix - connections are stored in matrix
 *       A B C D
 *     A 0 1 0 1
 *     B 0 0 1 0
 *     C 1 1 0 1
 *     D 1 0 0 0
 *
 * 2)adjacency list - list of nested pairs where an index gives the list of
 *                    other nodes connected to that node. Alternatively
 *                    you can use an object with a list assigned to each key
 *                    where each key is a node designation
 *   --ex1--
 *   [
 * 0   [1,5],
 * 1   [0,2],
 * 2   [1,3],
 * 3   [2,4],
 * 4   [3,5],
 * 5   [4,0],
 *   ]
 *   --ex2--
 *  {
 *    a: ['b','f'],
 *    b: ['a','c'],
 *    c: ['b','d'],
 *    d: ['c','e'],
 *    e: ['d','f'],
 *    f: ['e','a'],
 *  }
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // vertex is like a node
  addVertex(val) {
    if (!this.adjacencyList[val]) this.adjacencyList[val] = [];
  }
  /**
   * Add Edge
   * edge is like a connection between nodes
   * - function should accept two vertices, vertex1 vertex2
   * - function should find in the adjacency list the key
   *   of vertex1 and push vertex2 to the array
   * - function should find in the adjacency list the key
   *   of vertex2 and push vertex1 to the array
   *
   */
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  /**
   * Remove Edge
   * -  function should accept two vertices, vertex1 and vertex2
   * -  the function should reassign the key of vertex1 to be
   *    an array that does not contain vertex2
   * -  the function should reassign the key of vertex2 to be
   *    an array that does not contain vertex1
   */
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      val => val !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      val => val !== vertex1
    );
  }
  /**
   *  Remove Vertex
   *
   * -  function should accept a vertex to remove
   * -  function should loop as long as there are any other vertices
   *    in the adjacency list for the vertex
   * -  inside of the loop, call our removeEdge function with
   *    the vertex we are removing and any values in the adjacency list
   *    for that vertex
   * -  delete tthe key in the adjacency list for that vertex
   */
  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach(v1 => {
      this.removeEdge(v1, vertex);
    });

    delete this.adjacencyList[vertex];
  }

  /**
   * Recursive
   * DFS - Depth First Traversal
   *
   * -  function should accept a starting node
   * -  create a list to store the end result, to be returned at the
   *    very end
   * -  create an object to store visited vertices
   * -  create a helper function which accepts a vertex
   *    - the helper function should return early if the vertex is empty
   *    - the helper function should place the vertex it accepts into
   *      the visited object and push that vertex into the result array
   *    - loop over all of the values in the adjacencyList for that vertex
   *    - if any of those values have not been visited, recursively invoke the
   *    - helper function with that vertex
   * -  return the list
   */
  dfsRecursive(start) {
    const result = [];
    const visited = {};
    /**
     * using this.adjacencyList inside helper function will not
     * work because inside helper function "this" reverts to the
     * global object. so you need to create a variable outside
     * the helper function to preserve the "this" value
     * alternatively use ()=>{} to preserve "this" from parent obj
     */
    const adjacencyList = this.adjacencyList;

    (function helper(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          helper(neighbor);
        }
      });
    })(start);

    return result;
  }
  /**
   * Iterative
   * DFS - Depth First Traversal
   * - function should accept a starting node
   * -  create a stack to help us keep track of vertices(use a list/array)
   * -  create a list to store the end result, to be returned at the very end
   * -  create an object to store visited vertices
   * -  add the starting vertex to the stack, and mark it visited
   * -  while the stack has something in it:
   *    - pop the next value from the stack
   *    - if that vertex hasn't been visited yet:
   *      - mark it as visited
   *      - add it to the result list
   *      - push all of its neighbors into the stack
   *
   */
  dfsIterative(start) {
    const stack = [];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    stack.push(start);

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  /**
   * BFS - Breadth First Traversal
   *
   * -  function should accept a starting index
   * -  create a queue (use array) and place the starting vertex in it
   * -  create an array to store the nodes visited (result)
   * -  create an object to store nodes visited
   * -  mark the starting vertex as visited
   * -  loop as long as there is anything in the queue
   * -  remove the first vertex from the queue and push it into the
   *    array that stores nodes visited
   * -  loop over each vertex in the adjacency list for the vertex you are
   *    visiting
   * -  if it is not inside the object that stores nodes visited, mark it as
   *    visited and enqueue that vertex
   * -  once you have finished looping, return the array of visited nodes
   */
  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {[start]: true};
    let current;

    while (queue.length) {
      current = queue.shift();
      result.push(current);

      this.adjacencyList[current].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let graph = new Graph();

graph.addVertex("a");
graph.addVertex("b");
graph.addVertex("c");
graph.addVertex("d");
graph.addEdge("a", "b");
graph.addEdge("a", "c");
graph.addEdge("b", "d");
graph.addEdge("a", "d");
graph.addEdge("c", "d");

// console.log(graph.removeEdge("a", "c"))
// console.log(graph);

// console.log(graph.dfsRecursive("a"));
console.log(graph.dfsIterative("a"));
console.log(graph.bfs("a"));
