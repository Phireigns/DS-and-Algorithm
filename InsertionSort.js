// Insertion Sort algorithm
function insertionSort(arr) {
  const length = arr.length;

  for (let i = 1; i < length; i++) {
    const key = arr[i];
    let j = i - 1;

    // Move elements greater than the key to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// Usage example
const array = [5, 3, 8, 4, 2];
console.log(insertionSort(array)); // Output: [2, 3, 4, 5, 8]
