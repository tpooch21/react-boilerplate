import { createSelector } from 'reselect';
import { initialState } from './reducer';

// Slice state properties that concern HomePage
const selectHomePage = state => state.homepage || initialState;

const makeSelectStrings = () => {
  createSelector(
    selectHomePage,
    homeState => homeState.strings,
  );
};

const makeSelectLoading = () => {
  createSelector(
    selectHomePage,
    homeState => homeState.loading,
  );
};

const makeSelectError = () => {
  createSelector(
    selectHomePage,
    homeState => homeState.error,
  );
};

export { makeSelectError, makeSelectStrings, makeSelectLoading };
