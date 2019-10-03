/**
 * Dijkstra's Algorithm
 *
 * - finds shortest path between two vertices on a graph
 * - requires weighted graph
 *
 *  Approach
 * -  every time we look to visit a new node, we pick the node with
 *    the smallest know distance to visit first
 * -  once we've moved to the node we're going to visit, we look
 *    at each of its neighbors
 * -  for each neighboring node, we calculate the distance by summing
 *    the total edges that lead to the node we're checking from the
 *    starting node.
 * -  if the new total distance to a node is less than the previous total,
 *    we store the new shorter distance for that node.
 */

// class PriorityQueue creates list of values and sorts them by priority
// item with smallest priority comes first
// bettwer to use with binary heap because our priority queue is naive and slow
// when just using an array
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    //sort by smallest priority first
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}; // "A": [{ node: "B", weight: 10}]
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  /**
   * Dijkstra's Pseudocode
   *  - function should accept a starting and ending vertex
   *  - create an object(we'll call it distances) and set each key to be every
   *    vertex in the adjacency list with a value of infinity, except for the
   *    starting vertex which should have a value of 0
   * -  after setting a value in the distances object, add each vertex, which
   *    should have a priority of 0 because thats were we begin.
   * -  Create another object called previous and set each key to be every
   *    vertex in the adjacency list with a value of null
   * -  start looping as long as there is anything in the priority queue
   *    - dequeue a vertex from the priority queue
   *    - if that vertex is the same as the ending vertex - we are done!
   *    - otherwise loop through each value in the adjacency list at that vertex
   *    - Calculate the distance to that vertex fromt he starting vertex
   *    - if the distance is less than what is currently stored in our distances object
   *      - update the distances object with new lower distance
   *      - update the previous object to contain that vertex
   *      - enqueue the vertex with the total distance from the start node
   *
   */
  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; // to return at end;
    let smallest;
    // Build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // we are done, build up path to return at end
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous- how we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

/**   Example WeightedGraph - Letters are nodes, numbers are weights
 *          4
 *    A -----------B
 *  2 |  2        /
 *    C-----D    /3
 *    4\ 1/  \3 /
 *      F------E
 *         1
 *
 *
 */

let graph = new WeightedGraph();
const vertices = ["A", "B", "C", "D", "E", "F"];
vertices.forEach(item => graph.addVertex(item));
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.adjacencyList);
console.log(graph.dijkstra("A", "E"));
