import { swap } from "./helpers";

export const insertionSort = (arr) => {
  let movingBars = [];
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let j = i;
    while (j >= 0 && arr[j] > arr[j + 1]) {
      swap(arr, j, j + 1);
      movingBars.push([j, j + 1, true]);
      j--;
    }
  }
  return movingBars;
};

export const InsertionSortDesc = {
  title: (
    <a
      href="https://en.wikipedia.org/wiki/Insertion_sort"
      target="_blank"
      rel="noopener noreferrer"
    >
      Insertion Sort
    </a>
  ),
  description: (
    <p>
      <b>Insertion Sort </b>
      is a simple sorting algorithm that iterates through an array and at each
      iteration it removes one element from the array, finds the location it
      belongs to in the sorted list and inserts it there, repeating until no
      elements remain in the unsorted list. It is an in-place, stable sorting
      algorithm that is inefficient on large input arrays but works well for
      data sets that are almost sorted. It is more efficient in practice
      compared to other quadratic sorting algorithms like bubble sort and
      selection sort.
    </p>
  ),
  worstCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  bestCase: <span>O(n)</span>,
  space: <span>O(1)</span>,
};
