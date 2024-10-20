import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

/**
 * Combine the reducers into a single root reducer
 */
const rootReducer = combineReducers({
    counter: counterReducer, // Manage the counter state
});

export default rootReducer;
