import {
  ENTER_STRING,
  SUBMIT_STRING,
  SUBMIT_STRING_SUCCESS,
  SUBMIT_STRING_ERROR,
} from './constants';

export const enterString = input => ({
  type: ENTER_STRING,
  currentString: input,
});

export const submitString = () => ({
  type: SUBMIT_STRING,
});

export const submitStringSuccess = () => ({
  type: SUBMIT_STRING_SUCCESS,
});

export const submitStringError = () => ({
  type: SUBMIT_STRING_ERROR,
});
