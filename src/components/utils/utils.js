import { bubbleSort } from "../../algorithms/bubbleSort";
import { insertionSort } from "../../algorithms/insertionSort";
import { selectionSort } from "../../algorithms/selectionSort";
import { heapSort } from "../../algorithms/heapSort";
import { mergeSort } from "../../algorithms/mergeSort";
import { quickSort } from "../../algorithms/quickSort";

export const generateBarChart = (numOfBars) => {
  let newBars = [];
  let min = 5,
    max = 100;
  for (let i = 0; i < numOfBars; i++) {
    const id = Date.now().toString() + i.toString();
    const height = 4 * Math.floor(Math.random() * (max - min + 1) + min);
    newBars.push({ id: parseInt(id), height: parseInt(height), type: 0 });
  }
  return newBars;
};

export const sortDescBars = (barsArr) => {
  barsArr.sort(function(a,b) {
    return b.height - a.height
  })
}

export const swapBarsArr = (idx, bars) => {
  let newbars = JSON.parse(JSON.stringify(bars));
  let temp = newbars[idx[0]].height;
  newbars[idx[0]].height = newbars[idx[1]].height;
  newbars[idx[1]].height = temp;
  return newbars;
};

export const pause = async (speed) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 450 / speed);
  });
};

export const generateMovingBars = (algoID, algoOptions, barsList) => {
  const algoName = getAlgoName(algoID, algoOptions);
  let movingBars = [];
  if (algoName === "Bubble Sort") {
    movingBars = bubbleSort(barsList);
  }
  if (algoName === "Selection Sort") {
    movingBars = selectionSort(barsList);
  }
  if (algoName === "Insertion Sort") {
    movingBars = insertionSort(barsList);
  }
  if (algoName === "Merge Sort") {
    movingBars = mergeSort(barsList);
  }
  if (algoName === "Quick Sort") {
    movingBars = quickSort(barsList);
  }
  if (algoName === "Heap Sort") {
    movingBars = heapSort(barsList);
  }
  return movingBars;
};

export const getAlgoName = (algoID, algoOptions) => {
  return algoOptions.find((algo) => algo.id === algoID).type;
};
