// frequency.js

getFrequency = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], {
        value: nums[i],
        frequency: map.get(nums[i]).frequency + 1,
        index: [...map.get(nums[i]).index, i],
      });
    } else {
      map.set(nums[i], { frequency: 1, index: [i] });
    }


    if (map.get(nums[i]).frequency > 1) {
        // first two value of index subtract eachother and other will add 
        // result += (i % 2 === 0) ? `+${array[i]}` : `-${array[i]}`;
      const sub = Math.abs(
        map.get(nums[i]).index[0] - map.get(nums[i]).index[1]
      );
    //   if (sub <= k) {
    //     return true
    //   } else {
    //     return false;
    //   }
    }
  }
  console.log(map)
};

let nums, k;
// (nums = [1, 2, 3, 1]), (k = 3);
nums = [1,0,1,1], k = 1
const result = getFrequency(nums, k);
console.log(result);
