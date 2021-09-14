export const selectBarsList = (state) => state.chart.barsList;
export const selectMovingBars = (state) => state.chart.movingBars;
export const selectCurrentAlgo = (state) => state.chart.currentAlgo;
export const selectAlgoOptions = (state) => state.chart.algoOptions;
export const selectColors = (state) => state.chart.barTypes;
export const selectPaused = (state) => state.chart.isPaused;
export const selectSpeedOptions = (state) => state.chart.speedOptions;
export const selectCurrentSpeed = (state) => state.chart.speed;
export const selectNumOfBars = (state) => state.chart.numOfBars;
export const selectNumOfBarsOptions = (state) =>
  state.chart.numOfBarsOptions;
export const selectOptionChange = (state) => state.chart.optionChanged;
export const selectFinish = (state) => state.chart.finished;
