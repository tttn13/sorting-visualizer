import React from "react";
import { QuickSortDesc } from "./../algorithms/quickSort";
import { BubbleSortDesc } from "./../algorithms/bubbleSort";
import { SelectionSortDesc } from "./../algorithms/selectionSort";
import { InsertionSortDesc } from "./../algorithms/insertionSort";
import { MergeSortDesc } from "./../algorithms/mergeSort";
import { HeapSortDesc } from "./../algorithms/heapSort";

const AlgoExplained = ({ algoName }) => {
  let algoDesc;
  if (algoName === "Quick Sort") algoDesc = QuickSortDesc;
  if (algoName === "Bubble Sort") algoDesc = BubbleSortDesc;
  if (algoName === "Selection Sort") algoDesc = SelectionSortDesc;
  if (algoName === "Insertion Sort") algoDesc = InsertionSortDesc;
  if (algoName === "Merge Sort") algoDesc = MergeSortDesc;
  if (algoName === "Heap Sort") algoDesc = HeapSortDesc;

  const { title, description, worstCase, avgCase, bestCase, space } = algoDesc;
  return (
    <div className="SortInfo">
      <hr />
      <h1>{title ? title : "Select Algorithm"}</h1>

      <div className="SortInfo__Body">
        <article className="SortInfo__Article">
          {description ? (
            description
          ) : (
            <p>
              You must select an algorithm before you can visualize it's
              execution on an array of numbers.
            </p>
          )}
        </article>

        <aside className="SortInfo__Aside">
          <h3>Performance</h3>
          <table className="performance">
            <tbody>
              <tr>
                <td>Worst-case time complexity </td>
                <td>
                  <code>{worstCase}</code>
                </td>
              </tr>

              <tr>
                <td>Average time complexity</td>
                <td>
                  <code>{avgCase}</code>
                </td>
              </tr>

              <tr>
                <td>Best-case time complexity</td>
                <td>
                  <code>{bestCase}</code>
                </td>
              </tr>

              <tr>
                <td>Worst-case space complexity </td>
                <td>
                  <code>{space}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </aside>
      </div>
    </div>
  );
};

export default AlgoExplained;
