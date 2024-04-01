// productExceptSelf
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
//   let answer = [];
//   let product = 1;
//   let hashmap = {};
//   for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     hashmap[element] = hashmap[element];
//     if (!hashmap[element]) {
//       product *= nums[i];
//       answer.push(product);
//     }
//   }
//   console.log(answer)
  let left = 1;
  let right = 1;
  let n = nums.length;
  answer = new Array(n).fill(1);
  for(let i = 0; i < n; i++){
    left *= nums[i-1] || 1;
    right *= nums[i+1] || 1;
    answer[i] = (left * right);
  }
  return answer;
};
let nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);