import React from 'react'
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from 'react-redux';
import { selectFinish } from '../redux/selectors';
import { changePaused } from '../redux/chartSlice';

const PauseBtn = () => {
    const isFinished = useSelector(selectFinish);
    const dispatch = useDispatch();
    const handlePauseClick = () => {
        dispatch(changePaused({ isPaused: true }));
    }
    
    return (
        <button
                type="button"
                id="pauseBtn"
                className="btn btn-danger"
                onClick={() => {
                  !isFinished && handlePauseClick();
                }}
              >
                <FontAwesomeIcon icon={faPause} size="lg" />
              </button>
    )
}

export default PauseBtn
