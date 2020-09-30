import { call, put, select, takeLatest } from 'redux-saga/effects';
import { axiosReq } from 'utils/axios-config';
import { LOAD_STRINGS } from './constants';

import { loadStringsSuccess } from './actions';

export function* getStrings() {
  const url = 'http://localhost:3000';
  console.log('We in here?');

  try {
    const strings = yield call(axiosReq, url);
    console.log('Logging strings returned from API => ', strings);
  } catch (err) {
    console.log('Logging error on string fetch => ', err);
  }
}

export default function* getStringData() {
  yield takeLatest(LOAD_STRINGS, getStrings);
}
