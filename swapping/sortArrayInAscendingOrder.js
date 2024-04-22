// sortArrayInAscendingOrder.js

function sortArrayInAscendingOrder(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const givenArray = [
  847, 847, 0, 0, 0, 399, 416, 416, 879, 879, 206, 206, 206, 272,
];

const result = sortArrayInAscendingOrder(givenArray);
console.log(result);
