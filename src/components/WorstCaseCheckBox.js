import React from 'react';
import { useDispatch } from "react-redux";
import { resetChartAsync, changeWorstCase, reverseChartAsync } from "../redux/chartSlice";

const WorstCaseCheckBox = () => {
    const dispatch = useDispatch();
    
    return (
        <div className="form-check">
            <label className="form-check-label" 
            htmlFor="flexCheckDefault" 
            >
            <input 
            className="form-check-input" 
            type="checkbox" value="" 
            id="flexCheckDefault" 
            
            onChange={(e) => {
                if (e.target.checked) {
                    dispatch(changeWorstCase({ worstCase: true }))
                    dispatch(reverseChartAsync())
                } else {
                    dispatch(changeWorstCase({ worstCase: false }))
                    dispatch(resetChartAsync())
                }
            }}
            />
                Worst Case
            </label>
        </div>
    )
}

export default WorstCaseCheckBox
