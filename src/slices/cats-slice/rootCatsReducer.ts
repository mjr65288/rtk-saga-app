import { combineReducers } from '@reduxjs/toolkit';
import catsReducer from './catsSlice';

/**
 * Combine the reducers into a single root reducer
 */
const rootCatsReducer = combineReducers({
    cats: catsReducer, // Manage the cats state
});

export default rootCatsReducer;
