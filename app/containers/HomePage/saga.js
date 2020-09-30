import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosReq } from 'utils/axios-config';
import { LOAD_STRINGS } from './constants';

import { loadStringsSuccess, loadStringsError } from './actions';

export function* getStrings() {
  const url = 'http://localhost:3000/strings';

  try {
    const strings = yield call(axiosReq, url);
    yield put(loadStringsSuccess(strings));
  } catch (err) {
    yield put(loadStringsError());
  }
}

export default function* getStringData() {
  yield takeLatest(LOAD_STRINGS, getStrings);
}
