import homePageReducer from '../reducer';
import { loadStrings, loadStringsSuccess, loadStringsError } from '../actions';

describe('homePageReducer', () => {
  it('should return the initial state', () => {
    expect(homePageReducer(undefined, {})).toMatchSnapshot();
  });

  it('handles the loadStrings action', () => {
    expect(homePageReducer({}, loadStrings())).toMatchSnapshot();
  });

  it('handles the loadStringsSuccess action', () => {
    const strings = ['welcome'];
    expect(homePageReducer({}, loadStringsSuccess(strings))).toMatchSnapshot();
  });

  it('handles the loadStringsError action', () => {
    expect(homePageReducer({}, loadStringsError())).toMatchSnapshot();
  });
});
