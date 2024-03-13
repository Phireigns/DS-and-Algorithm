// Creating a Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Creating a LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Adding a node to the end of the linked list
  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}

// Creating a linked list and adding nodes
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
console.log(list);
