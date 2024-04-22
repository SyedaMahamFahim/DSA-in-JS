// twoSum.js
var twoSum = function (numbers, target) {
  const length = numbers.length;
  const size = length - 1;
  let start = 0;
  let end = size;

  while (start < end) {
    const cur = numbers[start] + numbers[end];
    if (cur === target) return [start, end];
    cur > target ? end-- : start++;
  }
};

const arr = [2, 7, 11, 15];

const target = 9;
console.log(twoSum(arr, target));
