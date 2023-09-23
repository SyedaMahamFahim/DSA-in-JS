const reverseAnArray = (arr) => {
    let size = arr.length;
    let left = 0; // Index of the leftmost element
    let right = size - 1; // Index of the rightmost element

    while (left < right) {
        // Swap the elements at the left and right indices
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        // Move the indices towards each other
        left++;
        right--;
    }
    return arr;
}


const givenArray = [1, 3, 4, 5];
const result = reverseAnArray(givenArray);
console.log(result); // Output: [5, 4, 3, 1]
