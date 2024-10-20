import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

/**
 * Combine the reducers into a single root reducer
 */
const rootCounterReducer = combineReducers({
    counter: counterReducer, // Manage the counter state
});

export default rootCounterReducer;
