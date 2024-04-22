/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// -------- Two Pointer -----------//
// var twoSum = function (nums, target) {
//     nums.sort((a,b) => a-b)
//     console.log(nums)
//   const length = nums.length;
//   const size = length - 1;
//   let start=0
//   let end= size

//   for (let i = 0; i <= size; i++) {
//     if(nums[start]+nums[end] > target){
//         end--;
//     } else if(nums[start]+nums[end] < target){
//         start++;
//     } else if(nums[start]+nums[end] === target){
//         return [start,end]
//     } else{
//         return "no found"
//     }
//   }
// };


// -------- Brute Force ------------//
// var twoSum = function (nums, target) {
//   const size = nums.length;
//   for (let i = 0; i < size; i++) {
//     for (let j = i + 1; j < size; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// ---------- Hash Table ------------- //
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < size; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
};

let nums, target;
(nums = [2, 7, 11, 15]), (target = 9);
