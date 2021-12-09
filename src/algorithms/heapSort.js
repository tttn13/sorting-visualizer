import { swap } from "./_helpers";

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
        is a comparison-based sorting algorithm that uses the heap data
        structure rather than a linear-time search to find the maximum or
        minimum element. Unlike Selection Sort, Heap Sort maintains the unsorted region in a heap data structure to more quickly find the largest element in each step.
      </p>
      <p>
        The heapsort algorithm can be divided into two parts. In the first step,
        a heap is built out of the data. In the second step, a sorted
        array is created by repeatedly removing the largest element from the
        heap (the root of the heap), and inserting it into the array. The heap
        is updated after each removal to maintain the heap property.
      </p>
      
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
