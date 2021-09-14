import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import {changeFinished} from "../../redux/chartSlice";
import {
  selectMovingBars,
  selectCurrentAlgo,
  selectAlgoOptions,
  selectCurrentSpeed,
  selectBarsList,selectPaused
} from "../../redux/selectors";
import { changePaused, changeOption } from "../../redux/chartSlice";
import { generateMovingBars } from "../utils";
import { swappingMovingBars, animateBarsInRange } from "../animations";

const startSorting = async (
  movingBars,
  barsList,
  currentAlgo,
  algoOptions,
  speed
) => {
  let newMovingBars;
  if (movingBars.length > 0) {
    newMovingBars = movingBars;
  } else {
    const barHeights = barsList.map((bar) => bar.height);
    newMovingBars = generateMovingBars(currentAlgo, algoOptions, barHeights);
  }

  if (currentAlgo === 4) {
    await animateBarsInRange(speed, newMovingBars);
  } else {
    await swappingMovingBars(speed, newMovingBars);
  }
};

export const usePlay = () => {
  const dispatch = useDispatch();
  const movingBars = useSelector(selectMovingBars);
  const currentAlgo = useSelector(selectCurrentAlgo);
  const algoOptions = useSelector(selectAlgoOptions);
  const speed = useSelector(selectCurrentSpeed);
  const barsList = useSelector(selectBarsList);
  const isPaused = useSelector(selectPaused);
  const handlePlayBtn = useCallback(() => {
      dispatch(changeFinished({ finished: false }));
      dispatch(changePaused({ isPaused: false }));
      dispatch(changeOption({ optionChanged: false }));
  }, [dispatch]);
  
  useEffect(() => {
    if (!isPaused) {
      const newBars = movingBars.slice()
      startSorting(newBars, barsList, currentAlgo, algoOptions, speed);
    }
  },[isPaused])

  return handlePlayBtn;
};

export const usePause = () => {
  const dispatch = useDispatch();
  const handlePauseBtn = useCallback(() => {
    dispatch(changePaused({ isPaused: true }));
  }, [dispatch]);
  
  return handlePauseBtn;
};