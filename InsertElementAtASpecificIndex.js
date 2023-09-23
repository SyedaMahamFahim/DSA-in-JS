const InsertElementAtASpecificIndex = (arr, pos, value) => {
  let size = arr.length;
  for (let i = size; i >= pos; i--) {
    arr[i] = arr[i - 1];
  }
  /* Insert new element at given position and increment size */
  arr[pos] = value;
  return arr;
};

const givenArray = [1, 3, 4, 5];
const givenIndex = 1;
const value = 2;
const result = InsertElementAtASpecificIndex(givenArray, givenIndex, value);
console.log(result);
