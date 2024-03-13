// Creating a Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Creating a Binary Tree class
class BinaryTree {
  constructor() {
    this.root = null;
  }
}

// Creating a binary tree and adding nodes
const binaryTree = new BinaryTree();
binaryTree.root = new Node(1);
binaryTree.root.left = new Node(2);
binaryTree.root.right = new Node(3);
console.log(binaryTree);
