// squaresOfASortedArray.js
/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
*/

const sortArrayInAscendingOrder = (nums, size) => {
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (nums[i] > nums[j]) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
};

var sortedSquares = function (nums) {
  let size = nums.length;
  for (let i = 0; i < size; i++) {
    nums[i] = nums[i] * nums[i];
  }
  sortArrayInAscendingOrder(nums, size);
  return nums;
};

const givenArray = [-4, -1, 0, 3, 10];

const result = sortedSquares(givenArray);
console.log(result);
