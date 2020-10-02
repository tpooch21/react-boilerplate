import { put, takeLatest } from 'redux-saga/effects';

import getStringData, { getStrings } from '../saga';
import { loadStringsSuccess, loadStringsError } from '../actions';
import { LOAD_STRINGS } from '../constants';

describe('getStrings saga', () => {
  let getStringsGenerator;

  beforeEach(() => {
    getStringsGenerator = getStrings();

    // Test whether first yield (API call) is returning appropriate values from backend
    const callDescriptor = getStringsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch loadStringsSuccess if data request is successful', () => {
    const strings = [{ id: 1, value: 'Test' }, { id: 1, value: 'Robot' }];

    // Since yield to call has already been called in beforeEach, 'next' now points to put
    const putDescriptor = getStringsGenerator.next(strings).value;
    expect(putDescriptor).toEqual(put(loadStringsSuccess(strings)));
  });

  it('should dispatch loadStringsError if data request fails', () => {
    const response = new Error('');

    const putDescriptor = getStringsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(loadStringsError()));
  });

  describe('getStringData saga', () => {
    const getStringDataGenerator = getStringData();

    it('should watch for LOAD_STRINGS actions and call getStrings when one is dispatched', () => {
      const takeLatestDescriptor = getStringDataGenerator.next().value;
      expect(takeLatestDescriptor).toEqual(
        takeLatest(LOAD_STRINGS, getStrings),
      );
    });
  });
});
