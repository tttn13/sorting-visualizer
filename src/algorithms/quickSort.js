import { swap } from "./helpers";

export const quickSort = (barsArr) => {
  let movingBars = [];
  divider(movingBars, barsArr, 0, barsArr.length - 1);
  return movingBars;
};

const divider = (movingBars, barsIDsArr, start, end) => {
  if (start < end) {
    let pivot = partition(movingBars, barsIDsArr, start, end);
    divider(movingBars, barsIDsArr, start, pivot - 1);
    divider(movingBars, barsIDsArr, pivot + 1, end);
  }
};

const partition = (movingBars, barsArr, start, end) => {
  let prevIdx = start - 1;
  for (let index = start; index < end; index++) {
    if (index !== end) {
      movingBars.push([index, end, false]);
    }
    if (barsArr[index] < barsArr[end]) {
      ++prevIdx;
      swap(barsArr, index, prevIdx);
      movingBars.push([index, prevIdx, true]);
    }
  }
  swap(barsArr, prevIdx + 1, end);
  movingBars.push([end, prevIdx + 1, true]);
  return prevIdx + 1;
};

export const QuickSortDesc = {
  title: (
    <a
      href="https://en.wikipedia.org/wiki/Quicksort"
      target="_blank"
      rel="noopener noreferrer"
    >
      Quick Sort
    </a>
  ),
  description: (
    <div>
      <p>
        <b>Quick Sort </b>
        is an efficient, in-place sorting algorith that in practice is faster
        than MergeSort and HeapSort. However, it is not a stable sorting
        algorithm, meaning that the relative positioning of equal sort items is
        not preserved.Quicksort is a divide and conquer algorithm. Quicksort
        first divides a large array into two smaller sub-arrays: the low
        elements and the high elements. Quicksort can then recursively sort the
        sub-arrays. The steps are:
      </p>
      <ol>
        <li>
          Pick an element, called a pivot, from the array. This is usually done
          at random.
        </li>
        <li>Move pivot element to the start of the array.</li>
        <li>
          <em>Partitioning:</em> reorder the array so that all elements with
          values less than the pivot come before the pivot, while all elements
          with values greater than the pivot come after it (equal values can go
          either way). After this partitioning, the pivot is in its final
          position. This is called the <em>partition</em> operation.
        </li>
        <li>
          Recursively apply the above steps to the sub-array of elements with
          smaller values and separately to the sub-array of elements with
          greater values.
        </li>
      </ol>
      <p>
        The base case of the recursion is an array of size zero or one, which
        are sorted by definition.
      </p>
    </div>
  ),
  worstCase: (
    <span>
      O(<em>n</em>
      <sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em>log<em>n</em>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em>log<em>n</em>)
    </span>
  ),
  space: (
    <span>
      O(log<em>n</em>)
    </span>
  ),
};
