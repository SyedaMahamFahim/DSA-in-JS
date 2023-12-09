// printFirstNegativeInteger.js
/*
First negative integer in every window of size k
Given an array A[] of size N and a positive integer K, find the first negative integer for each and every window(contiguous subarray) of size K.

Example 1:

Input : 
N = 5
A[] = {-8, 2, 3, -6, 10}
K = 2
Output : 
-8 0 -6 -6
Explanation :
First negative integer for each window of size k
{-8, 2} = -8
{2, 3} = 0 (does not contain a negative integer)
{3, -6} = -6
{-6, 10} = -6

*/
function printFirstNegativeInteger(n, k, arr) {
  // code here
  let i = 0,
    j = 0;
  let nL = [];

  let ans = 0;
  while (j < n) {
    if (arr[j] < 0) {
      nL.push(arr[j]);
    }

    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      if (nL.length < 0) {
        return 0;
      }
      
      ans = nL[0];
      // Remove first element of previous window
      if (arr[i] < 0) {
        nL.shift();
      }

      //   Slide the window
      i++;
      j++;
    }
  }
  return ans;
}

let n = 5;
let arr = [-8, 2, 3, -6, 10];
let k = 2;
console.log(printFirstNegativeInteger(n, k, arr));
