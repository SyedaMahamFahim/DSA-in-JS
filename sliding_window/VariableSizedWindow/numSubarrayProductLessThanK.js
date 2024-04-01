// numSubarrayProductLessThanK.js
/*
Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

Example 1:

Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
Example 2:

Input: nums = [1,2,3], k = 0
Output: 0
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;

  let i = 0;
  let j = 0;
  var currentProduct = 1;
  var count = 0;

  while (j < nums.length) {
    currentProduct *= nums[j];

    while (i < j && currentProduct >= k) {
      currentProduct = Math.floor(currentProduct / nums[i]);
      i++;
    }

    if (currentProduct < k) {
      let len = j - i + 1;
      count += len;
    }
    j++;
  }
  return count;
};

let nums = [10, 5, 2, 6];
let k = 100;
console.log(numSubarrayProductLessThanK(nums, k));
