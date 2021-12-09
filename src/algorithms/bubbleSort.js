  
export const bubbleSort = (barsList) => {
    let movingBars = [];
    let length = barsList.length;

    for (let num = 0; num < length - 1; num++) {
        for (let nextNum = 0; nextNum < length - num - 1; nextNum++) {
            let firstBar = barsList[nextNum]
            let secondBar = barsList[nextNum + 1]
            if (firstBar > secondBar) {
                //swap firstBar and secondBar
                barsList[nextNum] = secondBar
                barsList[nextNum + 1] = firstBar
                // true is swapped 
                movingBars.push([nextNum, nextNum + 1, true])
            } else {
                // false is not swapped 
                movingBars.push([nextNum, nextNum + 1, false])
            }
        }
    }
    return movingBars;
};

export const BubbleSortDesc = {
      title:  <a
              href="https://en.wikipedia.org/wiki/Bubble_sort"
              target="_blank"
              rel="noopener noreferrer"
            > Bubble Sort </a>,
    description: (
      <p>
        <b>Bubble Sort</b> is a simple sorting algorithm that repeatedly steps through the
        list, compares adjacent elements and swaps them if they are in the
        wrong order.The pass through the list is repeated until the list
        is sorted. The algorithm, which is a comparison sort, is named for
        the way smaller or larger elements "bubble" to the top of the
        list. Although the algorithm is simple, it is too slow and
        impractical for most problems
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
    space: <span>O(1)</span>
  };