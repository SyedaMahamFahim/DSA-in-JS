// containsDuplicate.js

var containsDuplicate = function (nums) {
  let size = nums.length;
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (nums[i] === nums[j]) {
        return true; 
      }
    }
  }
  
  return false; 
};

const givenArray = [1, 2, 3, 4,2];
const result = containsDuplicate(givenArray);
console.log(result);
