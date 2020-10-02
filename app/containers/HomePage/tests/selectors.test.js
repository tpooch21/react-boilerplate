import {
  selectHomePage,
  makeSelectStrings,
  makeSelectLoading,
  makeHomeSelectError,
} from '../selectors';

describe('selectHomePage', () => {
  it('should select the homepage state', () => {
    const homepageState = {
      strings: [],
      error: false,
      loading: false,
    };

    const mockedState = {
      homepage: homepageState,
    };

    expect(selectHomePage(mockedState)).toEqual(homepageState);
  });
});

describe('makeSelectStrings', () => {
  it('should return the strings slice of homepage state', () => {
    const stringSelector = makeSelectStrings();
    const strings = ['kraken'];
    const mockedState = {
      homepage: {
        strings,
      },
    };
    expect(stringSelector(mockedState)).toEqual(strings);
  });
});

describe('makeSelectLoading', () => {
  it('should return the loading slice of homepage state', () => {
    const loadingSelector = makeSelectLoading();
    const loading = false;
    const mockedState = {
      homepage: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  it('should return the error slice of homepage state', () => {
    const errorSelector = makeHomeSelectError();
    const error = false;
    const mockedState = {
      homepage: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});
