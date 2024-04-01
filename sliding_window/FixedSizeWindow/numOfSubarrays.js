// numOfSubarrays.js

/*
Given an array of integers arr, and two integers k and threshold, return the
number of sub-arrays of length k and average greater than or equal to threshold.
*/

var numOfSubarrays = function (arr, k, threshold) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let ans = 0;
  
  // Looping through the string
  while (j < arr.length) {
    sum += arr[j];

    // If the length of the window is same as the pattern length
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      // Calculate the average
      let avg = sum / k;

      if (avg >= threshold) {
        ans++;
      }

      // Slide the window
      sum -= arr[i]; // remove the

      i++;
      j++;
    }
  }
  return ans;
};

let arr, k, threshold;
(arr = [2, 2, 2, 2, 5, 5, 5, 8]), (k = 3);
threshold = 4;
console.log(numOfSubarrays(arr, k, threshold));
