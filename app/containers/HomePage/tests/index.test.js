import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import HomePage, { mapDispatchToProps } from '../index';
import configureStore from '../../../configureStore';
import { loadStrings } from '../actions';

describe('<HomePage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('loadStrings', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.loadStrings).toBeDefined();
      });

      it('should dispatch loadStrings action when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.loadStrings();
        expect(dispatch).toHaveBeenCalledWith(loadStrings());
      });
    });
  });
});
