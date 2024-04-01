/**
 * @param {number[]} nums
 * @return {boolean}
 */


var containsDuplicate = function (nums) {
    // Create hashmap
  const hashmap = {};
  let size = nums.length;
  for (let i = 0; i < size; i++) {
    let hashKey = nums[i];
    if(hashmap[hashKey]) {
      return true;
    } else {
      hashmap[hashKey] = true;
    }
  }
  
  return false; 
};
let nums;
nums = [1,2,3,1]
containsDuplicate(nums)