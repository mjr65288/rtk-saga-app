import { combineReducers } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice/counterSlice";
import catsReducer from "./cats-slice/catsSlice";

/**
 * Combine the reducers into a single root reducer
 */
const rootReducer = combineReducers({
    counter: counterReducer, // Manage the counter state
    cats: catsReducer, // Manage the cats state
});

export default rootReducer;
