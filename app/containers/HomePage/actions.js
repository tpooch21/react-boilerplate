import { LOAD_STRINGS, LOAD_STRINGS_SUCCESS } from './constants';

export const loadStrings = () => ({
  type: LOAD_STRINGS
});

export const loadStringsSuccess = () => ({
  type: LOAD_STRINGS_SUCCESS,
  strings,
});
