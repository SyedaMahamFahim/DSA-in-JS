// binarySearch
// array must be sorted

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            low = mid + 1; // Search in the right half
        } else {
            high = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found
}

// Example usage:
const sortedArray = [2, 4, 6, 8, 10, 12, 14, 16];
const targetValue = 10;
const result = binarySearch(sortedArray, targetValue);
if (result !== -1) {
    console.log(`Found ${targetValue} at index ${result}`);
} else {
    console.log(`${targetValue} not found in the array.`);
}
