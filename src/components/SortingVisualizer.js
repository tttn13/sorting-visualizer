import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BarChart from "./BarChart";
import AlgoExplained from "./AlgoExplained";
import { generateBarChart, getAlgoName } from "./utils/utils";
import { createList } from "../redux/chartSlice";
import {
  selectBarsList,
  selectNumOfBars,
  selectCurrentAlgo,
  selectAlgoOptions,
} from "../redux/selectors";

const SortingVisualizer = () => {
  const dispatch = useDispatch();
  const numOfBars = useSelector(selectNumOfBars);
  const currentAlgo = useSelector(selectCurrentAlgo);
  const algoOptions = useSelector(selectAlgoOptions);
  const barsList = useSelector(selectBarsList);
  const newBars = generateBarChart(numOfBars);

  useEffect(() => {
    dispatch(createList({ barsList: newBars }));
  }, []);

  return (
    <div id="content">
      <BarChart barsList={barsList} />
      <AlgoExplained algoName={getAlgoName(currentAlgo, algoOptions)} />
    </div>
  );
};

export default SortingVisualizer;
