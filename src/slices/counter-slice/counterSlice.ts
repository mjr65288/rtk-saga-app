import { createSlice } from '@reduxjs/toolkit';

/**
 * Define the shape of the counter state
 * @typedef CounterState
 * @property {number} value - The current value of the counter.
 */
type CounterState = {
  value: number;
}

/**
 * Define the initial state of the counter
 */
const initialState: CounterState = {
  value: 0,
};

/**
 * Create a slice for the counter feature.
 * The slice contains the reducer logic and action creators.
 */ 
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      state.value += 1;
    },
    decrement: (state: CounterState) => {
      state.value -= 1;
    },
  },
});

// Export the action creators for dispatching
export const { increment, decrement } = counterSlice.actions;

// Export the reducer to be used in rootReducer
export default counterSlice.reducer;