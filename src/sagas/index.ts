import { all } from 'redux-saga/effects';
import watchFetchCats from './cats-saga/catsSaga';
import { watchIncrementAsync } from './counter-saga/counterSaga';

/**
 * Root saga that combines all the individual sagas.
 * @generator
 * @yields {void}
 */
export function* rootSaga(): Generator {
    // Run all the sagas
    yield all([
        watchFetchCats(),
        watchIncrementAsync()
    ]);
}

export default rootSaga;