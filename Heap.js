// Creating a MinHeap class
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Getting the parent index of a given index
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Getting the left child index of a given index
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // Getting the right child index of a given index
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // Swapping two elements in the heap
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  // Inserting an element into the heap
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0 && this.heap[index] < this.heap[this.getParentIndex(index)]) {
      const parentIndex = this.getParentIndex(index);
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }
}

// Creating a min heap and inserting elements
const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(1);
console.log(minHeap.heap);
