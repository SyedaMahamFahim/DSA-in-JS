// operationToAnArray.js

function sortArrayInDescendingOrder(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] < arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const deleteElementAtASpecificIndex = (arr, posArray) => {
  let size = arr.length;
  posArray = sortArrayInDescendingOrder(posArray);

  for (let index = 0; index < posArray.length; index++) {
    const position = posArray[index];
    for (let i = position; i < size - 1; i++) {
      arr[i] = arr[i + 1];
    }
    size--;
  }

  arr.length = size;
  return arr;
};

const operationToAnArray = (nums) => {
  let size = nums.length;
  let positionsOfZeros = [];

  for (let i = 0; i < size - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }
  }
  for (let j = 0; j < size; j++) {
    if (nums[j] === 0) {
      positionsOfZeros.push(j);
    }
  }
  deleteElementAtASpecificIndex(nums, positionsOfZeros);
  for (let k = 0; k < positionsOfZeros.length; k++) {
    nums.push(0);
  }
  return nums;
};

const givenArray = [
  847, 847, 0, 0, 0, 399, 416, 416, 879, 879, 206, 206, 206, 272,
];

const result = operationToAnArray(givenArray);
console.log(result);
