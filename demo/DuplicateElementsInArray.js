// DuplicateElementsInArray.js
// Write a program to delete all duplicate elements from an array.

const DuplicateElementsInArray = (nums) => {
  let length = nums.length;
  let size = length - 1;
  let temp = [];
  let j = 0;
  for (let i = 0; i < size; i++) {
    if (nums[i] !== nums[i + 1]) {
      temp[j] = nums[i];
      j++;
    }
  }
  temp[j++] = nums[size - 1];
  nums = temp;
  return nums;
};

const givenArray = [1, 1, 2];

const result = DuplicateElementsInArray(givenArray);
console.log(result);
