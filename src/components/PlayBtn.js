import React from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPaused,
  selectMovingBars,
  selectCurrentAlgo,
  selectAlgoOptions,
  selectCurrentSpeed,
  selectBarsList,
} from "../redux/selectors";
import { startSorting } from "./utils/animations";
import {
  changeFinished,
  changeOption,
  changePaused,
} from "../redux/chartSlice";

const PlayBtn = () => {
  const dispatch = useDispatch();
  const isPaused = useSelector(selectPaused);
  const movingBars = useSelector(selectMovingBars);
  const currentAlgo = useSelector(selectCurrentAlgo);
  const algoOptions = useSelector(selectAlgoOptions);
  const speed = useSelector(selectCurrentSpeed);
  const barsList = useSelector(selectBarsList);
  const handlePlayClick = () => {
    dispatch(changeFinished({ finished: false }));
    dispatch(changePaused({ isPaused: false }));
    dispatch(changeOption({ optionChanged: false }));
    const newBars = movingBars.slice();
    startSorting(newBars, barsList, currentAlgo, algoOptions, speed);
  };

  return (
    <button
      type="button"
      id="startBtn"
      className="btn btn-danger"
      onClick={() => {
        isPaused && handlePlayClick();
      }}
    >
      <FontAwesomeIcon icon={faPlay} size="lg" />
    </button>
  );
};

export default PlayBtn;
