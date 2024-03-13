// Creating a Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Creating a Tree class
class Tree {
  constructor() {
    this.root = null;
  }
}

// Creating a tree and adding nodes
const tree = new Tree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
console.log(tree);
