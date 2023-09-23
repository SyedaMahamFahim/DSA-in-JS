// removeElement
const removeElement = (nums, val) => {
  let size = nums.length;
  let frequency = 0;
  let positionArray = [];
  for (var i = 0; i <= size; i++) {
    if (nums[i] === val) {
      positionArray.push(i);
    }
  }
  const k = size - frequency;

  deleteElementAtASpecificIndex(nums, positionArray);
  console.log(nums);
};

const deleteElementAtASpecificIndex = (arr, posArray) => {
  let size = arr.length;

  posArray.sort((a, b) => b - a); // [7,3,2]

  for (let index = 0; index < posArray.length; index++) {
    const position = posArray[index];
    for (let i = position; i < size - 1; i++) {
      arr[i] = arr[i + 1];
    }
    size--;
  }

  arr.length = size;
  return arr;
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const value = 2;
const result = removeElement(nums, value);

// const deleteElementAtASpecificIndex = (arr, posArray) => {
//   let size = arr.length;

//   // Sort the positions in descending order to avoid issues with shifting indices
//   //   To avoid this issue, you can sort the positions in descending order before iterating through them. When you remove elements in descending order, you start with the highest index first. This way, when elements are removed, the indices of the remaining elements are not affected because you're working from right to left.
//   posArray.sort((a, b) => b - a); // [7,3,2]

//   for (let index = 0; index < posArray.length; index++) {
//     const position = posArray[index];
//     for (let i = position; i < size - 1; i++) {
//       arr[i] = arr[i + 1];
//     }
//     size--; // Reduce the size of the array after deleting an element
//   }

//   // Remove any extra elements at the end of the array
//   arr.length = size;

//   return arr;
// };

// const givenArray = [0, 1, 2, 2, 3, 0, 4, 2];
// const positionArray = [2, 3, 7];
// const result = deleteElementAtASpecificIndex(givenArray, positionArray);
// console.log(result);
