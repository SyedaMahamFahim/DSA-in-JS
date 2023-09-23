function deleteElementAtSpecificIndex(arr, indexToDelete) {
  if (indexToDelete < 0 || indexToDelete >= arr.length) {
    console.log("Invalid index. Element not deleted.");
    return arr;
  }

  for (let i = indexToDelete; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--; // Decrement the length of the array to remove the last element

  return arr;
}

// Example:
const myArray = [1, 2, 3, 4, 5];
const indexToDelete = 3; // Index of the element to delete (e.g., element 3)
const result = deleteElementAtSpecificIndex(myArray, indexToDelete);

console.log(result); // Output: [1, 2, 4, 5]
