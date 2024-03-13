// Creating a Graph class
class Graph {
  constructor() {
    this.vertices = [];
    this.edges = {};
  }

  // Adding a vertex to the graph
  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = [];
  }

  // Adding an edge between two vertices in the graph
  addEdge(vertex1, vertex2) {
    this.edges[vertex1].push(vertex2);
    this.edges[vertex2].push(vertex1);
  }
}

// Creating a graph and adding vertices and edges
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
console
