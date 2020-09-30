import { loadStrings, loadStringsSuccess, loadStringsError } from '../actions';
import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from '../constants';

describe('HomePage actions', () => {
  describe('loadStrings', () => {
    it('returns the correct action type', () => {
      const expectedResult = {
        type: LOAD_STRINGS,
      };

      expect(loadStrings()).toEqual(expectedResult);
    });
  });

  describe('loadStringsSuccess', () => {
    it('returns the correct action type', () => {
      expect(loadStringsSuccess().type).toEqual(LOAD_STRINGS_SUCCESS);
    });

    it('returns the input string array', () => {
      const strings = ['test', 'me'];
      expect(loadStringsSuccess(strings).strings).toEqual(strings);
    });
  });

  describe('loadStringsError', () => {
    it('returns the correct action type', () => {
      const expectedResult = {
        type: LOAD_STRINGS_ERROR,
      };

      expect(loadStringsError()).toEqual(expectedResult);
    });
  });
});
