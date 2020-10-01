import { call, put, select, takeLatest } from 'redux-saga/effects';

import { SUBMIT_STRING } from './constants';
import { axiosPostReq } from '../../utils/axios-config';

import { submitStringSuccess, submitStringError } from './actions';
import { makeSelectInput } from './selectors';

function* postString() {
  const url = 'http://localhost:3000/string';
  const string = yield select(makeSelectInput());
  const options = {
    data: string,
  };

  try {
    yield call(axiosPostReq, url, options);
    yield put(submitStringSuccess());
  } catch (err) {
    yield put(submitStringError());
  }
}

export default function* postUserInput() {
  yield takeLatest(SUBMIT_STRING, postString);
}
