import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUserInput = state => state.userinput || initialState;

const makeSelectInput = () =>
  createSelector(
    selectUserInput,
    inputState => inputState.currentString,
  );

export { makeSelectInput };
