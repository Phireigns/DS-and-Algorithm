// Creating a Stack class
class Stack {
  constructor() {
    this.items = [];
  }

  // Adding an element to the stack
  push(element) {
    this.items.push(element);
  }

  // Removing the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty.";
    }
    return this.items.pop();
  }

  // Checking if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Getting the top element of the stack without removing it
  peek() {
    return this.items[this.items.length - 1];
  }

  // Getting the size of the stack
  size() {
    return this.items.length;
  }
}

// Creating a stack and performing operations
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.size()); // Output: 2
