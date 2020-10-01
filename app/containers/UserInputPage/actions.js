import { ENTER_STRING } from './constants';

export const enterString = input => ({
  type: ENTER_STRING,
  currentString: input,
});
