import { swap } from "./helpers";

export const heapSort = (barsArr) => {
  let movingBars = [];
  let length = barsArr.length;
  //build max heap
  for (let i = Math.ceil(length / 2) - 1; i >= 0; i--) {
    heapify(movingBars, barsArr, length, i);
  }
  for (let i = length - 1; i >= 0; i--) {
    movingBars.push([i, 0, true]);
    swap(barsArr, i, 0);
    heapify(movingBars, barsArr, i, 0);
  }
  return movingBars;
};

const heapify = (movingBars, barsArr, length, index) => {
  let largest = index;
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  if (barsArr[left] > barsArr[largest] && left < length) {
    //left child is larger than index
    largest = left;
  }

  if (barsArr[right] > barsArr[largest] && right < length) {
    largest = right;
  }

  if (largest !== index) {
    movingBars.push([index, largest, true]);
    swap(barsArr, index, largest);
    heapify(movingBars, barsArr, length, largest, true);
  }
};

export const HeapSortDesc = {
  title: (
    <a
      href="https://en.wikipedia.org/wiki/Heapsort"
      target="_blank"
      rel="noopener noreferrer"
    >
      Heap Sort
    </a>
  ),
  description: (
    <div>
      <p>
        <b>Heap Sort </b>
        can be thought of as an improved selection sort that uses the heap data
        structure rather than a linear-time search to find the maximum or
        minimum element. It is an in-place sorting algorithm that is not stable
        and has a somewhat slower running time than Quicksort in practice.
      </p>
      <p>
        The heapsort algorithm can be divided into two parts. In the first step,
        a heap is built out of the data. The heap is often placed in an array
        with the layout of a complete binary tree. In the second step, a sorted
        array is created by repeatedly removing the largest element from the
        heap (the root of the heap), and inserting it into the array. The heap
        is updated after each removal to maintain the heap property. Once all
        objects have been removed from the heap, the result is a sorted array.
      </p>
      <ol>
        <li>
          Call the buildMaxHeap() function on the list. Also referred to as
          heapify(), this builds a heap from a list in O(n) operations.
        </li>
        <li>
          Swap the first element of the list with the final element. Decrease
          the considered range of the list by one.
        </li>
        <li>
          Call the <em>siftDown()</em>, also called <em>maxHeapify()</em>{" "}
          function on the list to sift the new first element to its appropriate
          index in the heap.
        </li>
        <li>
          Go to step (2) unless the considered range of the list is one element.
        </li>
      </ol>
    </div>
  ),
  worstCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  space: <span>O(1)</span>,
};
