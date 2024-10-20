import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
import rootReducer from '../slices';


// Initialize the Saga middleware
const sagaMiddleware = createSagaMiddleware();

/**
 * Configure the Redux store with rootReducer and middleware (Saga middleware).
 */
const store = configureStore({
    reducer: rootReducer,
    // The middleware is used to run the sagas
    // The default middleware is used to get the default middleware configuration
    middleware: (getDefaultMiddleware) =>
        // The thunk option is set to false to avoid using the deprecated thunk middleware
        // The saga middleware is then added to the default middleware
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Run the sagas
sagaMiddleware.run(rootSaga);

// Define types for RootState and AppDispatch for usage throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;