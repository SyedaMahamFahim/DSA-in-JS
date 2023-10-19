// removeDuplicatesFromSortedArray2.js

function deleteElementAtSpecificIndex(arr, indexToDelete) {
  if (indexToDelete < 0 || indexToDelete >= arr.length) {
    console.log("Invalid index. Element not deleted.");
    return arr;
  }

  for (let i = indexToDelete; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--; // Decrement the length of the array to remove the last element

  return arr;
}

var removeDuplicates = function (nums) {
  const size = nums - 1;
  var modifyArry=[]
  for (let i = 0; i < size; i++) {
    if(nums[i]==nums[i+1]){
        modifyArry= deleteElementAtSpecificIndex(nums, i);
    }
  }
  return modifyArry
};

const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums));
