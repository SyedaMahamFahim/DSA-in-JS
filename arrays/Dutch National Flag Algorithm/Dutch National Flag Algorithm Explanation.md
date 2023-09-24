The Dutch National Flag Algorithm, also known as the Three-Way Partitioning Algorithm, is a sorting algorithm designed to sort an array containing three distinct values (e.g., 0s, 1s, and 2s) efficiently. It was developed by Edsger Dijkstra, a Dutch computer scientist, and is named after the Dutch flag because of its three distinct colors.

The primary idea behind the Dutch National Flag Algorithm is to partition the array into three sections, each representing one of the distinct values, and do so in a single pass through the array. This results in an array where all the 0s appear first, followed by all the 1s, and finally, all the 2s. Here's a step-by-step explanation of how the algorithm works:

1. **Initialization**:
   - Maintain three pointers: `low`, `mid`, and `high`, initialized to the start, start, and end of the array, respectively.
   - These pointers are used to keep track of the boundaries of the three sections: 0s, 1s, and 2s.

2. **Iterate through the Array**:
   - While the `mid` pointer is less than or equal to the `high` pointer, continue iterating through the array.

3. **Check the Element at `mid`**:
   - Examine the element at the `mid` pointer (i.e., `arr[mid]`).
   - There are three cases:
     - If `arr[mid]` is `0`, swap `arr[low]` and `arr[mid]`, and increment both `low` and `mid` pointers. This action moves a `0` to the left section.
     - If `arr[mid]` is `1`, increment only the `mid` pointer. This action leaves `1`s in the middle section.
     - If `arr[mid]` is `2`, swap `arr[mid]` and `arr[high]`, and decrement the `high` pointer. This action moves a `2` to the right section.

4. **Repeat the Process**:
   - Continue this process until the `mid` pointer crosses the `high` pointer. At this point, the array is partitioned into three sections.

The Dutch National Flag Algorithm ensures that when the process is complete, all the `0`s are on the left side of the array, followed by all the `1`s in the middle, and finally all the `2`s on the right. The relative order of `0`s, `1`s, and `2`s within their respective sections may not be sorted, but the overall array is correctly partitioned.

The key advantage of this algorithm is that it sorts the array with a single pass and has a time complexity of O(n), where n is the number of elements in the array. It's particularly useful for sorting arrays with a small number of distinct values, such as color-coded data or binary data.

# Example #01
Certainly! Here's an example of the Dutch National Flag Algorithm in action:

**Input Array**:
```
[2, 0, 1, 2, 1, 0, 1, 0, 2, 1]
```

**Step-by-Step Execution**:

1. Initialize `low`, `mid`, and `high` pointers:
   - `low` = 0
   - `mid` = 0
   - `high` = 9

2. Start iterating through the array:

   - At `mid = 0`, `arr[mid]` is `2`. Swap `arr[mid]` and `arr[high]`, decrement `high`:
     ```
     [1, 0, 1, 2, 1, 0, 1, 0, 2, 2]
     ```
     - New state: `low` = 0, `mid` = 0, `high` = 8

   - At `mid = 0`, `arr[mid]` is now `1`. Increment `mid`:
     ```
     [1, 0, 1, 2, 1, 0, 1, 0, 2, 2]
     ```
     - New state: `low` = 0, `mid` = 1, `high` = 8

   - At `mid = 1`, `arr[mid]` is `0`. Swap `arr[low]` and `arr[mid]`, increment both `low` and `mid`:
     ```
     [0, 1, 1, 2, 1, 0, 1, 0, 2, 2]
     ```
     - New state: `low` = 1, `mid` = 2, `high` = 8

   - Continue these steps until `mid` crosses `high`.

3. Final state:
   - `low` = 5, `mid` = 5, `high` = 6
   - The array is correctly partitioned into three sections:
     ```
     [0, 0, 0, 1, 1, 1, 2, 2, 2, 2]
     ```

In this example, the Dutch National Flag Algorithm efficiently sorted an array containing `0`s, `1`s, and `2`s in a single pass. The relative order of `0`s, `1`s, and `2`s within their respective sections may vary, but the overall array is correctly partitioned into three sections as expected.

# Example #02


**Input Array**:
```
["Green", "Red", "Blue", "Green", "Blue", "Red", "Green", "Blue", "Red"]
```

**Step-by-Step Execution**:

1. Initialize `low`, `mid`, and `high` pointers:
   - `low` = 0
   - `mid` = 0
   - `high` = 8

2. Start iterating through the array:

   - At `mid = 0`, `arr[mid]` is `"Green"`. Increment `mid`:
     ```
     ["Green", "Red", "Blue", "Green", "Blue", "Red", "Green", "Blue", "Red"]
     ```
     - New state: `low` = 0, `mid` = 1, `high` = 8

   - At `mid = 1`, `arr[mid]` is `"Red"`. Swap `arr[low]` and `arr[mid]`, increment both `low` and `mid`:
     ```
     ["Red", "Green", "Blue", "Green", "Blue", "Red", "Green", "Blue", "Red"]
     ```
     - New state: `low` = 1, `mid` = 2, `high` = 8

   - Continue these steps until `mid` crosses `high`.

3. Final state:
   - `low` = 6, `mid` = 6, `high` = 7
   - The array is correctly partitioned into three sections based on colors:
     ```
     ["Blue", "Blue", "Blue", "Green", "Green", "Green", "Red", "Red", "Red"]
     ```

In this modified example, the Dutch National Flag Algorithm efficiently sorted an array of color names in a single pass. The relative order of colors within their respective sections may vary, but the overall array is correctly partitioned based on colors.