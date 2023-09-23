// linearSearch.js

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Target found at index i
        }
    }
    return -1; // Target not found in the array
}

// Example usage:
const array = [5, 3, 8, 1, 9, 4, 6];
const targetValue = 4;
const result = linearSearch(array, targetValue);
if (result !== -1) {
    console.log(`Found ${targetValue} at index ${result}`);
} else {
    console.log(`${targetValue} not found in the array.`);
}
