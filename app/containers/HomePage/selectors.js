import { createSelector } from 'reselect';
import { initialState } from './reducer';

// Slice state properties that concern HomePage
export const selectHomePage = state => state.homepage || initialState;

export const makeSelectStrings = () =>
  createSelector(
    selectHomePage,
    homeState => homeState.strings,
  );

export const makeSelectLoading = () =>
  createSelector(
    selectHomePage,
    homeState => homeState.loading,
  );

export const makeHomeSelectError = () =>
  createSelector(
    selectHomePage,
    homeState => homeState.error,
  );
