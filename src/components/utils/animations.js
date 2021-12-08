import { generateMovingBars, pause } from "./utils";
import store from "../../redux/store";
import {
  swappingBarsAsync,
  changeBarColorAsync,
  changeAllBarColorAsync,
  changeBarHeightAsync,
  saveMovingBars,
  changePaused,
  changeFinished, 
  changeWorstCase
} from "../../redux/chartSlice";

const getState = () => {
  return store.getState().chart;
};

export const swappingMovingBars = async (speed, newMovingBars) => {
  while (newMovingBars.length > 0) {
    let { isPaused, optionChanged } = getState();
    if (isPaused && optionChanged === false) {
      const currentStop = newMovingBars[0];
      stopMoving([currentStop[0], currentStop[1]], newMovingBars);
      break;
    }
    if (isPaused && optionChanged === true) {
      store.dispatch(saveMovingBars({ movingBars: [] }));
      break;
    }

    store.dispatch(changeAllBarColorAsync(getBarColor("NORMAL")));
    let barsAndStateInCheck = newMovingBars[0];
    let barsInCheck = [barsAndStateInCheck[0], barsAndStateInCheck[1]];

    store.dispatch(changeBarColorAsync(barsInCheck, getBarColor("CURRENT")));
    await pause(speed);

    if (barsAndStateInCheck[2] === true) {
      console.log("we are  swapping");
      store.dispatch(swappingBarsAsync(barsInCheck));
      await pause(speed);
    }

    store.dispatch(changeBarColorAsync(barsInCheck, getBarColor("NORMAL")));
    await pause(speed);
    newMovingBars.shift();
  }
  finishSorting(newMovingBars);
};

export const animateBarsInRange = async (speed, newMovingBars) => {
  console.log("animateBarsInRange");
  let prevRange = [];
  while (newMovingBars.length > 0) {
    let { isPaused, optionChanged } = getState();
    if (isPaused && optionChanged === false) {
      // const currentStop = newMovingBars[0][3]
      stopMoving(prevRange, newMovingBars);
      break;
    }

    store.dispatch(changeAllBarColorAsync(getBarColor("NORMAL")));
    if (prevRange !== newMovingBars[0][3]) {
      store.dispatch(changeBarColorAsync(prevRange, getBarColor("NORMAL")));
      await pause(speed);

      prevRange = newMovingBars[0][3];
      store.dispatch(
        changeBarColorAsync(newMovingBars[0][3], getBarColor("CURRENT"))
      );
      await pause(speed);
    }

    let currRange = [newMovingBars[0][0], newMovingBars[0][1]];
    store.dispatch(changeBarHeightAsync(currRange));
    await pause(speed);
    newMovingBars.shift();
  }
  finishSorting(newMovingBars);
};

const stopMoving = (barsToChange, newMovingBars) => {
  store.dispatch(changeBarColorAsync(barsToChange, getBarColor("CURRENT")));
  store.dispatch(saveMovingBars({ movingBars: newMovingBars }));
};

export const startSorting = async (
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

const finishSorting = (newMovingBars) => {
  if (newMovingBars.length === 0) {
    if (!getState().finished) {
      console.log("no more");
      store.dispatch(changeAllBarColorAsync(getBarColor("SORTED")));
      store.dispatch(changeFinished({ finished: true }));
      store.dispatch(changePaused({ isPaused: true }));
      store.dispatch(changeWorstCase({ worstCase: false }))
    }
  }
};

const getBarColor = (color) => {
  const barColors = getState().barTypes;
  if (color === "CURRENT") return barColors[1].CURRENT;
  if (color === "NORMAL") return barColors[0].NORMAL;
  if (color === "SORTED") return barColors[2].SORTED;
};
