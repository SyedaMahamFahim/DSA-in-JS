// findMaxSumOfAllSubArraysOfSizeK.js
var findMaxSumOfAllSubArraysOfSizeK = function (n, k, arr) {
  let i = 0; // Starting index of the window
  let j = 0; // Ending index of the window
  let sum = 0; // Sum of the window
  let ans = 0; // Maximum sum of the subarray

  // Looping through the string
  while (j < n) {
    sum += arr[j];
    // If the length of the window is same as the pattern length
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      // If the sum is greater than the maximum sum, update the maximum sum
      ans = Math.max(ans, sum);

      // Remove the first element of the pervious window and slide the window
      sum -= arr[i];
      // Slide the window
      i++;
      j++;
    }
  }
  return ans;
};

let n, k, arr;

(n = 4), (k = 2);
arr = [100, 200, 300, 400];

console.log(findMaxSumOfAllSubArraysOfSizeK(n, k, arr));
