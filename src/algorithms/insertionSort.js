import { swap } from "./_helpers";

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
      is a simple sorting algorithm that builds the final sorted array (or list)
      one item at a time. It is much less efficient on large lists than more
      advanced algorithms such as quicksort, heapsort, or merge sort. 
      Compared to other quadratic sorting algorithms like
      bubble sort and selection sort, it is efficient for small data sets and those that are already substantially sorted.
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
