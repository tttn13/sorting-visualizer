import { combineReducers } from 'redux';
import chartSliceReducer from './chartSlice';

const rootReducer = combineReducers({
    chart: chartSliceReducer,
})
export default rootReducer
