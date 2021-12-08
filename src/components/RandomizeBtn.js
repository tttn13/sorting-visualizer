import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFinished,
  clearMovingBars,
  resetChartAsync
} from "../redux/chartSlice";
import {
  selectFinish,
  selectPaused,
} from "../redux/selectors";

const RandomizeBtn = () => {
  const dispatch = useDispatch();
  const isFinished = useSelector(selectFinish);
  const isPaused = useSelector(selectPaused);

  const handleClick = () => {
    dispatch(resetChartAsync());
    if (isFinished) {
      dispatch(changeFinished({ finished: false }));
    } else {
      dispatch(clearMovingBars());
    }
  };

  return (
    <button
      type="button"
      id="randomizeBtn"
      className="btn btn-outline-secondary"
      onClick={() => {
        isPaused && handleClick();
      }}
    >
      Randomize
    </button>
  );
};

export default RandomizeBtn;
