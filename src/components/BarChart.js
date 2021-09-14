import React from "react";

const BarChart = ({ barsList }) => {
  const getBarColor = (barType) => {
    if (barType === 0) return "bar";
    if (barType === 1) return "bar current";
    if (barType === 2) return "bar sorted";
  };
  const showBarHeight = (thisIndex) => {
    if (barsList.length === 5 || barsList.length === 10) {
      const barHeight = barsList.filter((bar, index) => index === thisIndex)[0].height;
      return barHeight/4;
    }
  };
  return (
    <div className="barsList">
      {barsList
        ? barsList.map((bar, index) => (
            <div
              className={getBarColor(bar.type)}
              key={index}
              style={{ height: `${bar.height}px` }}
              height={bar.height}
              value={bar.height}
            >
              <span> {showBarHeight(index)} </span>
            </div>
          ))
        : "Loading bar chart"}
    </div>
  );
};

export default BarChart;
