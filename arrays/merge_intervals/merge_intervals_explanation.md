# Merge Intervals

The Merge Intervals algorithm is used to merge overlapping intervals or ranges within an array or list of intervals. This algorithm is particularly useful when dealing with problems that involve scheduling, calendar applications, or scenarios where you need to consolidate overlapping time intervals. The main goal is to find and merge intervals that overlap with each other to form a consolidated set of non-overlapping intervals.

## Algorithm Steps

1. **Sorting**: The first step is to sort the intervals based on their start points. This ensures that intervals with earlier start times come first in the sorted order, making it easier to identify overlapping intervals.

2. **Merging Overlapping Intervals**:
   - Initialize an empty result list or output array to store the merged intervals.
   - Start with the first interval and consider it as the "current interval."
   - Iterate through the sorted list of intervals, starting from the second interval.
   - For each interval:
     - Check if it overlaps with the current interval by comparing its start time with the end time of the current interval. If there's an overlap, merge the intervals by updating the end time of the current interval to be the maximum of the end times of the current and overlapping intervals.
     - If there is no overlap, add the current interval to the result list, and update the current interval to be the new interval.
   - Continue this process for all intervals in the sorted list.

3. **Final Output**: At the end of the iteration, the result list will contain merged, non-overlapping intervals.

## Example

Suppose you have the following list of intervals:
```
[(1, 3), (2, 6), (8, 10), (15, 18)]
```

After applying the Merge Intervals algorithm:
```
[(1, 6), (8, 10), (15, 18)]
```

In this example, the intervals `(1, 3)` and `(2, 6)` overlap, so they are merged into a single interval `(1, 6)`.

## Time Complexity
- The time complexity of the Merge Intervals algorithm is dominated by the sorting step, which takes O(n log n) time if there are n intervals.
- The merging step takes linear time, O(n), as each interval is examined once.

## Space Complexity
- The space complexity is O(n) because the output array may store up to n intervals in the worst case.

The Merge Intervals algorithm is commonly used in solving problems related to scheduling, time management, and interval-based queries. It efficiently consolidates overlapping intervals, making it easier to work with such data in various applications.


