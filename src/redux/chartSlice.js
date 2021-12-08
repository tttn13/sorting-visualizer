import { createSlice } from '@reduxjs/toolkit'
import { generateBarChart, sortDescBars } from '../components/utils/utils'

export const chartSlice = createSlice({
    name: 'chart',
    initialState: {
        currentAlgo: 1,
        speed: 1,
        numOfBars: 5,
        barsList: [],
        movingBars: [],
        isPaused: true,
        optionChanged: false,
        finished: false,
        worstCase: false,
        algoOptions: [
            { id: 1, type: 'Bubble Sort' },
            { id: 2, type: 'Selection Sort' },
            { id: 3, type: 'Insertion Sort' },
            { id: 4, type: 'Merge Sort' },
            { id: 5, type: 'Quick Sort' },
            { id: 6, type: 'Heap Sort' },
        ],
        numOfBarsOptions: [5, 10, 20, 30, 50, 70, 100],
        speedOptions: [0.50, 0.75, 1.00, 2.00, 4.00],
        barTypes: [{ NORMAL: 0 }, { CURRENT: 1 }, { SORTED: 2 }],
        
    },
    reducers: {
        createList: (state,action) => {
            state.barsList = action.payload.barsList
        },
        saveMovingBars: (state, action) => {
            state.movingBars = action.payload.movingBars
        },
        clearMovingBars: (state) => {
            state.movingBars = []
        },
        changeSpeed: (state, action) => {
            state.speed = action.payload.speed;
        },
        changeAlgo : (state, action) => {
            state.currentAlgo = action.payload.currentAlgo;
        },
        changePaused : (state, action) => {
            state.isPaused = action.payload.isPaused
        },
        changeOption: (state, action) => {
            state.optionChanged = action.payload.optionChanged
            if (state.optionChanged === true) {
                state.finished = false;
                state.movingBars = [];
            }
        },
        changeFinished: (state, action) => {
            state.finished = action.payload.finished
            if (state.finished === true) {
                state.movingBars = []
                state.worstCase = false;
            }
        },
        changeWorstCase: (state, action) => {
            state.worstCase = action.payload.worstCase
        },
        changeNumOfBars : (state, action) => {
            state.numOfBars = action.payload.numOfBars;
        },
        swappingBars: (state, action) => {
            const { barsInCheck, barsList } = action.payload
            let newbars = JSON.parse(JSON.stringify(barsList));
            let temp = newbars[barsInCheck[0]].height
            newbars[barsInCheck[0]].height = newbars[barsInCheck[1]].height
            newbars[barsInCheck[1]].height = temp;
            state.barsList = newbars
        },
        changeBarColor: (state, action) => {
            const { barIndexesToChange, barColor, barsList } = action.payload
            let newbars = JSON.parse(JSON.stringify(barsList));
            for (let i = 0; i < barIndexesToChange.length; i++) {
                const barIndex = barIndexesToChange[i]
                newbars[barIndex].type = barColor;
            }
            state.barsList = newbars
        },
        changeAllBarsColors: (state, action) => {
            const { barsList, barColor } = action.payload
            let newbars = JSON.parse(JSON.stringify(barsList));
            for (let i = 0; i < state.numOfBars; i++) {
                newbars[i].type = barColor;
            }
            state.barsList = newbars
        },
        changeBarHeight: (state, action) => {
            const { barsList, barsRange } = action.payload;
            let newbars = JSON.parse(JSON.stringify(barsList));
            newbars[barsRange[0]].height = barsRange[1]
            state.barsList = newbars
        },
    }
})


export const { 
    createList,
    saveMovingBars,
    clearMovingBars,
    changeAlgo,
    changeNumOfBars,
    changeSpeed,
    changePaused,
    changeOption,
    swappingBars,
    changeBarColor,
    changeAllBarsColors,
    changeBarHeight,
    changeFinished,
    changeWorstCase
} = chartSlice.actions

export const swappingBarsAsync =  (barsInCheck) => async function(dispatch, getState) {
    const { barsList } = getState().chart
    dispatch(swappingBars({ barsInCheck, barsList }))
}

export const changeBarColorAsync =  (barIndexesToChange, barColor) => async (dispatch, getState) => {
    const { barsList } = getState().chart
    dispatch(changeBarColor({ barIndexesToChange, barColor, barsList }))
}

export const changeAllBarColorAsync =   (barColor) => async (dispatch, getState) => {
    const { barsList } = getState().chart
    dispatch(changeAllBarsColors({ barsList, barColor }))
}

export const changeBarHeightAsync = (barsRange) => async (dispatch, getState) => {
    const { barsList } = getState().chart 
    dispatch(changeBarHeight({ barsList, barsRange }))
}

export const resetChartAsync = () => async (dispatch, getState) => {
    document.getElementById("flexCheckDefault").checked = false;
    const { numOfBars } = getState().chart
    dispatch(createList({ barsList: generateBarChart(numOfBars) }));
    dispatch(changeOption({ optionChanged: true }));
    dispatch(changePaused({ isPaused: true }));
    dispatch(changeWorstCase({ worstCase: false }));
}

export const reverseChartAsync = () => async (dispatch, getState) => {
    const { numOfBars } = getState().chart 
    let newbars = generateBarChart(numOfBars)
    sortDescBars(newbars)
    dispatch(createList({ barsList: newbars }));
    dispatch(changeOption({ optionChanged: true }));
    dispatch(changePaused({ isPaused: true }));
    dispatch(changeWorstCase({ worstCase: true }));
} 

export default chartSlice.reducer