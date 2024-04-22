const maxSlidingWindow = (arr, k) => {
  //list to store the max elements
  const l = [],
    res = [];

  let j = 0,
    i = 0;
    n= arr.length

  while (j < n) {
    //if list is not empty and the last element is less than the curr element 
    //remove all the elements which are less the elm at j
    while (l.length > 0 && l[l.length - 1] < arr[j]) {
      l.pop()
    }

    //push the curr max and elems after it...i.e. potential max elems
    l.push(arr[j]);

    if (j - i + 1 < k) {
      j++;
    }
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

let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(maxSlidingWindow(nums, k));
