

# Kadane's Algorithm

Kadane's Algorithm is a widely used dynamic programming technique for finding the maximum subarray sum in an array of numbers. It efficiently handles the problem of determining the maximum sum of a contiguous subarray within an array, making it particularly useful when dealing with large datasets.

## How Kadane's Algorithm Works

1. **Initialization**:
   - Initialize two variables: `maxSum` and `currentSum` to track the maximum subarray sum found so far and the current subarray sum being considered, respectively.
   - Set both `maxSum` and `currentSum` to the value of the first element in the array.

2. **Iteration**:
   - Start iterating through the array from the second element (index 1) to the end.
   - For each element at index `i`, do the following:
     - Update `currentSum` by adding the value of the current element `arr[i]` to it.
     - If `currentSum` becomes negative (i.e., `currentSum < 0`), reset `currentSum` to `0`. This step effectively discards any negative sum accumulated so far because starting a new subarray from the current element will yield a greater sum.

3. **Updating Maximum Sum**:
   - After updating `currentSum` at each step, compare it with `maxSum`.
   - If `currentSum` is greater than `maxSum`, update `maxSum` to be equal to `currentSum`. This step ensures that `maxSum` always holds the maximum subarray sum encountered.

4. **Continue Iteration**:
   - Continue the iteration through the array, repeating steps 2 and 3 for each element.

5. **Final Result**:
   - Once the iteration is complete, the variable `maxSum` will contain the maximum subarray sum for the entire array.

6. **Return the Result**:
   - The value stored in `maxSum` is the desired result and represents the maximum sum of a contiguous subarray within the input array.

## Efficiency

Kadane's Algorithm efficiently solves the maximum subarray sum problem in a single pass through the array, making it highly optimized with a time complexity of O(n), where n is the number of elements in the array.

## Example

Consider the input array:

```
[-2, 1, -3, 4, -1, 2, 1, -5, 4]
```

Using Kadane's Algorithm:
- Initialize `maxSum` and `currentSum` to `-2` (the first element).
- As you iterate through the array, update `currentSum` and `maxSum` as described.
- The final `maxSum` is `6`, representing the maximum subarray sum.

Kadane's Algorithm is a powerful and efficient technique for solving the maximum subarray sum problem and is widely used in various applications, including data analysis, optimization, and algorithm design.
