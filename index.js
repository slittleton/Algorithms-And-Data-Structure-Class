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
    return this;
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
    return this;
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
    return this;
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
    return this;
  }
}

let graph = new Graph();

console.log(graph.addVertex("a"));
console.log(graph.addVertex("b"));
console.log(graph.addVertex("c"));
console.log(graph.addVertex("d"));

console.log(graph.addEdge("a", "b"));
console.log(graph.addEdge("a", "c"));
console.log(graph.addEdge("b", "d"));
console.log(graph.addEdge("a", "d"));
console.log(graph.addEdge("c", "d"));

// console.log(graph.removeEdge("a", "c"));
console.log(graph.removeVertex("d"));
