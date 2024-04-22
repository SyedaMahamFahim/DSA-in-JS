/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = (arr, k) => {
    const l = [],
      res = [];
    let j = 0,
      i = 0;
      
    while (j < arr.length) {
      //remove all the elements which are less the elm at j
      while (l.length > 0 && l[l.length - 1] < arr[j]) l.pop();
  
      //push the curr max and elems after it...i.e. potential max elems
      l.push(arr[j]);
  
      if (j - i + 1 < k) j++;
      else if (j - i + 1 == k) {
        //push the max to res array (which is stored in front of list)
        res.push(l[0]);
  
        //check if max elm is getting lost when moving the window
        if (l[0] == arr[i]) l.shift();
  
        j++;
        i++;
      }
    }
    return res;
  };


const arr = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

console.log(maxSlidingWindow(arr, k));














// // https://leetcode.com/problems/sliding-window-maximum/

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */

// /*
// Notes about this solution

// - Using Deque to maintain a sliding window of data, where the oldest elements are removed as new elements are added.

// */

// const maxSlidingWindow = (arr, k) => {
//   let result = [];
//   let deque = [];
//   let i = 0,
//     j = 0;

//   const popFront = () => {
//     return deque.shift();
//   };

//   // Function to remove an element from the back of the deque
//   const popBack = (deque) => {
//     return deque.pop();
//   };

//   // Function to get the size of the deque
//   const size = () => {
//     return deque.length;
//   };

//   // Function to get the element at the back of the deque without removing it
//   const back = () => {
//     return deque[deque.length - 1];
//   };

//   // Function to add an element to the back of the deque
//   const pushBack = (element) => {
//     deque.push(element);
//   };
//   const createDeque = () => {
//     while (size > 0 && back < arr[j]) {
//       popBack(deque);
//     }
//     pushBack(arr[j]);
//   };

//   while (j < arr.length) {
//     createDeque(j);

//     if (j - i + 1 < k) {
//       j++;
//     } else if (j - i + 1 == k) {
//       result.push(arr[deque[0]]);
//       if (deque[0] == arr[i]) {
//         popFront();
//       }
//       // Slide the window
//       i++;
//       j++;
//     }
//   }
//   return result;
// };

// const arr = [1, 3, -1, -3, 5, 3, 6, 7];
// const k = 3;

// console.log(maxSlidingWindow(arr, k));

// /*
// const l = [],
//     res = [];
//   let j = 0,
//     i = 0;

//   while (j < arr.length) {
  

//     //push the curr max and elems after it...i.e. potential max elems
//     l.push(arr[j]);

//     if (j - i + 1 < k) {
//       j++;
//     } else if (j - i + 1 == k) {
//       //push the max to res array (which is stored in front of list)
//       res.push(l[0]);

//       //check if max elm is getting lost when moving the window
//       if (l[0] == arr[i]) {
//         l.shift();
//       }

//       j++;
//       i++;
//     }
//   }
//   return res;








//   const enqueue = (i) => {
//     while (deque.length && deque[deque.length - 1] < arr[i]) {
//       deque.pop();
//     }
//     deque.push(i);
//   };

//   const dequeue = () => {
//     if (deque.length && deque[0] <= i - k) {
//       deque.shift();
//     }
//   };
// */
