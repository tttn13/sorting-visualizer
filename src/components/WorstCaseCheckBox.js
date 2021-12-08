import React from "react";
import { useDispatch } from "react-redux";
import {
  resetChartAsync,
  reverseChartAsync,
} from "../redux/chartSlice";

const WorstCaseCheckBox = () => {
  const dispatch = useDispatch();

  const handleCheckBox = (e) => {
    if (e.target.checked === true) {
      dispatch(reverseChartAsync());
    } else {
      dispatch(resetChartAsync());
    }
  };

  return (
    <div className="form-check">
      <label className="form-check-label" htmlFor="flexCheckDefault">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
          onChange={(e) => handleCheckBox(e)}
        />
        Worst Case
      </label>
    </div>
  );
};

export default WorstCaseCheckBox;
