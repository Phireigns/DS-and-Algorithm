// Selection Sort algorithm
function selectionSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the remaining unsorted part of the array
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first unsorted element
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

// Usage example
const array = [5, 3, 8, 4, 2];
console.log(selectionSort(array)); // Output: [2, 3, 4, 5, 8]
