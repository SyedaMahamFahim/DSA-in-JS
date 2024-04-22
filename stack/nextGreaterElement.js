const nextGreaterElementFromLeft = (arr) => {
  let stack = [];
  let result = [];
  let size = arr.length - 1;

  for (let i = size; i >= 0; i--) {
    let currentEl = arr[i];
    let sL = stack.length;

    console.log(
      "//////////////////// This is " + i + "th iteration ///////////////"
    );
    console.log("currentEl", currentEl);
    console.log("Length of stack", sL);

    if (sL === 0) {
      result.push(-1);
    } else {
      let top = stack[sL - 1];
      if (currentEl <= top) {
        result.push(top);
      } else if (currentEl > top) {
        while (stack.length && currentEl > stack[stack.length - 1]) {
          stack.pop();
        }
        if (stack.length === 0) {
          result.push(-1);
        } else {
          result.push(stack[stack.length - 1]);
        }
      }
    }

    stack.push(arr[i]);
  }

  return result.reverse();
};

const nextGreaterElementFromRight = (arr) => {
  let stack = [];
  let result = [];
  let size = arr.length - 1;

  for (let i = 0; i <= size; i++) {
    if (stack.length === 0) {
      result.push(-1);
    } else {
      let top = stack[stack.length - 1];
      if (top > arr[i]) {
        result.push(top);
      } else if (top < arr[i]) {
        while (stack.length && arr[i] > stack[stack.length - 1]) {
          stack.pop();
        }
        if (stack.length === 0) {
          result.push(-1);
        } else {
          result.push(stack[stack.length - 1]);
        }
      }
    }

    stack.push(arr[i]);
  }

  return result
};

let arr;
arr = [1, 3, 2, 4];

console.log(nextGreaterElementFromRight(arr));
// console.log(nextGreaterElementFromRight(arr)); //nextGreaterElement(arr);
