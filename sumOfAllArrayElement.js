// Write a program to find sum of all array elements. 


const givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
function sumOfAllArrayElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const result = sumOfAllArrayElement(givenArray);
console.log("Total sum: ", result);
