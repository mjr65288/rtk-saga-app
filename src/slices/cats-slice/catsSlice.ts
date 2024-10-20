import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Define the shape of the cats state
 * @typedef CatsState
 * @property {string[]} cats - The list of cats.
 * @property {boolean} isLoading - Whether the cats are loading.
 */
type CatsState = {
    cats: string[];
    isLoading: boolean;
}

/**
 * Define the initial state of the cats
 */
const initialState: CatsState = {
    cats: [],
    isLoading: false,
};

/**
 * Create a slice for the cats feature.
 * The slice contains the reducer logic and action creators.
 */
const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        fetchCats: (state: CatsState) => {
            state.isLoading = true;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        fetchCatsSuccess: (state: CatsState, action: PayloadAction<string[]>) => {
            state.cats = action.payload;
            state.isLoading = false;
        },
        fetchCatsFailure: (state: CatsState) => {
            state.isLoading = false;
        },
    },
});

// Export the action creators for dispatching
export const { fetchCats, fetchCatsSuccess, fetchCatsFailure } = catsSlice.actions;

// Export the reducer to be used in rootReducer
export default catsSlice.reducer;