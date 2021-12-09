import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeAlgo, resetChartAsync } from "../redux/chartSlice";

const AlgoMenu = ({ currentAlgo, algoOptions }) => {
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState("Algorithm");

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
        <li>
          <button
            className="dropdown-item disabled"
            tabIndex="-1"
            aria-disabled="true"
          >
            Algorithm
          </button>
        </li>
        {algoOptions
          ? algoOptions.map((algo, idx) => (
              <li key={idx}>
                <button
                  className="dropdown-item text-dark"
                  type="button"
                  key={algo.id}
                  value={algo.type}
                  onClick={(e) => {
                    setButtonText(e.target.value);
                    const algo = algoOptions.find(
                      (algo) => algo.type === e.target.value
                    );
                    dispatch(changeAlgo({ currentAlgo: algo.id }));
                    dispatch(resetChartAsync());
                  }}
                >
                  {algo.type}
                </button>
              </li>
            ))
          : "Loading menu"}
      </ul>
    </div>
  );
};

export default AlgoMenu;
