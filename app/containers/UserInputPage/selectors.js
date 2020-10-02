import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUserInput = state => state.userinput || initialState;

const makeSelectInput = () =>
  createSelector(
    selectUserInput,
    inputState => inputState.currentString,
  );

const makeInputSelectError = () =>
  createSelector(
    selectUserInput,
    inputState => inputState.error,
  );

const makeSelectLoading = () =>
  createSelector(
    selectUserInput,
    inputState => inputState.loading,
  );

export { makeSelectInput, makeSelectLoading, makeInputSelectError };
