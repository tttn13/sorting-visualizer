import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AlgoMenu from "./AlgoMenu";
import SpeedMenu from "./SpeedMenu";
import NumOfBarsMenu from "./NumOfBarsMenu";
import WorstCaseCheckBox from "./WorstCaseCheckBox";
import BarChart from "./BarChart";
import AlgoExplained from "./AlgoExplained";
import { generateBarChart, getAlgoName } from "./utils/utils";
import { createList } from "../redux/chartSlice";
import {
  selectBarsList,
  selectNumOfBars,
  selectCurrentAlgo,
  selectAlgoOptions,
  selectNumOfBarsOptions,
  selectCurrentSpeed,
  selectSpeedOptions,
  selectPaused,
} from "../redux/selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import RandomizeBtn from "./RandomizeBtn";
import PlayBtn from "./PlayBtn";
import PauseBtn from "./PauseBtn";

const SortingVisualizer = () => {
  const dispatch = useDispatch();
  const numOfBars = useSelector(selectNumOfBars);
  const numOptions = useSelector(selectNumOfBarsOptions);
  const currentAlgo = useSelector(selectCurrentAlgo);
  const algoOptions = useSelector(selectAlgoOptions);
  const speed = useSelector(selectCurrentSpeed);
  const speedOptions = useSelector(selectSpeedOptions);
  const barsList = useSelector(selectBarsList);
  const isPaused = useSelector(selectPaused);
  const newBars = generateBarChart(numOfBars);

  useEffect(() => {
    dispatch(createList({ barsList: newBars }));
  }, []);

  return (
    <div id="content">
      <nav
        className="navbar navbar-expand-md navbar-dark py-3 sticky-top"
        id="navbar"
        style={{ backgroundColor: "#6351ce" }}
      >
        <a
          className="navbar-brand mx-3"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
          }}
        >
          <FontAwesomeIcon icon={faChartBar} size="1x" />
          <b style={{ padding: "10px" }}>Sorting Visualizer</b>
        </a>
        <button
          className="navbar-toggler me-2"
          id="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active m-2">
              <RandomizeBtn />
            </li>

            <li className="nav-item m-2">
              <AlgoMenu currentAlgo={currentAlgo} algoOptions={algoOptions} />
            </li>

            <li className="nav-item m-2 ">
              <NumOfBarsMenu
                numOfBars={numOfBars}
                numOfBarsOptions={numOptions}
              />
            </li>

            <li className="nav-item m-2 ">
              <SpeedMenu speed={speed} speedOptions={speedOptions} />
            </li>

            <li className="nav-item m-2">
              {isPaused ? <PlayBtn /> : <PauseBtn />}
            </li>

            <li className="nav-item m-2">
              <WorstCaseCheckBox />
            </li>
          </ul>
        </div>
      </nav>
      <BarChart barsList={barsList} />
      <AlgoExplained algoName={getAlgoName(currentAlgo, algoOptions)} />
    </div>
  );
};

export default SortingVisualizer;
