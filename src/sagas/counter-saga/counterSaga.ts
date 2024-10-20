import { takeEvery, put, delay } from 'redux-saga/effects';
import { increment } from '../../slices/counter-slice/counterSlice';

/**
 * Handle increment asynchronously by delaying it.
 * @generator
 */
function* handleIncrementAsync(): Generator {
    yield delay(1000); // Wait for 1 second
    yield put(increment()); // Dispatch the increment action after the delay
}

/**
 * Watch for 'incrementAsync' actions and handle them with 'handleIncrementAsync'.
 * @generator
 */
export function* watchIncrementAsync(): Generator {
    yield takeEvery('counter/incrementAsync', handleIncrementAsync);
}
