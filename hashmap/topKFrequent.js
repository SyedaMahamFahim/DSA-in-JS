/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  map = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  console.log(map);

  map.forEach((_, key) => {
    result.push(key);
  });
  console.log(result);
  return result.slice(0, k);
};

let nums, k;
(nums = [1, 1, 1, 2, 2, 3]), (k = 2);

const result = topKFrequent(nums, k);
console.log(result);
