// MergeSortedArray

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements if they are in the wrong order
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

var merge = function (nums1, m, nums2, n) {
  let temArr = [];
  for (let i = 0; i < m; i++) {
    temArr.push(nums1[i]);
  }
  for (let j = 0; j < n; j++) {
    temArr.push(nums2[j]);
  }
  temArr = bubbleSort(temArr);
  nums1 = temArr;
  return nums1;
};

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
const result = merge(nums1, m, nums2, n);
console.log(result);
