// twoSum.js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const size = nums.length;
  for (let i = 0; i < size; i++) {
    for (let j = i+1 ; j < size; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

const givenArray = [3,3];
const givenTarget = 6;

const result = twoSum(givenArray, givenTarget);
console.log(result);
