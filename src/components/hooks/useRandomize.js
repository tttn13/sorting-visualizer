import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import {
    selectNumOfBars,
    selectMovingBars,
    selectOptionChange,
    selectFinish,
} from "../../redux/selectors";
import {
    createList,
    changeFinished,
  } from "../../redux/chartSlice";
import { generateBarChart } from "../utils";


export const useRandomize = () => {
  const dispatch = useDispatch();
  const numOfBars = useSelector(selectNumOfBars);
  const movingBars = useSelector(selectMovingBars).slice();
  const optionChanged = useSelector(selectOptionChange);
  const isFinished = useSelector(selectFinish);

  const handleRandomizeBtn = useCallback(() => {
    if (optionChanged === false) {
        if (isFinished === true) {
          dispatch(changeFinished({ finished: false }));
          dispatch(createList({ barsList: generateBarChart(numOfBars) }));
        } else {
          if (movingBars.length === 0) {
            dispatch(createList({ barsList: generateBarChart(numOfBars) }));
          }
        }
      }
  }, [dispatch]);



  return handleRandomizeBtn;
};
