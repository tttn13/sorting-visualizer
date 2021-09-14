import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeSpeed, resetChartAsync } from "../redux/chartSlice";

const SpeedMenu = ({ speed, speedOptions }) => {
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState("Speed")
  
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        id="speedBtn"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {buttonText}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><button className="dropdown-item disabled" tabIndex="-1" aria-disabled="true">Speed</button></li>
        {speedOptions
          ? speedOptions.map((item, idx) => (
              <li key={idx}>
                <button
                  className="dropdown-item text-dark"
                  type="button"
                  key={item}
                  value={item}
                  onClick={(e) => {
                    setButtonText(e.target.value + "x")
                    if (speed !== e.target.value) {
                      dispatch(changeSpeed({ speed: e.target.value }));
                      dispatch(resetChartAsync());
                    }
                  }}
                >
                  {item}x
                </button>
              </li>
            ))
          : "Loading menu"}
      </ul>
    </div>
  );
};

export default SpeedMenu;
