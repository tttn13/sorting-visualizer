export const mergeSort = (barsArr) => {
  let movingBars = [];
  let length = barsArr.length;
  divide(barsArr, movingBars, 0, length - 1);
  return movingBars;
};

const divide = (barsArr, movingBars, start, end) => {
  if (start < end) {
    let mid = Math.floor((end + start) / 2);
    divide(barsArr, movingBars, start, mid);
    divide(barsArr, movingBars, mid + 1, end);
    merge(barsArr, movingBars, start, mid, end);
  }
};

const merge = (barsArr, movingBars, start, mid, end) => {
  let sortedArr = [];
  let i = start;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    if (barsArr[i] <= barsArr[j]) sortedArr.push(barsArr[i++]);
    else sortedArr.push(barsArr[j++]);
  }
  while (i <= mid) {
    sortedArr.push(barsArr[i++]);
  }
  while (j <= end) {
    sortedArr.push(barsArr[j++]);
  }

  let indexes = [];
  for (let i = start; i <= end; i++) {
    indexes.push(i);
  }

  for (let i = start; i <= end; i++) {
    barsArr[i] = sortedArr[i - start];
    movingBars.push([i, barsArr[i], true, indexes]);
  }
};

export const MergeSortDesc = {
  title: (
    <a
      href="https://en.wikipedia.org/wiki/Merge_sort"
      target="_blank"
      rel="noopener noreferrer"
    >
      Merge Sort
    </a>
  ),
  description: (
    <div>
      <p>
        <b>Merge Sort </b>
        is an efficient, comparison-based sorting algorithm that makes use of the divide
        and conquer strategy. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output.  
        Conceptually the algorithm works as follows:
      </p>
      <ol>
        <li>
          Divide the unsorted list into <em>n</em> sublists, each containing one
          element(a list of one element is considered sorted)
        </li>
        <li>
          Repeatedly merge sublists to produce new sorted sublists until there
          is only one sublist remaining. This will be the sorted list.
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
  space: (
    <span>
      O(<em>n</em>)
    </span>
  ),
};
