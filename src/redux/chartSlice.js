import { createSlice } from "@reduxjs/toolkit";
import { generateBarChart, sortDescBars } from "../components/utils/utils";

export const chartSlice = createSlice({
  name: "chart",
  initialState: {
    barsList: [],
    movingBars: [],
    isPaused: true,
    finished: true,
    worstCase: false,
    menuChanged: false,
    currentAlgo: 1,
    speed: 1,
    numOfBars: 5,
    algoOptions: [
      { id: 1, type: "Bubble Sort" },
      { id: 2, type: "Selection Sort" },
      { id: 3, type: "Insertion Sort" },
      { id: 4, type: "Merge Sort" },
      { id: 5, type: "Quick Sort" },
      { id: 6, type: "Heap Sort" },
    ],
    numOfBarsOptions: [5, 10, 20, 30, 50, 70, 100],
    speedOptions: [0.5, 0.75, 1.0, 2.0, 4.0],
    barTypes: [{ NORMAL: 0 }, { CURRENT: 1 }, { SORTED: 2 }],
  },
  reducers: {
    createList: (state, action) => {
      state.barsList = action.payload.barsList;
    },
    saveMovingBars: (state, action) => {
      state.movingBars = action.payload.movingBars;
    },
    clearMovingBars: (state) => {
      state.movingBars = [];
    },
    changePaused: (state, action) => {
      state.isPaused = action.payload.isPaused;
    },
    changeMenu: (state, action) => {
      state.menuChanged = action.payload.menuChanged;
    },
    changeFinished: (state, action) => {
      state.finished = action.payload.finished;
    },
    changeAlgo: (state, action) => {
      state.currentAlgo = action.payload.currentAlgo;
      state.menuChanged = true;
    },
    changeWorstCase: (state, action) => {
      state.worstCase = action.payload.worstCase;
      state.menuChanged = true;
    },
    changeNumOfBars: (state, action) => {
      state.numOfBars = action.payload.numOfBars;
      state.menuChanged = true;
    },
    changeSpeed: (state, action) => {
      state.speed = action.payload.speed;
      state.menuChanged = true;
    },
    swappingBars: (state, action) => {
      const { barsInCheck, barsList } = action.payload;
      let newbars = JSON.parse(JSON.stringify(barsList));
      let temp = newbars[barsInCheck[0]].height;
      newbars[barsInCheck[0]].height = newbars[barsInCheck[1]].height;
      newbars[barsInCheck[1]].height = temp;
      state.barsList = newbars;
    },
    changeBarColor: (state, action) => {
      const { barIndexesToChange, barColor, barsList } = action.payload;
      let newbars = JSON.parse(JSON.stringify(barsList));
      for (let i = 0; i < barIndexesToChange.length; i++) {
        const barIndex = barIndexesToChange[i];
        newbars[barIndex].type = barColor;
      }
      state.barsList = newbars;
    },
    changeAllBarsColors: (state, action) => {
      const { barsList, barColor } = action.payload;
      let newbars = JSON.parse(JSON.stringify(barsList));
      for (let i = 0; i < state.numOfBars; i++) {
        newbars[i].type = barColor;
      }
      state.barsList = newbars;
    },
    changeBarHeight: (state, action) => {
      const { barsList, barsRange } = action.payload;
      let newbars = JSON.parse(JSON.stringify(barsList));
      newbars[barsRange[0]].height = barsRange[1];
      state.barsList = newbars;
    },
  },
});

export const {
  createList,
  saveMovingBars,
  clearMovingBars,
  changeAlgo,
  changeNumOfBars,
  changeSpeed,
  changePaused,
  changeMenu,
  swappingBars,
  changeBarColor,
  changeAllBarsColors,
  changeBarHeight,
  changeFinished,
  changeWorstCase,
} = chartSlice.actions;

export const swappingBarsAsync = (barsInCheck) =>
  async function (dispatch, getState) {
    const { barsList } = getState().chart;
    dispatch(swappingBars({ barsInCheck, barsList }));
  };

export const changeBarColorAsync =
  (barIndexesToChange, barColor) => async (dispatch, getState) => {
    const { barsList } = getState().chart;
    dispatch(changeBarColor({ barIndexesToChange, barColor, barsList }));
  };

export const changeAllBarColorAsync =
  (barColor) => async (dispatch, getState) => {
    const { barsList } = getState().chart;
    dispatch(changeAllBarsColors({ barsList, barColor }));
  };

export const changeBarHeightAsync =
  (barsRange) => async (dispatch, getState) => {
    const { barsList } = getState().chart;
    dispatch(changeBarHeight({ barsList, barsRange }));
  };

export const resetChartAsync = () => async (dispatch, getState) => {
  const { numOfBars } = getState().chart;
  document.getElementById("flexCheckDefault").checked = false;
  dispatch(changeFinished({ finished: true }));
  dispatch(changePaused({ isPaused: true }));
  dispatch(createList({ barsList: generateBarChart(numOfBars) }));
  dispatch(changeWorstCase({ worstCase: false }));
  dispatch(clearMovingBars());
  // dispatch(changeMenu({ menuChanged: false }));
};

export const reverseChartAsync = () => async (dispatch, getState) => {
  const { numOfBars } = getState().chart;
  let newbars = generateBarChart(numOfBars);
  sortDescBars(newbars);

  dispatch(changeFinished({ finished: true }));
  dispatch(changePaused({ isPaused: true }));
  dispatch(changeWorstCase({ worstCase: true }));
  dispatch(createList({ barsList: newbars }));
  dispatch(clearMovingBars());

  // dispatch(changeMenu({ menuChanged: false }));
};

export default chartSlice.reducer;
