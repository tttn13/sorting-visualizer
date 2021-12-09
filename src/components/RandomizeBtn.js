import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMenu, resetChartAsync } from "../redux/chartSlice";
import { selectPaused } from "../redux/selectors";

const RandomizeBtn = () => {
  const dispatch = useDispatch();
  const isPaused = useSelector(selectPaused);

  const handleClick = () => {
    dispatch(changeMenu({ menuChanged: true }));
    dispatch(resetChartAsync());
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
