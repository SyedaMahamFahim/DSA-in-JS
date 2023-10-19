// deleteElementAtASpecificIndex
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

const givenArray = [0, 1, 2, 2, 3, 0, 4, 2];
const givenIndex = 1;
const result = deleteElementAtASpecificIndex(givenArray, givenIndex);
console.log(result);
