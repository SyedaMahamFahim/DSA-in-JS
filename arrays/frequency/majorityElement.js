const majorityElement = (nums) => {
  let size = nums.length;
  const processedElements = {};
  for (let i = 0; i < size; i++) {
    if (!processedElements[nums[i]]) {
      let frequency = 0;
      for (let j = 0; j < size; j++) {
        if (nums[i] === nums[j]) {
          frequency++;
        }
      }
      processedElements[nums[i]] = frequency;
      if (frequency > size / 2) {
        return nums[i];
      }
    }
  }
};



const givenArray = [1, 2, 3, 4];
const result = majorityElement(givenArray);

console.log(result);
