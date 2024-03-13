// Creating a Queue class
class Queue {
  constructor() {
    this.items = [];
  }

  // Adding an element to the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Removing the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty.";
    }
    return this.items.shift();
  }

  // Checking if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Getting the front element of the queue without removing it
  front() {
    if (this.isEmpty()) {
      return "Queue is empty.";
    }
    return this.items[0];
  }

  // Getting the size of the queue
  size() {
    return this.items.length;
  }
}

// Creating a queue and performing operations
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.front()); // Output: 2
console.log(queue.size()); // Output: 2
