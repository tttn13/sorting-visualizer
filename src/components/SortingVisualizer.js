import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AlgoMenu from "./AlgoMenu";
import SpeedMenu from "./SpeedMenu";
import NumOfBarsMenu from "./NumOfBarsMenu";
import WorstCaseCheckBox from "./WorstCaseCheckBox";
import BarChart from "./BarChart";
import AlgoExplained from "./AlgoExplained";
import { generateBarChart, getAlgoName } from "./utils";
import {
  createList,
} from "../redux/chartSlice";
import {
  selectBarsList,
  selectNumOfBars,
  selectCurrentAlgo,
  selectAlgoOptions,
  selectFinish,
  selectNumOfBarsOptions,
  selectCurrentSpeed,
  selectSpeedOptions,
  selectPaused,
} from "../redux/selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useRandomize } from './hooks/useRandomize';
import { usePlay, usePause } from './hooks/useControl';

const SortingVisualizer = () => {
  const dispatch = useDispatch();
  const numOfBars = useSelector(selectNumOfBars);
  const numOptions = useSelector(selectNumOfBarsOptions);
  const currentAlgo = useSelector(selectCurrentAlgo);
  const algoOptions = useSelector(selectAlgoOptions);
  const speed = useSelector(selectCurrentSpeed);
  const speedOptions = useSelector(selectSpeedOptions);
  const barsList = useSelector(selectBarsList);
  const isFinished = useSelector(selectFinish);
  const isPaused = useSelector(selectPaused);

  useEffect(() => {
    const newBars = generateBarChart(numOfBars);
    dispatch(createList({ barsList: newBars }));
  }, []);

  const handleRandomizeBtn = useRandomize()
  const handlePlayBtn = usePlay();
  const handlePauseBtn = usePause()
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
          {" "}
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
              <button
                type="button"
                id="randomizeBtn"
                className="btn btn-outline-secondary"
                onClick={()=> {
                  if (isPaused === true) handleRandomizeBtn()
                }}
              >
                Randomize
              </button>
            </li>

            <li className="nav-item m-2">
              <AlgoMenu 
              currentAlgo={currentAlgo} 
              algoOptions={algoOptions} />
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
              <button
                type="button"
                id="startBtn"
                className="btn btn-secondary"                
                onClick={() => {
                  if (isPaused === true) handlePlayBtn()
                }}
              >
                {" "}
                <FontAwesomeIcon icon={faPlay} size="lg" />
              </button>
            </li>

            <li className="nav-item m-2">
              <button
                type="button"
                id="pauseBtn"
                className="btn btn-danger"
                onClick={() => {
                  if (isFinished === false) handlePauseBtn()
                }}
              >
                {" "}
                <FontAwesomeIcon icon={faPause} size="lg" />
              </button>
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
