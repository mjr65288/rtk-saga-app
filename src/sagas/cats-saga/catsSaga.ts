import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchCatsSuccess } from '../../slices/cats-slice/catsSlice';

function* workerFetchCats(): Generator {
    const cats:any = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
    const formattedCats:any = yield cats.json()
    const formattedCatsShortened: any = formattedCats.slice(0, 10);
    yield put(fetchCatsSuccess(formattedCatsShortened));
}

function* watchFetchCats(): Generator {
    yield takeEvery(`cats/fetchCats`, workerFetchCats);
}

export default watchFetchCats;
