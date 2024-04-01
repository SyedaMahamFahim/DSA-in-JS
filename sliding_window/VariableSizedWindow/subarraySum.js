// subarraySum.js
// https://sonikamaheshwari067.medium.com/length-of-the-longest-subarray-having-sum-k-95c2afddb9cf

/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
*/

var subarraySum = function (nums, k) {
  var map = new Map();
  var currentSum = 0,
    maxLen = 0;

  // traverse the given array
  for (var i = 0; i < nums.length; i++) {
    // accumulate sum
    currentSum += nums[i];

    // when subarray starts from index '0'
    if (currentSum == k) {
      maxLen = i + 1;
    }

    // make an entry for 'sum' if it is not present in 'map'
    if (!map.has(currentSum)) map.set(currentSum, i);

    // check if 'sum-k' is present in 'map' or not
    if (map.has(currentSum - k)) {
      // update maxLength
      const j = i - map.get(currentSum - k);
      if (maxLen < i - j) maxLen = i - j;
    }
  }

  return maxLen;
};

let nums = [1, 1, 1],
  k = 2;
console.log(subarraySum(nums, k));
