import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeNumOfBars, resetChartAsync } from "../redux/chartSlice";

const NumOfBarsMenu = ({ numOfBars, numOfBarsOptions }) => {
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState("Size")
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {buttonText}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><button className="dropdown-item disabled" tabIndex="-1" aria-disabled="true">Size</button></li>
        {numOfBarsOptions
          ? numOfBarsOptions.map((item, idx) => (
              <li key={idx}>
                <button
                  className="dropdown-item text-dark"
                  type="button"
                  key={item * 10}
                  value={item}
                  onClick={(e) => {
                    setButtonText(e.target.value)
                    if (numOfBars !== e.target.value) {
                      dispatch(changeNumOfBars({ numOfBars: e.target.value }));
                      dispatch(resetChartAsync());
                    }
                  }}
                >
                  {item}
                </button>
              </li>
            ))
          : "Loading menu"}
      </ul>
    </div>
  );
};

export default NumOfBarsMenu;
