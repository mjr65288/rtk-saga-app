import { all } from 'redux-saga/effects';
import { watchIncrementAsync } from './counterSaga';

/**
 * Root saga that combines all the individual sagas.
 * @generator
 * @yields {void}
 */
export function* rootSaga(): Generator {
    // Run all the sagas
    yield all([watchIncrementAsync()]);
}
